//NIVEL 1
let alumna = {
  nombre: 'Andrea',
  apellido: ' Domínguez',
  edad: '28',
  curso: '1º'
}

const alumno = {
  nombre: 'Andrea', apellido: 'Domínguez', edad: '28', curso: '1º'
}

const { nombre : propio1, apellido : propio2 } = alumno;

//NIVEL 2
const numeros = [1, 2, 3,];
const masNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]