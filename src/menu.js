function createDrinksMenu() {
  const drinksMenu = document.createElement("div");
  drinksMenu.classList.add("drinks-menu");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");

  const menuTitleName = document.createElement("h1");
  menuTitleName.classList.add("menu-title-name");
  menuTitleName.textContent = "Drinks";

  menuTitle.appendChild(menuTitleName);
  drinksMenu.appendChild(menuTitle);

  const drinks = document.createElement("div");
  drinks.classList.add("drinks");

  const drinksItem1 = document.createElement("div");
  drinksItem1.classList.add("item", "item--1");

  const drinksItem1Title = document.createElement("h3");
  drinksItem1Title.classList.add("title");
  drinksItem1Title.textContent = "Espresso";
  const drinksItem1Content = document.createElement("p");
  drinksItem1Content.classList.add("content");
  const drinksItem1Price = document.createElement("p");
  drinksItem1Price.classList.add("price");
  drinksItem1Price.textContent = "€2.80";

  drinksItem1.appendChild(drinksItem1Title);
  drinksItem1.appendChild(drinksItem1Content);
  drinksItem1.appendChild(drinksItem1Price);
  drinks.appendChild(drinksItem1);

  const drinksItem2 = document.createElement("div");
  drinksItem2.classList.add("item", "item--2");

  const drinksItem2Title = document.createElement("h3");
  drinksItem2Title.classList.add("title");
  drinksItem2Title.textContent = "Americano";
  const drinksItem2Content = document.createElement("p");
  drinksItem2Content.classList.add("content");
  const drinksItem2Price = document.createElement("p");
  drinksItem2Price.classList.add("price");
  drinksItem2Price.textContent = "€3.20";

  drinksItem2.appendChild(drinksItem2Title);
  drinksItem2.appendChild(drinksItem2Content);
  drinksItem2.appendChild(drinksItem2Price);
  drinks.appendChild(drinksItem2);

  const drinksItem3 = document.createElement("div");
  drinksItem3.classList.add("item", "item--3");

  const drinksItem3Title = document.createElement("h3");
  drinksItem3Title.classList.add("title");
  drinksItem3Title.textContent = "Flat White";
  const drinksItem3Content = document.createElement("p");
  drinksItem3Content.classList.add("content");
  const drinksItem3Price = document.createElement("p");
  drinksItem3Price.classList.add("price");
  drinksItem3Price.textContent = "€3.60";

  drinksItem3.appendChild(drinksItem3Title);
  drinksItem3.appendChild(drinksItem3Content);
  drinksItem3.appendChild(drinksItem3Price);
  drinks.appendChild(drinksItem3);

  const drinksItem4 = document.createElement("div");
  drinksItem4.classList.add("item", "item--4");

  const drinksItem4Title = document.createElement("h3");
  drinksItem4Title.classList.add("title");
  drinksItem4Title.textContent = "Cappuccino";
  const drinksItem4Content = document.createElement("p");
  drinksItem4Content.classList.add("content");
  const drinksItem4Price = document.createElement("p");
  drinksItem4Price.classList.add("price");
  drinksItem4Price.textContent = "€4";

  drinksItem4.appendChild(drinksItem4Title);
  drinksItem4.appendChild(drinksItem4Content);
  drinksItem4.appendChild(drinksItem4Price);
  drinks.appendChild(drinksItem4);

  const drinksItem5 = document.createElement("div");
  drinksItem5.classList.add("item", "item--5");

  const drinksItem5Title = document.createElement("h3");
  drinksItem5Title.classList.add("title");
  drinksItem5Title.textContent = "Latte";
  const drinksItem5Content = document.createElement("p");
  drinksItem5Content.classList.add("content");
  const drinksItem5Price = document.createElement("p");
  drinksItem5Price.classList.add("price");
  drinksItem5Price.textContent = "€4.10";

  drinksItem5.appendChild(drinksItem5Title);
  drinksItem5.appendChild(drinksItem5Content);
  drinksItem5.appendChild(drinksItem5Price);
  drinks.appendChild(drinksItem5);

  const drinksItem6 = document.createElement("div");
  drinksItem6.classList.add("item", "item--6");

  const drinksItem6Title = document.createElement("h3");
  drinksItem6Title.classList.add("title");
  drinksItem6Title.textContent = "Mocha";
  const drinksItem6Content = document.createElement("p");
  drinksItem6Content.classList.add("content");
  const drinksItem6Price = document.createElement("p");
  drinksItem6Price.classList.add("price");
  drinksItem6Price.textContent = "€4.20";

  drinksItem6.appendChild(drinksItem6Title);
  drinksItem6.appendChild(drinksItem6Content);
  drinksItem6.appendChild(drinksItem6Price);
  drinks.appendChild(drinksItem6);

  const drinksItem7 = document.createElement("div");
  drinksItem7.classList.add("item", "item--7");

  const drinksItem7Title = document.createElement("h3");
  drinksItem7Title.classList.add("title");
  drinksItem7Title.textContent = "Tea";
  const drinksItem7Content = document.createElement("p");
  drinksItem7Content.classList.add("content");
  const drinksItem7Price = document.createElement("p");
  drinksItem7Price.classList.add("price");
  drinksItem7Price.textContent = "€2.80";

  drinksItem7.appendChild(drinksItem7Title);
  drinksItem7.appendChild(drinksItem7Content);
  drinksItem7.appendChild(drinksItem7Price);
  drinks.appendChild(drinksItem7);

  const drinksItem8 = document.createElement("div");
  drinksItem8.classList.add("item", "item--8");

  const drinksItem8Title = document.createElement("h3");
  drinksItem8Title.classList.add("title");
  drinksItem8Title.textContent = "Hot Chocolate";
  const drinksItem8Content = document.createElement("p");
  drinksItem8Content.classList.add("content");
  const drinksItem8Price = document.createElement("p");
  drinksItem8Price.classList.add("price");
  drinksItem8Price.textContent = "€4";

  drinksItem8.appendChild(drinksItem8Title);
  drinksItem8.appendChild(drinksItem8Content);
  drinksItem8.appendChild(drinksItem8Price);
  drinks.appendChild(drinksItem8);

  drinksMenu.append(drinks);

  return drinksMenu;
}

function createBreakfastMenu() {
  const breakfastMenu = document.createElement("div");
  breakfastMenu.classList.add("breakfast-menu");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");

  const menuTitleName = document.createElement("h1");
  menuTitleName.classList.add("menu-title-name");
  menuTitleName.textContent = "Breakfast";

  menuTitle.appendChild(menuTitleName);
  breakfastMenu.appendChild(menuTitle);

  return breakfastMenu;
}

function createLunchMenu() {
  const lunchMenu = document.createElement("div");
  lunchMenu.classList.add("lunch-menu");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");

  const menuTitleName = document.createElement("h1");
  menuTitleName.classList.add("menu-title-name");
  menuTitleName.textContent = "Lunch";

  menuTitle.appendChild(menuTitleName);
  lunchMenu.appendChild(menuTitle);

  return lunchMenu;
}

export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu", "hidden");
  menu.appendChild(createBreakfastMenu());
  menu.appendChild(createLunchMenu());
  menu.appendChild(createDrinksMenu());

  return menu;
}
