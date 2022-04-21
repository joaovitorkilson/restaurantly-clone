export default function initHamburguerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger');

    ['click', 'touchstart'].forEach(userEvent => {
        hamburgerMenu.addEventListener(userEvent, toggleMenu);
    })
    

    function toggleMenu(event) {
        if (event.type === 'touchstart') {
            event.preventDefault();
        }
        hamburgerMenu.classList.toggle('is-active');
        let menu = document.querySelector('#list');
        menu.classList.toggle('active');
    };
    let windowSize = window.innerWidth;
     
    
   
    
};


