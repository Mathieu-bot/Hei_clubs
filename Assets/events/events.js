import {
  setNavbar,
  logo,
  generateBanner,
  generateCard,
  cardStyle,
  setCardDateStyle,
  goToLink,
} from "../index.js";

const links = {
  acceuil: "./../../index.html",
  clubs: "./../clubs/clubs.html",
  événements: "./events.html",
  actualiés: "./../news/news.html",
  adhésion: "./../membership/membership.html",
  contact: "./../contact/contact.html",
};
const logoLink = "./../images/logo.png";
const bannerContent = {
  title: "Événements",
  description:
    "Découvrez les événements organisés par les clubs de HEI et participez à la vie étudiante.",
};

const defaultEventsCover = `../images/default-events.png`;
const events = {
  basketball: {
    name: "Club de Basket",
    date: new Date(2025, 2, 20),
    title: "Tournoi inter-institut de basket",
    time: "15:00 - 17:00",
    location: "Palais des Sports Mahamasina",
    description:
      "Le club de basket participe à la compétition 'Smatchin' et vous invite à supporter l'équipe !",
    cover: "../images/smatchin.jpg",
    icon: "../images/ball.png",
  },
  music: {
    name: "Club de Musique",
    date: new Date(2025, 2, 25),
    title: "Concert de Printemps",
    time: "19:00 - 21:00",
    location: "Auditorium",
    description:
      "L'Ensemble Musical vous invite à son concert de printemps. Au programme : musique classique, jazz et quelques surprises !",
    cover: defaultEventsCover,
    icon: defaultEventsCover,
  },
  chess: {
    name: "Club d'Échecs",
    date: new Date(2025, 2, 30),
    title: "Championnat d'Échecs",
    time: "09:00 - 18:00",
    location: "Salle de Jeux D5",
    description:
      "Le championnat annuel d'échecs de l'école est ouvert à tous les élèves. Plusieurs catégories selon les niveaux et des prix à gagner !",
    cover: defaultEventsCover,
    icon: defaultEventsCover,
  },
  maths: {
    name: "Club de Mathématiques",
    date: new Date(2025, 3, 10),
    title: "Compétition de Mathématiques",
    time: "10:00 - 12:00",
    location: "Salle de Classe M3",
    description:
      "Le club de maths organise une compétition ouverte à tous les élèves intéressés par les défis mathématiques.",
    cover: defaultEventsCover,
    icon: defaultEventsCover,
  },
  coding: {
    name: "Club de Codage",
    date: new Date(2025, 3, 15),
    title: "Hackathon Étudiant",
    time: "08:00 - 20:00",
    location: "Salle Informatique B1",
    description:
      "Rejoignez le hackathon annuel où des équipes s'affrontent pour développer des solutions innovantes en un temps limité.",
    cover: defaultEventsCover,
    icon: defaultEventsCover,
  },
  cooking: {
    name: "Club de Cuisine",
    date: new Date(2025, 3, 20),
    title: "Concours de Cuisine",
    time: "14:00 - 17:00",
    location: "Cuisine pédagogique",
    description:
      "Participez à notre grand concours de cuisine ! Montrez vos talents culinaires et impressionnez le jury avec vos plats créatifs.",
    cover: defaultEventsCover,
    icon: defaultEventsCover,
  },
};


const detailsLink = {
  clubDetails: "../clubs/club-details.html",
  eventDetails: "../events/event-details.html",
  newDetails: "../news/new-details.html",
};
const searchLocation = '../search.html'
const mainContainer = document.getElementById("eventsMain");
const navbar = document.getElementById("top-nav");
const banner = document.getElementById("banner");
document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbar, logoLink, logo, links, searchLocation);
  generateBanner(banner, bannerContent);

  generateCard(events, mainContainer, "events", "events", detailsLink);

  cardStyle();
  setCardDateStyle();

  const joinBtns = document.querySelectorAll(".btn-join");
  goToLink(links.adhésion, joinBtns);
});
