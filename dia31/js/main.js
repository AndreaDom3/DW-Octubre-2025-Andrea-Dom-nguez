//NIVEL 1
//EJERCICIO 1.1 
const itemsDeLista = document.querySelectorAll('#miLista li').getElementById('listaDeTareas').getElementsByTagName('li');

itemsDeLista.forEach(function (elemento) {
  elemento.style.backgroundColor = '#ADD8E6';
  elemento.style.padding = '10px';
  elemento.style.margin = '5px 0';
});


//EJERCICIO 1.2
const parrafos = document.querySelectorAll('.emoji');
const emoji = ' 🎃';

parrafos.forEach(function (parrafo) {
  parrafo.textContent += emoji;
});

//EJERCICIO 1.3
const botones = document.querySelectorAll('.mybutton');

botones.forEach(function (boton, indice) {
  boton.textContent = 'Holi he cambiao ' + (indice + 1);
});

//NIVEL 2
//EJERCICIO 1.1

Array.from(itemsDeLista).forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('tachado');
  });
});
