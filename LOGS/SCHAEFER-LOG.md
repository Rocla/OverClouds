# Log for the teacher: Marc Schaefer

2016-02-10 pre-meeting with student
  - read the specifications (CDC) + eventually suggest additions
  - first rough iteration draft (product backlog?)

2016-02-17 normal meeting with student
  - goals
    - CDC finalization: OK
    - run through first rough iteration draft: OK

  - wiki: nothing (not a problem)
  - GIT
    - SCRUM.md: most of the objectives are there

  - missing first draft of iterations (what will be done in the 10 weeks of the project), developed first draft:
    - SPRINT1 (state+planif+draft architecture)   2 weeks
    - SPRINT2  communication
    - SPRINT3  encryption
    - SPRINT4  trust
    - SPRINT5  storage
    - SPRINTN (finalizing rapport)

    result at each sprint:
      - deliverables (small prototype, demo, library)
        - what is missing (to do during bachelor session, to do at the next sprint, drop): eventually manage as a list of backlogS.

    next week goal
      - list of iterations (=? sprint)
      - expected duration
      - deliverables attendus
      - // start of sprint 1

2016-02-24 normal meeting with student
   -  architecture draft
     - how do all the nodes get the list of all the nodes? is that required? (alternative: peer nodes flooding)

   - journal: OK
   - list of iterations: OK (SCRUM-SPRINTS-SS.md)
        sprint 2: deliverable: demo in the browser using communication
        sprint 3: deliverable: demo in the browser using encryption
        sprint 4-5: deliverables missing
        sprint 6: number is 6 or 7;  maybe start the report a few weeks ahead and run this sprint parallel
   - technical
        - no spaces in file names
   - iteration 1
        think about
           - notions of access rights
           - describe how the data is encrypted
           - show how to implement the base functions either:
             - create a data set, delete, eventually update
             - give the right to read, eventually delete; ban of data/users
           - Considering the architecture as plugin-ins, what could we imagine to not implement but encapsulate in existing? (== isolate the support services that you need)
   - iteration 2:
        - *direct* communication client-client
        - is tor eventually utilizable if the time is short?

2016-03-03 special meeting with student (not a school week)
   - do not forget the innovative aspect: padlock in the storage
     (the data is owned by X, and encrypted by the consensus)
   - report in English OK.
   - evaluate the time for each week, eventually prepare a time
     repartition for the report

2016-03-09 lecture README.md
   - the two "THIS PART MUST BE REVISITED": they look quite good, you can't
     ensure 100% security; only external hardware can help to prevent
     private key loss; however that won't help to prevent data loss unless
     the operation you are requesting the NitroKey to do is seen on another
     display, e.g.
   - quite complete references

2016-03-16 meeting with student
   - results/deliverables of finished sprints
        s1 OK
        s2 late; allocation problem; will be ended on week 12 (before next
                                                               meeting)        
   - planning of next sprints
       s4 shortened to 2 weeks, will be handled in detail in TB
   - github API as a directory service / twitter / your own directory service
     (for bootstrap only)
   - before coding/prototyping phase, small specification (protocol,
     interactions, goal)
      - UDP or TCP
         - UDP: directory service + potential direct I/O
           (requirement of reliability service layer?)
         - TCP: directory service + relay for I/O
           (requirement of reliability service layer, maybe also high level?)
      - high level reliability service handled by WebRTC

2016-03-23 meeting with student
   - OK for directory service on torrent, but for now 
     a simple content fetched on a static URL suffices.
   - details on PeerJS? schematics?
   - where is the small spec for the prototype ?
   - prototype test: OK, uses PeerJS on top of WebRTC with servers
   - is sprint 1+2 complete? if yes -> consolidate in report already
   - planning will be reviewed in two weeks, think of reduction of
     sprints Trust or Storage if sprint Encryption is not shorter.
   - document better your tests
   - if direct communication not possible (firewall), e.g.
        iptables -I OUTPUT -o wlan0 -d 157.26.109.224/32 -j DROP
     what is your solution?
        -> bricolage (serveur relais)
        -> évt. via PeerJS? (port 9000/TCP, plus real-time, argh!?)

2016-04-06 meeting with student
   - replanify with 5 remaining weeks (not counting the autonomous work week)
     appx. 40 hours
        - start the report (1/2 week)
             technology comparisons (table)
             -> send to me as soon as ready
        - communication (1 week)
             - specification for the communication prototype
             - adapt the prototype
             - validation (remaining issues?)
        - crypto (2.5 weeks)
             - specification
             - prototype
             - validation (remaining issues?)
        - report (1 week)
           - includes CDC of the TB

    - mettre dans les références: OpenPGP.js (pas investiguer)

    - TB
        - trust
             PGP/GPG: trust mesh (vs X.509 trust chains)
        - storage

2016-04-13 meeting with the student
   - report structure OK, see my changes (in particular: add
     internal references)
   - apparently already a bit behind on schedule ? YES
      - did not get the technology comparison (table)
      - 1/2 week for the report+tech comparison table
   - work time documentation missing

2016-04-20 meeting with the student
   - demo serverless avec WebRTC/UTC + STUN Google
   - project was modified: PeerJS no longer useful.
   - you will need to
        - compare the two technologies
        - explain what you did
        - explain the used protocols and their possible limitation
          (p.ex. mode Access Point Client Isolation)
        - see for example https://andrewjprokop.wordpress.com/2014/07/21/understanding-webrtc-media-connections-ice-stun-and-turn/
   - time under-investment, and execute goal from previous week.



OTHER
   - Massimo contract
