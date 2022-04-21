import initCardAnimation from './card__animation.js';
import initDishMenu from './dish__menu.js';
import initDropDownMenu from './drop__down.js';
import initHamburguerMenu from './hamburguer__menu.js';


import * as navbar_animation from './navbar__animation.js';

import * as dish_menu from './dish__menu.js';
import * as scroll from './scroll_to.js';
import * as dropdown from './drop__down.js'



initCardAnimation();
initDishMenu();
initDropDownMenu();
initHamburguerMenu();


// menu hamburger



// navbar animation

window.addEventListener('scroll', navbar_animation.validateSizeScroll)


