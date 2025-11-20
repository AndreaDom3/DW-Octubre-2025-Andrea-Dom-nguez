// Ejercicio 1.1
const ej1_1 = document.querySelector("#ej1_1");
ej1_1.textContent = "Contenido del ejercicio 1.1";

// Ejercicio 1.2
const ej1_2 = document.querySelector("#ej1_2");
ej1_2.style.color = "blue";

// Ejercicio 1.3
const ej1_3 = document.querySelector("#ej1_3");
const changedRed = document.querySelector("#changedRed");
const changedBlue = document.querySelector("#changedBlue");

changedRed.addEventListener("click", () => {
    ej1_3.style.color = "red";
});

changedBlue.addEventListener("click", () => {
    ej1_3.style.color = "blue";
});

// Ejercicio 2

const PI = 3.14;
let radio = 5;

function areaCirculo(r) {
    return PI * r * r;
}

console.log("área del círculo con radio" + radio + ": " + areaCirculo(radio));

console.log(areaCirculo);

// Ejercicio 3
const ej3 = document.querySelector("#ej3");

function clickHandler() {
    alert("Boton clickeado");
}

ej3.addEventListener("click", clickHandler);