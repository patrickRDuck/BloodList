export default (guestslist) => {
    const elementUl = document.querySelector('main ul')
    elementUl.innerHTML = ''

    guestslist.forEach((guest) => {
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

    console.log(elementUl)
}