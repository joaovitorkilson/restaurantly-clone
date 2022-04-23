import initCardAnimation from './card__animation.js';
import initDishMenu from './dish__menu.js';
import initDropDownMenu from './drop__down.js';
import initHamburguerMenu from './hamburguer__menu.js';
import initValidateSizeScroll from './navbar__animation.js';



initCardAnimation();
window.addEventListener('scroll', initValidateSizeScroll)
initDishMenu();
initDropDownMenu();
initHamburguerMenu();
