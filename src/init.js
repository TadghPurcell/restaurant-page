function createHeader() {
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
  headerTabs.appendChild(btnHome);

  const btnMenu = document.createElement("button");
  btnMenu.classList.add("btn", "btn-menu");
  btnMenu.textContent = "Menu";
  headerTabs.appendChild(btnMenu);

  const btnContact = document.createElement("button");
  btnContact.classList.add("btn", "btn-contact");
  btnContact.textContent = "Contact";
  headerTabs.appendChild(btnContact);

  header.appendChild(headerTabs);

  return header;
}

export default createHeader;
