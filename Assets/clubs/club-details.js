import { setNavbar, logo, cardStyle } from "../index.js";

const logoLink = "../images/logo.png";
const navbar = document.getElementById("top-nav");
const banner = document.getElementById("banner");
const links = {
  accueil: "../../index.html",
  clubs: "./clubs.html",
  événements: "../events/events.html",
  actualiés: "../news/news.html",
  adhésion: "../membership/membership.html",
  contact: "../contact/contact.html",
};
const clubs = {
  basketball: {
    title: "Club de Basket",
    description:
      "Rejoins une équipe dynamique, perfectionne ton jeu et participe à des matchs passionnants dans une ambiance conviviale.",
    cover: "../images/basket.png",
    icon: "../images/ball.png",
    date: "Lundi",
    place: "Terrain de basket",
    startTime: "17h",
    endtime: "19h",
    member: "30",
    email: "basketclub@mail.hei.school",
  },
  maths: {
    title: "Club de Mathématiques",
    description:
      "Plonge dans l'univers des chiffres, résous des énigmes complexes et participe à des compétitions mathématiques stimulantes.",
    cover: "../images/maths.jpg",
    icon: "../images/book.png",
  },
  music: {
    title: "Club de Musique",
    description:
      "Découvre, crée et partage ta passion pour la musique dans un espace dédié aux mélomanes et artistes en herbe.",
    cover: "../images/music.jpg",
    icon: "../images/favorite.png",
  },
  dance: {
    title: "Club de Danse",
    description:
      "Exprime-toi à travers la danse, apprends de nouveaux styles et participe à des spectacles et événements artistiques.",
    cover: "../images/dance.jpg",
  },
  football: {
    title: "Club de Football",
    description:
      "Joue en équipe, développe tes compétences et dispute des matchs passionnants dans une ambiance sportive et amicale.",
    cover: "../images/football.jpg",
  },
  coding: {
    title: "Club de Codage",
    description:
      "Apprends à programmer, crée tes propres projets et découvre les secrets du développement web et logiciel.",
    cover: "../images/coding.jpg",
  },
  cooking: {
    title: "Club de Cuisine",
    description:
      "Apprends de nouvelles recettes, maîtrise l'art culinaire et partage ta passion pour la cuisine avec d'autres gourmets.",
    cover: "../images/cooking.jpg",
  },
  chess: {
    title: "Club d'Échecs",
    description:
      "Affûte ton esprit stratégique, affronte d'autres joueurs et participe à des tournois passionnants.",
    cover: "../images/chess.jpg",
  },
};
const clubKey = new URLSearchParams(window.location.search).get("club");
const clubData = clubs[clubKey];
// const activities = [
//   { id: "1", title: "Débats hebdomadaires" },
//   { id: "2", title: `Ateliers d'éloquence` },
//   { id: "3", title: `Participation au Concours National d'Éloquence` },
//   { id: "4", title: `Rencontres avec d'autres ${data}` },
// ];

if (clubData) {
  banner.innerHTML = `<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div
              class="relative h-64 w-64 rounded-full overflow-hidden border-4 border-secondary-500 flex-shrink-0"
            >
              <img
                alt="${clubData.title}"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                class="object-cover absolute h-full w-full inset-0"
                src="${clubData.cover}"
              />
            </div>
            <div>
              <h1 class="text-4xl font-bold mb-4">${clubData.title}</h1>
              <p class="text-xl mb-6">
                ${clubData.description}
              </p>
              <div class="flex flex-wrap gap-4 text-sm">
                <div class="flex items-center ">
                  <p><i class="fa-regular fa-calendar"></i> ${clubData.date}, ${clubData.startTime}-${clubData.endtime}</p>
                </div>
                <div class="flex items-center">
                  <P><i class="fa-solid fa-location-dot"></i> ${clubData.place}</P>
                </div>
                <div class="flex items-center">
                  <p><i class="fa-solid fa-user-group"></i> ${clubData.member} membres</p>
                </div>
                <div class="flex items-center">
                  <P><i class="fa-solid fa-email"></i> ${clubData.email}</P>
                </div>
              </div>
            </div>
          </div>
        </div>`;
} else {
  banner.innerHTML = `<div class="w-full h-full text-center "><h1 class="text-4xl">Club introuvable</h1></div>`;
}

// const clubData = clubs[clubKey];
// if (clubData) {
//   document.getElementById("club-name").textContent = clubData.name;
//   document.getElementById("club-description").textContent =
//     clubData.description;
//   document.getElementById("club-cover").src = clubData.cover;
// } else {
//   document.getElementById("club-name").textContent = "Club introuvable";
// }

document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbar, logoLink, logo, links);
});
