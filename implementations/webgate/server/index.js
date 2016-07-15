// Overclouds
// Author: Romain Claret
// Latest update: 15th July 2016

// based on https://github.com/feross/webtorrent-desktop
// based on https://github.com/feross/instant.io

var compress = require('compression')
var debug = require('debug')('overclouds.ch')
var express = require('express')
var http = require('http')
var pug = require('pug')
var path = require('path')
var url = require('url')
var twilio = require('twilio')
var cors = require('cors')
var downgrade = require('downgrade')
var parallel = require('run-parallel')
var unlimited = require('unlimited')

var config = require('../config')
var secret = require('../secret')

var app = express()

var httpServer = http.createServer(app)

var CORS_WHITELIST = [
  'http://overclouds.ch',
  'https://overclouds.ch'
]

unlimited()

// Templating
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.set('x-powered-by', false)
app.engine('pug', pug.renderFile)

app.use(compress())

// https://www.twilio.com/stun-turn
// https://www.twilio.com/user/account/stun-turn/getting-started
// https://github.com/hashobject/twilio-stun-turn

app.use(function (req, res, next) {
  // Force SSL
  if (config.isProd && req.protocol !== 'https') {
    return res.redirect('https://' + (req.hostname || 'overclouds.ch') + req.url)
  }

  // Redirect www to non-www
  if (config.isProd && req.hostname === 'www.overclouds.ch') {
    return res.redirect('https://overclouds.ch' + req.url)
  }

  // Strict transport security (to prevent MITM attacks on the site)
  // Lasts 1 year, incl. subdomains, allow browser preload list
  if (config.isProd) {
    res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  }

  // Add cross-domain header for fonts, required by spec, Firefox, and IE.
  var extname = path.extname(url.parse(req.url).pathname)
  if (['.eot', '.ttf', '.otf', '.woff', '.woff2'].indexOf(extname) >= 0) {
    res.header('Access-Control-Allow-Origin', '*')
  }

  // Prevents IE and Chrome from MIME-sniffing a response. Reduces exposure to
  // drive-by download attacks on sites serving user uploaded content.
  res.header('X-Content-Type-Options', 'nosniff')

  // Enable the XSS filter built into most recent web browsers. It's usually
  // enabled by default anyway, so role of this headers is to re-enable for this
  // particular website if it was disabled by the user.
  res.header('X-XSS-Protection', '1; mode=block')

  // Force IE to use latest rendering engine or Chrome Frame
  res.header('X-UA-Compatible', 'IE=Edge,chrome=1')

  next()
})

app.use(express.static(path.join(__dirname, '../static')))

app.get('/', function (req, res) {
  // Prevent rendering of site within a frame.
  res.header('X-Frame-Options', 'DENY')
  res.render('index')
})

// Fetch new ice_servers from twilio token regularly
var iceServers
var twilioClient = twilio(secret.twilio.accountSid, secret.twilio.authToken)

function updateIceServers () {
  twilioClient.tokens.create({}, function (err, token) {
    if (err) return error(err)
    if (!token.ice_servers) {
      return error(new Error('twilio response ' + token + ' missing ice_servers'))
    }

    iceServers = token.ice_servers
      .filter(function (server) {
        var urls = server.urls || server.url
        return urls && !/^stun:/.test(urls)
      })
    iceServers.unshift({ url: 'stun:23.21.150.121' })

    // Support new spec (`RTCIceServer.url` was renamed to `RTCIceServer.urls`)
    iceServers = iceServers.map(function (server) {
      if (server.urls === undefined) server.urls = server.url
      return server
    })
  })
}

setInterval(updateIceServers, 60 * 60 * 4 * 1000).unref()
updateIceServers()

app.get('/rtcConfig', cors({
  origin: function (origin, cb) {
    var allowed = CORS_WHITELIST.indexOf(origin) >= 0 ||
      /https?:\/\/localhost(:|$)/.test(origin) ||
      /https?:\/\/[^.\/]+\.localtunnel\.me$/.test(origin)
    cb(null, allowed)
  }
}), function (req, res) {
  if (!iceServers) res.status(404).send({ iceServers: [] })
  else res.send({ iceServers: iceServers })
})

app.get('*', function (req, res) {
  res.status(404)
  res.writeHead(404, {'Content-Type': 'text/html'})
  res.write("<!DOCTYPE 'html'>")
  res.write("<html>")
  res.write("<head>")
  res.write("<title>Overclouds Webgate</title>")
  res.write("</head>")
  res.write("<body>")
  res.write("<h1>Overclouds' Webgate background service is missing.<h1>")
  res.write("<h2>The webgate service must run in a background tab to have access to Overclouds' decentralized web.</h2>")
  res.write("<h3>This page will now be loaded as the Overclouds' background service and a new tab will be openned with the requested content.</h3>")
  res.write("<h4>You will be redirected to the request decentralized page in 3 seconds</h4>")
  res.write("<br/>Popups must be allowed on Overclouds.ch for the automatic redirection to work properly")
  res.write("</body>")
  res.write("<script type='text/javascript'>")
  res.write("var url = (window.location.href).split('/goto/')[1];")
  res.write("setTimeout(function(){window.location.assign('/?/'+url);}, 3000);")
  res.write("</script>")
  res.write("</html>")
  res.end();
})

var tasks = [
  function (cb) {
    httpServer.listen(config.ports.http, config.host, cb)
  }
]

// if (httpsServer) {
//   tasks.push(function (cb) {
//     httpsServer.listen(config.ports.https, config.host, cb)
//   })
// }

// error handling middleware
app.use(function (err, req, res, next) {
  error(err)
  res.status(500).render('error', { message: err.message || err })
})

parallel(tasks, function (err) {
  if (err) throw err
  debug('listening on port %s', JSON.stringify(config.ports))
  downgrade()
})

// httpServer.listen(config.ports.http, 'localhost', function (err) {
//   if (err) throw err
//   debug('listening on port %s', JSON.stringify(config.ports))
// })

function error (err) {
  console.error(err.stack || err.message || err)
}
