import guests from "./utils/guests.js"
import renderList from "./renderList.js"

export default class header {
    addBloodDrop (event) {
        const elementLi = event.target
        const liBloodDrop = elementLi.querySelector('i')

        const hostUrl = window.location.origin
        const pathUrl = window.location.pathname ?? ''

        if (elementLi.classList.contains('active')) {
            elementLi.classList.remove('active')
            liBloodDrop.remove()

            window.history.pushState({}, '', `${hostUrl}${pathUrl}`)
            this.filterBlood()
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

        this.insertElementBloodDrop(elementLi)

        window.history.pushState({}, '', `${hostUrl}${pathUrl}?${elementLi.dataset.bloodtype}`)
        this.filterBlood()
    }

    insertElementBloodDrop (element) {
        const elementToAdd = document.createElement("i");
        elementToAdd.className = "fa-solid fa-droplet";
        elementToAdd.style.color = "#b80808";

        element.classList.add('active')
        element.append(elementToAdd)
    }

    filterBlood () {
        const [bloodTypeFilter] = (window.location.search).split("?").splice(1,1)

        const elementToInsertBloodDrop = document.querySelector(`#${bloodTypeFilter}`)
        if (!elementToInsertBloodDrop.classList.contains('active')) {
            this.insertElementBloodDrop(elementToInsertBloodDrop)
        }
        
        if (bloodTypeFilter) {
            const filterGuests = guests.filter((guest) => guest.bloodType === bloodTypeFilter)
    
            renderList(filterGuests)
        } else {
            renderList(guests)
        }
    }
}