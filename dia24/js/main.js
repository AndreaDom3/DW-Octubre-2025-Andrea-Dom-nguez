// Ejercicio 1
const ej1_1 = document.querySelector("#ej1_1");
ej1_1.textContent = "Contenido del ejercicio 1.1";

//Ejercicio 2
const textCopy = document.querySelector('#textCopy');
const botonText = document.querySelector('#botonText');
const textParagraph = document.querySelector('#textParagraph');

botonText.addEventListener('click', () => {
    textParagraph.textContent = textCopy.value;
    console.log(textCopy.value);
})

//Ejercicio 3
  function sumar() {
  const input1 = document.getElementById("num1").value;
  const input2 = document.getElementById("num2").value;

  // Convierte los valores a números para sumarlos
  const suma = parseInt(input1) + parseInt(input2);

  console.log("La suma es: " + suma);
}