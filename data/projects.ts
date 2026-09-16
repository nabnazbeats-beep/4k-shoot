export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Portrait Studio" | "Mariage & Événement" | "Famille & Maternité" | "Publicité & Marque";
  year: string;
  aspectRatio: string;
  camera: string;
  lenses: string;
  director: string;
  dp: string;
  colorist: string;
  coverImage: string;
  secondaryImage: string;
  description: string;
  synopsis: string;
  technicalNotes: string[];
  awards?: string[];
  featured: boolean;
  gridSpan: "hero" | "tall" | "wide" | "standard";
}

export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "mariage-cotonou-parakou",
    title: "Mariage Royal d'Éric & Sandra",
    client: "Famille Tossou",
    category: "Mariage & Événement",
    year: "2025",
    aspectRatio: "3:2 & 16:9",
    camera: "Boîtiers Pro Plein Format",
    lenses: "85mm f/1.4 & 24-70mm f/2.8",
    director: "4K Shoot",
    dp: "4K Shoot",
    colorist: "4K Shoot Studio",
    coverImage: "/images/studio_fashion.jpg",
    secondaryImage: "/images/hero.jpg",
    description:
      "Couverture complète photo et vidéo d'un mariage traditionnel et civil célébré entre Parakou et Cotonou, capturant l'émotion des familles et la somptuosité des tenues traditionnelles.",
    synopsis:
      "De la préparation matinale des mariés jusqu'à la soirée dansante, chaque moment fort a été immortalisé avec discrétion. Plus de 350 photos retouchées et un aftermovie vidéo émouvant livrés aux mariés.",
    technicalNotes: [
      "Prises de vue photo sur le vif avec optiques lumineuses à grande ouverture",
      "Capsules vidéo 4K au ralenti pour immortaliser les danses traditionnelles",
      "Étalonnage chaleureux sublimant les parures dorées et les étoffes locales",
    ],
    featured: true,
    gridSpan: "hero",
  },
  {
    id: "proj-02",
    slug: "portrait-studio-anniversaire",
    title: "Shooting Anniversaire & Mode",
    client: "Nadège B. (Studio Parakou)",
    category: "Portrait Studio",
    year: "2025",
    aspectRatio: "4:5 Portrait",
    camera: "Studio Plein Format",
    lenses: "50mm & 85mm Primes",
    director: "4K Shoot",
    dp: "4K Shoot",
    colorist: "4K Shoot Studio",
    coverImage: "/images/fashion_noir.jpg",
    secondaryImage: "/images/studio_podcast.jpg",
    description:
      "Séance photo anniversaire en studio à Parakou : jeux de lumière doux, changements de tenues élégants et retouche subtile respectant l'éclat naturel de la peau.",
    synopsis:
      "Pour célébrer ses 25 ans, Nadège a choisi notre studio photo à Parakou pour un shooting personnel. Deux ambiances créées : une ambiance claire et lumineuse, et un set plus feutré et glamour.",
    technicalNotes: [
      "Éclairage studio boîte à lumière octogonale pour un modelé doux sur le visage",
      "Retouche beauté peau naturelle sans effet masque artificiel",
      "Livraison expresse en haute définition sous 48 heures",
    ],
    featured: true,
    gridSpan: "tall",
  },
  {
    id: "proj-03",
    slug: "publicite-marque-produit",
    title: "Campagne Produits & Packshot",
    client: "Boutique & Marque Béninoise",
    category: "Publicité & Marque",
    year: "2024",
    aspectRatio: "1:1 & 16:9",
    camera: "Capteur Haute Définition",
    lenses: "100mm Macro & 35mm",
    director: "4K Shoot",
    dp: "4K Shoot",
    colorist: "4K Shoot Studio",
    coverImage: "/images/luxury_watch.jpg",
    secondaryImage: "/images/bts_set.jpg",
    description:
      "Série de photographies packshot et courte vidéo publicitaire mettant en avant des produits artisanaux et cosmétiques pour dynamiser les ventes sur les réseaux sociaux.",
    synopsis:
      "Réalisation de visuels épurés sur fond noir et en mise en scène pour le lancement de la nouvelle gamme d'une marque locale. Vidéo publicitaire dynamique optimisée pour Instagram et TikTok.",
    technicalNotes: [
      "Photographie macro chirurgicale pour révéler les finitions et ingrédients",
      "Éclairage polarisé éliminant les reflets gênants sur les flacons",
      "Exportation des fichiers aux formats publicitaires e-commerce et réseaux",
    ],
    featured: true,
    gridSpan: "standard",
  },
  {
    id: "proj-04",
    slug: "famille-et-maternite",
    title: "Douce Attente & Séance Famille",
    client: "Famille Gbaguidi",
    category: "Famille & Maternité",
    year: "2024",
    aspectRatio: "3:2 Widescreen",
    camera: "Boîtier Plein Format",
    lenses: "35mm & 85mm",
    director: "4K Shoot",
    dp: "4K Shoot",
    colorist: "4K Shoot Studio",
    coverImage: "/images/documentary.jpg",
    secondaryImage: "/images/hero.jpg",
    description:
      "Séance photo maternité et portraits de famille pleine de tendresse, capturant l'attente du premier enfant avec une lumière douce et naturelle.",
    synopsis:
      "Un shooting intimiste où la complicité du couple est au cœur de chaque cadre. Des souvenirs précieux et émouvants immortalisés pour toute une vie.",
    technicalNotes: [
      "Ambiance bienveillante mettant les futurs parents en totale confiance",
      "Teintes naturelles et chaudes pour une atmosphère douce et intemporelle",
      "Remise des clichés en haute qualité et tirages photos encadrés",
    ],
    featured: true,
    gridSpan: "wide",
  },
];
