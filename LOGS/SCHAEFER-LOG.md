# Log for the teacher: Marc Schaefer

2016-05-24  s�ance avec l'�tudiant

directives
   https://isic-lan.he-arc.ch/projects/2015-16/wiki/Directives_TB

directives compl�mentaires
   - noter les heures et estimer la r�partition par type d'activit�
     (gestion projet, recherche documentaire, codage, test, rapport)
     but: pie graph

        awk '/management: / { c += $NF; }
             END { print c; }'

   - tenir compte de la possibilit� de mockup / technologies tierces si
     des �l�ments manquent
   - tenir compte du texte "SUGGESTIONS POUR LE TRAVAIL DE BACHELOR" dans
     l'�valuation

objectifs pour le lundi 30 mai � 13h

   - premi�re version CDC int�grant �l�ments du TP, repartir du document
     du TP et du rapport
   - premi�re planification avec les phases importantes du projet, sous
     forme d'un fichier texte d�crivant les phases, leurs dates, et les
     objectifs g�n�raux de chaque phase (crit�res de validation de phase)
        -> ou outil SCRUM
   - clarifier contrat avec Massimo
   - portabilit� vers le navigateur de NodeJS


outil SCRUM outil gratuit VivifyScrum ou cf mail DEP
   -> me donner acc�s OK

2016-05-30 s�ance �tudiant
   - signature CDC
   - bonne utilisation de l'outil Vivify: risque que les t�ches soient
     trop volumineuses -ou trop nombreuses? on verra!

   - bien appliquer liste des t�ches (au d�but de la phase), fin
     r�sum� des r�sultats de phase (aussi pour 1er it�ration), crit�res �
     pr�ciser!

   - copie d'�cran des r�sultats obtenus � chaque it�ration

   - l'it�ration 8 est trop courte: � r��valuer � la prochaine rencontre

   - projet tr�s gros, choix � faire.

2016-06-01 s�ance �tudiant
   - sprint 1: OK
   - sprint 2:
        - prise en main de NodeJS
        - mise en place Ethereum
        - browserification (fonctionnement, performance vs NodeJS)

2016-06-08 s�ance �tudiant
   - phase
       NodeJS: Ethereum tr�s complexe, ne t�l�charge rien
          -> analyser trafic et strace -f
          -> IRC et Gitter
          -> pourquoi 30304 et 30303 dans le code?
             faut-il parity en fonction?
       Cluster docker (simulateur *priv�* pour instances Ethereum)
          - blockchain priv� avec Ethereum, client Goeth, sous Docker
          - comment r�f�rencer depuis les fils instanci�s l'adresse IP
            du p�re sans hardcoder?
          - trafic ext�rieur �galement -> option -dev
          - client externe ne marche pas sans -dev (n'envoie rien)
          - pourquoi --port et pas de listen UDP?
          - un peu de clart� sur les diff�rents protocoles (HTTP-RPC,
            WS, --port, WSAPI, ...)
          - expose 10000 -> 60000 ?
          - d�veloppeurs: comme forcer le num�ro du port UDP.


   - pr�p s�ance avec expert du 15 juin 13h15
        pr�senter �ta
t du projet


     
TODO read
   remote: Total 18 (delta 2), reused 0 (delta 0), pack-reused 0
   Unpacking objects: 100% (18/18), done.
   From github.com:Rocla/OverClouds
      a374ed0..0bee440  master     -> origin/master
   Updating a374ed0..0bee440
   Fast-forward
    .gitignore                                         |    3 +
    .gitmodules                                        |   18 +
    Docker/ethereum-private-multi-nodes                |    1 +
    Docker/genesis.json                                |   42 +
    Implementations/Consensus/ethereumjs-all.js        |54122 ++++++++++++++++++++
    .../Consensus/ethereumjs-browser-builds            |    1 +
    .../Consensus/ethereumjs-ethereumjs-lib            |    1 +
    .../Consensus/ethereumjs-node-blockchain-server    |    1 +
    Implementations/Consensus/ethereumjs-web3s-js      |    1 +
    Implementations/Consensus/oc-consensus/index.js    |   10 +
    .../Consensus/oc-consensus/package.json            |   15 +
    LOGS/CLARET-LOG.md                                 |   98 +-
    12 files changed, 54305 insertions(+), 8 deletions(-)
    create mode 100644 .gitmodules
    create mode 160000 Docker/ethereum-private-multi-nodes
    create mode 100644 Docker/genesis.json
    create mode 100644 Implementations/Consensus/ethereumjs-all.js
    create mode 160000 Implementations/Consensus/ethereumjs-browser-builds
    create mode 160000 Implementations/Consensus/ethereumjs-ethereumjs-lib
    create mode 160000 Implementations/Consensus/ethereumjs-node-blockchain-server
    create mode 160000 Implementations/Consensus/ethereumjs-web3s-js
    create mode 100644 Implementations/Consensus/oc-consensus/index.js
    create mode 100644 Implementations/Consensus/oc-consensus/package.json
