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
        pr�senter �tat du projet

2016-06-15 s�ance �tudiant + expert

   - pr�sentation du projet, �tat g�n�ral du projet
        Vision
        But complexe
        Prototypes pour d�sherber (y.c. technos existantes)
           P2P
           Block-chain: Ethereum (nodeJS -> browser)
           WebRTC (pour stockage)
        Concept
           Sch�ma � la main avec les �l�ments les plus importants.
           "Block-chain appartient au consensus"
           Propre crypto-currency
           Storage d�centralis�/sous forme de consensus
              Mise � jour du consensus/software
              Donn�es stock�es sur les nodes
              R�le du consensus
              Stockage: pr�ciser m�tadonn�es -> pointeur de blocs de donn�es,
                        autorisation par consensus (�l�ment fondamental)
              Poids des noeuds en fonction de leur qualit�
              Data Tribunal: bannissement de donn�es, transfert de droits
                 Choix des noeuds au hasard
              Mise � jour du genesis block/software: pas fondamental de faire
              au sein du protocole (les gens mettent � jour)
              Contrats
                 Super-contrat OverCloud
                 Mini-contrats y int�gr�s
                 Poids plus �lev� si plus de contrat, si la communaut� "aime"
              Plugin-in (pas du blockchain, contr�l� par block-chain)
                 crit�res: redondance (WebTorrent), ipfs, tahoe-fs
              PROBLEME DIFFICILE.

        D�mo finale int�grant les prototypes

        Scaling des solutions bas�es consensus/proof of work?
           cf article Notes on Scalable Blockchain Protocols
              -> proof of stake
           probl�me CPU-hard memory-hard (ASIC-r�sistant)
           scalable?  restarting block?

        Types de reconnaissance d'implication (proof of work/stake/activity)

        Gestion de projet.
           Montr� VivifyScrum
           SP#3 transf�r� en partie vers 4?

        Comment rendre l'acc�s � des cl�s priv�es prot�g� par un consensus?
           Poser des bouts de la cl� sur N nodes, il faut ces N nodes qui
           violent les r�gles pour avoir acc�s (-> bl�me). Mais il faut
           qu'il y ait plusieurs copies -> augmente le risque
           Meilleure id�e??
           -> A traiter dans Storage

        Ce qui est fait
           - TP: recherches, faisabilit� crypto/comm
           - d�cision partir Ethereum: probl�me: pas � jour, pas 100%
             fonctionnel, probl�me browserification, contact d�veloppeur,
             probl�me Ethereum (ok avec client go m�me sous-r�seau)
           - Trust: proof of participation by number of accepted contracts,
                    voting like the majority, wrong doings
           - Credits

        A faire
           - D�mo Trust
           - Decentralized stockage
           - Community Law/rules
           - Data Tribunal

        Future
           Social experiment: will those community evolve towards positive
           or negative (moral viewpoint of society) habits/decisions

        Licence si CC+BYSA des logiciels int�gr�s

   - �tat du projet sp�cifique
   - mesures � prendre

2016-06-16 s�ance �tudiant

   - encore probl�me avec ethereum/node js: contact en cours avec d�veloppeurs
   - lectures scientifiques (transitivit� du trust, paper e-reputation, mesh of trust
     sans certif mat�riel)
   - prochains sprints, replanification du reste du projet -> dimanche
     objectif: retarder la d�pendance Ethereum
      - Storage (sprint plus pratique 2 semaines, avec point interm�diaire mercredi suivant)
	      - point principal: DHT (m�tadonn�es) + fonctionnement I/O
	      - recherche: stockage distribu� "avec" WebTorrent (sauf s'il y a vraiment
		une raison de prendre autre chose)
	      - d�monstrateur dans le navigateur
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase (objectifs de phase)
      - stockage distribu� s�curis� (1 sprint de recherche)
	(multiples copies, impossible de lire sauf cl�(s): distribution des
	 donn�es et des cl�s)
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase 
      - 1 � 2 semaines pour:
         -> lister les objectifs du projet TB qui seront atteints par cette
            phase 
          - int�gration Ethereum (d�pendance d�veloppeur)
          - autres �l�ments (contrat principal, communautaire, ...)

2016-06-20 analyse nouveau planning

Pour info � Adrian: on a discut� que le projet tel qu'initialement planifi� n'est pas faisable, notamment � cause des probl�mes de d�pendances � Ethereum. J'ai donc propos� de se concentrer sur les aspects de stockage en construisant sur des logiciels et protocoles existants (WebTorrent). La nouveaut� sera alors l'index de donn�es r�parties, et des aspects de distribution/duplication et de propri�taire de donn�es.

Ensuite, on esp�re que quelque projets seront faits dans Ethereum (contact en parall�le avec les d�veloppeurs) ce qui permettrait un d�monstrateur, dans ce cadre, d'une ou l'autre application du consensus pour le Data Tribunal ou d'autres aspects. Si Ethereum n'est toujours pas utilisable, alors on fera un d�monstrateur `standalone' en fonction du temps.

Donc si je r�sume, le board Vivify que vous avez modifi�, les prochains sprints sont:

    concept stockage d�centralis�, bas� sur des logiciels et protocoles existants, tournant de pr�f�rence dans le Browser; avec comme objectifs secondaires la distribution/duplication des donn�es et la notion de propri�taire de donn�es
    impl�mentation dans le browser d'un d�monstrateur, utilisant �vt. des services externes comme WebTorrent
    Concept+demo simple de Data Tribunal
    idem Global Rules
    int�gration des prototypes dans le d�monstrateur suivant.

Cela me semble aller dans la bonne direction. On se voit mercredi!

Meilleures salutations.

2016-06-22 s�ance �tudiant
   - revue r�sultats de sprint
        recherche pour code dans le browser
        4 concepts de stockage r�parti
           2 premi�res int�ressantes
           IPFS: pas de duplic. de fichiers (ID unique) mais de chunk;
                 JS disponible, API seul (pas de d�mo); n�cessite serveur non
                 browser
           WebTorrent: browser-only, d�j� d�montr�, mais pas l'unicit�
   - � faire rapidement: les fonctions de WebTorrent, et les fonctions de
     OCTracker; en gras les plus importantes.
   - ensuite mini-conception puis impl. de l'API et du d�monstrateur
   - licence du projet � pr�ciser � la fin

2016-06-30 s�ance �tudiant
   - architecture latest + README.md du d�monstrateur OK
        technologies client-side innovantes (service worker, app cache, etc)
        peut-�tre utiliser l'indexed API pour la persistance
        nodejs pour partie OC Portal (gateway)        
   - revue r�sultats de sprint
        - web-app d�centralis� (sauf nodejs: probl�me validation cross-domain,
          gateway peut �tre supprim�e, serveur HTML+JS doit rester, en SSL ou
          localhost)
        - chiffrement par WebRTC (via WebTorrent)
        - appcache
        - tracker (DHT) WebTorrent
   - manque
      - redondance
      - chiffrement des donn�es
      - data ownership/data tribunal

replanification
   - 3j approche th�orique (ve -> mardi)
     a) comment rendre l'acc�s � des cl�s priv�es prot�g� par un consensus?
        (propri�taire OU le r�seau)
     b) comment utiliser a) pour rendre d�cision Data Tribunal
     c) transfert de droit par consensus
     -> d�liverables: mini-rapport (�tude)

   - mercredi: r�fl�chir � quelle d�monstration
   - s�ance mercredi ou jeudi
   - jeudi -> mercredi: derni�re d�monstration
   - s�ance mercredi ou jeudi
   - jeudi/vendredi: mise en forme des d�liverables

2016-07-07 s�ance �tudiant
   - pas de log de travail cette semaine
   - pr�sentation approche th�orique (cf ci-dessus)

        a) webtorrent pas dynamique: notion de node master (node,
           groupe de node, etc), pas n�cessaire tout � jour en m�me
           temps, �lu par consensus -> 1�re impl. 1 master

           toutes cl�s priv�es sur master, mais ne peut pas reconstituer
           sans tout essayer: approche o� il faudrait au moins 3 master
           pour reconstituer une cl� priv�e serait meilleure
           -> 1�re impl. avec un seul master et �valuer risque

           -> sujet de recherche avanc� (pas d'�tat de l'art)

        b) data tribunal
              concept de points (selon contrats)
                 -> bl�mage se fait sur tous ceux qui transmettent
                    volontairement, pas d'identit� associ�e.
                 -> mentionner les points sur identit� �vt. pour contenu
                    populaire m�me si plus seed� (r�clamation des points),
                    possible uniquement avec une esp�ce de preuve que
                    les donn�es vous appartiennent; � voir si c'est faisbale

              (attention moral != populaire)

        notion d'upload anonyme sans redondance, etc
        cr�ation d'identit�: contenu priv�, favori, r�putation.
        page principale � laisser ouverte
        interaction

        bouts stock�s localement sont chiffr�s -> on ne peut y acc�der
        que si on conna�t le hash global du fichier les contenant
        (sinon risque l�gal)

        question de chiffrement partie partie vs fichier, laisser ouverte
        (de toute fa�on sym�trique avec des IV)

        renommer "master node" en "master node abstraction" partout

        �viter blocage d�cisions par une notion de fonction majorit� (cas
        des N nodes �lus comme master node)        
        
        c) transfert de droit par master abstract node / consensus

   - let's encrypt � documenter dans le rapport

   - r�fl�chir � quelle d�monstration
        - impl�menter share chiffr� (d�mo): OC Webgate (2-3 j)
        - �vt. notion de streaming progressif (1/2 j)
        - �vt. identit� + master node (mini-d�monstrateur: *API* avec mockup)

   - lancer impl�mentation -> mercredi 13.


2016-07-13 s�ance avec �tudiant
   - faire le point sur l'impl�mentation
   - d�finir le travail des 2 derniers jours
   - apr�s le rendu: rapport!













REMARQUES
   - important de bien comprendre les fonctions de base imagin�es et
     leur interaction avec des composants logiciels existants ou � cr�er
   - plus proactif dans l'annonce des �tapes
