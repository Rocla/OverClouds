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

2016-06-16 séance étudiant

   - encore problème avec ethereum/node js: contact en cours avec développeurs
   - lectures scientifiques (transitivité du trust, paper e-reputation, mesh of trust
     sans certif matériel)
   - prochains sprints, replanification du reste du projet -> dimanche
     objectif: retarder la dépendance Ethereum
      - Storage (sprint plus pratique 2 semaines, avec point intermédiaire mercredi suivant)
	      - point principal: DHT (métadonnées) + fonctionnement I/O
	      - recherche: stockage distribué "avec" WebTorrent (sauf s'il y a vraiment
		une raison de prendre autre chose)
	      - démonstrateur dans le navigateur
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase (objectifs de phase)
      - stockage distribué sécurisé (1 sprint de recherche)
	(multiples copies, impossible de lire sauf clé(s): distribution des
	 données et des clés)
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase 
      - 1 à 2 semaines pour:
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase 
          - intégration Ethereum (dépendance développeur)
          - autres éléments (contrat principal, communautaire, ...)

2016-06-20 analyse nouveau planning

Pour info à Adrian: on a discuté que le projet tel qu'initialement planifié n'est pas faisable, notamment à cause des problèmes de dépendances à Ethereum. J'ai donc proposé de se concentrer sur les aspects de stockage en construisant sur des logiciels et protocoles existants (WebTorrent). La nouveauté sera alors l'index de données réparties, et des aspects de distribution/duplication et de propriétaire de données.

Ensuite, on espère que quelque projets seront faits dans Ethereum (contact en parallèle avec les développeurs) ce qui permettrait un démonstrateur, dans ce cadre, d'une ou l'autre application du consensus pour le Data Tribunal ou d'autres aspects. Si Ethereum n'est toujours pas utilisable, alors on fera un démonstrateur `standalone' en fonction du temps.

Donc si je résume, le board Vivify que vous avez modifié, les prochains sprints sont:

    concept stockage décentralisé, basé sur des logiciels et protocoles existants, tournant de préférence dans le Browser; avec comme objectifs secondaires la distribution/duplication des données et la notion de propriétaire de données
    implémentation dans le browser d'un démonstrateur, utilisant évt. des services externes comme WebTorrent
    Concept+demo simple de Data Tribunal
    idem Global Rules
    intégration des prototypes dans le démonstrateur suivant.

Cela me semble aller dans la bonne direction. On se voit mercredi!

Meilleures salutations.

2016-06-22 séance étudiant
   - revue résultats de sprint
        recherche pour code dans le browser
        4 concepts de stockage réparti
           2 premières intéressantes
           IPFS: pas de duplic. de fichiers (ID unique) mais de chunk;
                 JS disponible, API seul (pas de démo); nécessite serveur non
                 browser
           WebTorrent: browser-only, déjà démontré, mais pas l'unicité
   - à faire rapidement: les fonctions de WebTorrent, et les fonctions de
     OCTracker; en gras les plus importantes.
   - ensuite mini-conception puis impl. de l'API et du démonstrateur
   - licence du projet à préciser à la fin

2016-06-30 séance étudiant
   - architecture latest + README.md du démonstrateur OK
        technologies client-side innovantes (service worker, app cache, etc)
        peut-être utiliser l'indexed API pour la persistance
        nodejs pour partie OC Portal (gateway)        
   - revue résultats de sprint
        - web-app décentralisé (sauf nodejs: problème validation cross-domain,
          gateway peut être supprimée, serveur HTML+JS doit rester, en SSL ou
          localhost)
        - chiffrement par WebRTC (via WebTorrent)
        - appcache
        - tracker (DHT) WebTorrent
   - manque
      - redondance
      - chiffrement des données
      - data ownership/data tribunal

replanification
   - 3j approche théorique (ve -> mardi)
     a) comment rendre l'accès à des clés privées protégé par un consensus?
        (propriétaire OU le réseau)
     b) comment utiliser a) pour rendre décision Data Tribunal
     c) transfert de droit par consensus
     -> déliverables: mini-rapport (étude)

   - mercredi: réfléchir à quelle démonstration
   - séance mercredi ou jeudi
   - jeudi -> mercredi: dernière démonstration
   - séance mercredi ou jeudi
   - jeudi/vendredi: mise en forme des déliverables

2016-07-07 séance étudiant
   - pas de log de travail cette semaine
   - présentation approche théorique (cf ci-dessus)

        a) webtorrent pas dynamique: notion de node master (node,
           groupe de node, etc), pas nécessaire tout à jour en même
           temps, élu par consensus -> 1ère impl. 1 master

           toutes clés privées sur master, mais ne peut pas reconstituer
           sans tout essayer: approche où il faudrait au moins 3 master
           pour reconstituer une clé privée serait meilleure
           -> 1ère impl. avec un seul master et évaluer risque

           -> sujet de recherche avancé (pas d'état de l'art)

        b) data tribunal
              concept de points (selon contrats)
                 -> blâmage se fait sur tous ceux qui transmettent
                    volontairement, pas d'identité associée.
                 -> mentionner les points sur identité évt. pour contenu
                    populaire même si plus seedé (réclamation des points),
                    possible uniquement avec une espèce de preuve que
                    les données vous appartiennent; à voir si c'est faisbale

              (attention moral != populaire)

        notion d'upload anonyme sans redondance, etc
        création d'identité: contenu privé, favori, réputation.
        page principale à laisser ouverte
        interaction

        bouts stockés localement sont chiffrés -> on ne peut y accéder
        que si on connaît le hash global du fichier les contenant
        (sinon risque légal)

        question de chiffrement partie partie vs fichier, laisser ouverte
        (de toute façon symétrique avec des IV)

        renommer "master node" en "master node abstraction" partout

        éviter blocage décisions par une notion de fonction majorité (cas
        des N nodes élus comme master node)        
        
        c) transfert de droit par master abstract node / consensus

   - let's encrypt à documenter dans le rapport

   - réfléchir à quelle démonstration
        - implémenter share chiffré (démo): OC Webgate (2-3 j)
        - évt. notion de streaming progressif (1/2 j)
        - évt. identité + master node (mini-démonstrateur: *API* avec mockup)

   - lancer implémentation -> mercredi 13.


2016-07-13 séance avec étudiant
   - faire le point sur l'implémentation
   - définir le travail des 2 derniers jours
   - après le rendu: rapport!













REMARQUES
   - important de bien comprendre les fonctions de base imaginées et
     leur interaction avec des composants logiciels existants ou à créer
   - plus proactif dans l'annonce des étapes
