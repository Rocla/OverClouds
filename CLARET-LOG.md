# Log for the student: Romain Claret

2015-12-13 -> 2016-02-04 preparation for pre-meeting with teacher
  - Draft of project description (README.md)

2016-02-10 pre-meeting with teacher
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
  - Start of sprint 1
  - Made draft of sprints' planning
  - Working on the architecture

2016-02-24 2nd Meeting
  - Missing Delivrables for sprints
  - Should focus on the use of the existant before creating new
    - May be use TOR for the communication base
  - The architecture draft looks more like a mind map than an architecture
  - The architecture draft looks find so far, however it includes mainly the communication
    - Missing Encryption
    - Missing Trust
    - Missing Storage
  - The delay for the report is maybe too short (should think to add the in)
    - Add of an intermediar report
    - Start earlier the final report
  - There won't be a meeting next week
    - Push the end of Sprint #1 and notify teacher
  - Sprint #1
    - Add missing theme in architecture
    - Check for the use of the existant (as plugins)
  - Sprint #2
    - Start with a direct communication (also try to use TOR)
  - The current communication architecture looks a lot like TOR (onion peel)
  - Maybe have an active auto-ban by the system, and use the data tribunal only if there is a requiest for a trial.

2016-02-24 -> 2016-03-01 Week 2 / 13
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
        - Identities can give orders on their data and the server apply them
        - The traffic inside the server is not understandable
          - The work is encrypted and distributed in chunks to nodes
          - The worker node only see chunks of the information. (even descypted, there is no real use for it)
      - The server must do integrety checks
        - Send the same work 2 or 3 times and compare results
      - Nodes are being used as computing power and storage
      - Nodes' level of trust (certificates) are increasing
        - Over time
        - With correct "integrety check"
      - Identities' level of trust are increasing
        - Over time
        - For public data (unblamed)
  - Add of delivrables to sprints
  - Add of intermediar report data
  - Modified the start date of the final report
  - Check for a plugin structure using TOR, I2P, Freenet
  - SELF THOUGHT:
    - Communication by data probagation:
      - The path optimization won't be possible and the global status of the network will be very dificult to maintain. And being sure that the chunk arrived would not be as easy as well.
      - But it would be must easier to just push data into the wild...
      - An advantage would be total anonymity, but I am not sure it's what we need here.
    - Global Knowledge:
      - It's not necessarily a blockchain
        - It could be something similar to a VCS
          - A directory with public files (list of nodes, activities, etc..)
          - Versioning
          - Similar to pull requests, when a new node arrive, a data ban, etc..
    - Storage
      - May be the best if to only allow Read, and Delete verbs
        - The modification as only sense if we went to do versioning
        - The address of the file should be kept the same so other "reader" could still access it
        - The flags (ban) should be persistante on the file, identity and node of birth.
        - Auto banning by flags

    *NOT STARTED YET:*
    - Start sprint #2 themed Communication
      - Looking for what is done currently with TOR (communication plugins, descentralized storage)
      - Looking for current technologies that could suit the communication

2016-03-02 3rd Meeting

2016-03-02 -> 2016-03-08 Week 3 / 13

2016-03-09 4th Meeting

2016-03-09 -> 2016-03-15 Week 4 / 13

2016-03-16 5th Meeting

2016-03-16 -> 2016-03-22 Week 5 / 13

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
