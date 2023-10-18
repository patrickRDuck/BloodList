import guests from "./utils/guests.js"

export default () => {
    const elementUl = document.querySelector('main ul')

    guests.forEach((guest) => {
       const HTML = `
        <li>
            <div class="profile">
                <img src="./assets/${guest.name}.jpg">
            </div>
            <div class="aboutPeople">
                <p>${guest.name}</p>
                <p>${guest.age} anos</p>
            </div>
            <div class="bloodType">
                <p>${guest.bloodType}</p>
            </div>
        </li>
        `
        elementUl.innerHTML += HTML
    })
}