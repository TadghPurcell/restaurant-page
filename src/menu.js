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

  const breakfast = document.createElement("div");
  breakfast.classList.add("breakfast");

  const breakfastItem1 = document.createElement("div");
  breakfastItem1.classList.add("item", "item--1");

  const breakfastItem1Title = document.createElement("h3");
  breakfastItem1Title.classList.add("title");
  breakfastItem1Title.textContent = "Granola";
  const breakfastItem1Content = document.createElement("p");
  breakfastItem1Content.classList.add("content");
  breakfastItem1Content.textContent =
    "Granola with acai berry, greek yoghurt, berries, honey & nuts";
  const breakfastItem1Price = document.createElement("p");
  breakfastItem1Price.classList.add("price");
  breakfastItem1Price.textContent = "€8.50";

  breakfastItem1.appendChild(breakfastItem1Title);
  breakfastItem1.appendChild(breakfastItem1Content);
  breakfastItem1.appendChild(breakfastItem1Price);
  breakfast.appendChild(breakfastItem1);

  const breakfastItem2 = document.createElement("div");
  breakfastItem2.classList.add("item", "item--2");

  const breakfastItem2Title = document.createElement("h3");
  breakfastItem2Title.classList.add("title");
  breakfastItem2Title.textContent = "Smashed Avocado";
  const breakfastItem2Content = document.createElement("p");
  breakfastItem2Content.classList.add("content");
  breakfastItem2Content.textContent =
    "Smashed avocado on toasted sourdough bread, topped with a poached egg and served with grilled tomatoes";
  const breakfastItem2Price = document.createElement("p");
  breakfastItem2Price.classList.add("price");
  breakfastItem2Price.textContent = "€11.20";
  const breakfastItem2AddOn = document.createElement("p");
  breakfastItem2AddOn.classList.add("addon");
  breakfastItem2AddOn.textContent = "Add Bacon €3.50";

  breakfastItem2.appendChild(breakfastItem2Title);
  breakfastItem2.appendChild(breakfastItem2Content);
  breakfastItem2.appendChild(breakfastItem2Price);
  breakfastItem2.appendChild(breakfastItem2AddOn);
  breakfast.appendChild(breakfastItem2);

  const breakfastItem3 = document.createElement("div");
  breakfastItem3.classList.add("item", "item--3");

  const breakfastItem3Title = document.createElement("h3");
  breakfastItem3Title.classList.add("title");
  breakfastItem3Title.textContent = "Blueberry & Banana Pancakes";
  const breakfastItem3Content = document.createElement("p");
  breakfastItem3Content.classList.add("content");
  breakfastItem3Content.textContent =
    "Buttermilk pancakes w/ blueberry home compote, mascarpone, maple syrup & hazelnuts";
  const breakfastItem3Price = document.createElement("p");
  breakfastItem3Price.classList.add("price");
  breakfastItem3Price.textContent = "€10.50";

  breakfastItem3.appendChild(breakfastItem3Title);
  breakfastItem3.appendChild(breakfastItem3Content);
  breakfastItem3.appendChild(breakfastItem3Price);
  breakfast.appendChild(breakfastItem3);

  const breakfastItem4 = document.createElement("div");
  breakfastItem4.classList.add("item", "item--4");

  const breakfastItem4Title = document.createElement("h3");
  breakfastItem4Title.classList.add("title");
  breakfastItem4Title.textContent = "Irish Brekkie Sandwich";
  const breakfastItem4Content = document.createElement("p");
  breakfastItem4Content.classList.add("content");
  breakfastItem4Content.textContent =
    "Bacon, sausage, Clonakilty black pudding, cheddar cheese and BallyMaloe relish";
  const breakfastItem4Price = document.createElement("p");
  breakfastItem4Price.classList.add("price");
  breakfastItem4Price.textContent = "€11.20";

  breakfastItem4.appendChild(breakfastItem4Title);
  breakfastItem4.appendChild(breakfastItem4Content);
  breakfastItem4.appendChild(breakfastItem4Price);
  breakfast.appendChild(breakfastItem4);

  const breakfastItem5 = document.createElement("div");
  breakfastItem5.classList.add("item", "item--5");

  const breakfastItem5Title = document.createElement("h3");
  breakfastItem5Title.classList.add("title");
  breakfastItem5Title.textContent = "American Style Pancakes";
  const breakfastItem5Content = document.createElement("p");
  breakfastItem5Content.classList.add("content");
  breakfastItem5Content.textContent =
    "Stack of fluffy pancakes served with Nutella and strawberries";
  const breakfastItem5Price = document.createElement("p");
  breakfastItem5Price.classList.add("price");
  breakfastItem5Price.textContent = "€10.20";

  breakfastItem5.appendChild(breakfastItem5Title);
  breakfastItem5.appendChild(breakfastItem5Content);
  breakfastItem5.appendChild(breakfastItem5Price);
  breakfast.appendChild(breakfastItem5);

  const breakfastItem6 = document.createElement("div");
  breakfastItem6.classList.add("item", "item--6");

  const breakfastItem6Title = document.createElement("h3");
  breakfastItem6Title.classList.add("title");
  breakfastItem6Title.textContent = "Scrambled Eggs";
  const breakfastItem6Content = document.createElement("p");
  breakfastItem6Content.classList.add("content");
  breakfastItem6Content.textContent =
    "Scrambled eggs served on you choice of bread, sourdough, white and brown";
  const breakfastItem6Price = document.createElement("p");
  breakfastItem6Price.classList.add("price");
  breakfastItem6Price.textContent = "€9.60";

  breakfastItem6.appendChild(breakfastItem6Title);
  breakfastItem6.appendChild(breakfastItem6Content);
  breakfastItem6.appendChild(breakfastItem6Price);
  breakfast.appendChild(breakfastItem6);

  breakfastMenu.appendChild(breakfast);

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

  const lunch = document.createElement("div");
  lunch.classList.add("lunch");

  const lunchItem1 = document.createElement("div");
  lunchItem1.classList.add("item", "item--1");

  const lunchItem1Title = document.createElement("h3");
  lunchItem1Title.classList.add("title");
  lunchItem1Title.textContent = "Chicken & Pesto Pasta";
  const lunchItem1Content = document.createElement("p");
  lunchItem1Content.classList.add("content");
  lunchItem1Content.textContent =
    "Griled chicken, basil pesto, sundried tomatoes and feta cheese served with durum pasta";
  const lunchItem1Price = document.createElement("p");
  lunchItem1Price.classList.add("price");
  lunchItem1Price.textContent = "€13.50";
  const lunchItem1AddOn = document.createElement("p");
  lunchItem1AddOn.classList.add("addon");
  lunchItem1AddOn.textContent = "Add Bacon €3.50";

  lunchItem1.appendChild(lunchItem1Title);
  lunchItem1.appendChild(lunchItem1Content);
  lunchItem1.appendChild(lunchItem1Price);
  lunchItem1.appendChild(lunchItem1AddOn);
  lunch.appendChild(lunchItem1);

  const lunchItem2 = document.createElement("div");
  lunchItem2.classList.add("item", "item--2");

  const lunchItem2Title = document.createElement("h3");
  lunchItem2Title.classList.add("title");
  lunchItem2Title.textContent = "BLT Sandwich";
  const lunchItem2Content = document.createElement("p");
  lunchItem2Content.classList.add("content");
  lunchItem2Content.textContent =
    "Freshly toasted sourdough bread topped with bacon, lettuce and tomato";
  const lunchItem2Price = document.createElement("p");
  lunchItem2Price.classList.add("price");
  lunchItem2Price.textContent = "€12";

  lunchItem2.appendChild(lunchItem2Title);
  lunchItem2.appendChild(lunchItem2Content);
  lunchItem2.appendChild(lunchItem2Price);
  lunch.appendChild(lunchItem2);

  const lunchItem3 = document.createElement("div");
  lunchItem3.classList.add("item", "item--3");

  const lunchItem3Title = document.createElement("h3");
  lunchItem3Title.classList.add("title");
  lunchItem3Title.textContent = "Goat's Cheese Tartlet";
  const lunchItem3Content = document.createElement("p");
  lunchItem3Content.classList.add("content");
  lunchItem3Content.textContent = "With caramelized red onions and pecan nuts";
  const lunchItem3Price = document.createElement("p");
  lunchItem3Price.classList.add("price");
  lunchItem3Price.textContent = "€11.70";

  lunchItem3.appendChild(lunchItem3Title);
  lunchItem3.appendChild(lunchItem3Content);
  lunchItem3.appendChild(lunchItem3Price);
  lunch.appendChild(lunchItem3);

  const lunchItem4 = document.createElement("div");
  lunchItem4.classList.add("item", "item--4");

  const lunchItem4Title = document.createElement("h3");
  lunchItem4Title.classList.add("title");
  lunchItem4Title.textContent = "Vegetarian Lasagna";
  const lunchItem4Content = document.createElement("p");
  lunchItem4Content.classList.add("content");
  lunchItem4Content.textContent =
    "Lasagna with zucchini, squash, carrot, roasted cauliflower & mushrooms";
  const lunchItem4Price = document.createElement("p");
  lunchItem4Price.classList.add("price");
  lunchItem4Price.textContent = "€14.50";

  lunchItem4.appendChild(lunchItem4Title);
  lunchItem4.appendChild(lunchItem4Content);
  lunchItem4.appendChild(lunchItem4Price);
  lunch.appendChild(lunchItem4);

  const lunchItem5 = document.createElement("div");
  lunchItem5.classList.add("item", "item--5");

  const lunchItem5Title = document.createElement("h3");
  lunchItem5Title.classList.add("title");
  lunchItem5Title.textContent = "Soup of The Day!";
  const lunchItem5Content = document.createElement("p");
  lunchItem5Content.classList.add("content");
  lunchItem5Content.textContent =
    "Served with wholemeal brown bread and Irish butter";
  const lunchItem5Price = document.createElement("p");
  lunchItem5Price.classList.add("price");
  lunchItem5Price.textContent = "€6.50";

  lunchItem5.appendChild(lunchItem5Title);
  lunchItem5.appendChild(lunchItem5Content);
  lunchItem5.appendChild(lunchItem5Price);
  lunch.appendChild(lunchItem5);

  const lunchItem6 = document.createElement("div");
  lunchItem6.classList.add("item", "item--6");

  const lunchItem6Title = document.createElement("h3");
  lunchItem6Title.classList.add("title");
  lunchItem6Title.textContent = "Salad of The Day!";
  const lunchItem6Content = document.createElement("p");
  lunchItem6Content.classList.add("content");
  lunchItem6Content.textContent =
    "Your choice of salad served with sourdough bread";
  const lunchItem6Price = document.createElement("p");
  lunchItem6Price.classList.add("price");
  lunchItem6Price.textContent = "€11.60";

  lunchItem6.appendChild(lunchItem6Title);
  lunchItem6.appendChild(lunchItem6Content);
  lunchItem6.appendChild(lunchItem6Price);
  lunch.appendChild(lunchItem6);

  lunchMenu.appendChild(lunch);

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
