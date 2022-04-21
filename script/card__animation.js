export default function initCardAnimation() {
        const card = document.querySelectorAll('.why-us__card')

        function hover_card( event ) {
            event.target.style.backgroundColor = "#cda45e"
            for (let index = 0; index < event.target.children.length; index++) {
                event.target.children[index].style.color = "#fff"
            
            
            };
        
    };
        function out_card( event ) {
            event.target.style.backgroundColor = "#1A1814"
            
            event.target.children[0].style.color = "#cda45e"
            event.target.children[1].style.color = "rgba(255, 255, 255, 0.8)"
            event.target.children[2].style.color = "#aaaaaa"
        }

            

        card.forEach((item) => {
        item.addEventListener("mouseenter", hover_card)
        
    })
        card.forEach((item) => {
        item.addEventListener("mouseleave", out_card)
    })

}

