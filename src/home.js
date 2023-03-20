export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "The Butter Slip";

  const about = document.createElement("h2");
  about.classList.add("about");
  about.textContent =
    "Award winning artisan bakery and cafe located in the heart of Kilkenny City!";

  const mission = document.createElement("h6");
  mission.classList.add("mission");
  mission.textContent =
    "Our mission is to provide our customers with freshly baked goods and delicious coffee in a warm and welcoming atmosphere.";

  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("paragraph--1");
  paragraph1.textContent =
    "At The Butter Slip, we pride ourselves on using only the finest ingredients to create our baked goods. Our skilled bakers make everything from scratch each day, so you can be sure that you're getting the freshest and most flavorful products possible.";

  const paragraph2 = document.createElement("p");
  paragraph2.classList.add("paragraph--2");
  paragraph2.textContent =
    "  Whether you're stopping in for breakfast, lunch, or just a quick snack, we have something for everyone. From our famous scones to our decadent cakes and pastries, we offer a wide variety of baked goods to satisfy any craving. And don't forget to pair your treat with one of our expertly crafted coffees or teas!";

  const paragraph3 = document.createElement("p");
  paragraph3.classList.add("paragraph--3");
  paragraph3.textContent =
    "At The Butter Slip, we believe that food is meant to be shared and enjoyed with others. That's why we've created a warm and inviting space where you can gather with friends, family, or colleagues to enjoy a delicious meal or just catch up over a cup of coffee.";

  const paragraph4 = document.createElement("p");
  paragraph4.classList.add("paragraph--4");
  paragraph4.textContent =
    "  So come on in, grab a seat, and enjoy the delightful aromas and flavors of our artisan bakery and cafe. We can't wait to share our love of baking with you!";

  home.appendChild(logo);
  home.appendChild(about);
  home.appendChild(mission);
  home.appendChild(paragraph1);
  home.appendChild(paragraph2);
  home.appendChild(paragraph3);
  home.appendChild(paragraph4);

  return home;
}
