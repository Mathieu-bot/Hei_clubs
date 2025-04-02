export const logo = "HEI clubs";
const sections = {
  phares: {
    title: "Nos clubs phares",
    description: `Découvrez quelques-uns de nos clubs les plus populaires qui offrent
            des opportunités uniques de développement personnel et
            d'apprentissage.`,
    button: "Voir tous les clubs →",
    background: `bg-gray-200`,
  },
  events: {
    title: "Événements à venir",
    description: `Ne manquez pas les prochains événements organisés par nos clubs.
            Venez découvrir, participer et vous amuser !`,
    button: "Voir tous les événements →",
    background: `bg-gray-100`,
  },
  news: {
    title: "Dernières actualités",
    description: `Restez informés des dernières nouvelles et réalisations de nos
            clubs.`,
    button: "Voir tous les actualités →",
    background: `bg-gray-200`,
  },
};
const links = {
  accueil: "index.html",
  clubs: "Assets/clubs/clubs.html",
  événements: "Assets/events/events.html",
  actualités: "Assets/news/news.html",
  adhésion: "Assets/membership/membership.html",
  contact: "Assets/contact/contact.html",
};
const detailsLink = {
  clubDetails: "Assets/clubs/club-details.html",
  eventDetails: "Assets/events/event-details.html",
  newDetails: "Assets/news/new-details.html",
};
export const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const defaultClubsCover = `Assets/images/default-clubs.jpg`;
const defaultNewsCover = `Assets/images/default-articles.jpg`;
const defaultEventsCover = `Assets/images/default-events.png`;
const topNav = document.getElementById("top-nav");
const logoImage = "Assets/images/logo.png";
export const clubs = {
  basketball: {
    title: "Club de Bascket",
    description:
      "Rejoins une équipe dynamique, améliore tes skills et participe à des matchs passionnants dans une ambiance sportive.",
    cover: "Assets/images/basket.png",
    icon: "Assets/images/ball.png",
  },
  maths: {
    title: "Club de Mathématiques",
    description:
      "Plonge dans l'univers des chiffres, résous des énigmes complexes et participe à des compétitions mathématiques stimulantes.",
    cover: "Assets/images/maths.jpg",
    icon: "Assets/images/book.png",
  },
  music: {
    title: "HEI Music Club",
    description:
      "Découvre, crée et partage ta passion pour la musique dans un espace dédié aux mélomanes et artistes en herbe.",
    cover: "Assets/images/music.jpg",
    icon: "Assets/images/favorite.png",
  },
};
export const events = {
  basketball: {
    name: "Club de Bascket",
    date: new Date(2025, 2, 12, 15),
    title: "Tournoi inter-institut de bascket",
    time: "15:00 - 17:00",
    location: "Palis de Sport Mahamasina",
    description:
      "Le club de basket participe à la compétition 'Smatchin' de bascket, et vous invite à supporter l'équipe.",
    cover: "Assets/images/smatchin.jpg",
  },
  music: {
    name: "HEI Music Club",
    date: new Date(2025, 2, 28, 19),
    title: "Concert de Printemps",
    time: "19:00 - 21:00",
    location: "Rooftop",
    description:
      "L'Ensemble Musical vous invite à son concert de printemps. Au programme : musique classique, jazz et quelques surprises.",
  },
  chess: {
    name: "Club d'Échecs",
    date: new Date(2025, 3, 25, 9),
    title: "Championnat d'Échecs",
    time: "09:00 - 18:00",
    location: "Salle Algèbre",
    description:
      "Le championnat annuel d'échecs de l'école est ouvert à tous les élèves. Plusieurs catégories selon les niveaux et des prix à gagner.",
  },
};
export const news = {
  basketball: {
    name: "Club de basket",
    title: "Le Club de Basket enchaîne les victoires !",
    publication: new Date(2025, 2, 28),
    description:
      "L'équipe de basket de l'école a remporté tous ses matchs cette saison ! Une performance impressionnante qui montre leur détermination et leur talent.",
    cover: "Assets/images/victory.jpg",
  },
  maths: {
    name: "Club de Mathématiques",
    title: "Le Club de Mathématiques organise un concours interscolaire",
    publication: new Date(2025, 2, 5),
    description:
      "Le Club de Mathématiques lance un grand concours interscolaire de logique et d’algèbre avec des prix à la clé !",
    cover: "Assets/images/maths.jpg",
  },
  music: {
    name: "HEI Music Club",
    title: "Le Club de Musique enregistre son premier album",
    publication: new Date(2025, 2, 20),
    description:
      "Les musiciens du Club de Musique dévoilent leur premier album collaboratif, mêlant différents styles et influences.",
    cover: "Assets/images/music.png",
  },
};

export const footer = () => {
  return `
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div>
        <h3 class="text-lg font-semibold mb-4">
          Haute École d'Informatique
        </h3>
        <p class="text-sm text-gray-300 mb-4">
          HEI propose une variété de clubs pour enrichir l'expérience
          éducative de nos élèves et développer leurs talents.
        </p>
        <div class="flex space-x-4 text-secondary-500">
          <a href="http://facebook.hei" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook text-4xl"></i></a>
          <a href="http://linkedin.hei" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin text-4xl"></i></a>
          <a href="http://instagram.hei" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram text-4xl"></i></a>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
        <ul class="nav-link space-y-2 text-sm"></ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Adresse</h3>
        <address class="text-sm text-gray-300 not-italic space-y-4">
          <p>II J 161 R Ambodivoanjo</p>
          <p>Ivandry Antananarivo</p>
          <p>101, Madagascar</p>
        </address>
      </div>
    </div>
    <div class="mt-8 border-t border-gray-700 pt-8 text-center">
      <p class="text-sm text-gray-300">
        © 2025 Haute École d'Informatique. Tous droits réservés.
      </p>
    </div>
  </div>
`;
};

export const setNavbar = (nav, logoImage, logo, linkObject, searchLocation) => {
  var navBars = document.querySelector(".nav-bar");
  if (navBars) {
    navBars.innerHTML = `
    <div class="flex items-center gap-4">
      <img src="${logoImage}" class="hidden md:block w-10 lg:w-20 relative bottom-1" alt="Hei Logo" />
      <a href="#" class="text-xl font-bold text-white">${logo}</a>
    </div>
    <div class="nav-links hidden lg:flex items-center space-x-6">
      <ul class="nav-link flex items-center space-x-6"></ul>
    </div>
     <div class="hidden md:flex items-center justify-end h-9 ">
            <input
                id="searchInput"
                type="search"
                placeholder="Rechercher..."
                class="px-4 h-full max-w-0 opacity-0 pl-2 text-white bg-gray-500 rounded-lg focus:outline-none border-2 border-primary-500 focus:border-x-secondary-500 transition-all duration-500 "
            />
       
          <button id="searchButton" class="w-10 h-full text-secondary-500 bg-secondary-500 bg-opacity-50 text-xl text-center rounded-full">
              <i class="fa-solid fa-magnifying-glass"></i>
          </button>
      </div>
      
    <div class="lg:hidden flex items-center">
      <button id="menu-toggle" class="text-white focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>`;
  }

  const navLink = document.querySelectorAll(".nav-link");
  Object.entries(linkObject).forEach(([key, link]) => {
    if (navLink) {
      navLink.forEach((el) => {
        el.innerHTML += `
        <li>
          <a
            href="${link}" ${
          !link.split("/")[1]
            ? window.location.pathname.includes(link)
              ? `aria-current = "page"`
              : ``
            : window.location.pathname.includes(
                `${link.split("/")[1].replace(".html", "")}`
              )
            ? `aria-current = "page"`
            : ``
        }
            class=" aria-[current=page]:text-secondary-500 text-white md:text-base hover:text-secondary-500 font-semibold capitalize transition-all duration-300"
            >${key}</a
          >
        </li>  `;
      });
    }
  });

  const searchButton = document.getElementById("searchButton");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      document.getElementById("searchInput").classList.toggle("max-w-0");
      document.getElementById("searchInput").classList.toggle("opacity-0");
      document.getElementById("searchInput").classList.toggle("max-w-full");
    });
  }

  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      window.location.pathname.includes("search")
        ? filterResults(document.getElementById("searchInput").value.trim())
        : performSearch(searchLocation),
        filterResults(document.getElementById("searchInput").value.trim());
    }
  });
  

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.remove("p-4");
      nav.classList.add("bg-opacity-95", "p-0");
    } else {
      nav.classList.remove("bg-opacity-95", "p-0");
      nav.classList.add("p-4");
    }
  });
};

export const generateSection = (container, sectionObject) => {
  Object.entries(sectionObject).forEach(([sectionKey, sectionData]) => {
    container.innerHTML += `
<section id=${sectionKey} class= ${sectionData.background}>
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 class="text-center text-4xl font-semibold text-primary-500">
      ${sectionData.title}
    </h2>
    <p
      class="text-center max-w-3xl m-auto text-lg mt-3 mb-10 text-gray-600"
    >
      ${sectionData.description}
    </p>
    <div
      class="${sectionKey}-container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    ></div>
    <div class="mt-12 w-full flex justify-center">
      <button
        class="btn-${sectionKey} font-normal px-3 py-2 border border-gray-900 rounded-lg text-gray-900 bg-white hover:bg-gray-900 hover:bg-opacity-50 hover:text-white transition-all duration-500"
      >
        ${sectionData.button}
      </button>
    </div>
  </div>
</section>`;
  });
};

export const generateCard = (clubs, container, section, page, detailsLink) => {
  let icon;
  let cardBtnContent;
  let cardBtnClass;
  let defaultCover;
  let dateInfo;
  let timeInfo;
  let description;
  let link;
  let name;
  let signe;

  Object.entries(clubs).forEach(([clubKey, clubData]) => {
    switch (section) {
      case "phares":
        cardBtnClass = "phares-card-btn";
        cardBtnContent = "En savoir plus →";
        defaultCover = "Assets/images/default-events.png";
        icon = `<img src="${
          clubData.icon ? clubData.icon : defaultCover
        }" alt="Icon club" class="w-10 h-10" />`;
        description = `<p class="text-normal text-gray-700 mt-2 line-clamp-3">${clubData.description}</p>`;
        link = detailsLink.clubDetails;
        name = ``;
        break;
      case "events":
        cardBtnClass = "events-card-btn";
        cardBtnContent = "Détails →";
        defaultCover = defaultEventsCover;
        icon = `<img src="${
          clubData.icon ? clubData.icon : defaultCover
        }" alt="Icon event" class="w-5 h-5 rounded-sm" />`;
        description =
          page == "events"
            ? `<p class="text-normal text-gray-700 mt-2 line-clamp-3">${clubData.description}</p>`
            : `<p class="text-normal text-gray-700 mt-2 line-clamp-2">${clubData.description}</p>`;
        link = detailsLink.eventDetails;
        name = ``;
        break;
      case "news":
        cardBtnClass = "news-card-btn";
        cardBtnContent = "Lire l'article →";
        defaultCover = defaultNewsCover;
        icon = ``;
        description = `<p class="text-normal text-gray-700 mt-2 line-clamp-3">${clubData.description}</p>`;
        link = detailsLink.newDetails;
        name = `<p class="mb-2"><span class= "text-xs px-2 py-1 text-secondary-500 rounded-lg bg-secondary-50">${clubData.name}</span></p>`;
        break;
      default:
        return;
    }

    signe = !page
      ? ``
      : page == "search"
      ? `<p class="mb-2 -mt-1"><span class= "text-xs px-2 py-1 text-primary-500 rounded-lg bg-primary-50">${section}</span></p>`
      : ``;

    let publication = clubData.publication
      ? `<p class="text-sm text-gray-500 my-2 truncate">Publié le ${clubData.publication.getDate()} ${
          months[clubData.publication.getMonth()]
        } ${clubData.publication.getFullYear()}`
      : ``;

    dateInfo = clubData.date
      ? `<div class="month-day">
          <p class="font-normal truncate">${
            months[clubData.date.getMonth()]
          }</p>
          <p class="text-2xl font-semibold">${clubData.date.getDate()}</p>
         </div>`
      : ``;

    timeInfo =
      clubData.time || clubData.location
        ? page === "events"
          ? `<p class="text-gray-500 mt-2 mb-1 truncate"><i class="fa-regular fa-calendar-days"></i> ${clubData.date.getFullYear()} - ${
              clubData.date.getMonth() + 1
            } - ${clubData.date.getDate()} | ${
              clubData.time
            } </p> <p class="text-gray-500 mb-1 truncatee"> <i class="fa-solid fa-location-dot"></i> ${
              clubData.location || ""
            }</p>`
          : `<p class="text-gray-500 my-2 truncate"><i class="fa-regular fa-calendar-days"></i> ${
              clubData.time || ""
            } | <i class="fa-solid fa-location-dot"></i> ${
              clubData.location || ""
            }</p>`
        : ``;

    const card = document.createElement("div");
    card.className =
      "item card bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300r";

    card.innerHTML = `

      <div class="divCover bg-cover bg-center h-48 relative">
        ${dateInfo}
      </div>
      <div class="p-6">
        ${signe}
        ${name}
        <div class="text-xl font-bold text-primary-500 flex items-center gap-2">
          ${icon}
          <h3 class= "line-clamp-2">${clubData.title}</h3>
        </div>
        ${timeInfo}
        ${publication}
        ${description}
        <button
          data-club-key="${clubKey}"
          class="${cardBtnClass} text-sm mt-4 inline-flex items-center text-primary-700 font-normal px-3 py-1 border-primary-700 border-opacity-25 border-2 rounded-lg hover:bg-primary-500 hover:bg-opacity-25 transition-all duration-500"
        >
          ${cardBtnContent}
        </button>
      </div>`;

    const divCover = card.querySelector(".divCover");
    divCover.style.backgroundImage = `url('${
      clubData.cover ? clubData.cover : defaultCover
    }')`;

    container.appendChild(card);
  });

  document.querySelectorAll(`.${section}-card-btn`).forEach((button) => {
    const clubKey = button.getAttribute("data-club-key");
    button.addEventListener("click", () => {
      window.location.href = `${link}?club=${clubKey}`;
    });
  });
};

export const setCardDateStyle = () => {
  const monthDays = document.querySelectorAll(".month-day");
  monthDays.forEach((day, i) => {
    day.className =
      "transition-bg duration-700 ease-in-out text-white group-hover:bg-white max-w-16 p-2 text-primary-500 rounded-lg shadow-md absolute top-4 left-4 text-center";
    if (i % 2 === 0) {
      day.classList.add("bg-secondary-500", "group-hover:text-secondary-500");
    } else {
      day.classList.add("bg-primary-500", "group-hover:text-primary-500");
    }
  });
};

export const cardStyle = () => {
  var cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.classList.add(
      "group",
      "border",
      "border-b-8",
      "border-t-0",
      "hover:shadow-slate-500"
    );
    if (i % 2 === 0) {
      card.classList.add("border-primary-500");
    } else {
      card.classList.add("border-secondary-500");
    }
  });
};

export const goToLink = (Link, buttonSelector) => {
  buttonSelector.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let club = e.target.dataset.club;
      location.href = `${Link}?club=${club}`;
    });
  });
};

const searchLocation = `Assets/search.html`;
export const performSearch = (searchLocation) => {
  let searchTerm = document.getElementById("searchInput").value.trim();

  if (searchTerm) {
    // Stocker le terme de recherche dans sessionStorage pour le conserver pendant la navigation
    sessionStorage.setItem('lastSearchTerm', searchTerm);
    window.location.href = `${searchLocation}?q=${encodeURIComponent(searchTerm)}`;
  } else {
    alert("Veuillez entrer un terme de recherche.");
  }
};
export const filterResults = (searchTerm) => {
  if (!searchTerm) return;
  
  searchTerm = searchTerm.toLowerCase();
  const items = document.querySelectorAll(".item");
  let hasResults = false;

  items.forEach((item) => {
    const title = item.querySelector('.title')?.textContent?.toLowerCase() || '';
    const description = item.querySelector('.description')?.textContent?.toLowerCase() || '';
    const searchText = `${title} ${description}`;

    if (searchText.includes(searchTerm)) {
      item.style.display = "";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  return hasResults;
};

const navbar = document.getElementById("top-nav");
const main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer").innerHTML = footer();
  generateSection(main, sections);
  const phareContainer = document.querySelector(".phares-container");
  const eventsContainer = document.querySelector(".events-container");
  const newsContainer = document.querySelector(".news-container");

  const clubsBtns = document.querySelectorAll(".btn-phares");
  const joinBtns = document.querySelectorAll(".btn-join");
  const contactBtns = document.querySelectorAll(".btn-contact");
  const eventBtns = document.querySelectorAll(".btn-events");
  const newsBtns = document.querySelectorAll(".btn-news");

  goToLink(links.clubs, clubsBtns);
  goToLink(links.adhésion, joinBtns);
  goToLink(links.événements, eventBtns);
  goToLink(links.contact, contactBtns);
  goToLink(links.actualités, newsBtns);

  setNavbar(navbar, logoImage, logo, links, searchLocation);
  setTimeout(() => {
    generateCard(clubs, phareContainer, `phares`, "", detailsLink);
    generateCard(events, eventsContainer, `events`, "", detailsLink);
    generateCard(news, newsContainer, `news`, "", detailsLink);
    cardStyle();
    setCardDateStyle();
  }, 500);
});

export const generateBanner = (container, object) => {
  container.innerHTML = `
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold mb-6">${object.title}</h1>
        <p class="text-xl max-w-2xl mx-auto">${object.description}</p>
      </div>
  `;
};
