# NYDA BEAUTY HAIR — Luxury Beauty E-commerce Homepage

Boutique en ligne haut de gamme et éditoriale pour **NYDA BEAUTY HAIR**, maison de beauté et soins capillaires en Côte d'Ivoire.

## 🌟 Identité & Direction Artistique

- **Concept créatif :** THE ART OF BEAUTY.
- **Positionnement :** Minimaliste, éditorial, luxe et féminin.
- **Palette de tokens :**
  - **Obsidian :** `#1E1D1B` (Fond sombre, boutons principaux, logo, footer)
  - **Signature Blush :** `#FCDFE1` (Accent de marque, boutons secondaires)
  - **Ivory :** `#F8F4F0` (Fond éditorial doux, hero)
  - **Champagne :** `#E9DFD9` (Bordures délicates, séparateurs)
  - **Dusty Nude :** `#B99C91` (Accents chauds)
  - **Taupe :** `#8A7168` (Textes secondaires)
  - **Charcoal :** `#393431` (Surfaces sombres)
  - **White :** `#FFFFFF` (Fond cartes, boutique)
- **Typographies :**
  - Titres & Éditorial : `Playfair Display`
  - Corps de texte & Interface : `DM Sans`

## 💎 Fonctionnalités E-commerce

1. **Logo officiel préservé :**
   - Utilisation sans altération du logo officiel NYDA BEAUTY HAIR avec son monogramme NB sur fond Obsidian.

2. **Catalogue complet en FCFA :**
   - Cosmétiques & Soins du Visage (Sérums éclat, crèmes hydratantes, élixirs de nuit...)
   - Soins Capillaires (Traitements réparateurs, huiles de croissance, baumes...)
   - Perruques & Mèches (HD Lace frontal, raw hair ondulé, mèches lisses...)
   - Accessoires de luxe (Bonnets en soie pure, brosses ergonomiques...)

3. **Panier persistant & Aperçu rapide (Quick-View) :**
   - Modal d'aperçu produit détaillé avec bénéfices et conseils d'utilisation
   - Drawer panier latéral avec calcul dynamique du sous-total, frais de livraison offerte dès 35 000 FCFA

4. **Commande assistée par WhatsApp :**
   - Formulaire de coordonnées de livraison (Nom, Téléphone, Commune d'Abidjan, Adresse précise, Choix de règlement : Cash à la livraison, Wave, Orange Money, MTN)
   - Génération d'une référence unique de commande `NYDA-2026-XXXX`
   - Pré-remplissage automatique d'un message WhatsApp soigné et formaté
   - Sauvegarde préalable côté serveur / Supabase / localStorage avant ouverture WhatsApp

5. **SEO & Performance :**
   - Balises OpenGraph & Twitter Cards
   - Données structurées JSON-LD (`BeautySalon`, `OfferCatalog`, `Product`)
   - Sitemap (`/sitemap.xml`) & Robots (`/robots.txt`)
   - Images WebP optimisées avec ratios 4:5 et 3:4

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Compilation pour la production
npm run build

# Lancement du serveur de production
npm start
```

## ⚙️ Variables d'Environnement (.env.local)

```env
# Numéro WhatsApp officiel NYDA BEAUTY HAIR (format international sans +)
NEXT_PUBLIC_WHATSAPP_PHONE=2250788238249

# Configuration Supabase (optionnel, dispose d'un fallback automatique)
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_publique
```
