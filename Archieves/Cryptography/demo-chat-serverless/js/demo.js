var RTCPeerConnection = null
var getUserMedia = null
var attachMediaStream = null
var reattachMediaStream = null
var webrtcDetectedBrowser = null

if (navigator.mozGetUserMedia)
{
  console.log('You are on Firefox')

  webrtcDetectedBrowser = 'firefox'

  // The RTCPeerConnection object.
  RTCPeerConnection = mozRTCPeerConnection

  // The RTCSessionDescription object.
  RTCSessionDescription = mozRTCSessionDescription

  // The RTCIceCandidate object.
  RTCIceCandidate = mozRTCIceCandidate

  // Get UserMedia (only difference is the prefix).
  // Code from Adam Barth.
  getUserMedia = navigator.mozGetUserMedia.bind(navigator)

  // Attach a media stream to an element.
  attachMediaStream = function (element, stream) {
    console.log('Attaching media stream')
    element.mozSrcObject = stream
    element.play()
  }

  reattachMediaStream = function (to, from) {
    console.log('Reattaching media stream')
    to.mozSrcObject = from.mozSrcObject
    to.play()
  }

  // Fake get{Video,Audio}Tracks
  MediaStream.prototype.getVideoTracks = function () {
    return []
  }

  MediaStream.prototype.getAudioTracks = function () {
    return []
  }
}
else if (navigator.webkitGetUserMedia)
{
  console.log('You are on Chrome')

  webrtcDetectedBrowser = 'chrome'

  // The RTCPeerConnection object.
  RTCPeerConnection = webkitRTCPeerConnection

  // Get UserMedia (only difference is the prefix).
  // Code from Adam Barth.
  getUserMedia = navigator.webkitGetUserMedia.bind(navigator)

  // Attach a media stream to an element.
  attachMediaStream = function (element, stream) {
    element.src = webkitURL.createObjectURL(stream)
  }

  reattachMediaStream = function (to, from) {
    to.src = from.src
  }

  // Old syntax of them getXXXStreams for early Chrome versions.
  if (!webkitMediaStream.prototype.getVideoTracks) {
    webkitMediaStream.prototype.getVideoTracks = function () {
      return this.videoTracks
    }
    webkitMediaStream.prototype.getAudioTracks = function () {
      return this.audioTracks
    }
  }

  // New syntax of getXXXStreams method in M26.
  if (!webkitRTCPeerConnection.prototype.getLocalStreams) {
    webkitRTCPeerConnection.prototype.getLocalStreams = function () {
      return this.localStreams
    }
    webkitRTCPeerConnection.prototype.getRemoteStreams = function () {
      return this.remoteStreams
    }
  }
}

else{console.log('Your browser is not supported at the moment, check if it is WebRTC ready.')}
