# NYDA BEAUTY HAIR --- Hero Specification

**Fichier :** `spec.md`\
**Version :** 1.0\
**Référence :** Design System NYDA BEAUTY HAIR v1.0 --- novembre 2026\
**Périmètre :** section Hero de la page d'accueil

------------------------------------------------------------------------

## 1. Objectif

Créer un Hero éditorial premium qui présente immédiatement l'univers de
NYDA BEAUTY HAIR : beauté, élégance, expertise capillaire et proximité.

Le Hero doit : - mettre en avant la signature **« The Art of Beauty »**
; - présenter les catégories de l'offre : cosmétiques, soins
capillaires, perruques et mèches ; - valoriser la photographie des
quatre femmes fournie par la marque ; - guider vers la boutique et les
collections ; - respecter le positionnement **beauté premium
accessible**.

## 2. Direction artistique

-   **Style :** éditorial, minimaliste, féminin, raffiné et moderne.
-   **Ambiance :** lumineuse, douce et confiante.
-   **Fond :** ivoire `#F8F4F0`, avec un visuel de satin rose poudré en
    accent.
-   **Composition desktop :** texte à gauche, photographie à droite.
-   **Respiration :** conserver de larges espaces libres autour du titre
    et des éléments interactifs.
-   **À éviter :** accumulation de rose, dégradés multicolores, effets
    néon, ombres lourdes, animations agressives et interfaces
    excessivement arrondies.

Le rose poudré est un accent identitaire et ne doit pas devenir la
couleur dominante de toute la surface.

## 3. Contenu éditorial

### Surtitre / titre principal

**THE ART OF**\
**BEAUTY.**

-   « THE ART OF » en Obsidian.
-   « BEAUTY » en Signature Blush ou Dusty Nude suffisamment contrasté.
-   Point final en Obsidian.
-   Ne pas convertir le titre en image : il doit rester du texte HTML
    accessible et responsive.

### Accroche

**Révélez votre beauté.**\
**Sublimez votre élégance.**

### Description

« Découvrez notre sélection de soins, cosmétiques et essentiels
capillaires pensés pour révéler votre beauté au quotidien. »

### Actions

1.  **Explorer la boutique** --- bouton principal.
2.  **Découvrir nos collections** --- bouton secondaire outline.

### Signature basse

**NYDA BEAUTY HAIR --- BEAUTY ESSENTIALS**

Conserver cette signature comme détail éditorial facultatif sur desktop.
La masquer sur les petits écrans si elle réduit l'espace disponible pour
le contenu principal.

## 4. En-tête associé au Hero

Le header est placé au-dessus du Hero et reste visuellement léger.

### Navigation desktop

-   Logo officiel NYDA BEAUTY HAIR à gauche.
-   Liens : Accueil, Boutique, Cosmétiques, Soins capillaires, Perruques
    & mèches.
-   Icônes à droite : recherche, panier et WhatsApp.
-   État actif d'Accueil : soulignement fin en rose poudré.
-   Hauteur indicative : **84 px**.

### Règles du logo

-   Utiliser le fichier officiel fourni.
-   Préserver proportions, couleurs et zone de protection.
-   Ne pas redessiner le monogramme NB avec une police.
-   Ne pas étirer, incliner, recadrer ou appliquer de filtre.
-   Si aucune version officielle adaptée au fond clair n'existe,
    demander le bon fichier à la marque plutôt que recolorer
    arbitrairement le logo.

### Navigation mobile

-   Afficher le logo et un bouton de menu accessible.
-   Regrouper recherche et panier dans une zone d'actions compacte si
    l'espace le permet.
-   Le menu doit s'ouvrir et se fermer au clavier et au toucher.
-   Prévoir une zone tactile confortable et un libellé accessible pour
    chaque icône.

## 5. Palette et tokens

  Token             Valeur      Usage dans le Hero
  ----------------- ----------- ------------------------------------------------
  Obsidian          `#1E1D1B`   Titres, texte fort, bouton principal
  Signature Blush   `#FCDFE1`   Accent, détail éditorial, satin
  Ivory             `#F8F4F0`   Fond principal
  Champagne         `#E9DFD9`   Bordures et séparateurs
  Dusty Nude        `#B99C91`   Accent secondaire
  Taupe             `#8A7168`   Texte secondaire si le contraste est suffisant
  White             `#FFFFFF`   Texte sur bouton sombre
  Charcoal          `#393431`   Texte alternatif

Répartition indicative sur l'ensemble de la page : 60 % blanc/ivoire, 25
% noir/charbon, 10 % rose poudré et 5 % champagne/nude.

Ne pas utiliser le rose pâle comme texte essentiel sur fond blanc.

## 6. Typographie

  -------------------------------------------------------------------------
  Usage           Police                       Desktop               Mobile
  --------------- --------------- -------------------- --------------------
  Titre Hero      Playfair                       64 px                38 px
                  Display                              

  Accroche        Playfair         34--40 px indicatif  24--28 px indicatif
                  Display                              

  Corps           DM Sans                        16 px                15 px

  Navigation      DM Sans                        13 px                12 px

  Signature /     DM Sans                        13 px                12 px
  légende                                              
  -------------------------------------------------------------------------

-   Titres en Regular ou Medium.
-   Éviter le gras systématique et les capitales pour tous les textes.
-   Charger les polices avec des fallbacks : Georgia/serif pour les
    titres et Arial/sans-serif pour le corps.
-   Vérifier le rendu lorsque les polices web ne sont pas encore
    chargées.

## 7. Photographie et assets

### Portrait de marque

Utiliser la photographie fournie des quatre femmes en tenues blanches,
avec leurs différentes coiffures.

-   Conserver les personnes et leurs coiffures telles qu'elles
    apparaissent sur la photo source.
-   Ne pas ajouter de personne ni modifier artificiellement les
    coiffures.
-   Préserver une lumière douce et une température de couleur cohérente.
-   Le cadrage doit valoriser les visages et les cheveux.
-   Utiliser `object-fit: cover` avec un point focal ajustable selon les
    breakpoints.
-   Fournir un texte alternatif décrivant sobrement la photo, par
    exemple : « Quatre femmes de l'équipe NYDA BEAUTY HAIR portant
    différentes coiffures tressées ».

### Fond décoratif

Utiliser le fond généré ivoire avec drapés de satin rose poudré, sans
texte ni icônes.

-   Le fond est décoratif : il ne doit pas contenir le titre, le menu,
    les boutons ou le logo.
-   Le traiter comme un arrière-plan CSS ou une image décorative avec
    alternative vide si intégré en HTML.
-   Ne pas placer le texte essentiel sur une zone trop contrastée du
    satin.
-   Prévoir un fond ivoire CSS de secours si l'image ne charge pas.

### Préparation des fichiers

Noms indicatifs à adapter aux chemins réels du projet :

-   `nyda-hero-team.webp` --- photographie de l'équipe optimisée.
-   `nyda-hero-satin-bg.webp` --- fond décoratif ivoire et satin.
-   `nyda-logo.svg` ou fichier officiel de logo --- uniquement si fourni
    dans ce format.

Exporter les images en WebP ou AVIF lorsque le pipeline le permet, tout
en conservant une solution de repli. Ne pas inventer de chemin définitif
: intégrer les chemins réellement présents dans le dépôt.

## 8. Mise en page et dimensions

### Grille générale

-   Largeur maximale du contenu : **1280 px**.
-   Largeur maximale de page : **1440 px**.
-   Padding desktop : **64 px**.
-   Padding tablette : **32 px**.
-   Padding mobile : **20 px**.
-   Header : **84 px** indicatifs.
-   Espacement entre grandes sections : 96 px desktop et 56 px mobile.

### Desktop --- à partir de 1024 px

-   Hero sur deux zones : texte à gauche et portrait à droite.
-   Zone de texte : environ 42--48 % de la largeur utile.
-   Zone photo : environ 52--58 %.
-   Le portrait peut déborder visuellement dans sa zone, sans recouvrir
    les boutons ni rendre le texte illisible.
-   Le titre est l'élément typographique dominant.
-   Hauteur du Hero indicative : 680 à 780 px selon le viewport.

### Tablette --- 768 à 1023 px

-   Réduire les espacements latéraux à 32 px.
-   Réduire progressivement la taille du titre.
-   Garder une composition en deux colonnes si la lisibilité le permet ;
    sinon passer à une composition empilée.
-   Réduire les éléments décoratifs avant de réduire la taille des zones
    tactiles.

### Mobile --- moins de 768 px

-   Ordre recommandé : header, titre, accroche, description, actions,
    photographie.
-   Le portrait peut être placé sous le texte ou en arrière-plan
    secondaire avec un contraste garanti.
-   Titre : 38 px maximum selon la largeur, avec retour à la ligne
    contrôlé.
-   Corps : 15 px.
-   Boutons empilés si nécessaire, largeur confortable et hauteur de 48
    à 54 px.
-   Masquer la signature basse si elle encombre le premier écran.
-   Éviter tout débordement horizontal.

## 9. Boutons

  Variante    Style
  ----------- -------------------------------------------------------
  Primary     Fond Obsidian `#1E1D1B`, texte blanc
  Secondary   Fond Signature Blush `#FCDFE1`, texte Obsidian
  Outline     Fond transparent, bordure Obsidian, texte Obsidian
  WhatsApp    Vert WhatsApp réservé aux actions de contact/commande

Spécifications : - Hauteur : 48 à 54 px. - Padding horizontal : 24 px. -
Rayon : 4 à 8 px. - Transition : 200 à 300 ms. - États obligatoires :
default, hover, focus-visible, active, disabled et loading. - Le focus
clavier doit être visible. - Les deux CTA du Hero doivent mener vers des
destinations réelles configurées dans le projet.

## 10. Comportements et interactions

-   Le lien Accueil indique clairement la page active.
-   La recherche ouvre l'interface de recherche existante.
-   Le panier ouvre le panier et affiche le nombre réel d'articles ; ne
    pas figer artificiellement le compteur à zéro.
-   Le bouton WhatsApp ouvre le canal officiel configuré par la
    boutique.
-   Le CTA « Explorer la boutique » mène à la page boutique.
-   Le CTA « Découvrir nos collections » mène à la section ou page
    collections.
-   Les interactions doivent fonctionner au clavier et au toucher.
-   Aucun bouton ne doit être purement décoratif ou pointer vers `#`
    sans comportement prévu.

## 11. Accessibilité et performance

-   Structure sémantique : `header`, `nav`, `main`, `section` et un seul
    H1 principal pour le Hero.
-   Contraste suffisant pour tous les textes et contrôles.
-   Icônes avec nom accessible (`aria-label`) lorsqu'elles sont seules.
-   Texte alternatif pertinent pour la photo de l'équipe.
-   Fond décoratif ignoré par les technologies d'assistance.
-   Navigation clavier et focus visibles.
-   Respecter `prefers-reduced-motion`.
-   Éviter les animations qui déplacent fortement le contenu.
-   Définir les dimensions ou le ratio des images pour limiter le CLS.
-   Optimiser le poids des images et charger en priorité le visuel
    principal du Hero.
-   Ne pas retarder l'affichage du titre et des CTA à cause d'une
    animation.

## 12. Animations

-   Apparition douce du contenu, uniquement si elle n'entrave pas
    l'accès immédiat.
-   Transition d'image subtile.
-   Hover discret sur les boutons.
-   Durée indicative : 200 à 400 ms.
-   Désactiver ou réduire les animations lorsque
    `prefers-reduced-motion: reduce` est actif.
-   Aucun effet néon, parallaxe agressive ou animation décorative
    permanente.

## 13. Critères d'acceptation

-   [ ] Le Hero respecte la palette NYDA : Obsidian, Ivory, Blush et
    neutres.
-   [ ] Le titre utilise Playfair Display et le corps DM Sans.
-   [ ] Le logo officiel est utilisé sans déformation.
-   [ ] La photo réelle des quatre femmes est intégrée et correctement
    cadrée.
-   [ ] Le fond satin est décoratif et ne contient aucun texte
    d'interface.
-   [ ] Les textes français sont exacts et restent éditables.
-   [ ] Les deux CTA mènent vers des destinations fonctionnelles.
-   [ ] Recherche, panier et WhatsApp sont fonctionnels.
-   [ ] Le Hero est lisible sur mobile, tablette et desktop.
-   [ ] Aucun débordement horizontal n'apparaît sur mobile.
-   [ ] Le contraste, le focus clavier et les alternatives textuelles
    sont vérifiés.
-   [ ] Les animations respectent `prefers-reduced-motion`.
-   [ ] Les images sont optimisées et le chargement du Hero est
    prioritaire.
-   [ ] Aucun faux prix, faux stock, faux avis ou engagement commercial
    non validé n'est affiché.

## 14. Références du projet

Cette spécification reprend le Design System NYDA BEAUTY HAIR v1.0
fourni par la marque. Les dimensions indiquées comme « indicatives »
sont des recommandations de composition pour le Hero et doivent être
ajustées après intégration dans le vrai viewport et le dépôt du projet.

**Principe directeur :** un Hero éditorial, lumineux et premium, où la
photographie de l'équipe et la typographie racontent la marque sans
surcharger l'interface.
