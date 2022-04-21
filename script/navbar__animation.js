// animação navbar

export function validateSizeScroll() {
    let contactBar = document.querySelector('.header__contact');
    let navBar = document.querySelector('.header__nav__bg');
    let sizeH1ToTop = document.querySelector('.header__title');
    if (sizeH1ToTop.getBoundingClientRect().top <= 140) {
        contactBar.classList.add('header__contact__disabled');
        
        navBar.style.cssText = 'border-bottom: 1px solid #37332a;' +
                                'background-color: rgba(0, 0, 0, 0.85);'
            
    }
    else {
        contactBar.classList.remove('header__contact__disabled');
        navBar.style.cssText = 'border-bottom: 1px solid #000;' +
                                'background-color: rgba(12, 11, 9, 0.6);'
        
    }
   
}

