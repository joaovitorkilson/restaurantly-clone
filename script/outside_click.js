export default function outsideClick(element, events, callback) {
    
    // Agora vamos criar a função que verifica o clique no lado de fora, quando ativar essa função eu preciso

    // verificar se o clique ta rolando dentro do submenu ou fora dele

    // Em qualquer momento que eu clicar em qualquer coisa a partir do momento que abro o menu

    // ela será ativada por causa do bubble, mas vai ter 

    // uma verificação se foi do lado de fora ou não do submenu

    
    const html = document.documentElement;
    const outside = 'data-outside';
    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick);
        })
        
        element.setAttribute(outside, '')
    }
    

    

    function handleOutsideClick(event) {
        
        // agora eu preciso de uma função de callback, vou fazer isso usando um parametro
        // que sera ativado como se fosse uma função

        // É como se colocassemos uma função dentro de uma variavel, só que estamos passando essa 
        // função como parametro na outsideClick(), função essa que esta sendo armazenada dentro de callback
        // e ativada logo abaixo.
        
        // Precisamos verificar agora se estamos clicando do lado de fora ou de dentro do menu

        if (!element.contains(event.target)) { 
            // como nao precisaremos mais dos listenners ja que fechamos o menu, vamos excluí-los
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            element.removeAttribute(outside)

            // Se clicado do lado de fora ative a callback()
            // que irá tirar o active do menu
            callback();
            
        }

       
        
        
    }
}