# Over Clouds

- Project proposition for 2016 TP \& TB
- Author: Romain Claret
- Author's favorite development style: Prototyping
- Author's favorite languages: Python + Javascript
- Project possible languages: Javascript, python, WebGl, html5, CSS
- Current project status: Research + State of Art
- This document is not final and is still evolving


## In brief

Overclouds is a project whose goal is to create a new generation of an anonymous and decentralized internet data sharing service. The time of requiring an entry-point or centralized service directory servers in order to connect to a network is over. All you need is a browser with javascript capabilities and run an HTML file from either your local machine or online via a server.


## Short project description

We will conceptualize and create/prototype a decentralized and anonymous network accessible from a browser.
The features include:

- No servers or directories as an intermediary for the connection to another node.
- Storage directly on the network via the nodes (distributed storage)
- Share data between nodes


## Personal Motivations

- Today, the world has a concern for privacy: Snowden's revelations led to a massive media effect. People are feeling that their privacy is threatened by the worldwide "spies", either the government, companies, etc... It's how the Internet involved and it's part of the economy and politics now. On the Internet, two classes of people have been created, people who don't know how to protect their privacy on the Internet, and people who do. For the first group, some are not aware of the global privacy status, some don't care and some don't know how to protect their privacy. Concerning the second group (which I am part of), I have personal ethical problems. I totally understand that people don't want to be tracked by advertising companies or the government. I also understand that some people are scared that their private data could be stolen and exposed publicly. However, some private data must be sometimes made public. I believe, that the data from terrorist groups and their members (from a humanistic point of view, and not political) have to be denounced, authors made public and data archived.

- We also have copyright laws to unable the free sharing of any kind of data such as art and knowledge. This data retention makes me feel like it's a serious problem for the humanity legacy. However, I also understand that it's our economic system, and people are making a living out of it. This kind of data is encrypted by the owners (generally companies) and stored in data centers or even worse on hard drives. Owners who are sharing this (copyrighted) material usually also using encrypted manners to distribute them, so the data stay "protected" from people who would like to stop them from being retributed. Now, people who could have those data anyway, are also encrypting the data transmission so they won't get caught. This game of the cat and the mouse makes me believe that there is a serious treat for the humanity global knowledge and culture.

- Another ethical problem I am confronted with is the incoming full encrypted data era which will make all our data appear as a bunch of random noises. Which can for various reasons be pretty bad for us. Let's just think about how our global knowledge is and will be sorted. For example, data such as art and knowledge. How will the next generation of human be able to retrieve the information stored in a few years? How to be sure that the unbreakable keys will not be lost? And another example, is it really a good idea to "randomize" the signals that we send in outer space? The signals we send out to space are today already quite different from what we sent in the sixties. For example, the purely analog (TV, FM radios) signal is deprecated and replaced by numerical transmission (DVB, DAB), which are sometimes encrypted (pay-to-watch tv, pay-to-listen radios). Moreover, our transmission technologies involve with higher frequencies and always less power customization. Resulting to the fact that today, the Earth radiates probably much fewer waves than before. How can we be sure that scientists who will continue to send waves to space will be able to construct the signals that will reflect our civilization capabilities?

- We can also easily imagine that soon a new company will come saying: "Hey, we are specialized in transmitting encrypted data, nobody will ever know what you are doing, and when you are doing it. All you have to do is to buy from us a the key every month.". I don't think it's good neither, it will only make the privatization of the data security goes further and further and killing hope to retrieve data one day. We could see this has an evolution of VPN services.

- With Overclouds, I am looking for a new approach to allow people to communicate together and be sure that their private data is secured and safe.
Nodes are anonymous on the network, in the sense that other people are aware of other nodes, but they don't know who they are, expect if they are considered malicious or bad (such as terrorists, scammers, etc.) by the global network of nodes.
And finally, the network does not act like random noises, it should be nice mathematics (like a sinus?). Users should be able to predict what will happen with their data, however, it is unpredictable for other users to know what will happen with this data.


## Long Project Description

The initiative behind the project is to create a new generation of internet data sharing tools, suited for today's paranoia for privacy on the internet and the preservation of knowledge for the next humanity generations.
People and things don't need anymore to be connected to directories, servers, or farms of servers anymore. Everybody and everything are now anonymous nodes, and they connect one to another freely.
The network is a mesh of nodes. The data is moving from a node to another across the network via other nodes.
All that users or things need is to have a standard Internet connection and a browser with javascript capabilities. Then either launch a local HTML file or enter the URL of a server which is hosting this file.


## How does it work?

### Mest of trust

>The new notion of a mesh of trust is being introduced.

- Each node has a unique certificate of trust. The certificate is untransferable.

- Each certificate is stored on the network and gives a ranking level to a specific node.

- Each user has, at least, one identity. And identities are created from an existing node of the network.

- Each identity has a public key, a private key, a node parent (alterable), and optional profile (languages, picture, name, etc...) which could be used by internal applications.

- The network needs require that a user uses his identity to log into a node and access the network. During votings, only nodes can give a vote. Identities cannot vote multiple times on the same vote. The first identity using a node validates its vote.

- A node works without an identity, however, an identity needs a node.

- The certificates and identities can be banned from the network by a consensus of nodes and a trial. It adds a flag which is seen by all nodes in case of banishment. (I didn't find any proof-of-work about a consensus banning a node. However, I think it's possible to have to select an amount of random nodes and ask them what they think of the situation.)

- A node can flag a specific certificate or node on the network. And apply rules on it, such as a filter for a minimum certificate level to connect directly to them and/or make their data go truth. The network will then be aware of the preferences of the node. For example, for the case of data routing, a node won't be able to connect to it.
For example, in the case of receiving data from a node, I don't want to deal with, my node will receive the data anyway and reject it. In the case of spam, the node will be charged anyway, now we can believe that the spammer will be spamming in the void, however if the attack is targeted, the end node will be touched anyway. We can also imagine the network preventing spam.
Another example, the rerouting of nodes. If the data goes to a node that doesn't want to reroute, the data is either sent back, which goes back to the node charge problem. Or the data is lost, and in the case of a UDP-like protocol is kinda bad. And if we imagine of a TCP-like protocol the node could look for another node to go through, but depending on the path speed, could take long or could surcharge the network in some cases.)

- The certificate level increases over time as long as the node is connected to the network. The certification level growth is main given automatically over time by letting the node solving mathematical problems. The certification level is also the amount of nodes giving rights of accessing their data. However, nodes are not aware of who trust who, only how many nodes are sharing their data with this specific node.

- A node can replace its certificate by generating a new one, however, the level is reset.

- An identity cannot be replaced. The user must create a new one. Depending on the situation they must use another node to create it.


### Data storage spread across the network

All the data is spread across the network as encrypted chunks belonging to an identity, the key for the data is also spread across the network but belongs to the network. The data and its key have redundancy chunks, which are also spread across the network.


### Data owner can give rights to their data

The data owner (an identity) can give the read/write/execute rights to a specific node certificate, a node certificate level, or identity.


### Data is blamable

A node can blame anonymously a chunk or a node and select a generic comment. Only nodes have a vote for blames. Identities are linked to a maximum of one node for a blame. The first identity blaming gets the vote. A blame is telling the network that a node or a chunk is not appropriate to the other nodes. Multiple blames on a node ban its certificate. Multiples blame on a specific chunk or chunks belonging to the same data resumes into a flag that reduces the default redundancy, revoke the rights of all the nodes except the owner. Blames are made with generic multilingual categories that the blamer can select from. Users can also create new categories, which will be later submitted to a voting cluster depending on their language competencies.


### Data ownership transfer

An identity can transfer the ownership of data to another identity. Both nodes must accept the transfer. However, blamed data is untransferable, and a blamed node or identity cannot be the ownership transferor or ownership receiver.


### Data Tribunal

Once the network as enough blames on a node or identity, it asks for unrelated nodes to rate the blame (only the first identity that validates the vote for a node counts). Judges will vote for the ban of the data based on the comments.
The owner of the blamed data can ask once for a second trial, new unrelated nodes will have to rate the blame again.


### Nodes are anonymous from the Internet providers

The Internet provider is only aware that an encrypted tunnel has been made to a random node, which will play the role of a gateway, and from which it retrieve a list of nodes. At each restart, a new node is selected.


### The network generates currency units over time

Nodes can retrieve a unit of the currency by solving a problem. The currency is then given to the first node that solved it with its computational power. The currency is transferable only to unbanned certificates. The identity which initiated the problem solving earns the unit.


## Questions without answers yet

- Are the node judges, elected by the network to rate a blame, who are judging based on the comments, should also be able to have access to the blamed data? (What if it's offensive content?)

- Should the network have a backdoor for governments, judges, etc. to be able to see specific data from am identity? (What if it's illegal content? In Switzerland, generally, the laws only punishes downloading and storing, this might have an additional impact -- is the legal system ready? -- must it be friendly with current data laws?)

- Would it be possible to make the network recognize illegal content automatically? (Probably not)

- Should it be adapted for a low bandwidth and speed connection with for a Xbee? (Probably)

- Should we take into account that the wired Internet speed only improves? (Probably)

- How to deal with the currency units if the identity gets banned? (Should we ban the currency units with the identity. Should we redistribute the currency units across the network? Should we erase the currency units? When should we apply the rule, should we wait a specific amount of time to allow the node to do a second trial? Or as long as it didn't do a second trial the currency units is locked?)

- Should we start from a programmable network such as Ethereum or MaidSafe? Or should we start from scratch? ("make, buy or adapt pre-study")

- How many hours this whole project may take? (I feel like the project is much bigger than 86h of TP + 360h of TB to get into maturity. Thus, we will need to reduce its size. But when would it be reduced? After or during the analytic work of the TP? Is it okay to set specifications at the beginning of a project such as TP and reduce the workload during the TP itself?)

- Could we use storage providers indirectly to help the network storage load? (Probably, but the security could be compromised in some cases because a node will have to do the bridge to a storage provider. But in the case of TOR, it works fine I guess.)

- Would it be possible for the nodes to pay with currency units for computational power from other nodes? (Probably)

- Would it be possible to make the network intelligent? Make it self-administrated? (Probably not)

- Would it be possible to allow nodes to run programs on the network like on Ethereum or with an API like on Maidsafe (Probably, it could be interesting to make bots for content sharing/selling, etc.)

- How to guaranty that a node will be able to connect to the network by a random node? (What about firewalls? Would connections only be based on TOR hidden service help ? or I2P? or Freenet? or services as such? The idea of only using a browser could be in jeopardy.)

- What is a consensus of nodes? How and where should be them used exactly? Is there any proof of work of it? (Should be clear during TP)

- /!\\ THIS PART MUST BE REVISITED How to guaranty that a node and only that node can get access to its data in the presence of malicious software on the system used by the node? (We could maybe assume that there is less than X% of malicious software designed for the network. It's indeed difficult to protect people from malicious people... We could add security layers, like a Pin or a passphrase, but if the user is running a keylogger of some sort, it's not secured. But since the node can only be accessible from a unique hardware, the key stealing could not as useful. However, the system could be also compromised by someone or/and something physical like a USB RUBBER. In which case the hardware protection is bypassed. Now we could think of a security that only shows a virtual keyboard, but a specific program could sniff on the mouse positions and actions. A solution could be to use a USB-key as key, but it could be also replicated if it's the user who generates the files on the key. Or use an external hardware, but it would impact the attractivity of Overclouds. And at the end how to be sure that the company who is making those encrypting hardware will not be hacked and release the key generator algorithms? Another solution is to control the hardware and the software, assuming that there is no way for an external or internal entity to know what's on the key, but in that case, the product Overclouds will be commercialized. And it could impact also the nature of the project, because it makes the project proprietary.)

- /!\\ THIS PART MUST BE REVISITED What about stealing a private key, could it be a concern? (A private key should be only usable by a specific node using a hardware signing mechanism. How to be sure that a specific hardware is not simulated/emulated? We could use an externally secured hardware such as a NitroKey, but it would have an important impact on new users who would like to join the network.)

- Concerning the TP: What should I do? (Responding to questions without answers, explore the possibilities to make the magic happen in the browser only, start making the network with the mesh-of-trust. I am not sure exactly how to scale the work.)

- Concerning the TB: What should I do? (Make the network...)

- Concerning after TP+TB, what would be left? Would the result of the TP+TB be only a proof of concept or should it an iteration of a final product?

- Is it possible to continue the project after the TP+TB? (This is allowed)


## Features

- No server
- No directories
- Anonymous nodes
- Mesh-of-Trust (nodes, certificates, duration, transactions, manual trust sent or not to the network?)
- Registry for domain names (.node?)
- Private data protection
- Public data
- Private data with time to go publicly
- Storage on network
- Website
- Chat
- File sharing
- Currency


## Detailed features

### Concept

- No software installation
- Right from the browser
- Easy of use (for technophobes)
- Personal "desktop" from the browser
- Each user has its own identity keys
- Hardware has a certificate
- Connection to the network needs and identity and a certificate


### Connecting to the network

- Connecting to a random node which will be working has a gateway.
- Retrieving the list of nearby nodes.


### Network itself

- No server
- No directories
- Anonymous nodes
- Choose: Using an existing network (ethurum, maidsafe, etc) OR/AND architecting a new one
- Mathematically elegant (must not look like a random noise)
- Intelligent (Self preservation)
- Undetected by ISPs
- Apply global rules
- Verify transactions


### Nodes

- Self-aware
- Only knows to what node give the chunk
- Can works without a connected user
- Aware of the number of trusts giving by other nodes
- Can reset own certificate


### Global Rules/Laws of the network

- Democracy (community decisions)
- Data Tribunal


### Mesh-of-Trust

- Certificates for node's hardware
- Identities for users
- Signing node+users transactions
- Authority of nodes' and user freedom
- Time to live for data
- Manual trust giving
- Automatic trust giving

### Node certificates

- Levels of trust
    - Increases with correct transactions
    - Increases over time
    - Increases randomly by solving mathematical problem given by the network
    - Increases for good blames
    - Decreases with incorrect transaction
    - Decreases if used by untrusted users
    - Decreases for bad blames
    - Bannable by MoT


### Identities

- Levels of trust
    - Increases with shared computer power by nodes
    - Increases with nodes retrieving its shared data
    - Increases with participations in data tribunal
    - Increases with democratic participations
    - Decreases for transactions made with a untrusted node
    - Decreases for owning blamed data
    - Decreases for initiate a bad blame on a node.
    - Bannable by MoT
- Private key to log in into the network via a node
- Private key to sign own data
- Public keys to receive data
- Data owners
- Not linked to a unique node
- Optional public profile such as languages, photos, name, etc..


### Storing on the network

- Protection
- Anonymous
- Secured
- Private data with time countdown to go publicly
- Concurrent download
- Streaming


### Sharing
- Public data (file sharing)
- Chat
- Internal "Websites"
- Registry for domain names (.node?)
- Currency (controlled by the network)


### Physical transmission

- Current Internet
- Hyperboria compatible
- X-Bee like networks
- Ready for nonexisting transmission technologies


### Software
- Optimized browser


### Hardware
- Any "computer"


# Idea for iterative development approach

TODO


# State of art

## Existing Networks

- [Freenet](https://freenetproject.org)
> Freenet is free software which lets you anonymously share files, browse and publish "free sites" (web sites accessible only through Freenet) and chat on forums, without fear of censorship. Freenet is decentralized to make it less vulnerable to attack, and if used in "darknet" mode, where users only connect to their friends, is very difficult to detect.
- [I2P](https://geti2p.net/en/)
> The Invisible Internet Project is an overlay network and darknet that allows applications to send messages to each other pseudonymously and securely. Uses include anonymous Web surfing, chatting, blogging and file transfers. The software that implements this layer is called an I2P router and a computer running I2P is called an I2P node.
- [MaidSafe](http://maidsafe.net)
> Software description: this is the super-project in which each MaidSafe library resides. Some information is common to all libraries and is detailed here. Library-specific information can be found in each library's wiki (C++).
- [Tor](https://www.torproject.org)
> Tor is free software and an open network that helps you defend against traffic analysis, a form of network surveillance that threatens personal freedom and privacy, confidential business activities and relationships, and state security.
- [ZeroNet](http://zeronet.io)
> Real-time updated, P2P websites using Bitcoin cryptography and the BitTorrent network. Zeronet is decentralized, open source software in Python aimed to build an Internet-like computer network of peer-to-peer users. Zeronet is not anonymous by default, but users can hide their IP address by using Tor which uses bitcoin cryptography and the BitTorrent network.
- [Project Maelstrom](http://project-maelstrom.bittorrent.com)
> BitTorrent wants your help creating a P2P-powered web with Project Maelstrom. (Beta on windows only)
- [Diaspora*](https://diasporafoundation.org)
> The community-run, distributed social network. diaspora* is based on three key philosophies: Decentralization, Freedom, and Privacy.
- [FlowingMail](http://flowingmail.com)
> A decentralized, secure, encrypted email system.
- [Bitmessage](https://bitmessage.org/wiki/Main_Page)
> Bitmessage is a P2P communications protocol used to send encrypted messages to another person or to many subscribers. It is decentralized and trustless, meaning that you need-not inherently trust any entities like root certificate authorities.
- [Retroshare](http://retroshare.sourceforge.net)
> RetroShare is free software for encrypted filesharing, serverless email, instant messaging, chatrooms, and BBS, based on a friend-to-friend network built on GPG. It is not strictly a darknet since optionally, peers may communicate certificates and IP addresses from and to their friends.
- [MediaGoblin](http://www.mediagoblin.org)
> MediaGoblin is a free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc.
- [Movim](https://movim.eu)
> MOVIM (My Open Virtual Identity Manager) is a distributed social network built on top of XMPP, a popular open standards communication protocol. Movim is a free and open source software licensed under the AGPL.[2] It can be accessed using existing XMPP clients and Jabber accounts.
- [The IPFS Project](http://ipfs.io)
> The InterPlanetary File System (IPFS) is a new hypermedia distribution protocol, addressed by content and identities. IPFS enables the creation of completely distributed applications. It aims to make the web faster, safer, and more open. IPFS claims to be a Permanent Web with a new peer-to-peer hypermedia protocol.
- [Serval Project](http://www.servalproject.org)
> Serval is a telecommunications system comprised of at least two mobile phones that are able to work outside of regular mobile phone tower range due thanks to the Serval App and Serval Mesh.
- [Open Garden](http://opengarden.com/home/)
> Open Garden's technology creates a software-based network, also known as a peer-to-peer wireless mesh network, among participating mobile devices using WiFi, Bluetooth LE, and other technologies. Open Garden's innovations include: seamless device discovery and pairing, offline identity, a proprietary network protocol for addressing and routing messages off-the-grid, distributed algorithms for managing mesh networks, advanced traffic management (multi-hop, store and forward), and battery use reduction.
- [Hyperboria](https://hyperboria.net)
> A community of local Wifi initiatives, programmers, and enthusiasts. They are running a peer-to-peer IPv6 network with automatic end-to-end encryption, distributed IP address allocation, and DHT-based Source Routing. ([cjdns](https://github.com/cjdelisle/cjdns/) connects to it.)


## Transfer Protocols

- [Route-based VPN](https://sc1.checkpoint.com/documents/R76/CP_R76_VPN_AdminGuide/13824.htm)
> The use of VPN Tunnel Interfaces (VTI) introduces a new method of configuring VPNs called Route Based VPN. This method is based on the notion that setting up a VTI between peer Security Gateways is much like connecting them directly.
- [Commotion](https://www.commotionwireless.net)
> Commotion is an open-source communication tool that uses wireless devices to create decentralized mesh networks.
- [Hubzilla](http://hubzilla.org/sandbox/index.html)
> Hubzilla is a powerful platform for creating interconnected websites featuring a decentralized identity, communications, and permissions framework built using common webserver technology.
- [Tent](https://tent.io)
> Tent lets you control your data instead of handing it over to service and app providers. Just like email, you choose a provider or can set up your own Tent server. Tent data and relationships are portable so you can change Tent providers easily at any time.
- [cjdns](https://github.com/cjdelisle/cjdns/)
> Networking Reinvented. Cjdns implements an encrypted IPv6 network using public-key cryptography for address allocation and a distributed hash table for routing. This provides near-zero-configuration networking and prevents many of the security and scalability issues that plague existing networks.


## Protection

- [Honeypot](https://en.wikipedia.org/wiki/Honeypot_%28computing%29)
> In computer terminology, a honeypot is a computer security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information systems. Generally, a honeypot consists of data (for example, in a network site) that appears to be a legitimate part of the site but is actually isolated and monitored, and that seems to contain information or a resource of value to attackers, which are then blocked.
- [Penetration Testing Lab](http://www.thejoshjones.com/penetration-testing-lab-setup-and-overview/)
> Use of multiples OS to target penetration type on a network or computer.


## Hardware

- [XBee digimesh](http://www.digi.com/products/xbee-rf-solutions/modules/xbee-digimesh-2-4)
> XBee \& XBee-PRO DigiMesh 2.4 embedded RF modules utilize the peer-to-peer DigiMesh protocol in 2.4 GHz for global deployments. This innovative mesh protocol offers users added network stability through self-healing, self-discovery, and dense network operation. With support for sleeping routers, DigiMesh is ideal for power sensitive applications relying on batteries or power harvesting technology for power.


## Block Chain

- [Bitcoin](https://bitcoin.org/en/)
> Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.
The idea of proof of work and network consensus are central here.
- [Ethereum](https://www.ethereum.org)
> Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.


## Libraries

- [Prism-Break](https://prism-break.org/en/)
> Help make mass surveillance of entire populations uneconomical! We all have a right to privacy, which you can exercise today by encrypting your communications and ending your reliance on proprietary services.


## Decentralized applications

- [YaCy](http://www.yacy.net/en/)
> YaCy is a free distributed search engine, built on principles of peer-to-peer networks. Its core is a computer program written in Java distributed on several hundred computers, so-called YaCy-peers.


## Reputation Management

- [TeamSpeak](http://www.teamspeak.com)
> TeamSpeak is proprietary voice-over-Internet Protocol software that allows computer users to speak on a chat channel with fellow computer users, much like a telephone conference call. (Allow the user to create a mathematically generated identity certificate, with a level increasing over time)
- [EigenTrust](https://en.wikipedia.org/wiki/EigenTrust)
> EigenTrust algorithm is a reputation management algorithm for peer-to-peer networks. The algorithm provides each peer in the network a unique global trust value based on the peer's history of uploads and thus aims to reduce the number of inauthentic files in a P2P network. It has been cited by approximately 3853 other articles according to Google Scholar.


## OS

- [Project-Byzantium](http://project-byzantium.org)
> Byzantium is a live Linux distribution that delivers easy-to-use, secure, and robust mesh networking capabilities.
- [Tails](https://tails.boum.org)
> Tails is a live operating system, that you can start on almost any computer from a DVD, USB stick, or SD card. It aims at preserving your privacy and anonymity.
- [arkos](https://arkos.io)
> Install arkOS to a dedicated device. Plug the device into your router, fill in your settings, then you're online. Customize it to your heart's content from your browser.



## Technologies

- [QEMU JS](http://bellard.org/jslinux/tech.html)
> QEMU is a generic and open source machine emulator and virtualizer.
- [PeerJS](https://github.com/MrSwitch/peer.js)
> PeerJS is a service which makes it easier to build a chat room using the present WebRTC's PeerConnection API. The PeerConnection API proposes to be able to send data, video etc from one user-agent to another without the need for it going through a server. PeerJS handles this handshake with a simple Socket.IO backend server.
- [PeerShare](https://github.com/cuonic/PeerShare)
> PeerShare is a P2P file sharing website that uses WebRTC technologies to allow uses to send and receive files without going through any servers. PeerShare is mainly built on Javascript and jQuery and uses PeerJS as a WebRTC API.
- [PeerSurf](https://github.com/matthaywardwebdesign/PeerSurf)
> PeerSurf is a demo (and kind of a library) of P2P websites powered by WebTorrent

## Languages

- [TypeScript](http://www.typescriptlang.org)
> TypeScript lets you write JavaScript the way you really want to. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

- [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
> ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript is standardized by the Ecma International standards organization in the ECMA-262 and ECMA-402 specifications.

- [Ruby](https://www.ruby-lang.org/en/)
> A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
