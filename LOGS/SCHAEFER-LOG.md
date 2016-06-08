# Log for the teacher: Marc Schaefer

2016-05-24  séance avec l'étudiant

directives
   https://isic-lan.he-arc.ch/projects/2015-16/wiki/Directives_TB

directives complémentaires
   - noter les heures et estimer la répartition par type d'activité
     (gestion projet, recherche documentaire, codage, test, rapport)
     but: pie graph

        awk '/management: / { c += $NF; }
             END { print c; }'

   - tenir compte de la possibilité de mockup / technologies tierces si
     des éléments manquent
   - tenir compte du texte "SUGGESTIONS POUR LE TRAVAIL DE BACHELOR" dans
     l'évaluation

objectifs pour le lundi 30 mai à 13h

   - première version CDC intégrant éléments du TP, repartir du document
     du TP et du rapport
   - première planification avec les phases importantes du projet, sous
     forme d'un fichier texte décrivant les phases, leurs dates, et les
     objectifs généraux de chaque phase (critères de validation de phase)
        -> ou outil SCRUM
   - clarifier contrat avec Massimo
   - portabilité vers le navigateur de NodeJS


outil SCRUM outil gratuit VivifyScrum ou cf mail DEP
   -> me donner accès OK

2016-05-30 séance étudiant
   - signature CDC
   - bonne utilisation de l'outil Vivify: risque que les tâches soient
     trop volumineuses -ou trop nombreuses? on verra!

   - bien appliquer liste des tâches (au début de la phase), fin
     résumé des résultats de phase (aussi pour 1er itération), critères à
     préciser!

   - copie d'écran des résultats obtenus à chaque itération

   - l'itération 8 est trop courte: à réévaluer à la prochaine rencontre

   - projet très gros, choix à faire.

2016-06-01 séance étudiant
   - sprint 1: OK
   - sprint 2:
        - prise en main de NodeJS
        - mise en place Ethereum
        - browserification (fonctionnement, performance vs NodeJS)

2016-06-08 séance étudiant
   - phase
       NodeJS: Ethereum très complexe, ne télécharge rien
          -> analyser trafic et strace -f
          -> IRC et Gitter
          -> pourquoi 30304 et 30303 dans le code?
             faut-il parity en fonction?
       Cluster docker (simulateur *privé* pour instances Ethereum)
          - blockchain privé avec Ethereum, client Goeth, sous Docker
          - comment référencer depuis les fils instanciés l'adresse IP
            du père sans hardcoder?
          - trafic extérieur également -> option -dev
          - client externe ne marche pas sans -dev (n'envoie rien)
          - pourquoi --port et pas de listen UDP?
          - un peu de clarté sur les différents protocoles (HTTP-RPC,
            WS, --port, WSAPI, ...)
          - expose 10000 -> 60000 ?
          - développeurs: comme forcer le numéro du port UDP.


   - prép séance avec expert du 15 juin 13h15
        présenter éta
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
