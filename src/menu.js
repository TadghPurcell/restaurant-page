const createMenuItem = function (title, content, price, addOn) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("item");

  const menuItemTitle = document.createElement("h3");
  menuItemTitle.classList.add("title");
  menuItemTitle.textContent = title;

  const menuItemContent = document.createElement("p");
  menuItemContent.classList.add("content");
  menuItemContent.textContent = content;

  const menuItemPrice = document.createElement("p");
  menuItemPrice.classList.add("price");
  menuItemPrice.textContent = price;

  const menuItemAddOn = document.createElement("p");
  menuItemAddOn.classList.add("addon");
  menuItemAddOn.textContent = addOn;

  menuItem.appendChild(menuItemTitle);
  if (content) menuItem.appendChild(menuItemContent);
  menuItem.appendChild(menuItemPrice);
  if (addOn) menuItem.appendChild(menuItemAddOn);
  console.log(menuItem);

  return menuItem;
};

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

  drinks.appendChild(createMenuItem("Espresso", "", "€2.80"));
  drinks.appendChild(createMenuItem("Americano", "", "€3.20"));
  drinks.appendChild(createMenuItem("Flat White", "", "€3.60"));
  drinks.appendChild(createMenuItem("Cappuccino", "", "€4"));
  drinks.appendChild(createMenuItem("Latte", "", "€4.10"));
  drinks.appendChild(createMenuItem("Mocha", "", "€4.20"));
  drinks.appendChild(createMenuItem("Tea", "", "€2.80"));
  drinks.appendChild(createMenuItem("Hot Chocolate", "", "€4"));

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

  breakfast.appendChild(
    createMenuItem(
      "Granola",
      "Granola with acai berry, greek yoghurt, berries, honey & nuts",
      "€8.50"
    )
  );
  breakfast.appendChild(
    createMenuItem(
      "Smashed Avocado",
      "Smashed avocado on toasted sourdough bread, topped with a poached egg and served with grilled tomatoes",
      "€11.20",
      "Add Bacon €3.50"
    )
  );
  breakfast.appendChild(
    createMenuItem(
      "Blueberry & Banana Pancakes",
      "Buttermilk pancakes w/ blueberry home compote, mascarpone, maple syrup & hazelnuts",
      "€10.50"
    )
  );
  breakfast.appendChild(
    createMenuItem(
      "Irish Brekkie Sandwich",
      "Bacon, sausage, Clonakilty black pudding, cheddar cheese and BallyMaloe relish",
      "€11.20"
    )
  );
  breakfast.appendChild(
    createMenuItem(
      "Classic Pancakes",
      "Stack of fluffy pancakes served with Nutella and strawberries",
      "€10.20"
    )
  );
  breakfast.appendChild(
    createMenuItem(
      "Scrambled Eggs",
      "Scrambled eggs served on you choice of bread, sourdough, white and brown",
      "€9.60"
    )
  );

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

  lunch.appendChild(
    createMenuItem(
      "Chicken & Pesto Pasta",
      "Griled chicken, basil pesto, sundried tomatoes and feta cheese served with durum pasta",
      "€13.50",
      "Add Bacon €3.50"
    )
  );
  lunch.appendChild(
    createMenuItem(
      "BLT Sandwich",
      "Freshly toasted sourdough bread topped with bacon, lettuce and tomato",
      "€12"
    )
  );
  lunch.appendChild(
    createMenuItem(
      "Goat's Cheese Tartlet",
      "With caramelized red onions and pecan nuts",
      "€11.70"
    )
  );
  lunch.appendChild(
    createMenuItem(
      "Vegetarian Lasagna",
      "Lasagna with zucchini, squash, carrot, roasted cauliflower & mushrooms",
      "€14.50"
    )
  );
  lunch.appendChild(
    createMenuItem(
      "Soup of The Day!",
      "Served with wholemeal brown bread and Irish butter",
      "€6.50"
    )
  );
  lunch.appendChild(
    createMenuItem(
      "Salad of The Day!",
      "Served with our famous sourdough bread",
      "€11.60"
    )
  );

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
