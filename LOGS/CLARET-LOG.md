# Log for the student: Romain Claret

2015-12-13 -> 2016-02-04 preparation for pre-meeting with teacher (not school weeks)
  - HOURS:
    - Does not count (free work, to set the project up)
  - Draft of project description (README.md)

2016-02-10 pre-meeting with teacher (not a school week)
  - Made a draft of detailed features in README.md
  - Global discussion about the project
    - Specifications draft for Spring Work made by teacher
    - Lift of the project
    - Personal interest for the teacher
    - Use of the scrum methodology (iterative approach)
    - Springs
      - Ideally one iteration per week
      - Aim for a goal of features (Sprint backlog)
      - Document the work, problems, solutions for each iteration
  - TODO for first meeting (2016-02-17)
    - Read specification draft and complete if needed
    - Draft of the product backlog

2016-02-10 -> 2016-02-16 Week 0 / 13
  - HOURS:
    - 2016-03-10: 5h
      - Work on global view of the project structure
      - Reading the specifications
      - Made a draft for the Scrum product backlog
  - Setting up project structure (logs, scrum management)
  - Convert specifications.odt into markdown for versioning purposes
  - Read the specifications, no explicit modifications has been made
  - Filled up the product backlog in SCRUM.md (I am not sure about if it is correct)

2016-02-17 1st Meeting
  - Discussed on a draft for structuring the sprints
  - Discussed Sprint structure (sprints with themes instead of one per week)
    - What, How, Result
  - TODO for the 2nd meeting
    - Sprint planning
    - Start of Sprint #1

2016-02-17 -> 2016-02-23 Week 1 / 13
  - HOURS:
    - 2016-03-20: 3h
      - Making drafts of for the architecture of the project
    - 2016-03-23: 8h
      - Making an architecture for the project
      - Updated the Logs
      - Updated the sprint planning
  - Start of sprint 1
  - Made draft of sprints' planning
  - Working on the architecture

2016-02-24 2nd Meeting
  - Missing Deliverables for sprints
  - Should focus on the use of the existant before creating new
    - May be use TOR for the communication base
  - The architecture draft looks more like a mind map than an architecture
  - The architecture draft looks fine so far, however, it includes mainly the communication
    - Missing Encryption
    - Missing Trust
    - Missing Storage
  - The delay for the report is maybe too short (should think to add the in)
    - Add of an intermediary report
    - Start earlier the final report
  - There won't be a meeting next week
    - Push the end of Sprint #1 and notify teacher
  - Sprint #1
    - Add missing theme in architecture
    - Check for the use of the existent (as plugins)
  - Sprint #2
    - Start with a direct communication (also try to use TOR)
  - The current communication architecture looks a lot like TOR (onion peel)
  - Maybe have an active auto-ban by the system, and use the data tribunal only if there is a request for a trial.

2016-02-24 -> 2016-03-01 Week 2 / 13
  - HOURS:
    - 2016-02-27: 3h
      - Research on browser-side existing solutions (Protection, OS, Javascripts RTC, Nodes,...)
      - Drafting solutions for the architecture model #1
    - 2016-03-01: 8h
      - Reorganizing the Scrum & logs into browser
      - Updated the Logs
      - Updated the first model of the Architecture
      - Made a new version of the Architecture (new bases)
  - Finishing the draft of the architecture #1
    - Add of Encryption
    - Add of Trust
    - Add of Storage
  - Making of the architecture draft #2
    - Use of a decentralized server (with decentralized storage)
      - Identities and Nodes are not doing anything anymore
      - The server is applying the rules made by the identities
      - The server is working as a black-box
        - The connection between the user and the server is secured (not spyable)
        - Identities can give orders to their data and the server applies them
        - The traffic inside the server is not understandable
          - The work is encrypted and distributed in chunks to nodes
          - The worker node only sees chunks of the information. (even decrypted, there is no real use for it)
      - The server must do integrity checks
        - Send the same work 2 or 3 times and compare results
      - Nodes are being used as computing power and storage
      - Nodes' level of trust (certificates) are increasing
        - Over time
        - With correct "integrity check"
      - Identities' level of trust is increasing
        - Over time
        - For public data (unblamed)
  - Add of deliverables to sprints
  - Add of intermediary report data
  - Modified the start date of the final report
  - Check for a plugin structure using TOR, I2P, Freenet
  - NOTES:
    - Communication by data propagation:
      - The path optimization won't be possible and the global status of the network will be very difficult to maintain. And being sure that the chunk arrived would not be as easy as well.
      - But it would be must easier to just push data into the wild...
      - An advantage would be total anonymity, but I am not sure it's what we need here.
    - Global Knowledge:
      - It's not necessarily a blockchain
        - It could be something similar to a VCS
          - A directory with public files (list of nodes, activities, etc..)
          - Versioning
          - Similar to pull requests, when a new node arrives, a data ban, etc..
    - Storage
      - Maybe the best if to only allow Read and Delete verbs
        - The modification as only sense if we went to do versioning
        - The address of the file should be kept the same so other "reader" could still access it
        - The flags (ban) should be persistence on the file, identity, and node of birth.
        - Auto-banning by flags

2016-03-02 3rd Meeting (not a school week)
  - Must start logging the hours
    - Only 8 hours per week are required for the SS
    - The extra hours must be documented

2016-03-02 -> 2016-03-08 Week 3 / 13
  - HOURS:
    - 2016-03-02: 4h (not a school week)
      - Version 2 of the Architecture (General & User & Node-Only)
      - Browsing the web in quest for a mighty P2P browser-only protocols
    - 2016-03-08: 2h
      - Browsing the web more seriously in quest for a mighty P2P browser-only protocols
  - Start sprint #2 themed Communication
  - Research on communication technologies
    - Looking for technologies working from the browser
  - NOTES:
    - The P2P technologies for browsers are always requiring a server to do the first connection (signaling)
    - Currently, we have no choice that to have a list of "trusted" nodes to connect to (like on TOR)

2016-03-09 4th Meeting
  - Canceled, due to the HES-SO forum and School Conferences

2016-03-09 -> 2016-03-15 Week 4 / 13
  - HOURS:
    - 2016-03-12: 6h
      - Global research about P2P communications in the browser
        - Communication/Broser-P2P-Technologies
    - 2016-03-15: 4h
      - Detailed research about WebRTC Datachannel
      - Working on LOGS
      - Add of the work hours to CLARET-LOG
      - Looking at Javascript Pattern for the Constructor and Module
        - https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
        - https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
  - NOTES:
    - **WebRTC Basic**
      - Clear API
      - Optimized for Real-Time Communications (RTC)
      - Pushed by HTML5 standards and companies like Google, Mozilla, Opera
        - Growing community
        - Supported browsers: Chrome, Firefox, Opera, Android, iOS
          - However the **interoperability** is not here yet, but Google and Mozilla are working to make Chrome and Firefox interoperable.
      - Needs a server to do signaling
    - **WebRTC Datachannel**
      - Works on top of the basic WebRTC
      - It's fast almost RT (debate: what is RT..?), the main limitation is user's speed connection and JS
      - Reliable Mode which provides like TCP a guarantee of order and no packet loss.
      - Unreliable Mode which provides like UDP no guarantees for the data transfer
      - Compatible with Chrome & Firefox
      - Data transfer is encrypted
        - People are the treat here (send malicious like virus)
        - However the transfer cannot unbreakable, the data itself should maybe be encrypted as well
          - In our case (chunks), it could be a plus
      - Problems are still here:
        - Signaling
        - Multicasting
        - Storage
      - **Solution can be found to have a serverless signaling**
    - **ORTC (OBJECT REAL-TIME COMMUNICATIONS)**
      - Pushed by W3C & Microsoft
      - Newer than WebRTC 2011 vs 2014
        - Comparison: https://www.sinch.com/learn/ortc-vs-webrtc/
        - The main difference at the moment is the media protocols supported and the fact that ORTC has not yet a signaling standard
      - It's not clear yet how it is and will be different
    - **NodeJS**
      - Server side management of peers
        - Requires to have nodejs running in the background
          - Solutions can be found to bundle the nodejs server with a web app
      - Not what I am looking for this project, which should be closer to the browser possible
    - **Other technologies**
      - peer5, openpeer, peerjs, etc..
        - Trusting them (and paying them usually) with the backend (signaling, etc..)
          - I am not favorable for this, not thinking about the money part, how can I ensure they won't shutdown our project because they don't like it or if they are asked to?
    - **Applications**
      - Data Sharing
      - CDN
    - **My opinion**
      - My choice goes to **WebRTC Datachannel** which goes closer to what I am looking for.
        - Will look for serverless solutions
        - A trusted signaling node list is not too bad if controlled by the community
    - **Project management**
      - I am not really sure of the hours spent before 3rd meeting with the teacher on the 2016-03-02 since I didn't think about it. I am used to working late a night sometimes. I never really counted the hours. But I will now. However last week was pretty busy, so I could work as expected.
      - We must move the sprint #2 due time because I haven't done any testing yet, only the theoretical part.
        - Will discuss with the teacher during the 5th meeting

2016-03-16 5th Meeting

2016-03-16 -> 2016-03-22 Week 5 / 13
  - HOURS:
  - *NOT STARTED YET:*
    - Testing WebRTC solutions
    - Looking up for hidden services
    - Looking for what is done currently with TOR (communication plugins, decentralized storage)
    - Looking for current technologies that could suit the communication
    - Decentralized storage: Freenet, I2P

2016-03-23 6th Meeting

2016-03-23 -> 2016-03-29 Week 6 / 13

2016-03-30 7th Meeting

2016-03-30 -> 2016-04-05 Week 7 / 13

2016-04-06 8th Meeting

2016-04-06 -> 2016-04-12 Week 8 / 13

2016-04-13 9th Meeting

2016-04-13 -> 2016-04-19 Week 9 / 13

2016-04-20 10th Meeting

2016-04-20 -> 2016-04-26 Week 10 / 13

2016-04-27 11th Meeting

2016-04-27 -> 2016-05-03 Week 11 / 13

2016-05-04 12th Meeting

2016-05-04 -> 2016-05-10 Week 12 / 13

2016-05-11 13th Meeting

2016-05-11 -> 2016-05-13 Week 13 / 13
