export default function initSpecialAnimation() {

}
const dataSpecials = document.querySelectorAll('[data-special]');
const dataSpecialsArray = Array.from(dataSpecials)

let specialsList = document.querySelectorAll('.specials__list li');
specialsList = Array.from(specialsList);



specialsList.forEach((item, index) => {
    
    item.addEventListener('click', () => {
        specialsList.forEach((li_item) => {
            li_item.classList.remove('active')
        })
        item.classList.add('active')
        dataSpecialsArray.forEach((div_item)=>{
            div_item.classList.remove('active')
        })
        dataSpecialsArray[index].classList.add('active')
        
    })
});
