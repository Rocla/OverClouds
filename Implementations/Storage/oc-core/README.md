# OC Core

## Decentralized web hosting over WebTorrent

Temporary name, and could be subdivised into more. Browse the web decentralized with webtorrent.

## Requirements so far
A browser with [WebRTC](https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC) and
[service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

## Tested on
- Chrome

## How do I use it?

- Track at first the site folder on instant.io.
- Get infohash of the web torrent.
- Paste the infohash and submit.

## Features

- OC-Core itself is loaded permanently into the browser using a service worker. This means that the site will continue to function even if you the site is no longer accessible.

- Everything is sandboxed using [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP). Torrent cannot access the resources from another torrent.

- Thanks to the sandboxing, every resources has an anonymous origin.

- Service workers works only on localhost and or over SSL/TLS.

## Malus

- The down side from the sandboxing is that it prevents some web features like XHR requests and cookies to work correctly. A solution could be to emulate those features.

- Chrome doesn't support WebRTC from service workers, you always need a tab open to oc-homepage while browsing. Could be fixed one day when Chrome implements WebRTC for service workers, [chromium bug tracker 302019](https://code.google.com/p/chromium/issues/detail?id=302019).
