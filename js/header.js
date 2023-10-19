import guests from "./utils/guests.js"
import renderList from "./renderList.js"

export default class header {
    addBloodDrop (event) {
        const elementLi = event.target
        const liBloodDrop = elementLi.querySelector('i')
        const hostUrl = window.location.origin

        if (elementLi.classList.contains('active')) {
            elementLi.classList.remove('active')
            liBloodDrop.remove()

            window.history.pushState({}, '', hostUrl)
            return
        }
        

        document.querySelectorAll('header ul li')
        .forEach((li) => {
            if (li.classList.contains('active')) {
                li.classList.remove('active')
            }
            
            const elementBloodDrop = li.querySelector('i')
            if (elementBloodDrop) {
                elementBloodDrop.remove()
            }
        })

        const elementToAdd = document.createElement("i");
        elementToAdd.className = "fa-solid fa-droplet";
        elementToAdd.style.color = "#b80808";

        elementLi.classList.add('active')
        elementLi.append(elementToAdd)

        window.history.pushState({}, '', `${hostUrl}/?${elementLi.dataset.bloodtype}`)
        this.filterBlood()
    }

    filterBlood () {
        const [bloodTypeFilter] = (window.location.search).split("?").splice(1,1)
        
        if (bloodTypeFilter) {
            const filterGuests = guests.filter((guest) => guest.bloodType === bloodTypeFilter)
    
            renderList(filterGuests)
        } else {
            renderList(guests)
        }
    }
}