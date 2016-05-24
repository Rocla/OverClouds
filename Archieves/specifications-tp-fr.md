# Cahier des charges préliminaire pour travail de semestre de printemps (V0.1)
- Titre:Over Clouds
- N° projet: 16DLM-TB210
- Étudiant: CLARET Romain
- Professeur: SCHAEFER Marc (MAS)

*Ce document décrit le travail de semestre (TP), avec quelques grandes orientations du TB. Un nouveau cahier des charges décrivant le TB est un des deliverables de ce projet.*

## Situation initiale

Les systèmes actuels d'échange de données ont les caractéristiques suivantes:

-   ils sont centralisés chez un opérateur spécifique (Google, Facebook, Dropbox, stockage sur un hidden service tor, ...) (exceptions: p.ex. freenet)
-   les données sont certes chiffrées pendant l'échange, en règle générale (HTTPS) mais sont stockées en clair[^1] chez le fournisseur
-   l'opérateur qui stocke les données, si elles sont chiffrées par l'utilisateur, ne peut assurer que les données stockées sont conformes aux règles, usages et lois en vigueur, vu qu'il n'y a pas accès
-   l'utilisateur n'est pas anonyme même si HTTPS est utilisé, car les adresses IP sont visibles (exceptions: tor, utilisation d'un VPN "sûr", freenet, ...)
-   les clés de chiffrement peuvent être volées en cas de compromission (p.ex. Heartbleed)
-   il faut souvent du logiciel spécifique (freenet, tor), parfois uniquement un client Web pour certaines fonctionnalités (Dropbox, Google, Facebook)
-   si du chiffrement extrêmement résistant est utilisé, les données sont "perdues" pour l'Humanité, à terme (pas d'indexation, pas de durée de rétention chiffrée)

Peut-on offrir des solutions de stockage distribué de données qui évitent l'espionnage étatique et privé et qui, simultanément, n'ouvrent pas la porte au stockage et à l'échange de données illégales ou non éthiquement défendables ? C'est la question, fort intéressante, mais complexe, à laquelle ce projet propose de tenter de répondre.

## Buts généraux du projet TP+TB:

Concrètement, le projet a pour but d'étudier l'état de l'art, de proposer des solutions et de réaliser des prototypes incrémentaux répondant à tout ou partie des objectifs suivants, sans toutefois le besoin de réinventer ce qui s'est déjà fait dans le domaine:

- étude de l'état de l'art (voir par exemple https://www.usenix.org/conference/atc14/technical-sessions/presentation/bessani et M. Marcelo Pasin)
- partage et transfert de la propriété de données
- décentralisation des données (distribution du stockage), qui sont chiffrées par le réseau décentralisé via des noeuds coopérants
- (pseudo-)anonymat
- rating du degré de confiance d'un noeud du réseau via un mesh of trust ainsi qu'une notion d'aging; décision d'acceptation d'un contrat de service de stockage de données partielles sur cette base
- bannissement de certificats d'un noeud ou de données possibles par le réseau (via un Data Tribunal)
- résistance au vol de clé privée, même en cas de vulnérabilité de type Heartbleed sur les noeuds

##Buts du projet TP:

Le but du projet TP est de préparer de manière probante le TB en **effectuant et/ou planifiant** des itérations de recherches documentaires et de réalisation de prototypes simples permettant de faire les preuves de concepts des divers aspects.

Les deliverables seront formés :

- du rapport de TP avec la comparaison des approches et la justification des choix, ainsi que l'architecture du système et de l'application
- de prototypes simples (proof-of-concept) validant les hypothèses retenues à chaque itération
- du cahier des charges du TB
- de la planification détaillée du TB
- (voir également les directives TP sur le wiki isic.he-arc.ch)

Les contraintes sont :

- accessible entièrement d'un client WWW, peer-to-peer
- méthodologie de développement adaptée, de préférence itérative, documentant de manière adaptée les options prises, les risques, les problèmes survenus et les choix
- solution open source, basée de préférence sur des composants open source (?)
- communication entre composants logiciels de préférence REST ou SOAP

Exclusions (ces éléments ne font pas partie du TP/TB)

- (à définir)

Début du TP: 15 février 2016

Délivrables : vendredi 13 mai 2016, 17h

**L'étudiant désire conserver les droits sur ce travail et a déjà contacté Massimo Monti (après préavis du chef de groupe TICb).**

Les directives de travail sont détaillées dans le document standard.

Neuchâtel, le 15 février 2016 / MAS. Les parties ci-dessous déclarent accepter le contenu du présent cahier des charges. Un exemplaire est remis à chaque partie.

Etudiant : Claret Romain
Professeur: Marc Schaefer
Expert : à trouver

[^1]:  exception: si le fournisseur implémente la *crypto-on-rest*, mais dans ce cas ce sont ses clés de toute façon, ou si l'utilisateur, manuellement, implémente du chiffrement de bout en bout: p.ex. GPG/PGP
