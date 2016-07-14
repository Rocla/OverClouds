// https://github.com/feross/instant.io

var debug = require('debug')('overclouds.ch')
var mime = require('mime')
var Peer = require('simple-peer')
var thunky = require('thunky')
var WebTorrent = require('webtorrent')
var xhr = require('xhr')
var dragDrop = require('drag-drop')
var uploadElement = require('upload-element')
var path = require('path')
var prettyBytes = require('pretty-bytes')
var throttle = require('throttleit')

var util = require('./tools')

var TRACKER_URL_01 = 'wss://tracker.webtorrent.io'
var TRACKER_URL_02 = 'wss://tracker.btorrent.xyz'
var TRACKER_URL_03 = 'wss://tracker.openwebtorrent.com'
var TRACKER_URL_04 = 'wss://tracker.fastcast.nz'
var TRACKER_URL_05 = 'wss://tracker.webtorrent.io'
var TRACKER_URL_06 = 'wss://tracker.webtorrent.io'

global.WEBTORRENT_ANNOUNCE = [ TRACKER_URL_01, TRACKER_URL_02, TRACKER_URL_03, TRACKER_URL_04 ]

document.getElementById('shouldEncrypt').addEventListener('click', function () {
  showKey()
})

function showKey()
{
  if (document.getElementById('shouldEncrypt').checked)
  {
      document.getElementById("show-key").style.display = 'block'
  } else {
      document.getElementById("show-key").style.display = 'none'
  }
}
showKey()

document.getElementById('generate-key-button').addEventListener('click', function () {
  document.getElementById("encryptionKey").value = CryptoJS.lib.WordArray.random(16)
})

var isLocalhost = false
if (window.location.hostname == "localhost")
{
  isLocalhost = true
  var pjson = require('../package.json')
  document.getElementById("dev_version").innerHTML = "Local mode version: " + pjson.version
}

if (!isLocalhost && window.location.protocol !== 'https:')
{
  if((window.location.href).split('/?/').length > 1)
  {
    return window.location.assign('https://' + (window.location.hostname || 'overclouds.ch') + '/?/' + (window.location.href).split('/?/')[1])
  }
  else if ((window.location.href).split('/goto/').length > 1)
  {
    return window.location.assign('https://' + (window.location.hostname || 'overclouds.ch') + '/goto/' + (window.location.href).split('/goto/')[1])
  }
  else {
    return window.location.assign('https://' + (window.location.hostname || 'overclouds.ch'))
  }
}

if (!Peer.WEBRTC_SUPPORT || !navigator.serviceWorker) {
  alert('This browser is unsupported. Please use a browser with WebRTC support and ServiceWorker support. https://jakearchibald.github.io/isserviceworkerready/')
  return
}

var locationField = document.getElementById('location')
var goButton = document.getElementById('go-button')

locationField.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13) {
        goButton.click()
    }
})

goButton.addEventListener('click', function () {
  loadPage(locationField.value)
  locationField.value=""
})

function syncLocation (firstLoad) {
  if (location.hash) {
    locationField.value = location.hash.substr(1)
  } else if (!firstLoad) {
    locationField.value = ''
  }
}
syncLocation(true)

window.addEventListener('hashchange', function () {
  syncLocation()
})

var getClient = thunky(function (cb) {
  getRtcConfig('/rtcConfig', function (err, rtcConfig) {
    if (err && window.location.hostname === 'overclouds.ch') {
      if (err) util.error(err)
      createClient(rtcConfig)
    } else if (err) {
      getRtcConfig('/rtcConfig', function (err, rtcConfig) {
        if (err) util.error(err)
        createClient(rtcConfig)
      })
    } else {
      createClient(rtcConfig)
    }
  })

  function createClient (rtcConfig) {
    var client = window.client = new WebTorrent({
      tracker: {
        rtcConfig: rtcConfig
      }
    })
    client.on('warning', util.warning)
    client.on('error', util.error)
    cb(null, client)
  }
})

// For performance, create the client immediately
getClient(function () {})

// Seed via upload input element
var upload = document.querySelector('input[name=upload]')
uploadElement(upload, function (err, files) {
  if (err) return util.error(err)
  files = files.map(function (file) { return file.file })
  onFiles(files)
})

// Seed via drag-and-drop
dragDrop('body', onFiles)

// Download by URL hash
onHashChange()
window.addEventListener('hashchange', onHashChange)
function onHashChange () {
  var hash = decodeURIComponent(window.location.hash.substring(1)).trim()
  if (hash !== '') downloadTorrent(hash)
}

// Warn when leaving and there are no other peers
window.addEventListener('beforeunload', onBeforeUnload)

function onFiles (files) {
  debug('got files:')
  var isIndex = false
  var isTorrent = false
  files.forEach(function (file){
    debug(' - %s (%s bytes)', file.name, file.size)
    if(isTorrentFile(file)){isTorrent = true}
    if(file.name == "index.html"){isIndex = true}
  })
  if(isTorrent)
  {
    // .torrent file = start downloading the torrent
    // todo decrypt
    files.forEach(downloadTorrentFile)
  }
  else {
    if(!isIndex){
      files.push(createGenericIndex())
    }

    if(document.getElementById("shouldEncrypt").checked){
      encryptFiles(files, document.getElementById("encryptionKey").value)
    }
    else{
      seed(files)
    }
  }
}

function initEncryptedSeed(encryptedFiles){
  encryptedSeed(encryptedFiles)
}

function encryptFiles(files, key){
  var encryptedFiles = []
  var itemsProcessed = 0
  files.forEach(function (file){
    encryptFile(file, key, function(encrypted) {
      blobEncryptedFile = new Blob([encrypted], {type : "application/octet-stream"})
      encryptedFile = new File([blobEncryptedFile], file.name, {
          fullPath: "test/test.html",
          lastModified: new Date(0),
          type: 'application/octet-stream'
      })
      encryptedFiles.push(encryptedFile)
      // console.log('Finished encrypting: ' + encryptedFile)
      itemsProcessed++
      if(itemsProcessed === files.length) {
        initEncryptedSeed(encryptedFiles)
      }
    })
  })
}

function encryptFile(file, key, callback){
  var salt = "abc"
  var iv = "abc"
  var reader = new window.FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    base64data = reader.result
    var encrypted = CryptoJS.AES.encrypt(base64data, key, salt, iv)
    callback(encrypted)
  }
}

function createIndexFile(blob){
  var file = new File(blob, 'index.html', {
      //static date to keep same hash
      lastModified: new Date(0), // default = now
      type: 'text/html' // default = ''
  })
  return file
}

function createGenericIndex(){
  var genericIndex = [
    new Blob(["<!DOCTYPE HTML><html><head><meta charset='utf-8'><title>OC Content Page</title></head><body><h1>This page has been automatically generated because you didn't add a \"index.html\" file with your shared files. A single file would also produce this page.</h1><h2>The reason for this file is that every shared on Overclouds are considered as a webapps.</h2><h3>You can either edit \"index.html\" or simply call your file by adding its name to the url path</h3>For example:<br/>If your file was named \"movie.mp4\", and your url path \"https://overclouds.ch/goto/abcde..ghij/\". You need to add the file name to end of your url path.<br/>The result would be \"https://overclouds.ch/goto/abcde..ghij/movie.mp4\".</body></html>"], {type: 'text/html'})
  ]
  return createIndexFile(genericIndex)
}

// function createVideoApp(file){}
//
// function createAudioApp(file){}
//
// function createMusicApp(file){}

function isTorrentFile (file) {
  var extname = path.extname(file.name).toLowerCase()
  return extname === '.torrent'
}

function isNotTorrentFile (file) {
  return !isTorrentFile(file)
}

function downloadTorrent (torrentId) {
  util.log('Downloading torrent from ' + torrentId)
  getClient(function (err, client) {
    if (err) return util.error(err)
    client.add(torrentId, onTorrent)
  })
}

function downloadTorrentFile (file) {
  util.log('Downloading torrent from <strong>' + file.name + '</strong>')
  getClient(function (err, client) {
    if (err) return util.error(err)
    client.add(file, onTorrent)
  })
}

function seed (files) {
  if (files.length === 0) return
  util.log('<br/><br/>Seeding ' + files.length + ' files')

  // Seed from WebTorrent
  getClient(function (err, client) {
    if (err) return util.error(err)
    client.seed(files, onTorrent)
  })
}

function encryptedSeed (files) {
  //TODO fix folder name error due to fullpath in files
  if (files.length === 0) return
  util.log('<br/><br/>Seeding ' + files.length + ' files')

  // Seed from WebTorrent
  getClient(function (err, client) {
    if (err) return util.error(err)
    client.seed(files, onTorrent)
  })
}

function onTorrent (torrent) {
  torrent.on('warning', util.warning)
  torrent.on('error', util.error)

  upload.value = upload.defaultValue // reset upload element

  var torrentFileName = path.basename(torrent.name, path.extname(torrent.name)) + '.torrent'

  util.log('"' + torrentFileName + '" contains ' + torrent.files.length + ' files:')
  torrent.files.forEach(function (file) {
    util.log('&nbsp;&nbsp;- ' + file.name + ' (' + prettyBytes(file.length) + ')')
  })

  util.log(
    'Torrent info hash: <strong>' + torrent.infoHash + '</strong> ' +
    '<br/><a href="/goto/' + torrent.infoHash + '" onclick="prompt(\'Share this link with anyone you want to download this torrent:\', this.href);return false;">[Share link]</a> ' +
    '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
    '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrentFileName + '">[Download .torrent]</a><br/><br/>'
  )

  function updateSpeed () {
    var progress = (100 * torrent.progress).toFixed(1)
    util.updateSpeed(
      '<b>Peers:</b> ' + torrent.numPeers + ' ' +
      '<b>Progress:</b> ' + progress + '% ' +
      '<b>Download speed:</b> ' + prettyBytes(window.client.downloadSpeed) + '/s ' +
      '<b>Upload speed:</b> ' + prettyBytes(window.client.uploadSpeed) + '/s'
    )
  }

  torrent.on('download', throttle(updateSpeed, 250))
  torrent.on('upload', throttle(updateSpeed, 250))
  setInterval(updateSpeed, 5000)
  updateSpeed()

  torrent.files.forEach(function (file) {
    // append file
    // file.appendTo(util.logElem, function (err, elem) {
    //   if (err) return util.error(err)
    // })

    // append download link
    file.getBlobURL(function (err, url) {
      if (err) return util.error(err)

      var a = document.createElement('a')
      a.target = '_blank'
      a.download = file.name
      a.href = url
      a.textContent = 'Download encrypted file: ' + file.name
      util.log(a)
    })
  })
}

function onBeforeUnload (e) {
  if (!e) e = window.event

  if (!window.client || window.client.torrents.length === 0) return

  var isLoneSeeder = window.client.torrents.some(function (torrent) {
    return torrent.numPeers === 0 && torrent.progress === 1
  })
  if (!isLoneSeeder) return

  var names = listify(window.client.torrents.map(function (torrent) {
    return '"' + (torrent.name || torrent.infoHash) + '"'
  }))

  var theseTorrents = window.client.torrents.length >= 2
    ? 'these torrents'
    : 'this torrent'
  var message = 'You are the only person sharing ' + names + '. ' +
    'Consider leaving this page open to continue sharing ' + theseTorrents + '.'

  if (e) e.returnValue = message // IE, Firefox
  return message // Safari, Chrome
}

/*
indexed by infoHash
{
  files: [
    {
      name: '',
      cb: //function
    }
  ]
}
*/
var waitingTorrents = {}

function fetchFileFromTorrent(torrent, path, cb) {
  for (var i = 0; i < torrent.files.length; i++) {
    var file = torrent.files[i]
    if (file.path === torrent.name + '/' + path) {
      file.getBuffer(function (err, buffer) {
        if (err) return cb(err)
        cb(null, buffer.buffer)
      })
      return
    }
  }

  cb(new Error('file not found'))
}

function torrentReady (torrent) {
  var entry = waitingTorrents[torrent.infoHash]
  entry.torrent = torrent
  entry.files.forEach(function (file) {
    fetchFileFromTorrent(torrent, file.path, file.cb)
  })

}

function fetchFile(infoHash, path, cb) {
  var entry = waitingTorrents[infoHash]

  if (!entry) {
    getClient(function (err, client) {
      if (err) return console.error(err)
      client.add(infoHash, torrentReady)
    })
    waitingTorrents[infoHash] = {
      files: [],
      torrent: null
    }
  }

  if (entry && entry.torrent) {
    fetchFileFromTorrent(entry.torrent, path, cb)
  } else {
    waitingTorrents[infoHash].files.push({
      path: path,
      cb: cb
    })
  }
}

function messageWorker() {
  worker.postMessage.apply(worker, arguments)
}

var pageId = Math.random(1, 2)

window.addEventListener('unload', function () {
  messageWorker({
    type: 'unload',
    pageId: pageId
  })
})

var HEARTBEAT_RESET_TIME = 5 // seconds

setInterval(function () {
  messageWorker({
    type: 'heartbeat',
    pageId: pageId
  })
}, HEARTBEAT_RESET_TIME * 1000)

var worker = null
navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
  if (!registration.active) {
    // Refresh to activate the worker
    location.reload()
    //console.log("worker not active")
    return
  }
  worker = registration.active

  var messageChannel = new MessageChannel()
  messageChannel.port1.onmessage = function(event) {
    var data = event.data
    switch(data.type) {
      case 'fetch':
        fetchFile(data.hash, data.path, function (err, buffer) {
          var msg = {
            type: 'response',
            hash: data.hash,
            path: data.path,
            err: null
          }
          if (!err) {
            msg.response = {
              body: buffer,
              mime: mime.lookup(data.path)
            }
          } else {
            msg.err = err.message
          }
          messageWorker(msg)
        })
        break
      default:
        console.log('Unexpected message from service worker:', data)
        break
    }
  }

  messageWorker({
    type: 'returnpipe',
    pageId: pageId
  }, [messageChannel.port2])

  goButton.disabled = false
}).catch(function (err) {
  console.error('service worker failed')
  console.error(err)
})

var MATCH_PATH = /\/?([a-fA-F0-9]{40})(?:\/(.*))?$/

// Loads the correct content
function loadPage (loc) {
  var matches = MATCH_PATH.exec(loc)
  if (matches) {
    var hash = matches[1]
    var path = matches[2] || ''
    var a = document.createElement('a')
    a.target = '_blank'
    a.href = '/goto/' + hash + '/' + path
    a.click()
  } else {
    console.log(loc)
    alert('The hash must be 40 characters long')
  }
}

function getRtcConfig (url, cb) {
  xhr(url, function (err, res) {
    if (err || res.statusCode !== 200) {
      cb(new Error('Could not get WebRTC config from server. Using default (without TURN).'))
    } else {
      var rtcConfig
      try {
        rtcConfig = JSON.parse(res.body)
      } catch (err) {
        return cb(new Error('Got invalid WebRTC config from server: ' + res.body))
      }
      debug('got rtc config: %o', rtcConfig)
      cb(null, rtcConfig)
    }
  })
}

if((window.location.href).split('/?/').length > 1)
{
  var a = document.createElement('a')
  a.target = '_blank'
  var hashAddress = (window.location.href).split('/?/')[1]
  var matches = MATCH_PATH.exec(hashAddress)
  if (matches)
  {
    document.title = "Overclouds Webgate"
    a.href = ((window.location.href).split('/?/')[0]+"/goto/"+hashAddress)
    setTimeout(function(){a.click()}, 1000)
  } else {
    alert('The hash must be 40 characters long')
  }
}
