//NIVEL 1
//EJERCICIO 1.1
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

//EJERCICIO 1.2
function dibujarCuadrado() {
  for (let i = 0; i < 4; i++) {
    let text = "";
    for (let j = 0; j < 4; j++) {
      text += "* ";
    }
    console.log(text);
  }
}

dibujarCuadrado();

//NIVEL 3
//EJERCICIO 3.1
setTimeout(() => {
  console.log("Ola k ase?");
}, 3000);

//EJERCICIO 3.2
function imprimirHoraActual() {
  const ahora = new Date();

  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');

  const horaFormateada = `${horas}:${minutos}:${segundos}`;

  console.log(horaFormateada);
} setInterval(imprimirHoraActual, 1000);

//EJERCICIO 3.3
let contador = 0;
const elementoContador = document.getElementById('contador');
const limite = 10;

const intervaloID = setInterval(() => {
  contador++;
  elementoContador.textContent = contador;

  if (contador >= limite) {
    clearInterval(intervaloID);
    console.log("Contador detenido al llegar a " + limite);
  }
}, 1000); 