import {
  setNavbar,
  logo,
  generateCard,
  cardStyle,
  setCardDateStyle,
  generateBanner,
} from "./index.js";

const links = {
  accueil: "../index.html",
  clubs: "clubs/clubs.html",
  événements: "events/events.html",
  actualités: "news/news.html",
  adhésion: "membership/membership.html",
  contact: "contact/contact.html",
};

const detailsLink = {
  clubDetails: "./clubs/club-details.html",
  eventDetails: "./events/event-details.html",
  newDetails: "./news/new-details.html",
};

const clubs = {
  basketball: {
    title: "Club de Basket",
    description:
      "Rejoins une équipe dynamique, perfectionne ton jeu et participe à des matchs passionnants dans une ambiance conviviale.",
    cover: "../Assets/images/basket.png",
    icon: "../Assets/images/ball.png",
  },
  football: {
    title: "Club de Football",
    description:
      "Joue en équipe, développe tes compétences et dispute des matchs passionnants dans une ambiance sportive et amicale.",
    cover: "../Assets/images/football.jpg",
    icon: "../Assets/images/ball.png",
  },
  dance: {
    title: "Club de Danse",
    description:
      "Exprime-toi à travers la danse, apprends de nouveaux styles et participe à des spectacles et événements artistiques.",
    cover: "../Assets/images/dance.jpg",
    icon: "../Assets/images/dance.png",
  },
  maths: {
    title: "Club de Mathématiques",
    description:
      "Plonge dans l'univers des chiffres, résous des énigmes complexes et participe à des compétitions mathématiques stimulantes.",
    cover: "../Assets/images/maths.jpg",
    icon: "../Assets/images/book.png",
  },
  coding: {
    title: "Club de Codage",
    description:
      "Apprends à programmer, crée tes propres projets et découvre les secrets du développement web et logiciel.",
    cover: "../Assets/images/coding.jpg",
    icon: "../Assets/images/code.png",
  },
  music: {
    title: "HEI Music Club",
    description:
      "Découvre, crée et partage ta passion pour la musique dans un espace dédié aux mélomanes et artistes en herbe.",
    cover: "../Assets/images/music.jpg",
    icon: "../Assets/images/favorite.png",
  },
  cooking: {
    title: "Club de Cuisine",
    description:
      "Apprends de nouvelles recettes, maîtrise l'art culinaire et partage ta passion pour la cuisine avec d'autres gourmets.",
    cover: "../Assets/images/cooking.jpg",
    icon: "../Assets/images/cooking.png",
  },
  chess: {
    title: "Club d'Échecs",
    description:
      "Affûte ton esprit stratégique, affronte d'autres joueurs et participe à des tournois passionnants.",
    cover: "../Assets/images/chess.jpg",
    icon: "../Assets/images/chess.png",
  },
};

const events = {
  basketball: {
    name: "Club de Basket",
    date: new Date(2025, 2, 12, 15),
    title: "Tournoi inter-institut de basket",
    time: "15:00 - 17:00",
    location: "Palais de Sport Mahamasina",
    description:
      "Le club de basket participe à la compétition 'Smatchin' de basket, et vous invite à supporter l'équipe.",
    cover: "../Assets/images/smatchin.jpg",
  },
  music: {
    name: "HEI Music Club",
    date: new Date(2025, 2, 28, 19),
    title: "Concert de Printemps",
    time: "19:00 - 21:00",
    location: "Rooftop",
    description:
      "L'Ensemble Musical vous invite à son concert de printemps. Au programme : musique classique, jazz et quelques surprises.",
    cover: "../Assets/images/music.jpg",
  },
  chess: {
    name: "Club d'Échecs",
    date: new Date(2025, 3, 25, 9),
    title: "Championnat d'Échecs",
    time: "09:00 - 18:00",
    location: "Salle Algèbre",
    description:
      "Le championnat annuel d'échecs de l'école est ouvert à tous les élèves. Plusieurs catégories selon les niveaux et des prix à gagner.",
    cover: "../Assets/images/chess.jpg",
  },
};

const news = {
  basketball: {
    name: "Club de basket",
    title: "Le Club de Basket enchaîne les victoires !",
    publication: new Date(2025, 2, 28),
    description:
      "L'équipe de basket de l'école a remporté tous ses matchs cette saison ! Une performance impressionnante qui montre leur détermination et leur talent.",
    cover: "../Assets/images/victory.jpg",
  },
  maths: {
    name: "Club de Mathématiques",
    title: "Le Club de Mathématiques organise un concours interscolaire",
    publication: new Date(2025, 2, 5),
    description:
      "Le Club de Mathématiques lance un grand concours interscolaire de logique et d'algèbre avec des prix à la clé !",
    cover: "../Assets/images/maths.jpg",
  },
  music: {
    name: "HEI Music Club",
    title: "Le Club de Musique enregistre son premier album",
    publication: new Date(2025, 2, 20),
    description:
      "Les musiciens du Club de Musique dévoilent leur premier album collaboratif, mêlant différents styles et influences.",
    cover: "../Assets/images/music.jpg",
  },
};


const container = document.getElementById("container");
const logoLink = "../Assets/images/logo.png";
const navbar = document.getElementById("top-nav");
const banner = document.getElementById("banner");

// Fonction pour filtrer les résultats par type de contenu
const filterContent = (content, searchTerm) => {
  if (!searchTerm) return content;
  
  searchTerm = searchTerm.toLowerCase();
  return Object.fromEntries(
    Object.entries(content).filter(([_, item]) => {
      const searchableText = Object.values(item)
        .filter(value => typeof value === 'string')
        .join(' ')
        .toLowerCase();
      return searchableText.includes(searchTerm);
    })
  );
};

// Fonction pour créer les sections de résultats
const createResultsSection = (title, content, container, type, detailsLink) => {
  if (Object.keys(content).length === 0) return false;
  
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'text-2xl font-bold mb-4 mt-8 text-white';
  sectionTitle.textContent = title;
  container.appendChild(sectionTitle);
  
  generateCard(content, container, type, 'search', detailsLink);
  return true;
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("q") || sessionStorage.getItem('lastSearchTerm');

  const bannerObject = {
    title: searchTerm ? `Résultats pour "${searchTerm}"` : "Recherche",
    description: searchTerm 
      ? "Voici les résultats correspondant à votre recherche"
      : "Utilisez la barre de recherche pour trouver ce que vous cherchez"
  };
  generateBanner(banner, bannerObject);
  setNavbar(navbar, logoLink, logo, links);

  if (searchTerm) {
    // Filtrer chaque type de contenu
    const filteredClubs = filterContent(clubs, searchTerm);
    const filteredEvents = filterContent(events, searchTerm);
    const filteredNews = filterContent(news, searchTerm);

    // Vider le conteneur avant d'afficher les résultats
    container.innerHTML = '';

    // Créer les sections pour chaque type de contenu filtré
    const hasClubs = createResultsSection('Clubs', filteredClubs, container, 'phares', detailsLink);
    const hasEvents = createResultsSection('Événements', filteredEvents, container, 'events', detailsLink);
    const hasNews = createResultsSection('Actualités', filteredNews, container, 'news', detailsLink);

    // Si aucun résultat n'est trouvé
    if (!hasClubs && !hasEvents && !hasNews) {
      const noResults = document.createElement('div');
      noResults.className = 'text-center text-white mt-8';
      noResults.innerHTML = `
        <p class="text-xl">Aucun résultat trouvé pour "${searchTerm}"</p>
        <p class="mt-4">Essayez avec d'autres mots-clés ou vérifiez l'orthographe.</p>
      `;
      container.appendChild(noResults);
    }

    cardStyle();
    setCardDateStyle();
  }
});