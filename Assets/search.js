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
    cover: "Assets/images/basket.png",
    icon: "Assets/images/ball.png",
  },
  football: {
    title: "Club de Football",
    description:
      "Joue en équipe, développe tes compétences et dispute des matchs passionnants dans une ambiance sportive et amicale.",
    cover: "Assets/images/defaultClubsCover.png",
  },
  dance: {
    title: "Club de Danse",
    description:
      "Exprime-toi à travers la danse, apprends de nouveaux styles et participe à des spectacles et événements artistiques.",
    cover: "Assets/images/defaultClubsCover.png",
  },
  maths: {
    title: "Club de Mathématiques",
    description:
      "Plonge dans l'univers des chiffres, résous des énigmes complexes et participe à des compétitions mathématiques stimulantes.",
    cover: "Assets/images/maths.jpg",
    icon: "Assets/images/book.png",
  },
  coding: {
    title: "Club de Codage",
    description:
      "Apprends à programmer, crée tes propres projets et découvre les secrets du développement web et logiciel.",
    cover: "Assets/images/defaultClubsCover.png",
  },
  music: {
    title: "HEI Music Club",
    description:
      "Découvre, crée et partage ta passion pour la musique dans un espace dédié aux mélomanes et artistes en herbe.",
    cover: "Assets/images/music.jpg",
    icon: "Assets/images/favorite.png",
  },
  cooking: {
    title: "Club de Cuisine",
    description:
      "Apprends de nouvelles recettes, maîtrise l'art culinaire et partage ta passion pour la cuisine avec d'autres gourmets.",
    cover: "Assets/images/defaultClubsCover.png",
  },
  chess: {
    title: "Club d'Échecs",
    description:
      "Affûte ton esprit stratégique, affronte d'autres joueurs et participe à des tournois passionnants.",
    cover: "Assets/images/defaultClubsCover.png",
  },
};

const container = document.getElementById("container");
const logoLink = "images/logo.png";
const navbar = document.getElementById("top-nav");
const banner = document.getElementById("banner");

document.addEventListener("DOMContentLoaded", () => {
  // Récupérer le terme de recherche depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("q");

  // Configurer la bannière
  const bannerObject = {
    title: searchTerm ? `Résultats pour "${searchTerm}"` : "Recherche",
    description: searchTerm 
      ? "Voici les résultats correspondant à votre recherche"
      : "Utilisez la barre de recherche pour trouver ce que vous cherchez"
  };
  generateBanner(banner, bannerObject);

  // Configurer la navbar
  setNavbar(navbar, logoLink, logo, links);

  // Filtrer les clubs en fonction du terme de recherche
  const filteredClubs = searchTerm
    ? Object.fromEntries(
        Object.entries(clubs).filter(([_, club]) => {
          const searchText = `${club.title} ${club.description}`.toLowerCase();
          return searchText.includes(searchTerm.toLowerCase());
        })
      )
    : clubs;

  // Générer les cartes filtrées
  generateCard(filteredClubs, container, "phares", "search", detailsLink);
  cardStyle();
  setCardDateStyle();
});