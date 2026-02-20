// Menu responsivo do tipo Hamburguer e vai se alternado a visibilidade do menu  de acordo com o tamanho da tela 

// .menu-toggle e ,menu são classes do CSS 
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Se existi no CSS 
if(menuToggle && menu) {
    // Altera visibilidade do menu 
    menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("menu--open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        menuToggle.setAttribute("aria-label", isOpen ? "fecahr-menu" : "abrir menu");
    });

    // Fecha menu ao clicar em um link (Apenas no Mobile)
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if(window.innerWidth <= 700 ){
                menu.classList.remove("menu--open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "abrir menu");
            }
        });
    });
}