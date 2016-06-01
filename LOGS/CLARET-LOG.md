# Log for the student: Romain Claret

2016-05-24 -> 2016-05-27 Week 1 / 8
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

2016-05-24 | 15:00-16:00 1st Meeting
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

2016-05-30 | 13:00-14:30 1.5th Meeting
  - the sprints are now ending on Wednesday
  - review of the current sprints
  - subscribed to a recurring plan on vivifyScrum
    - must document how vivifyScrum is better than a text log (visual is not enough)
  - discussed of the requirements for the report (a lot of annexes if okay)
  - Validated the specifications

2016-06-01 -> 2016-06-08 Week 2 / 8
  - none: 2016-06-01 | : - : =>

  - TODO
    - Travis-CI (Continous Integration)?
      - With nodejs and browserify also?
    - Should deploy on Private blockchain or Test/Mainnet?
    - https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_
      - or https://www.youtube.com/watch?v=czmulJ9NBP0 ?
      - and https://www.youtube.com/watch?v=U_LK0t_qaPo ?

2016-02-01 | 13:00 2nd Meeting
  - 6th June rdv for master
  - I usually have a working room; we could meet there if the teacher wants/can
