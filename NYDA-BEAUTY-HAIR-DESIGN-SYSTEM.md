# NYDA BEAUTY HAIR — Design System
**Version 1.0 · Novembre 2026**

> Référence visuelle et UI pour la boutique en ligne NYDA BEAUTY HAIR.

## 1. Identité de marque

- **Positionnement :** beauté premium accessible.
- **Personnalité :** féminine, raffinée, moderne et confiante.
- **Univers :** cosmétiques, soins capillaires, perruques et mèches.
- **Concept créatif :** *The Art of Beauty*.
- **Signature proposée :** « Révélez votre beauté, sublimez votre élégance. »

Le monogramme NB fourni est le signe distinctif de la marque. Utiliser le fichier original comme asset ; ne pas le redessiner avec une police, le déformer, recolorer sans validation ni ajouter d'ombre.

## 2. Direction artistique

Créer une boutique de beauté au langage éditorial et minimaliste : grandes photographies, compositions aérées, hiérarchie typographique nette et détails sobres.

Le site doit être majoritairement clair (ivoire et blanc), avec des sections noires ponctuelles pour créer du contraste et rappeler le fond du logo. Le rose poudré sert d'accent identitaire, pas de couleur de fond omniprésente.

## 3. Palette de couleurs

Les valeurs ci-dessous sont les couleurs de travail retenues à partir de l'apparence du logo fourni et complétées par des neutres proposés.

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#1E1D1B` | Logo sur fond sombre, texte fort, footer, CTA principal |
| Signature Blush | `#FCDFE1` | Accent de marque, détails, badges et éléments secondaires |
| Ivory | `#F8F4F0` | Fond doux et sections éditoriales |
| Champagne | `#E9DFD9` | Bordures et séparateurs |
| Dusty Nude | `#B99C91` | Accent secondaire |
| Taupe | `#8A7168` | Texte secondaire et détails |
| White | `#FFFFFF` | Fond principal et cartes |
| Charcoal | `#393431` | Texte alternatif et surfaces sombres |

### Répartition indicative
- 60 % : blanc et ivoire.
- 25 % : noir profond et charbon.
- 10 % : rose poudré.
- 5 % : champagne et nude.

Toujours vérifier le contraste texte/fond. Ne pas utiliser le rose pâle comme couleur de texte sur fond blanc pour les informations essentielles.

## 4. Typographie

| Rôle | Famille | Graisses | Utilisation |
|---|---|---|---|
| Titres | Playfair Display | Regular, Medium, Italic | H1–H4, campagnes, slogans |
| Interface et corps | DM Sans | Regular, Medium, Semibold | Navigation, descriptions, prix, formulaires |
| Accent éditorial | Playfair Display Italic | Regular Italic | Citations et messages de marque |

### Échelle typographique

| Élément | Desktop | Mobile |
|---|---:|---:|
| H1 / Hero | 64 px | 38 px |
| H2 | 44 px | 30 px |
| H3 | 30 px | 24 px |
| H4 | 22 px | 20 px |
| Corps | 16 px | 15 px |
| Légende | 13 px | 12 px |
| Navigation | 13 px | 12 px |

Privilégier des graisses Regular ou Medium pour les titres. Éviter les titres systématiquement en gras ou en capitales.

## 5. Logo

- Utiliser le logo source fourni par la marque.
- Préserver les proportions du monogramme NB et le lettrage NYDA BEAUTY HAIR.
- Préserver une zone de protection autour du logo, au minimum équivalente à la hauteur du caractère N.
- Ne pas étirer, incliner, recadrer ou appliquer de filtre.
- Sur fond sombre, utiliser la version claire fournie.
- Sur fond clair, demander une version officielle adaptée si elle n'existe pas ; ne pas recolorer arbitrairement le fichier original.
- Prévoir une version horizontale pour l'en-tête si la marque en fournit une.

## 6. Mise en page et grille

| Paramètre | Valeur |
|---|---:|
| Largeur maximale du contenu | 1280 px |
| Largeur maximale de page | 1440 px |
| Padding desktop | 64 px |
| Padding tablette | 32 px |
| Padding mobile | 20 px |
| Hauteur indicative du header | 84 px |
| Grille produits desktop | 4 colonnes |
| Grille produits tablette | 3 colonnes |
| Grille produits mobile | 2 colonnes |
| Espacement entre sections desktop | 96 px |
| Espacement entre sections mobile | 56 px |

### Échelle d'espacement
Utiliser une échelle cohérente : `4, 8, 12, 16, 24, 32, 48, 64, 96 px`.

### Rayons
- Petit composant : 4 px.
- Bouton et carte : 6 à 8 px.
- Modale : 12 px.

Éviter les interfaces excessivement arrondies.

## 7. Composants d'interface

### Boutons
- **Primary :** fond Obsidian, texte blanc.
- **Secondary :** fond Signature Blush, texte Obsidian.
- **Outline :** fond transparent, bordure Obsidian, texte Obsidian.
- **WhatsApp :** vert WhatsApp réservé aux actions de contact/commande WhatsApp.

Spécifications :
- Hauteur : 48 à 54 px.
- Padding horizontal : 24 px.
- Rayon : 4 à 8 px.
- Transition : 200 à 300 ms.
- États : default, hover, focus-visible, active, disabled, loading.
- Conserver un indicateur de focus clavier visible.

### Cartes produits
- Image verticale au ratio 4:5.
- Fond blanc ou ivoire.
- Nom du produit en DM Sans Medium.
- Prix clairement lisible en Obsidian ou Taupe foncé.
- Badge « Nouveau », « Promo » ou « Épuisé » discret.
- Hover : zoom d'image très léger, sans déplacement brusque.
- Afficher les variantes disponibles lorsque nécessaire.

### Champs de formulaire
- Hauteur : 48 à 52 px.
- Fond blanc.
- Bordure Champagne.
- Rayon : 6 px.
- Focus : bordure Taupe/Dusty Nude et focus ring visible.
- Labels persistants, aide et messages d'erreur explicites.

### Navigation
- En-tête simple et léger.
- Logo visible.
- Liens : Accueil, Boutique, À propos, Contact.
- Icônes de recherche et panier.
- Menu mobile accessible, avec fermeture claire et zones tactiles confortables.

## 8. Photographie et direction artistique des images

Les images jouent un rôle central dans la perception de qualité.

- Éclairage doux, naturel ou studio diffus.
- Arrière-plans crème, beige, nude ou brun.
- Produits cadrés proprement et textures visibles.
- Portraits féminins élégants et authentiques.
- Gros plans sur les cheveux, matières et détails.
- Cohérence de lumière et de température de couleur dans une même collection.
- Préférer les photos réelles des produits vendus aux images génériques.

Éviter les visuels surchargés, les couleurs saturées, les collages promotionnels agressifs et les images qui ne représentent pas exactement le produit livré.

## 9. Iconographie et mouvement

- Bibliothèque : Lucide Icons.
- Style : traits fins, cohérents, épaisseur visuelle autour de 1.5–2 px.
- Icônes courantes : Search, ShoppingBag, Menu, Heart, User, MessageCircle, Instagram, ChevronDown, SlidersHorizontal.
- Taille standard : 18–24 px.

### Animations
- Apparition progressive et discrète des sections.
- Transition douce des images.
- Hover subtil sur les cartes.
- Ouverture fluide du menu mobile.
- Retour visuel discret lors de l'ajout au panier.
- Durée recommandée : 200–400 ms.
- Respecter `prefers-reduced-motion`.

Éviter les animations agressives, les effets néon et le glassmorphism décoratif.

## 10. Structure recommandée de la page d'accueil

1. Barre d'annonce : livraison, nouveauté ou promotion.
2. Header : logo, navigation, recherche et panier.
3. Hero éditorial : photographie forte, message de marque et CTA « Découvrir la collection ».
4. Catégories : Cosmétiques, Soins capillaires, Perruques & mèches.
5. Meilleures ventes.
6. Nouveautés ou sélection de saison.
7. Bloc histoire de marque / manifeste.
8. Avantages : accompagnement, qualité, livraison (uniquement les engagements réellement tenus).
9. Avis clients, si des avis authentiques sont disponibles.
10. Newsletter, uniquement si elle est réellement mise en place.
11. Footer : contacts, réseaux sociaux, FAQ, livraison, mentions légales et confidentialité.

## 11. Principes UX e-commerce

- Priorité à l'expérience mobile.
- Prix en FCFA clairement affichés.
- Disponibilité et variantes visibles.
- Panier facile à modifier.
- Frais et conditions de livraison expliqués avant l'envoi de la commande.
- Bouton « Commander sur WhatsApp » clairement identifiable.
- Récapitulatif de commande lisible avant ouverture de WhatsApp.
- Ne jamais présenter une commande WhatsApp comme confirmée avant validation par la boutique.
- Les informations de commande doivent être enregistrées côté serveur avant la redirection WhatsApp.
- Ne jamais afficher de faux avis, de faux stocks ou de fausses promotions.

## 12. Accessibilité et responsive

- Contraste suffisant pour les textes et boutons.
- Navigation clavier et focus visibles.
- Textes alternatifs pertinents pour les images utiles.
- Zones tactiles confortables sur mobile.
- Formulaires avec labels et erreurs compréhensibles.
- Mise en page testée sur petits écrans, tablettes et grands écrans.
- Éviter de transmettre une information uniquement par la couleur.

## 13. Design tokens — CSS

```css
:root {
  /* Brand */
  --color-obsidian: #1E1D1B;
  --color-blush: #FCDFE1;

  /* Neutral */
  --color-ivory: #F8F4F0;
  --color-champagne: #E9DFD9;
  --color-dusty-nude: #B99C91;
  --color-taupe: #8A7168;
  --color-white: #FFFFFF;
  --color-charcoal: #393431;

  /* Semantic */
  --color-background: var(--color-white);
  --color-surface: var(--color-ivory);
  --color-text: var(--color-obsidian);
  --color-muted: var(--color-taupe);
  --color-primary: var(--color-obsidian);
  --color-accent: var(--color-blush);
  --color-border: var(--color-champagne);

  /* Typography */
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;

  /* Layout */
  --container-width: 1280px;
  --page-max-width: 1440px;
  --header-height: 84px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-card: 0 4px 20px rgba(30, 29, 27, 0.05);
  --shadow-menu: 0 8px 30px rgba(30, 29, 27, 0.08);

  /* Motion */
  --transition-base: 250ms ease;
}
```

## 14. Exemple de thème Tailwind CSS v4

À intégrer dans la feuille CSS principale du projet, après validation des versions et de la configuration du dépôt.

```css
@import "tailwindcss";

@theme {
  --color-obsidian: #1E1D1B;
  --color-blush: #FCDFE1;
  --color-ivory: #F8F4F0;
  --color-champagne: #E9DFD9;
  --color-dusty-nude: #B99C91;
  --color-taupe: #8A7168;
  --color-charcoal: #393431;

  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: "DM Sans", Arial, sans-serif;
}
```

Les variables `@theme` de Tailwind CSS v4 créent des utilitaires à partir des tokens déclarés. Référence : https://tailwindcss.com/docs/theme

## 15. Règles de cohérence

### À faire
- Préserver le logo original.
- Utiliser le rose comme accent identitaire.
- Privilégier les photographies éditoriales.
- Maintenir de l'espace blanc.
- Garder une navigation simple.
- Réutiliser les composants et tokens.
- Vérifier les contrastes et les états interactifs.

### À éviter
- Dégradés multicolores.
- Effets néon.
- Ombres trop prononcées.
- Boutons excessivement arrondis.
- Animations agressives.
- Accumulation de rose.
- Typographies fantaisistes.
- Images de produits qui ne correspondent pas à l'article vendu.

## 16. Checklist de validation UI

- [ ] Le logo est utilisé sans déformation.
- [ ] Les couleurs correspondent aux tokens.
- [ ] Les titres utilisent Playfair Display.
- [ ] Les textes et contrôles utilisent DM Sans.
- [ ] Les cartes produits respectent le ratio 4:5.
- [ ] Le site est lisible sur mobile.
- [ ] Les boutons ont des états hover, focus, active et disabled.
- [ ] Les formulaires ont labels et messages d'erreur.
- [ ] Le contraste des textes est suffisant.
- [ ] Les animations respectent `prefers-reduced-motion`.
- [ ] Les photos sont cohérentes et fidèles aux produits.

---

**Statut :** base de design system proposée, à valider avec les fichiers officiels du logo, les photographies et les contenus définitifs de NYDA BEAUTY HAIR.
