export interface PhotoService {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  isFeaturedCta?: boolean;
}

export const photoServices: PhotoService[] = [
  {
    id: "service-studio-portrait",
    number: "01",
    name: "Shooting Studio Photo",
    tagline: "Portraits personnels, mode & anniversaires",
    description:
      "Dans notre studio équipé à Parakou, vivez une séance personnalisée avec éclairage professionnel pour célébrer un anniversaire, sublimer votre image de marque ou enrichir votre book.",
    features: [
      "Séance guidée dans notre studio à Parakou",
      "Éclairages et fonds variés (sombre, clair, coloré)",
      "Retouches professionnelles haute définition",
      "Idéal pour portraits solo, mode et photos de profil/CV",
    ],
  },
  {
    id: "service-events-weddings",
    number: "02",
    name: "Mariages & Événements",
    tagline: "Couverture photo & vidéo inoubliable",
    description:
      "Chaque regard ému et chaque éclat de rire immortalisés avec discrétion et élégance. Nous couvrons vos mariages traditionnels et civils, fiançailles, baptêmes et galas dans tout le Bénin.",
    features: [
      "Reportage complet de la journée ou de la soirée",
      "Prise de vue photo + Aftermovie vidéo en 4K",
      "Déplacements à Cotonou, Porto-Novo, Bohicon et tout le pays",
      "Coffret d'images et album premium disponible",
    ],
  },
  {
    id: "service-family-maternity",
    number: "03",
    name: "Famille & Maternité",
    tagline: "Des souvenirs intemporels à chérir",
    description:
      "La complicité d'une famille, l'attente d'une nouvelle vie ou les premiers sourires d'un enfant. Des séances chaleureuses et naturelles, en studio à Parakou ou à domicile.",
    features: [
      "Portraits de couple, grossesse et enfants",
      "Ambiance détendue et bienveillante",
      "Photos de groupe et portraits individuels",
      "Livraison de tirages d'art sur demande",
    ],
  },
  {
    id: "service-commercial-ads",
    number: "04",
    name: "Publicité & Entreprises",
    tagline: "Packshots produits & vidéos de marque",
    description:
      "Valorisez vos produits, commerces et services avec des visuels qui captivent vos clients. Photos packshot soignées pour catalogues/réseaux sociaux et réalisation de spots vidéo publicitaires.",
    features: [
      "Packshot produits fond blanc ou mise en scène",
      "Spots publicitaires vidéo au format TV et réseaux sociaux",
      "Reportage en entreprise et portraits d'équipe",
      "Adapté aux commerces, marques et PME béninoises",
    ],
  },
  {
    id: "service-custom-cta",
    number: "05",
    name: "Un projet particulier en tête ?",
    tagline: "Discutons de vos besoins sur-mesure",
    description:
      "Vous organisez un événement hors de Parakou, un festival, ou vous avez une idée créative unique ? Nous nous adaptons à votre planning et vos attentes.",
    features: ["Devis rapide et gratuit", "Déplacements dans tout le Bénin", "Échange direct avec le photographe"],
    isFeaturedCta: true,
  },
];

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  iconTag: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "1",
    title: "On échange sur votre projet et on fixe la date",
    description:
      "Par WhatsApp ou appel téléphonique, dites-nous ce que vous souhaitez (portrait studio, mariage, séance famille ou pub). On valide ensemble le lieu, le style et l'horaire.",
    iconTag: "PRISE DE CONTACT SIMPLE",
  },
  {
    step: "2",
    title: "Une séance photo détendue et bien guidée",
    description:
      "Au studio à Parakou ou sur le lieu de votre événement (Cotonou, etc.), le shooter vous met immédiatement à l'aise et vous guide sur les poses et la lumière.",
    iconTag: "SHOOTING CONVIVIAL",
  },
  {
    step: "3",
    title: "Vos photos retouchées livrées en haute résolution",
    description:
      "Vous recevez rapidement vos clichés bruts pour sélection, puis vos photos sublimées par une retouche professionnelle soignée via un lien de téléchargement sécurisé.",
    iconTag: "LIVRAISON RAPIDE",
  },
];

export interface PricingPack {
  id: string;
  name: string;
  priceFCFA: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
}

export const pricingPacks: PricingPack[] = [
  {
    id: "pack-portrait-solo",
    name: "Séance Studio Solo / Portrait",
    priceFCFA: "20 000 FCFA",
    period: "/ séance",
    description: "Parfait pour un anniversaire, renouveler ses photos professionnelles ou se faire plaisir avec un book de qualité.",
    features: [
      "Séance photo au studio à Parakou (45 min à 1h)",
      "2 tenues différentes au choix",
      "5 photos retouchées en haute définition",
      "L'intégralité des clichés bruts fournis",
      "Livraison sous 48h à 72h ouvrées",
    ],
    ctaLabel: "Réserver mon shooting",
  },
  {
    id: "pack-family-couple",
    name: "Séance Famille, Couple & Grossesse",
    priceFCFA: "45 000 FCFA",
    period: "/ séance",
    badge: "FORMULE POPULAIRE",
    isPopular: true,
    description: "La formule idéale pour immortaliser la complicité familiale, une grossesse ou une célébration à plusieurs.",
    features: [
      "Séance studio à Parakou ou en extérieur (jusqu'à 6 personnes)",
      "Changements de tenues illimités dans le temps imparti",
      "12 photos retouchées avec soin en haute définition",
      "Tous les clichés bruts remis sur clé USB ou lien drive",
      "Conseils personnalisés de pose et de coordination des tenues",
    ],
    ctaLabel: "Choisir cette formule",
  },
  {
    id: "pack-wedding-brand",
    name: "Mariage, Événement & Publicité",
    priceFCFA: "Sur Devis",
    period: "selon formule",
    description: "Pour les mariages, grandes cérémonies familiales et campagnes publicitaires d'entreprises dans tout le Bénin.",
    features: [
      "Couverture complète par le photographe / vidéaste",
      "Déplacement à Cotonou, Porto-Novo, Parakou et toutes villes",
      "Photos illimitées traitées et retouchées",
      "Vidéo aftermovie 4K avec montage dynamique et musique",
      "Option album photo luxe prestige et tirages papier",
    ],
    ctaLabel: "Demander un devis gratuit",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Où se trouve exactement votre studio de photo ?",
    answer:
      "Notre studio photo est basé à Parakou, dans un quartier facilement accessible et calme, équipé de projecteurs professionnels, fonds variés et climatisation pour votre plus grand confort.",
  },
  {
    question: "Vous déplacez-vous en dehors de Parakou (Cotonou, etc.) ?",
    answer:
      "Oui, absolument ! Bien que basés à Parakou, nous nous déplaçons régulièrement à Cotonou, Porto-Novo, Bohicon, Natitingou et dans toutes les communes du Bénin pour couvrir vos mariages, événements et publicités d'entreprise.",
  },
  {
    question: "Combien de temps faut-il pour recevoir les photos retouchées ?",
    answer:
      "Vous recevez les photos brutes pour présélection dès le lendemain de la séance. Les photos finales retouchées sont généralement livrées sous 48h à 72h via un lien sécurisé en haute définition.",
  },
  {
    question: "Je ne sais pas poser, est-ce un problème ?",
    answer:
      "Pas du tout ! C'est le rôle du photographe de vous mettre en confiance et de vous guider naturellement pour chaque angle, sourire et posture. Même les personnes les plus timides repartent avec de magnifiques photos.",
  },
  {
    question: "Proposez-vous aussi de la vidéo ?",
    answer:
      "Oui ! En plus de la photographie, nous réalisons des vidéos événementielles (aftermovies de mariage, galas) et des spots publicitaires pour les commerces, créateurs et entreprises du Bénin.",
  },
  {
    question: "Comment réserver et comment se passe le paiement ?",
    answer:
      "La réservation se fait simplement par WhatsApp ou appel téléphonique. Un petit acompte permet de bloquer la date, payable par Mobile Money (MTN MoMo, Moov Money, Wave) ou en espèces au studio.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  brand: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Le shooting d'anniversaire au studio à Parakou était génial. Il sait mettre à l'aise, la lumière est sublime et les retouches sont super naturelles sans dénaturer le teint. Je recommande les yeux fermés !",
    author: "Nadège Bio",
    role: "Shooting Anniversaire & Portrait",
    brand: "Parakou",
  },
  {
    quote:
      "Il a fait le déplacement jusqu'à Cotonou pour notre mariage. Les photos sont à couper le souffle et la petite vidéo de résumé nous a mis les larmes aux yeux. Un vrai pro, ponctuel et passionné.",
    author: "Éric & Sandra Tossou",
    role: "Mariage civil et traditionnel",
    brand: "Cotonou",
  },
  {
    quote:
      "Pour le lancement de notre boutique, les photos de nos produits et le petit spot publicitaire ont fait décoller nos commandes sur les réseaux. La qualité de l'image fait toute la différence.",
    author: "Mounirou Mama",
    role: "Commerçant & Entrepreneur",
    brand: "Parakou",
  },
];

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    value: 350,
    suffix: "+",
    label: "Séances & Événements",
    detail: "Portraits studio, mariages et reportages au Bénin",
  },
  {
    value: 5,
    suffix: " Ans",
    label: "D'Expérience Terrain",
    detail: "Au service des particuliers, familles et entreprises",
  },
  {
    value: 12,
    suffix: " Villes",
    label: "Couvertes au Bénin",
    detail: "De Parakou à Cotonou, Porto-Novo, Bohicon et Natitingou",
  },
  {
    value: 100,
    suffix: "%",
    label: "Clients Satisfaits",
    detail: "Guidance bienveillante et retouches haute qualité",
  },
];

// Compatibility exports
export const studioSpaces = photoServices;
export const studioServices = photoServices;
export const behindTheScenesData = [
  {
    year: "2025",
    location: "Studio 4K Shoot Parakou",
    title: "Shooting Mode & Tissu Traditionnel",
    camera: "Boîtier Pro Plein Format",
    anecdote: "Séance studio lumière douce valorisant les étoffes béninoises.",
  },
];
