import header from "./header.js";
import renderList from "./renderList.js";

renderList()

const headerController = new header()

document.querySelectorAll('header ul li').forEach((li) => li.addEventListener('click', (event) => headerController.addBloodDrop(event)))
