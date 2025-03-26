import { setNavbar, logo, generateBanner, months } from "../index.js";

const links = {
  acceuil: "./../../index.html",
  clubs: "./../clubs/clubs.html",
  événements: "./../events/events.html",
  actualiés: "./news.html",
  adhésion: "./../membership/membership.html",
  contact: "./../contact/contact.html",
};
const bannerContent = {
  title: "Actualités des Clubs",
  description:
    "Découvrez les dernières nouvelles et réalisations des clubs de HEI.",
};
export const detailsLink = {
  clubDetails: "./club-details.html",
  eventDetails: "./event-details.html",
  newDetails: "./new-details.html",
};
const news = {
  basketball: {
    name: "Club de basket",
    title: "Le Club de Basket enchaîne les victoires !",
    publication: new Date(2025, 2, 28),
    author: "Administration",
    description:
      "L'équipe de basket de l'école a remporté tous ses matchs cette saison ! Une performance impressionnante qui montre leur détermination et leur talent.",
    cover: "../images/victory.jpg",
  },
  maths: {
    name: "Club de Mathématiques",
    title: "Le Club de Mathématiques organise un concours interscolaire",
    publication: new Date(2025, 2, 5),
    description:
      "Le Club de Mathématiques lance un grand concours interscolaire de logique et d’algèbre avec des prix à la clé !",
    cover: "../images/maths.jpg",
  },
  music: {
    name: "HEI Music Club",
    title: "Le Club de Musique enregistre son premier album",
    publication: new Date(2025, 2, 20),
    description:
      "Les musiciens du Club de Musique dévoilent leur premier album collaboratif, mêlant différents styles et influences.",
    cover: "../images/music.png",
  },
  robotics: {
    title: "Notre équipe de robotique remporte le premier prix régional",
    publication: new Date(2025, 1, 15),
    description:
      "L'équipe de robotique de l'École des Talents s'est distinguée lors de la compétition régionale en remportant la première place.",
  },
  art: {
    title: "Atelier avec l’artiste contemporaine Léa Durand",
    publication: new Date(2025, 1, 8),
    description:
      "L'Atelier d'Art a eu l'honneur d'accueillir l’artiste contemporaine Léa Durand pour une masterclass exceptionnelle.",
  },
  ecoClub: {
    title: "L’Éco-Club lance un projet de compostage à l’échelle de l’école",
    publication: new Date(2025, 0, 25),
    description:
      "Une initiative écologique ambitieuse pour réduire les déchets alimentaires de la cantine et sensibiliser aux enjeux du développement durable.",
  },
  chess: {
    name: "Club d'Échecs",
    title: "Tournoi d’Échecs du Club",
    publication: new Date(2025, 3, 10),
    description:
      "Le Club d’Échecs organise un tournoi ouvert à tous les élèves, du débutant au joueur confirmé.",
    
  },
};

const generateNewsCard = (
  container,
  newsObject,
  detailsLink,
  defaultNewsCover
) => {
  Object.entries(newsObject).forEach(([objectKey, objectData]) => {
    console.log(`${objectData.publication.getDate()} ${months[objectData.publication.getMonth()]} ${objectData.publication.getFullYear()}`);
    
    container.innerHTML += `
        <div class="card item grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg group">
          <div class="relative h-64 lg:h-auto rounded-lg overflow-hidden">
            <img
            alt="${objectData.title}"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="${objectData.cover ? objectData.cover : defaultNewsCover}"
              class="absolute h-full w-full inset-0 object-cover rounded-lg group-hover:scale-105"
            />
          </div>
          <div class="p-6 lg:col-span-2">
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-500"
                >${objectData.name}</span
              ><span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >robotique</span
              ><span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >compétition</span
              ><span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >succès</span
              >
            </div>
            <h2 class="text-2xl font-bold text-primary-500 mb-3">
              ${objectData.title}
            </h2>
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <span class="mr-4"><i class="fa-regular fa-calendar"></i> ${objectData.publication.getDate()} ${months[objectData.publication.getMonth()]} ${objectData.publication.getFullYear()}</span
              ><span><i class="fa fa-person"></i> ${objectData.author}</span>
            </div>
            <p class="text-gray-600 mb-6">
              ${objectData.description}
            </p>
            <button
            data-new-key="${objectKey}"
              class="news-card-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-secondary-500 text-primary-700 hover:bg-secondary-700 h-10 px-4 py-2"
            >
              Lire l'article complet
            </button>
          </div>
        </div>`;

    document.querySelectorAll(`.news-card-btn`).forEach((button) => {
      const clubKey = button.getAttribute("data-new-key");
      button.addEventListener("click", () => {
        window.location.href = `${detailsLink.newDetails}?club=${clubKey}`;
      });
    });
  });
};

const searchLocation = '../search.html'
const defaultNewsCover = "../images/default-articles.jpg";
const banner = document.getElementById("banner");
const navbar = document.getElementById("top-nav");
const logoLink = "../images/logo.png";
const container = document.querySelector(".news-container");
document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbar, logoLink, logo, links, searchLocation);
  generateBanner(banner, bannerContent);
  generateNewsCard(container, news, detailsLink, defaultNewsCover);
});
