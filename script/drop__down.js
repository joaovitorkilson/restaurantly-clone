import outsideClick from "./outside_click.js";

export default function initDropDownMenu() {
    // Primeira coisa é selecionar todos os submenus
        const dropdownMenus = document.querySelectorAll('[data-dropdown]');


    // Para cada um desses itens eu vou adicionar o evento de clique chamando meu callback handleClick

        dropdownMenus.forEach(menu => {
            // vamos querer o click e o touchstart, para isso vamos usar um macetinho
            ['click', 'touchstart'].forEach((userEvent) => {
                menu.addEventListener(userEvent, handleClick)
            })
            
        });

        function handleClick(event) { // vai ativar o menu
           
            // vamos fazer com que essa função adicione uma classe ativa nesse menu
                this.classList.add('active');

            // A partir do momento que eu ativei o menu, eu tambem ativo o listenner que vai escutar se foi fechado
            // ou não com a função abaixo:
                outsideClick(this, ['click', 'touchstart'], () => {
                    this.classList.remove('active');
                });
        }
}



