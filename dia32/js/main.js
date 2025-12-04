//NIVEL 1
//EJERCICIO 1.1 
document.getElementById('alternarBoton').addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
});

//EJERCICIO 1.2
function alternarAncho() {
  const divContenedor = document.getElementById('contenedor');

  if (divContenedor.style.width === '80vw') {
    divContenedor.style.width = '20vw';
  } else {
    divContenedor.style.width = '80vw';
  }
};

//NIVEL 2
//EJERCICIO 2.1 
const cuadrado = document.getElementById('miCuadrado');
let esRotacion = true;

function alternarAnimacion() {
  if (esRotacion) {

    cuadrado.classList.remove('rotar');
    cuadrado.classList.add('escalar');
  } else {

    cuadrado.classList.remove('escalar');
    cuadrado.classList.add('rotar');
  }

  esRotacion = !esRotacion;
};

//EJERCICIO 2.2 
function alternarVisibilidad() {

  const divElemento = document.getElementById('miDiv');

  if (divElemento.style.display === 'none') {

    divElemento.style.display = 'block';
  } else {

    divElemento.style.display = 'none';
  }
};

//EJERCICIO 2.3 
function alternarOpacidad() {
  var elementoTexto = document.getElementById("miTexto");
  if (elementoTexto.style.opacity === "0") {
    elementoTexto.style.opacity = "1";
  } else {
    elementoTexto.style.opacity = "0";
  }
};


//NIVEL 3
//EJERCICIO 3.1 Y 3.2
let celdaPreviamenteActiva = null;

function cambiarColorAleatorio() {

  const celdas = document.querySelectorAll('.celda');
  const totalCeldas = celdas.length;

  if (celdaPreviamenteActiva !== null) {
    celdaPreviamenteActiva.classList.remove('celda-activa');
  }

  const indiceAleatorio = Math.floor(Math.random() * totalCeldas);
  const celdaSeleccionada = celdas[indiceAleatorio];

  celdaSeleccionada.classList.add('celda-activa');

  celdaPreviamenteActiva = celdaSeleccionada;
};

