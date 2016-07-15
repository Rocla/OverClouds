# Overclouds Webgate

## Your gateway to the serverless interweb

Browse the decentralized web with using webtorrent technology.

## Requirements so far
A browser with [WebRTC](https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC) and
[service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

## Tested on
- Google Chrome Canary 54.0.2795.0

## How do I use it?
- To share content:
  - Drag and Drop files, it will start seeding them
- To load webapp
  - Get infohash of the webapp
  - Paste the infohash and submit

## What I cannot do
- Share and Access a webapp from the same browser
  - You must have two browsers in this case because of a local file restriction issue

## Features

- OC-Core itself is loaded permanently into the browser using a service worker. This means that the site will continue to function even if you the site is no longer accessible.

- Everything is sandboxed using [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP). Torrent cannot access the resources from another torrent.

- Thanks to the sandboxing, every resource has an unknown origin.

- Service workers work only on localhost and or over SSL/TLS.

- In advanced mode, file can be encrypted

## Malus

- The downside from the sandboxing is that it prevents some web features like XHR requests and cookies to work correctly. A solution could be to emulate those features.

- Chrome doesn't support WebRTC from service workers; you always need a tab open to the overclouds homepage while browsing. Could be fixed one day when Chrome implements WebRTC for service workers, [chromium bug tracker 302019](https://code.google.com/p/chromium/issues/detail?id=302019).

- The decryption implementation has been not completed
