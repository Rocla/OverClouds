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

TODO
   - signature, formulaire expert
   - recentrer le projet au milieu si probl�me de timing ou r�sultats
     pas tr�s probants
   


   