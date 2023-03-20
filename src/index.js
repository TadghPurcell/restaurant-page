import createHeader from "./init.js";
import createHome from "./home.js";

const content = document.querySelector(".content");

content.appendChild(createHeader());
content.appendChild(createHome());
