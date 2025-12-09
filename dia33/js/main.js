//NIVEL 1
//EJERCICIO 1.1 
//Se ejecuta al hacer click al botón
function toggleAnimacion() {
  const divElemento = document.getElementById('miDiv');

  divElemento.classList.toggle('animado');

  if (divElemento.classList.contains('animado')) {

    divElemento.style.animation = 'none';
    void divElemento.offsetWidth;
    divElemento.style.animation = 'rotarYcambiarColor 1s ease-in-out forwards'; //Lo que tarda y la estilo de animación que se ejecuta
  }
}

//EJERCICIO 1.2 
//Se ejecuta al hacer click al botón
function cambiarEstilo() {

  var parrafo = document.getElementById("miParrafo");

  parrafo.classList.remove("color-clase");

  parrafo.style.color = "red"; //El color de la fuente al que va a cambiar
  parrafo.style.fontWeight = "normal"; //El estilo de la fuente al que va a cambiar
}


//EJERCICIO 1.3 
//Se ejecuta al hacer click al botón y lo ejecutamos al div inicial
function alternarTamaño() {

  const divObjetivo = document.getElementById('miDiv');

  divObjetivo.classList.toggle('crecer'); //Hace crecer el elemento div al pulsar el botón
}

//NIVEL 2
//EJERCICIO 1.4, 2.1., 2.2 y 2.3
let contador = 0;

function generarColorAleatorio() { //Generador de color aleatorio en rgb
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function crearNuevoDiv() { //Generador de un nuevo div al pulsar un boton
  contador++;

  const nuevoDiv = document.createElement('div');

  nuevoDiv.classList.add('nuevo-div');
  nuevoDiv.style.backgroundColor = generarColorAleatorio(); //Generador del color

  nuevoDiv.textContent = contador;

  document.getElementById('contenedor').appendChild(nuevoDiv);
  //Se ejecuta al hacer click al botón
  nuevoDiv.onclick = function () {
    this.remove();
  };

  document.getElementById('contenedor-divs').appendChild(nuevoDiv); //El espacio aplicado a los nuevos divs generados
}

document.getElementById('crearDivBtn').addEventListener('click', crearNuevoDiv);

