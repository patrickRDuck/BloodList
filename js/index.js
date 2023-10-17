import header from "./header.js";

const headerController = new header()

document.querySelectorAll('header ul li').forEach((li) => li.addEventListener('click', (event) => headerController.addBloodDrop(event)))
