import { setNavbar } from "../index.js";

const links = {
  acceuil: "./../../index.html",
  clubs: "./../clubs/clubs.html",
  événements: "./../events/events.html",
  actualiés: "./../news/news.html",
  adhésion: "./../membership/membership.html",
  contact: "./contact.html",
};
const logoLink = "./../images/logo.png";
document.addEventListener("DOMContentLoaded", () => {
  setNavbar(logoLink, links);
});
