import header from "./header.js";

const headerController = new header()

headerController.filterBlood()

document.querySelectorAll('header ul li').forEach((li) => li.addEventListener('click', (event) => headerController.addBloodDrop(event)))
