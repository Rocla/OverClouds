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
        présenter état du projet

2016-06-15 séance étudiant + expert

   - présentation du projet, état général du projet
        Vision
        But complexe
        Prototypes pour désherber (y.c. technos existantes)
           P2P
           Block-chain: Ethereum (nodeJS -> browser)
           WebRTC (pour stockage)
        Concept
           Schéma à la main avec les éléments les plus importants.
           "Block-chain appartient au consensus"
           Propre crypto-currency
           Storage décentralisé/sous forme de consensus
              Mise à jour du consensus/software
              Données stockées sur les nodes
              Rôle du consensus
              Stockage: préciser métadonnées -> pointeur de blocs de données,
                        autorisation par consensus (élément fondamental)
              Poids des noeuds en fonction de leur qualité
              Data Tribunal: bannissement de données, transfert de droits
                 Choix des noeuds au hasard
              Mise à jour du genesis block/software: pas fondamental de faire
              au sein du protocole (les gens mettent à jour)
              Contrats
                 Super-contrat OverCloud
                 Mini-contrats y intégrés
                 Poids plus élevé si plus de contrat, si la communauté "aime"
              Plugin-in (pas du blockchain, contrôlé par block-chain)
                 critères: redondance (WebTorrent), ipfs, tahoe-fs
              PROBLEME DIFFICILE.

        Démo finale intégrant les prototypes

        Scaling des solutions basées consensus/proof of work?
           cf article Notes on Scalable Blockchain Protocols
              -> proof of stake
           problème CPU-hard memory-hard (ASIC-résistant)
           scalable?  restarting block?

        Types de reconnaissance d'implication (proof of work/stake/activity)

        Gestion de projet.
           Montré VivifyScrum
           SP#3 transféré en partie vers 4?

        Comment rendre l'accès à des clés privées protégé par un consensus?
           Poser des bouts de la clé sur N nodes, il faut ces N nodes qui
           violent les règles pour avoir accès (-> blâme). Mais il faut
           qu'il y ait plusieurs copies -> augmente le risque
           Meilleure idée??
           -> A traiter dans Storage

        Ce qui est fait
           - TP: recherches, faisabilité crypto/comm
           - décision partir Ethereum: problème: pas à jour, pas 100%
             fonctionnel, problème browserification, contact développeur,
             problème Ethereum (ok avec client go même sous-réseau)
           - Trust: proof of participation by number of accepted contracts,
                    voting like the majority, wrong doings
           - Credits

        A faire
           - Démo Trust
           - Decentralized stockage
           - Community Law/rules
           - Data Tribunal

        Future
           Social experiment: will those community evolve towards positive
           or negative (moral viewpoint of society) habits/decisions

        Licence si CC+BYSA des logiciels intégrés

   - état du projet spécifique
   - mesures à prendre

TODO
   - signature, formulaire expert
   - recentrer le projet au milieu si problème de timing ou résultats
     pas très probants
   


   