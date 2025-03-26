import {
  setNavbar,
  logo,
  cardStyle,
  goToLink,
  generateBanner,
} from "../index.js";

export const detailsLink = {
  clubDetails: "./club-details.html",
  eventDetails: "./event-details.html",
  newDetails: "./new-details.html",
};
const defaultClubsCover = `../images/default-clubs.jpg`;

export const searchLocation = `../search.html`;
const links = {
  accueil: "../../index.html",
  clubs: "./clubs.html",
  événements: "../events/events.html",
  actualiés: "../news/news.html",
  adhésion: "../membership/membership.html",
  contact: "../contact/contact.html",
};
const logoLink = "../images/logo.png";
const navbar = document.getElementById("top-nav");
const clubMain = document.getElementById("clubMain");

const sections = {
  sport: {
    basketball: {
      title: "Club de Basket",
      description:
        "Rejoins une équipe dynamique, perfectionne ton jeu et participe à des matchs passionnants dans une ambiance conviviale.",
      cover: "../images/basket.png",
      icon: "../images/ball.png",
    },
    football: {
      title: "Club de Football",
      description:
        "Joue en équipe, développe tes compétences et dispute des matchs passionnants dans une ambiance sportive et amicale.",
      cover: defaultClubsCover,
    },
    dance: {
      title: "Club de Danse",
      description:
        "Exprime-toi à travers la danse, apprends de nouveaux styles et participe à des spectacles et événements artistiques.",
      cover: defaultClubsCover,
    },
  },
  sciences: {
    maths: {
      title: "Club de Mathématiques",
      description:
        "Plonge dans l'univers des chiffres, résous des énigmes complexes et participe à des compétitions mathématiques stimulantes.",
      cover: "../images/maths.jpg",
      icon: "../images/book.png",
    },
    coding: {
      title: "Club de Codage",
      description:
        "Apprends à programmer, crée tes propres projets et découvre les secrets du développement web et logiciel.",
      cover: defaultClubsCover,
    },
  },
  arts: {
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
      cover: defaultClubsCover,
    },
  },
  cuisine: {
    cooking: {
      title: "Club de Cuisine",
      description:
        "Apprends de nouvelles recettes, maîtrise l'art culinaire et partage ta passion pour la cuisine avec d'autres gourmets.",
      cover: defaultClubsCover,
    },
  },
  stratégie: {
    chess: {
      title: "Club d'Échecs",
      description:
        "Affûte ton esprit stratégique, affronte d'autres joueurs et participe à des tournois passionnants.",
      cover: defaultClubsCover,
    },
  },
};

const generateSection = (objectSection) => {
  Object.entries(objectSection).forEach(([objectKey, objectData]) => {
    clubMain.innerHTML += `
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2
          class="text-2xl font-bold text-primary-700 mb-8 pb-2 border-b border-gray-400"
        >
          ${objectKey}
        </h2>
        <div id="${objectKey}"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ></div>
      </div>
    </section>
    `;
7
    const cardContainer = document.getElementById(`${objectKey}`);
    generateCardClubs(objectSection[objectKey], cardContainer);
  });
};

const generateCardClubs = (clubs, container) => {
  Object.entries(clubs).forEach(([objectKey, objectData]) => {
    const defaultCover = defaultClubsCover;
    const icon = `<img src="${
      objectData.icon ? objectData.icon : defaultCover
    }" alt="Icon club" class="w-10 h-10" />`;
    const description = `<p class="text-normal text-gray-700 mt-2 line-clamp-3">${objectData.description}</p>`;

    const card = document.createElement("div");
    card.className =
      "item card bg-gray-100 rounded-lg shadow-md overflow-hidden borde transition-all duration-300r";

    card.innerHTML = `

      <div class="divCover bg-cover bg-center h-48 relative">
      </div>
      <div class="p-6">
        <div class="text-xl font-bold text-primary-500 flex items-center gap-2">
          ${icon}
          <h3 class= "line-clamp-2">${objectData.title}</h3>
        </div>
        ${description}
        <button
          data-club-key="${objectKey}"
          class="phares-card-btn text-sm mt-4 inline-flex items-center text-primary-700 font-normal px-3 py-1 border-primary-700 border-opacity-25 border-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-25 transition-all duration-500"
        >
          En savoir plus →
        </button>
      </div>`;

    const divCover = card.querySelector(".divCover");
    divCover.style.backgroundImage = `url('${
      objectData.cover ? objectData.cover : defaultCover
    }')`;

    container.appendChild(card);
  });

  document.querySelectorAll(`.phares-card-btn`).forEach((button) => {
    const clubKey = button.getAttribute("data-club-key");
    button.addEventListener("click", () => {
      location.href = `${detailsLink.clubDetails}?club=${clubKey}`;
    });
  });
};

const bannerContent = {
  title: "Nos CLubs",
  description:
    "Découvrez la diversité des clubs proposés par HEI et trouvez celui qui correspond à vos passions.",
};
const bannerContainer = document.getElementById("banner");
const joinBtns = document.querySelectorAll(".btn-join");
document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbar, logoLink, logo, links, searchLocation);
  generateBanner(bannerContainer, bannerContent);
  generateSection(sections);

  goToLink(links.adhésion, joinBtns);

  cardStyle();
});
