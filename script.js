const collapseButton = document.getElementsByClassName("navbar__button");
        const list = document.getElementsByClassName("navbar__list");
        let isCollapsed = true;
        if(window.innerWidth > 800){
            isCollapsed = false;
            list[0].innerHTML = `
                        <li tabindex="0" class="navbar--item">Inicio</li>
                        <span class="navbar__division-row">|</span>
                        <li tabindex="0" class="navbar--item">Quiénes somos</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Biblia</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Peticiones</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Apóyanos</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Cómo llegar</li>
                        <span class="navbar__division-row">|</span>
                        
                        <li tabindex="0" class="navbar--item">Nuestra programación</li>
                        <span class="navbar__division-row">|</span>
                        
                        <li tabindex="0" class="navbar--item">Contáctanos</li>
                    `;
        }
        collapseButton[0].addEventListener("click", () => {
            switch(isCollapsed){
                case false:
                    list[0].innerHTML = ``;
                    isCollapsed = true;
                    break;
                case true:
                    list[0].innerHTML = `
                    <li tabindex="0" class="navbar--item">Inicio</li>
                        <span class="navbar__division-row">|</span>
                        <li tabindex="0" class="navbar--item">Quiénes somos</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Biblia</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Peticiones</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Apóyanos</li>
                        <span class="navbar__division-row">|</span>

                        <li tabindex="0" class="navbar--item">Cómo llegar</li>
                        <span class="navbar__division-row">|</span>
                        
                        <li tabindex="0" class="navbar--item">Nuestra programación</li>
                        <span class="navbar__division-row">|</span>
                        
                        <li tabindex="0" class="navbar--item">Contáctanos</li>
                    `;
                    isCollapsed = false;
                    break;
            }
        });