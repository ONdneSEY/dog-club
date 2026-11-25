const menu = document.querySelector(".modile-menu");
const menuOpenButton = document.querySelector(".menu-btn-open");
const menuCloseButton = document.querySelector(".menu-btn-close");

const targetMenu = () => menu.classList.toggle("is-hidden");

menuOpenButton.addEventListener("click", targetMenu);
menuCloseButton.addEventListener("click", targetMenu);
