# Log for the student: Romain Claret

2016-05-24 -> 2016-05-27 Week 1 / 8 => 57.75
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

2016-06-01 -> 2016-06-08 Week 2 / 8 =>
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

2016-06-08 -> 2016-06-15 Week 3 / 8 =>
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

2016-06-15 | 13:15-14:15 Expert Meeting => 1.0
  - meeting the expert
  - project presentation
  - the expert thinks difficulties will appear during the storage sprint

2016-06-16 | 13:00-00:00 4th Meeting => 0.0

2016-06-15 -> 2016-06-22 Week 4 / 8 =>
  - PROGRESS:
    - development: 2016-06-15 | 14:30-18:30 => 4.00
      - trying to fix ethereumJS with developers
        - no success yet
      - contacting again goEthereum developers
        - nobody seems to be able to help with docker
      - trying to fix docker solution
    - management: 2016-06-16 | 11:00-13:00 => 2.00
      - updating and cleaning log

  - TODO
    - Travis-CI (Continous Integration)?
      - With nodejs and browserify also?
    - DEVCON1: Ethereum for Dummies - Dr. Gavin Wood
      - https://www.youtube.com/watch?v=U_LK0t_qaPo
