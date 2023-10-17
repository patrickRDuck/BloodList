export default class header {
    addBloodDrop (event) {
        const elementLi = event.target
        const liBloodDrop = elementLi.querySelector('i')

        if (elementLi.classList.contains('active')) {
            elementLi.classList.remove('active')
            liBloodDrop.remove()
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
    }
}

//<i class="fa-solid fa-droplet" style="color: #b80808;"></i>