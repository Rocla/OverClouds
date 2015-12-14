# Over Clouds
- Project proposition for 2016 TP & TB
- Author: Romain Claret
- Author's favorite development style: Prototyping
- Author's favorite languages: Python + Javascript
- Project possible languages: Javascript, python, WebGl, html5, CSS
- Current project status: Research + State of Art
- This document is not final and is still evolving

## In brief
Overclouds is a project whose goal is to create a new generation of an anonymous and decentralized internet data sharing service. Requiring entry-point or centralized service directory servers in order to connect to the network nodes is over. All you need is a browser with javascript capabilities and run an HTML file either on your local machine or online via a server.

## Short project description
Conceptualize and Create/Prototype a decentralized and anonymous network accessible from a browser.
The features include:

- No servers or directories as an intermediary for the connection to another node.

- A storage on the network via the nodes (distributed storage)

- Share data with other nodes via the network



## Personal Motivations
- Today is a world of concern for private data: the Snowden revelations led to a massive media effect. People are feeling that their privacy is threatened by the worldwide "spies", either the government, companies, etc... It's how the Internet involved and it's part of the economy and politics now. On the Internet, two classes of people have been created, people who don't know how to protect their privacy on the Internet, and people who do. For the first group, some are not aware of the global privacy status, some don't care and some don't know how to protect their privacy. Concerning the second group (which I am part of), I have personal ethical problems. I understand totally that people don't want to be tracked by advertising companies or the government. I also understand that some people are scared that their private data could be stolen and exposed publicly. However, some private data must be sometimes made public. I believe, that the data from terrorist groups and the members of those groups (from a humanistic point of view, and not political) have to be denounced and made public.

- We also have copyright laws to unable the free sharing of any kind of data such as art and knowledge and I feel like it's a serious problem for the humanity. However, I also understand that it's our economical style, and people are making a leaving of it. This kind of data is encrypted by the owners (generally companies) and stored of data centers. People sharing this material usually are also using encrypted manners to share them, so they won't get caught. Which I feel, is a serious treat for the humanity global knowledge and culture.

- Another ethical problem I am confronted with the incoming full encrypted data era is that all our data will just become a bush a random noise. Which can be for various reasons something pretty bad for the humanity. Let's just think about how our global knowledge is and will be sorted. For example, the data such art and knowledge which is a legacy to humanity. Will the next generation of human be able to retrieve the knowledge stored in a few years? How to be sure that the unbreakable key will not be lost? And another example, is it really a good idea to "randomize" the signals we send in outer space? The signals we send out to space are today already quite different from what we sent in the sixties. For example, the purely analog (TV, FM radios) signal is deprecated and replaced by numerical transmission (DVB, DAB), which are sometimes encrypted (pay-to-watch tv, pay-to-listen radios).

- We can easily imagine with the current incoming era that a new company will come saying: "Hey, we are transmitting encrypted data, nobody will ever know what you are watching, and when you are watching. All you have to do is to buy a the key from us every month.".

- With Overclouds, I am looking for a new approach to allow people connect together. 
To be sure that their private data is secured and safe. Be pseudo-anonymous on the global network, in the sense that other people are aware that you are here, but don't know who you are, expect if you are considered bad (such as terrorists, scammers, etc.) by and for the global network. 
And finally, the network do not act like random noise for the rest of the network, it should be nice mathematics (like a Fermat's theorem?). People should be able to predict what will happen with their data, however, it should be unpredictable to know when happens with the data of others.

## Long Project Description
The initiative behind the project is to create a new generation of internet data sharing tools, suited for today's paranoia for privacy on the internet and the preservation of knowledge for the next humanity generations.
People and things don't need anymore to be connected to directories, servers, or farms of servers anymore. Everybody and everything is now anonymous nodes on the network, and they can easily connect to another node freely.
The network is a mesh of nodes. The data is moving from a node to another across the network via other nodes.
All people or things need is to have a standard Internet connection and browser with javascript capabilities. Then either launch a local HTML file or enter the URL of a server hosting this file.

## How does it work?
### Mest of trust
>The new notion of a mesh of trust is being introduced.

- Each node has a unique certificate of trust. The certificate is untransferable.

- Each certificate is stored on the network and gives a ranking level to a specific node.

- The certificates can be banned from the network by a consensus of nodes and a trial. It adds a flag that is seen by all nodes in case of banishment. (I didn't find any proof-of-work about a consensus banning a node. However, I think it's possible to have to select an amount of random nodes and ask them what they think of the situation.)

- A node can flag a specific certificate or node on the network. And apply rules on it, such as a filter for a minimum certificate level to connect directly to them and/or make their data go truth. The network will then be aware of the preferences of the node. For example, for the case of data routing, a node won't be able to connect to it.
(I think that local policies would be a good idea.
For example, in the case of receiving data from a node, I don't want to deal with, my node will receive the data anyway and reject it. In the case of spam, the node will be charged anyway, now we can believe that the spammer will be spamming in the void, however if the attack is targeted, the end node will be touched anyway. We can also imagine the network preventing spam.
Another example, the rerouting of nodes. If the data goes to a node that doesn't want to reroute, the data is either sent back, which goes back to the node charge problem. Or the data is lost, and in the case of a UDP-like protocol is kinda bad. And if we imagine of a TCP-like protocol the node could look for another node to go through, but depending on the path speed, could take long or could surcharge the network in some cases.)

- The certificate level increases over time as long as the node is connected to the network. The certification level growth is main given automatically over time by letting the node solving mathematical problems. The certification level is also the amount of nodes giving rights of accessing their data. However, nodes are not aware of who trust who, only how many nodes are sharing their data with this specific node.

- A node can replace its certificate by generating a new one, however, the level is reset.

### Data storage spread across the network
All the data is spread across the network as encrypted chunks belonging to a node, the key for the data is also spread across the network but belongs to the network. The data and its key have redundancy chunks, which are also spread across the network.

### Data owner can give rights on their data
The data node owner can give the read/write/execute rights to a specific node certificate or a certificate level.

### Data is blamable
A node can blame anonymously a chunk or a node and leave a comment. A blame is telling the network that a node or a chunk is not appropriate to the other nodes. Multiple blames on a node ban its certificate. Multiples blame on a specific chunk or chunks belonging to the same data resumes into a flag that reduce the default redundancy, revoke the rights of all the nodes except the owner.

### Data ownership transfer
A node can transfer the ownership of data to another node. Both nodes must accept the transfer. However, blamed data is untransferable, and a blamed node cannot be the ownership transferor or ownership receiver.

### Data Tribunal
Once the network as enough blames, it asks for unrelated nodes to rate the blame. Judges will vote for the ban of the data based on the comments.
Blamed data can ask once for a second trial, new unrelated nodes will have to rate the blame again.

### Nodes are anonymous from the internet providers
The Internet provider is only aware that encrypted tunnel has been made to a random node, which will play the role of a gateway. At each restart, a new node is selected.

### The network generates currency units over time
Nodes can retrieve a unit of the currency by solving a problem. The currency is then given to the first node that solved it. The node will have to use its computer power to find the currency unit. The currency is transferable only to unbanned certificates.


## Questions without answers yet
- Are the node judges, elected by the network to rate a blame, should be able to have access to the blamed data? (What if it's offensive content?)

- Should the network have a backdoor for governments, judges, etc. to be able to see specific data from a node? (What if it's illegal content? In Switzerland, generally, the laws only punishes downloading and storing, this might have additional impact -- is the legal system ready?)

- Would it be possible to make the network recognize illegal content automatically? (Probably not)

- Should it be adapted for a low bandwidth and speed connection with for a Xbee? (Probably)

- Should we take in account that the wired Internet speed only improves? (Probably)

- How to deal with the currency units if the certificate gets banned? (Should we ban the currency units with the account. Should we redistribute the currency units across the network? Should we erase the currency units? When should we apply the rule, should we wait a specific amount of time to allow the node to do a second trial? Or as long as it didn't do a second trial the currency units is unmovable?)

- Should we start from a programmable network such as Ethereum or MaidSafe? Or should we start from scratch? ("make, buy or adapt pre-study")

- How many hours this whole project may take? I feel like the project is much bigger than 86h of TP + 360h of TB to get into maturity.

- Could we use storage providers indirectly to help the network storage load? (Probably, but the security could be compromised in some cases because a node will have to do the bridge to a storage provider. But in the case of TOR, it works fine I guess.)

- Would it be possible for the nodes to pay with currency units for computational power from other nodes? (Probably)

- Would it be possible to make the network intelligent? Make it self-administrated? (Probably not)

- Would it be possible to allow nodes to run programs on the network like on Ethereum or with an API like on Maidsafe (Probably, it could be interesting to make bots for content sharing/selling, etc.)

- How to guaranty that a node will be able to connect to the network by a random node? (What about firewalls? Would connections only be based on TOR hidden service help ? or I2P? or Freenet? or services as such? The idea of only using a browser could be in jeopardy.)

- What is a consensus of nodes? How and where should be them used exactly? Is there any proof of work of it? (Should be clear during TP)

- I don't really understand how a node and only that node can get access to its data in the presence of malicious software (maybe assume there is less than X% of malicious software around in the network?)

- Concerning the TP: What should I do? (Responding to questions without answers, explore the possibilities to make the magic happen in the browser only, start making the network with the mesh-of-trust. I am not sure exactly how to scale the work.)

- Concerning the TB: What should I do? (Make the network...)

- Concerning after TP+TB, what would be left? Would the work of TP+TB will be a proof only a concept?


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

# State of art

- Freenet
> Freenet is free software which lets you anonymously share files, browse and publish "free sites" (web sites accessible only through Freenet) and chat on forums, without fear of censorship. Freenet is decentralized to make it less vulnerable to attack, and if used in "darknet" mode, where users only connect to their friends, is very difficult to detect.
- I2P
> The Invisible Internet Project is an overlay network and darknet that allows applications to send messages to each other pseudonymously and securely. Uses include anonymous Web surfing, chatting, blogging and file transfers. The software that implements this layer is called an I2P router and a computer running I2P is called an I2P node.
- MaidSafe
> Software description: this is the super-project in which each MaidSafe library resides. Some information is common to all libraries and is detailed here. Library-specific information can be found in each library's wiki (C++).
- QEMU JS
> QEMU is a generic and open source machine emulator and virtualizer.
- Route-based VPN
> The use of VPN Tunnel Interfaces (VTI) introduces a new method of configuring VPNs called Route Based VPN. This method is based on the notion that setting up a VTI between peer Security Gateways is much like connecting them directly.
- XBee digimesh
> XBee & XBee-PRO DigiMesh 2.4 embedded RF modules utilize the peer-to-peer DigiMesh protocol in 2.4 GHz for global deployments. This innovative mesh protocol offers users added network stability through self-healing, self-discovery, and dense network operation. With support for sleeping routers, DigiMesh is ideal for power sensitive applications relying upon batteries or power harvesting technology for power.
- Bitcoin
> Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.
The idea of proof of work and network consensus are central here.
- Ethereum
> Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.
- Prism-Break
> Help make mass surveillance of entire populations uneconomical! We all have a right to privacy, which you can exercise today by encrypting your communications and ending your reliance on proprietary services.
- Tor
> Tor is free software and an open network that helps you defend against traffic analysis, a form of network surveillance that threatens personal freedom and privacy, confidential business activities and relationships, and state security.
- ZeroNet
> Zeronet is decentralized, open source software in Python aimed to build an Internet-like computer network of peer-to-peer users. Zeronet is not anonymous by default, but users can hide their IP address by using Tor which uses bitcoin cryptography and the BitTorrent network.
- Project Maelstrom
> BitTorrent wants your help creating a P2P-powered web with Project Maelstrom
- Diaspora*
> The community-run, distributed social network
- FlowingMail
> a decentralized, secure, encrypted email system
- Bitmessage
> Bitmessage is a P2P communications protocol used to send encrypted messages to another person or to many subscribers. It is decentralized and trustless, meaning that you need-not inherently trust any entities like root certificate authorities. 
- Retroshare
> RetroShare is free software for encrypted filesharing, serverless email, instant messaging, chatrooms, and BBS, based on a friend-to-friend network built on GPG. It is not strictly a darknet since optionally, peers may communicate certificates and IP addresses from and to their friends.
- YaCy
> YaCy is a free distributed search engine, built on principles of peer-to-peer networks. Its core is a computer program written in Java distributed on several hundred computers, so-called YaCy-peers.
- Tent
> Tent lets you control your data instead of handing it over to service and app providers. Just like email, you choose a provider or can set up your own Tent server. Tent data and relationships are portable so you can change Tent providers easily at any time.
- Hubzilla
> Hubzilla is a powerful platform for creating interconnected websites featuring a decentralized identity, communications, and permissions framework built using common webserver technology.
- MediaGoblin
> MediaGoblin is a free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc.
- Movim
> MOVIM (My Open Virtual Identity Manager) is a distributed social network built on top of XMPP, a popular open standards communication protocol. Movim is a free and open source software licensed under the AGPL.[2] It can be accessed using existing XMPP clients and Jabber accounts.
- Commotion
> Commotion is an open-source communication tool that uses wireless devices to create decentralized mesh networks.
- Project-Byzantium
> Byzantium is a live Linux distribution that delivers easy-to-use, secure, and robust mesh networking capabilities.
- TeamSpeak
> TeamSpeak is proprietary voice-over-Internet Protocol software that allows computer users to speak on a chat channel with fellow computer users, much like a telephone conference call.
