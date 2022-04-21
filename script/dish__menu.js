export default function initDishMenu() {



    const pratos = document.querySelectorAll('[data-item]')




    pratos.forEach((prato) => {

        if (prato.dataset.tipo === '') {
            prato.classList.add('desativado')
        }
    })


    const detail = document.querySelectorAll('.detail')
    detail.forEach((item) => {
        item.innerText = '.'.repeat(100)
    })


    function callbackTodos() {


        pratos.forEach((prato) => {
            prato.classList.remove('desativado')
        })
    }

    function callbackEntrada() {



        pratos.forEach((prato) => {
            prato.classList.remove('desativado')

            if (prato.dataset.tipo !== 'entrada') {
                prato.classList.add('desativado')
            }

        })
    }

    function callbackSaladas() {
        pratos.forEach((prato) => {
            prato.classList.remove('desativado')
            if (prato.dataset.tipo !== 'saladas') {
                prato.classList.add('desativado')
            }
        })

    }

    function callbackEspecialidades() {
        pratos.forEach((prato) => {
            prato.classList.remove('desativado')
            if (prato.dataset.tipo !== 'especialidades') {
                prato.classList.add('desativado')
            }
        })
    }



    const todos = document.querySelector('#all')
    const entrada = document.querySelector('#starter')
    const saladas = document.querySelector('#salad')
    const especialidades = document.querySelector('#specialty')

    function linkActiveEntrada() {

        entrada.classList.add('menu__filters__active')
        const link = [todos, saladas, especialidades];
        link.forEach((item) => {
            if (item.classList.contains('menu__filters__active')) {
                item.classList.remove('menu__filters__active')
            }

        })
    }
    function linkActiveTodos() {
        todos.classList.add('menu__filters__active')
        const link = [entrada, saladas, especialidades];
        link.forEach((item) => {
            if (item.classList.contains('menu__filters__active'))
                item.classList.remove('menu__filters__active')
        })
    }
    function linkActiveSaladas() {
        saladas.classList.add('menu__filters__active')
        const link = [entrada, todos, especialidades];
        link.forEach((item) => {
            if (item.classList.contains('menu__filters__active'))
                item.classList.remove('menu__filters__active')
        })
    }
    function linkActiveEspecialidades() {
        especialidades.classList.add('menu__filters__active')
        const link = [entrada, todos, saladas];
        link.forEach((item) => {
            if (item.classList.contains('menu__filters__active'))
                item.classList.remove('menu__filters__active')
        })
    }


    [callbackTodos, linkActiveTodos].forEach(userEvent => {
        todos.addEventListener('click', userEvent);

    });


    [callbackEntrada, linkActiveEntrada].forEach(userEvent => {
        entrada.addEventListener('click', userEvent);

    });



    [callbackSaladas, linkActiveSaladas].forEach(userEvent => {
        saladas.addEventListener('click', userEvent);

    });

    [callbackEspecialidades, linkActiveEspecialidades].forEach(userEvent => {
        especialidades.addEventListener('click', userEvent);

    });
}







