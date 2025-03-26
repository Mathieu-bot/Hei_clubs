import {
  setNavbar,
  logo,
  generateBanner,
} from "../index.js";

const links = {
  acceuil: "./../../index.html",
  clubs: "./../clubs/clubs.html",
  événements: "./../events/events.html",
  actualiés: "./../news/news.html",
  adhésion: "./membership.html",
  contact: "./../contact/contact.html",
};
const logoLink = "./../images/logo.png";
const navbar = document.getElementById("top-nav");
const banner = document.getElementById("banner");
const bannerContent = {
  title: "",
  description: "",
};
const searchLocation = "../search.html";

document.addEventListener("DOMContentLoaded", () => {
  setNavbar(navbar, logoLink, logo, links, searchLocation);
  generateBanner(banner, bannerContent);
});
