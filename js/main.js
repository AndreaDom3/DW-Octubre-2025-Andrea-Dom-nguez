'use strict';

//SKILLS
function Marquee(selector, speed = 0.5) {
    const container = document.querySelector(selector);
    if (!container || !container.children.length) return;

    const content = container.innerHTML;
    const firstElement = container.children[0];

    
    container.insertAdjacentHTML('beforeend', content);

    let offset = 0;

    function animate() {
        offset += speed;
        if (offset >= firstElement.clientWidth) {
            offset = 0;
        }
        firstElement.style.marginLeft = `-${offset}px`;
        requestAnimationFrame(animate);
    }

    animate();
}

window.addEventListener('load', () => {
    Marquee('.marquee', 0.3);
});


//FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".main__form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = form.name.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (!nombre) {
            alert("Por favor, escribe tu nombre.");
            return;
        }

        if (!email) {
            alert("Por favor, escribe tu correo electrónico.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, escribe un correo electrónico válido.");
            return;
        }

        if (!mensaje) {
            alert("Por favor, escribe un mensaje.");
            return;
        }
    });
});


//VALIDACIÓN DEL EMAIL
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//EMAIL Y PHONE
document.querySelectorAll('.main__div--contacto').forEach(card =>{
    const img = card.querySelector('.main__img--contacto');
    const text = card.querySelector('.img__email, .img__phone');

    card.addEventListener('mouseenter', () => {
        img.style.opacity = '0';
        text.style.opacity = '1';
    });

    card.addEventListener('mouseleave',() =>{
        img.style.opacity = '1';
        text.style.opacity = '0';
    });
});

//MENÚ HAMBURGUESA
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("header__burger");
    const nav = document.getElementById("nav");

    if(!burger || !nav) return;

    burger.addEventListener("click", () => {
        nav.classList.toggle("header__nav--active");
    });
});