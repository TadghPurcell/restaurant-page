export default function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "The Butter Slip";
  header.appendChild(logo);

  const headerTabs = document.createElement("div");
  headerTabs.classList.add("header-tabs");

  const btnHome = document.createElement("button");
  btnHome.classList.add("btn", "btn-home");
  btnHome.textContent = "Home";
  btnHome.setAttribute("autofocus", "");
  headerTabs.appendChild(btnHome);

  btnHome.addEventListener("click", function () {
    document.querySelector(".home").classList.remove("hidden");
    document.querySelector(".menu").classList.add("hidden");
    document.querySelector(".contact").classList.add("hidden");
    // btnMenu.classList.add("hidden");
    // btnContact.classList.add("hidden");
  });

  const btnMenu = document.createElement("button");
  btnMenu.classList.add("btn", "btn-menu");
  btnMenu.textContent = "Menu";
  headerTabs.appendChild(btnMenu);

  btnMenu.addEventListener("click", function () {
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".menu").classList.remove("hidden");
    document.querySelector(".contact").classList.add("hidden");
  });

  const btnContact = document.createElement("button");
  btnContact.classList.add("btn", "btn-contact");
  btnContact.textContent = "Contact";
  headerTabs.appendChild(btnContact);

  btnContact.addEventListener("click", function () {
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".menu").classList.add("hidden");
    document.querySelector(".contact").classList.remove("hidden");
  });

  header.appendChild(headerTabs);

  return header;
}
