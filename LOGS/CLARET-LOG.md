# Log for the student: Romain Claret

2016-05-24 -> 2016-05-27 Week 1 / 8 =>> 57.75
  - PROGRESS:
    - management: 2016-05-24 | 09:00-18:30 => 9.50
      - Restructuring the project for the TB
      - Initial Log + Start-Bachelor-Session tag on git
      - Create and Submit documents to Massimo (his assistant: Laetitia Gauchat)
      - Looking for Scrum Tools (free) in order interesting to less
        - VivifyScrum, targetprocess, Easybacklog, visualstudio, agilefant, Trello, icescrum, agilofortrac
      - Looking for Scrum Tools (not free)
        - JIRA, scrumdo
      - Planning for TB
        - Created backlog/springs on VivifyScrum (8 sprints for the project itself)
        - Created backlog/springs for the report + defense presentation
      - Launched sprint 1
      - Meeting with teacher
      - Teacher has been invited to VivifyScrum

    - school: 2016-05-25 | 08:15-14:00 => 5.75
      - School Forum at St-Imier with companies

    - development: 2016-05-25 | 16:00-21:00 => 5.00
      - trying to install an ethereum node on my beaglebone for a private blockchain and mining
        - beaglebone failed on many levels, too old, and failed at extending the EMMC
        - bought a raspberry pi 4 should arrive in 5-6 days
          - existing images with geth preinstalled

    - research: 2016-05-26 | 10:00-19:30 => 9.5
      - Looking at NodeJS/NPM dev environment, watching video tutorials
        - Looking at Browserify for the client-side solution, but don't look like fitting the need
      - Pouchdb, offline storing right into the browser framework with sync once connected
      - Looking at Backbone.js
      - Looking at AngularJS 1 & 2
      - Looking for concepts: http://www.peer-server.com
      - Looking at ethereum node in browser solutions
        - Ethereum-JS
        - NodeJS (https://www.npmjs.com/package/ethereum.js/)
        - Parity with RTC (but need to run a client on the user machine)
        - Looking at ethereum.org forums
      - Looking at: https://github.com/ethereumjs/ethereumjs.github.io
        - https://github.com/ethereumjs/browser-builds
        - https://github.com/ethereumjs/node-blockchain-server

    - research: 2016-05-30 | 10:00-16:00 => 6.00
      - Research on Maidsafe
        - consensus over data existing
        - no developers API for now
        - the development moves slowly?
        - not very popular however there is a lot of hopes from the community itself
        - the network pays the users for participating in the network
      - Research on Ethereum
        - Looking at Docker solutions for mining and custom private net
        - Blockchain can be kept small, only synch the last blocks (useful for mining)
      - Research on existing blockchain/consensus technology done right from the browsers
        - none found

    - research: 2016-05-30 | 12:30-19:00 + 21:00-22:00 => 7.5
      - meeting with the teacher
      - Research on IDE and Tools for development
        - Wakanda (not for our project)
        - Bundle options for standalone version of nodejs with install (deployment)
        - Learning the basis of NodeJS to be sure that it's what we should go with
        - Looking at Electron
        - Angular would be compatible with a bundled nodejs app
      - As another interesting blockchain for developers Counterparty, based on Bitcoin.
        - A platform for free and open financial tools on the Bitcoin network.
      - Ethereum Mist (official client/wallet) uses a bundled nodejs
      - Testing docker solution for mining (testnet), it works
        - well, not really... never received my mined blocks...

    - research: 2016-05-31 | 09:30-16:45 + 21:00-22:00=> 8.25
      - research (learning) on workspace setup
        - ioJS, NodeJS, Browserify
      - research on ethereum private network
        - http://stackoverflow.com/questions/31816695/ethereum-genesis-block-private-network
        - https://docs.erisindustries.com/explainers/permissioned_blockchains/
        - https://github.com/HydraChain/hydrachain/tree/develop
          - validators (set of trusted users)
          - still under heavy developement
          - future features: proof of identity, etc.
        - http://adeduke.com/2015/08/how-to-create-a-private-ethereum-chain/
        - https://github.com/Kunstmaan/docker-multichain
        - https://github.com/stevebakh/docker-ethereum
        - https://github.com/ethereum/go-ethereum/wiki/Setting-up-private-network-or-local-cluster
        - https://github.com/ethereum/wiki/wiki/Network-Status
        - https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/private-chain.html
      - research on ethereum genesis blockchain
        - http://tech.lab.carl.pro/kb/ethereum/testnet_setup
      - research on mining
        - parity + ethminer (cpp-ethereum)
          - parity --testnet --author 0x460e4a6063ad089AC6b01179a3FE85b798B019d3
          - ethminer -C -t 4
        - geth => could not make the miner work... the mined blocks never show up on my account
          - geth --mine --minerthreads=4 --testnet --etherbase 0x460e4a6063ad089AC6b01179a3FE85b798B019d3
      - research on setting up a custom docker ethereum network
        - https://docs.docker.com/engine/reference/builder/
        - parity + ethminer (cpp-ethereum)
        - geth
        -http://ethereum.stackexchange.com/questions/3185/running-a-custom-private-go-ethereum-node-cluster-using-docker
      - research on coding ethereum contracts
        - visial scripter: http://www.etherscripter.com/0-5-1/
        - official help wiki: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI

    - research: 2016-06-01 | 09:30-12:45 => 3.25
      - research ethereum development
        - Ethereum Development Tutorial: https://github.com/ethereum/wiki/wiki/Ethereum-Development-Tutorial
        - https://www.ethereum.org/greeter
      - architecture
        - making a draft using ethereum as consensus
        - updated architecture

  - NOTES:
    - TB requires 340h, 45h per week, 9h per workday, or 8h per workday + 5h extra
      - Planned as 45h per sprint
    - Officially during the first two weeks
      - submit the plan after the first two weeks
    - JIRA could be interesting to use because it's popular for companies
      - Otherwise, I would go on VivifyScrum which looks like I imagined a digital Scrum board
    - 1 sprint per week (8 sprints in total for the project itself)
    - 2 extras sprints (report + defense presentation)
    - For Sprint 1, Monday, and Wednesday are at the charge of the school for booking the day for other activities than TB.
    - JIRA doesn't look as good as VivifyScrum. We should pay them 10$/month instead of JIRA for full access.
    - Pouchdb stores offline in the browser and sync data once connected to server https://pouchdb.com
    - Backbone and AngularJS are interesting, but it needs a server to work.
    - On ethereum, Serpent looks like Python; LLL looks like a high-level assembler.

2016-05-24 | 15:00-16:00 1st Meeting => 1.0
  - 25th May school vs. companies conference
    - The school is taking the hours on their account, should not be punishing for the student (me)
  - 6th June rdv for master
    - We will see about this next meeting
  - Change the specifications?
    - Should read the new specifications for the meeting (sprint 2)
  - Possible to have a JIRA license from school?
    - Yes
  - Feasible to book a room or is there usable space on Neuchatel?
    - I should check with the director
  - Documentation: complete https://intranet.he-arc.ch/dq/Pages/FOR-REA-ING-BAC.aspx
    - Teacher has done this already

2016-05-30 | 13:00-14:30 1.5th Meeting => 1.5
  - the sprints are now ending on Wednesday
  - review of the current sprints
  - subscribed to a recurring plan on vivifyScrum
    - must document how vivifyScrum is better than a text log (visual is not enough)
  - discussed of the requirements for the report (a lot of annexes if okay)
  - Validated the specifications

2016-06-01 | 13:00-13:30 2nd Meeting => 0.5
  - sprint 1 validated
  - start of sprint 2

2016-06-01 -> 2016-06-08 Week 2 / 8 =>> 38.5
  - PROGRESS:
    - development: 2016-06-01 | 13:00-17:00 => 4.00
      - Learning NodeJS
        - Node.js Tutorial for Beginners
          - https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_
      - Install and Setup of NodeJS/NPM & IntelliJ IDEA as IDE

    - development: 2016-06-02 | 10:00-17:00 => 7.00
      - Learning NodeJS
        - Node.js Tutorial for Beginners
          - https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_
      - setting up raspberry pi to run ethereum

    - research: 2016-06-02 | 18:00-21:00 => 3.00
      - Looking for private blockchain
        - https://medium.com/@preitsma/setting-up-a-parity-ethereum-node-in-docker-and-connect-safely-f881faa17686
        #.7q92a57hm
        - https://github.com/ethcore/parity/wiki/Private-chains
        - http://ethereum.stackexchange.com/questions/3185/running-a-custom-private-go-ethereum-node-cluster-using-docker
        - http://tech.lab.carl.pro/kb/ethereum/testnet_setup
        - http://stackoverflow.com/questions/31816695/ethereum-genesis-block-private-network

    - development: 2016-06-03 | 10:00-13:00 => 3.00
      - Learning NodeJS
        - Node.js Tutorial: From Zero to Hero with Nodejs
          - https://www.youtube.com/watch?v=czmulJ9NBP0

    - research: 2016-06-03 | 13:00-15:00 => 2.00
      - looking at ethereum smart contracts
        - https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4#.6be9ux875
        - https://www.ethereum.org/greeter
        - https://github.com/ethereum/wiki/wiki/Ethereum-Development-Tutorial
        - http://www.etherscripter.com/

    - development: 2016-06-06 | 16:00-18:00 => 2.00
      - finishing setting up raspberry pi for the testnet
        - installed geth, eth, parity

    - research: 2016-06-06 | 18:00-21:00 => 3.00
      - looking at setting up euthereumJS
        - http://www.richardrodger.com/2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/#.V0dDaCJh2sx
        - https://github.com/ethereumjs/browser-builds
        - https://github.com/ethereumjs/node-blockchain-server
        - https://github.com/ethereumjs/ethereumjs-lib

    - management: 2016-06-07 | 12:00-13:00 => 1.00
      - updating vivifyscrum

    - devlopment: 2016-06-07 | 10:00-12:00 + 13:00-17:30 => 6.50
      - setting up ethereumJS
        - fail.
        - no documentation found on how to or tutorials.
      - raspberry pi
        - synch time testnet: 800k/1100k blocks in 12h

    - management: 2016-06-08 | 08:30-09:30 => 1.00
      - updating log

    - devlopment: 2016-06-08 | 09:30 => 12:30 => 3.00
      - continue to set up the ethereum nodeJS client
        - failed, looks like it's not working. Can't understand the reason
      - setting up a docker multi-node private network
        - it works
        - ethereum network status webpage works also
      - link Mac to Docker Ethereum Cluster
        - fail

  - NOTES
    - Docker Ethereum Cluster:
      - docker-compose up -d # load cluster bootstrap
      - open http://$(docker-machine ip default):3000 # open stats webpage
      - docker-compose scale eth=3 # scale to 3 nodes
    - Ethereum Javascript API
      - https://github.com/ethereum/wiki/wiki/JavaScript-API
    - Couldn't attach to cluster from mac or pi
      - https://github.com/ethereum/go-ethereum/wiki/Setting-up-private-network-or-local-cluster
      - http://ethereum.stackexchange.com/questions/3399/set-up-mist-browser-for-a-private-go-ethereum-docker-cluster
      - http://ethereum.stackexchange.com/questions/3185/running-a-custom-private-go-ethereum-node-cluster-using-docker
    - Testnet Explorer
      - http://testnet.etherscan.io
    - Bulk Commands
      - Ethereum Mining
          - parity --testnet --author 0x460e4a6063ad089AC6b01179a3FE85b798B019d3  --ipc-path=$HOME/.ethereum/geth.ipc
          - parity --testnet --author 0x460e4a6063ad089AC6b01179a3FE85b798B019d3  —rpc
          - parity --author 0xcE802fa0aE9a4E6546f3bEBfF058DcFAEA5F209E  --ipc-path=$HOME/.ethereum/geth.ipc

          - parity --testnet --author 0x460e4a6063ad089AC6b01179a3FE85b798B019d3 &>/dev/null &
          - geth --testnet &>/dev/null &

          - ethminer -C -t 4
          - geth --mine --minerthreads=4 --testnet --etherbase 0x460e4a6063ad089AC6b01179a3FE85b798B019d3

          - geth --networkid 456789 --genesis /Users/TimeTraveler/CloneWars/OverClouds/Docker/genesis.json

2016-06-08 | 13:00-16:00 3rd Meeting => 3.0
  - tried to debug the NodeJS client
    - failed
  - tried to attach mac client to cluster
    - failed
  - decided to contact the developers directly by IRC and Gitter
  - make a presentation for the expert for the next meeting
    - work in parallel to sprint 3

2016-06-08 -> 2016-06-15 Week 3 / 8 =>> 44.0
  - PROGRESS:
    - development: 2016-06-08 | 16:00-18:00 + 19:30:21:00 => 3.50
      - trying to fix docker ethereum cluster
      - contacting ethereumJS developers via gitter
      - contacting go ethereum developers via gitter
      - looking at IRC
    - research: 2016-06-09 | 10:00-18:00 => 8.00
      - looking at geth command lines
      - tyring to fix docker ethereum cluster
      - setting up IRC client on rasp
      - no helpful info from ethereumJS devs
      - ignored from goEthereum devs?
    - research: 2016-06-10 | 09:30-16:00  => 6.50
      - review of architecture
      - looking for mesh-of-trust like protocols
        - hardware protocols like digimesh seems to work
        - no software?
      - hardware is mostly used to encrypt software info
    - research: 2016-06-11 | 18:00-19:00 => 1.00
      - looking at Proof of Work
    - research: 2016-06-12 | 13:00-14:00 => 1.00
      - looking at Proof of Stake
      - looking at Proof of Activity
    - research: 2016-06-13 | 10:00-14:00 + 15:00-20:00 => 9.00
      - looking at hardware certifications
      - looking at trust chains
      - defining a mesh-of-trust
        - i don't think it will be how it was planned
    - research: 2016-06-14 | 09:00-14:00 + 16:00-21:00 => 10.00
      - Defining Proof of Participation
      - finalizing brainstorming
      - finalizing architecture
      - updating vivifyscrum
      - deliver planning
    - research: 2016-06-15 | 09:30-13:00 => 3.50
      - making presentation
      - updating git

2016-06-15 | 13:15-14:15 Expert Meeting => 1.00
  - meeting the expert
  - project presentation
  - the expert thinks difficulties will appear during the storage sprint

2016-06-16 | 13:00-13:30 4th Meeting => 0.50
  - replanning
    - mesh-of-trust -> proof of participation
    - focus during the next 3 weeks on storage
    - remake planning for sunday

2016-06-15 -> 2016-06-22 Week 4 / 8 =>> 41.00
  - PROGRESS:
    - development: 2016-06-15 | 14:30-18:30 => 4.00
      - trying to fix ethereumJS with developers
        - no success yet
      - contacting again goEthereum developers
        - nobody seems to be able to help with docker
      - trying to fix docker solution
    - management: 2016-06-16 | 11:00-13:00 => 2.00
      - updating and cleaning log
    - research: 2016-06-16 | 14:00-18:00 => 4.00
      - trying to fix docker
    - research: 2016-06-17 | 10:00-14:00 + 15:00-19:00 => 8.00
      - decentralized storage right from the browser only
    - research: 2016-06-18 | 11:00-13:00 + 14:00-18:00 => 6.00
      - decentralized storage with blockchains
        - swarm, filecoin, storj, symform
    - management: 2016-06-19 | 10:00-18:00 => 1.00
      - replanify sprints
      - updating vivifyscrum
    - research: 2016-06-20 | 10:00-13:00 + 15:00-18:00 => 6.00
      - decentralized storage with clients
        - ipfs, SyncNet, Tahoe-LAFS
    - research: 2016-06-21 | 10:00-12:00 + 14:00-17:00 => 5.00
      - summeryzing reseach
      - architectures drafts
    - management: 2016-06-22 | 09:00-12:00 => 3.00
      - summeryzing
      - updating vivifyscrum
      - git update

  - NOTES:
    - what-is-the-difference-between-swarm-and-ipfs
      - http://ethereum.stackexchange.com/questions/2138/what-is-the-difference-between-swarm-and-ipfs
    - ipfs_vs_swarm
      - https://www.reddit.com/r/ethereum/comments/3hbqbv/ipfs_vs_swarm/
    - IPFS-&-SWARM
      - https://github.com/ethersphere/go-ethereum/wiki/IPFS-&-SWARM
    - ipfs-introduction-by-example
      - http://whatdoesthequantsay.com/2015/09/13/ipfs-introduction-by-example/
    - Filecoin: A Cryptocurrency Operated File Storage Network
      - http://filecoin.io/filecoin.pdf
    - An Introduction to IPFS
      - https://medium.com/@ConsenSys/an-introduction-to-ipfs-9bba4860abd0#.84oj2rmel
    - Using ipfs for decentralized file synchronization
      - https://github.com/ipfs/ipfs/issues/120
    - Secret Sharing and Erasure Coding: A Guide for the Aspiring Dropbox Decentralizer
      -  https://blog.ethereum.org/2014/08/16/secret-sharing-erasure-coding-guide-aspiring-dropbox-decentralizer/
    - Cryptographic proof of custody for incentivized file-sharing
      - https://docs.google.com/document/d/1F81ulKEZFPIGNEVRsx0H1gl2YRtf0mUMsX011BzSjnY/edit?pref=2&pli=1#heading=h.jg7ixtogbbv3
    - Tahoe-LAFS is a Free and Open decentralized cloud storage system. It distributes your data across multiple servers
      - https://tahoe-lafs.org/trac/tahoe-lafs
    - A JavaScript library for reading/writing Tahoe-LAFS files and directories.
      - https://github.com/nejucomo/lafs-wapi
    - SyncNet: A Decentralized Web Browser
      - http://jack.minardi.org/software/syncnet-a-decentralized-web-browser/
      - https://github.com/jminardi/syncnet
    - A JavaScript library for providing multiple simultaneous, stable, fault-tolerant and resumable/restartable uploads via the HTML5 File API.
      - https://github.com/23/resumable.js/tree/master
    - slice-large-file-into-chunks-and-upload-using-ajax-and-html5-filereader
      - http://stackoverflow.com/questions/20212851/slice-large-file-into-chunks-and-upload-using-ajax-and-html5-filereader
    - splitting-a-file-into-chunks-with-javascript
      - http://stackoverflow.com/questions/32898082/splitting-a-file-into-chunks-with-javascript
    - WebTorrent: How I built a BitTorrent client in the browser
      - https://www.youtube.com/watch?v=3w_6dfqrpzk
    - A decentralization of GitHub using BitTorrent and Bitcoin
      - http://blog.printf.net/articles/2015/05/29/announcing-gittorrent-a-decentralized-github/
      - https://github.com/cjb/gittorrent
      - https://news.ycombinator.com/item?id=9625840
    - IPFS implementation in JavaScript http://ipfs.io/
      - https://github.com/ipfs/js-ipfs
    - A decentralized, secure file storage, sharing and social network that's surveillance resistant and doesn't expose your friend network.
      - https://github.com/Peergos/Peergos/blob/master/papers/wuala-cryptree.pdf
      - https://github.com/Peergos/Peergos
    - DEVCON1: Swarm - Daniel Nagy, Viktor Tron
      - https://www.youtube.com/watch?v=VOC45AgZG5Q
    - Daniel Nagy: "Swarm: Distributed storage for Ethereum, the Turing-complete blockchain"
      - https://www.youtube.com/watch?v=N_vtxw6nfmQ
    - Not retainted decentralized storage technologies
      - Symform.com
      - Stroj.io
      - filecoin
      - Tahoe-LAFS
    - Bittorent
      - https://en.wikipedia.org/wiki/BitTorrent
      - http://www.howtogeek.com/141257/htg-explains-how-does-bittorrent-work/
      - BitTorrent visiualisation
        - http://mg8.org/processing/bt.html
      - https://www.quora.com/How-does-BitTorrent-work
      - https://en.wikipedia.org/wiki/BitTorrent_protocol_encryption
      - http://wiki.vuze.com/w/Message_Stream_Encryption

2016-06-22 | 13:00-15:00 5th Meeting => 2.00
  - discussion on solution webtorrent vs custom
    - retained webtorrent

2016-06-22 -> 2016-06-29 Week 5 / 8 =>> 45.50
  - PROGRESS:
    - development: 2016-06-22 | 16:00-18:00 + 19:00-00:00 => 7.0
      - learning webtorrent api
    - development: 2016-06-23 | 10:00-14:00 + 15:00-20:00 => 9.0
      - playing with webtorrent api
    - development: 2016-06-24 | 10:00-13:30 + 14:00-19:00 => 8.50
      - trying to make a storage portal from scratch with API
    - development: 2016-06-27 | 09:00-12:00 + 13:00-18:00 + 21:00-22:00 => 9.00
      - looking and understanding instant.io source code
      - improving from scratch code
    - development: 2016-06-28 | 11:00-14:00 + 14:30-19:00 + 21:30-23:00 => 9.00
      - improving service worker
    - development: 2016-06-29 | 10:00-12:00 => 2.00
      - improvinf service worker
  - NOTES:
    - Streaming torrent client for the web https://webtorrent.io
      - https://github.com/feross/webtorrent
    - Streaming torrent client for OS X, Windows, and Linux. https://webtorrent.io/desktop
      - https://github.com/feross/webtorrent-desktop
    - Streaming file transfer over WebTorrent https://instant.io
      - https://github.com/feross/instant.io
    - WebTorrent (with WebRTC support in Node.js) https://webtorrent.io
      - https://github.com/feross/webtorrent-hybrid
    - share files via webtorrent http://bgm.binux.me
      - https://github.com/binux/webtorrent-share
    - PeerSurf is a demo (and kind of a library) of P2P websites powered by WebTorrent
      - https://github.com/matthaywardwebdesign/PeerSurf
    - A p2p chat client which is more like a BitTorrent sync application
      - https://github.com/Quantum-Sicarius/p2pChat
    - Prototype of a decentralized video streaming platform using P2P (bittorent) directly in the web browser with WebTorrent and Angular 2.
      - https://github.com/Chocobozzz/PeerTube
    - Decentralized web hosting over WebTorrent
      - https://github.com/jhiesey/peercloud
    - Share file via WebTorrent and WEBRTC http://fs.lunik.xyz
      - https://github.com/Lunik/Instant-Share
    - package and encrypt content then distribute it over webtorrent and webrtc https://mtos.co/
      - https://github.com/m-t-o-s/mtos
    - A distributed, uncensorable web page archiver built on webtorrent, assetgraph & mongodb's gridfs
      - https://github.com/jscinoz/everarchive

2016-06-30 | 13:00-13:30 6th Meeting => 0.50
  - show of storage demo with webtorrent

2016-06-29 -> 2016-07-06 Week 6 / 8 =>> 30.00
  - PROGRESS:
    - research: 2016-06-29 | 13:00-18:00 + 20:00-21:00 => 6.00
      - state of the art for data tribunal
      - add let's encrypt to overclouds.ch
    - research: 2016-06-30 | 13:30-18:00 => 5.50
      - continue state of the art
    - research: 2016-07-01 | 10:00-15:00 => 5.00
      - basic webgate architecture
    - research: 2016-07-04 | 11:00-13:30 + 14:30-17:00 => 5.00
      - improve webgate concept webgate
      - improve webgate architecture
    - research: 2016-07-05 | 10:00-13:00 + 13:30-18:00 => 7.50
      - reputation concept
      - making basic data architecture
      - state of art browsers service workers + webrtc
    - research: 2016-07-06 | 10:00-12:00 => 2.00
      - looking for mobile implementation with webrtc+service worker
  - NOTES:
    - no state of the art for the data tribunal
    - Javascript bitcoin library for node.js and browsers http://bcoin.io
      - https://github.com/bcoin-org/bcoin
    - Brings Ethereum to your browser
      - https://metamask.io
    - An experimental Raft implementation in Javascript.
      - https://github.com/benbjohnson/raft.js
    - Crypto 2.0 Comparison Chart
      - https://docs.google.com/spreadsheets/u/1/d/1FdxxnujeMb_1kWlz1Esqut_jmmWNicbS3Meh1F83tUo/htmlview
    - Javascript implementation of the Tor (or Tor like) anonymizer project (The Onion Router)
      - https://github.com/Ayms/node-Tor
    - Best solution for private torrents?
      - https://github.com/feross/webtorrent/issues/386
    - Decentralized search
      - https://github.com/feross/webtorrent/issues/186
    - Blockchain Applications. Written in JavaScript. Running on Sidechains.
      - https://lisk.io
    - Namecoin
      - https://namecoin.info
    - Crypti - A Decentralized Application Platform
      - https://crypti.me
    - A bitcoin full node in the browser
      - http://bcoin.io/browser.html
      - https://github.com/bcoin-org/bcoin
    - Distributed Encrypted Peer-To-Peer Storage
      - http://publications.lib.chalmers.se/records/fulltext/203144/203144.pdf

2016-06-07 | 14:00-14:30 7th Meeting => 0.50
  - presentation of the reputation + webgate concept
  - presentation of the architectures

2016-07-06 -> 2016-07-13 Week 7 / 8 =>> 44.00
  - PROGRESS:
    - research: 2016-07-06 | 13:00-18:00 => 5.00
      - improve reputation concept
      - improve data architecture
    - research: 2016-07-07 | 10:00-12:30 = 2.50
      - filtering & scanning documents
      - checking for constitency
    - development: 2016-07-07 | 13:30-14:00 + 15:00-18:30 + 20:00-22:00 => 6.00
      - forced HTTPS
      - basic video demo
    - development: 2016-07-08 | 10:00-13:00 + 14:00-20:00 => 9.00
      - basic quick-share
    - development: 2016-07-11 | 11:00-14:00 + 14:30-21:00 => 9.50
      - quick-share improved
      - webgate forced in background
    - development: 2016-07-12 | 10:00-13:00 + 14:00-19:00 + 23:00-00:30 => 9.50
      - basic webapp generator
      - testings with browser only version
      - testings on overclouds.ch
    - development: 2016-07-13 | 10:00-12:30 => 2.50
      - updating demo video webapp

  - NOTES:
    - progressive streaming is not possible due to bittorrent protocol itself
    - This website demonstrates basic usage of the Web Cryptography API developed by w3c.
      - http://nick.bleeken.eu/demos/web-crypto-samples/
    - Web cryptography API samples
      - https://github.com/nvdbleek/web-crypto-samples
    - WebCrypto: Encrypt and Decrypt with AES
      - https://coolaj86.com/articles/webcrypto-encrypt-and-decrypt-with-aes/
    - Web Cryptography API Examples Demo: https://diafygi.github.io/webcrypto-examples/
      - https://github.com/diafygi/webcrypto-examples
    - Web Cryptography API Live Table
      - https://diafygi.github.io/webcrypto-examples/
    - Comparing Performance of JavaScript Cryptography Libraries
      - https://medium.com/@encryb/comparing-performance-of-javascript-cryptography-libraries-42fb138116f3#.km32e1gzu
    - JavaScript Cryptographic Library with performance in mind.
      - https://github.com/vibornoff/asmcrypto.js/
    - Stanford Javascript Crypto Library http://bitwiseshiftleft.github.com/sjcl/
      - https://github.com/bitwiseshiftleft/sjcl
    - A native implementation of TLS in Javascript and tools to write crypto-based and network-heavy webapps
      - https://github.com/digitalbazaar/forge
    - Triple Security for the browser and Node.js https://keybase.io/triplesec
      - https://github.com/keybase/triplesec

2016-07-13 | 8th Meeting => 0.00
  - meeting cancel

2016-07-13 -> 2016-07-15 Week 8 / 8 =>> 22.5
  - PROGRESS:
    - development: 2016-07-13 | 13:30-18:30 + 20:00-22:00 => 7.00
      - testing & comparing cryptography libraries
    - development: 2016-07-14 | 09:30-12:00 + 12:30-16:00 + 20:30-01:00 => 10.50
      - added basic encryption
    - development: 2016-07-15 | 11:00-12:30 + 13:00-15:30 => 4.00
      - added decryption skeleton
      - updated user interface
      - finishing up project for release
    - management: 2016-07-15 | 15:30-16:30 => 1.00
      - licensing & releasing project

  - NOTES:
    - Creating a File Encryption App with JavaScript
      - http://tutorialzine.com/2013/11/javascript-file-encrypter/
    - Encrypt and decrypt content with Nodejs
      - http://lollyrock.com/articles/nodejs-encryption/
    - Encrypts files using Node's built-in Cipher class.
      - https://www.npmjs.com/package/file-encryptor
    - implementation of crypto for the browser
      - https://www.npmjs.com/package/crypto-browserify
    - test javascript hash implementations
      - http://brillout.github.io/test-javascript-hash-implementations/
    - SJCl - AES encryption problem for large string
      - https://github.com/bitwiseshiftleft/sjcl/issues/66
    - Split file with JavaScript or jQuery
      - http://stackoverflow.com/questions/12055386/split-file-with-javascript-or-jquery
    - Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
      - http://getbootstrap.com
    - Foundation - The most advanced responsive front-end framework in the world.
      - http://foundation.zurb.com
    - Should You Use Bootstrap or Foundation?
      - http://blog.teamtreehouse.com/use-bootstrap-or-foundation
    - Magister Free html5 template by GetTemplate
      - http://usebootstrap.com/preview/magister/
    - P2P Encrypted File Sharing In Your Browser via WebRTC https://instafile.io
      - https://github.com/blakelapierre/instantFile
    - Exchange files p2p and e2e encrypted over a fully meshed network in your browser using WebRTC. https://pguth.github.io/peermesh/
      - https://github.com/pguth/peermesh
    - Implementing various SHA-3 candidates in Javascript
      - https://github.com/drostie/sha3-js
    - BLAKE2s cryptographic hash function in JavaScript https://dchest.github.io/blake2s-js/
      - https://github.com/dchest/blake2s-js
    - File interface
      - https://developer.mozilla.org/en-US/docs/Web/API/File
    - FileReader interface
      - https://developer.mozilla.org/en/docs/Web/API/FileReader
    - JavaScript Cryptography api encryption
      - http://cryptojs.altervista.org/api/#.V4d9J5N96sw
    - Example Interoperable AES encryption with Java and JavaScript
      - https://github.com/mpetersen/aes-example
    - FileSystem APIs
      - http://www.html5rocks.com/en/tutorials/file/filesystem/
    - Encrypting data with Crypto-JS in JavaScript
      - http://ramkulkarni.com/blog/encrypting-data-with-crypto-js-in-javascript/

  - TODO
    - Travis-CI (Continous Integration)?

Admin:
  - current total hours => 323.25h
  - falling hours due to school => 9x2 = 18h
    - 1 day because of exams
    - 1 day because school organized meeting with compagnies
  - total hours with the falling hours = 341.25h
  - hours to go until 340h => 340-341.25 = -1.25h (made 1.25h extra on a 340h project)
