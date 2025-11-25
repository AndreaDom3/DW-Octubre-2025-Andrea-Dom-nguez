//Nivel 1
//Ejercicio 1
let a = -5;
let result = 'Menor a 0';

if (a > 0) {
  result = 'Mayor a 0';
}

console.log(result);

//Ejercicio 2
const mayorEdad = 40;
if (mayorEdad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//Ejercicio 3
let x = 8;
if (x > 50) {
  console.log("Es mayor a 50");
} else if (x < 5) {
  console.log("Es menor a 5");
} else {
  console.log("Esta entre 5 y 50")
}

//Nivel 2
//Ejercicio 4
const consola = "play";

switch (consola) {
  case "play":
    console.log("Tengo una play");
    break;
  case "xbox":
    console.log("Tengo una xbox");
    break;
  case "switch":
    console.log("Tengo una switch");
    break;
  default:
    console.log("No tengo consola");
    break;
}

//Ejercicio 5
let str = '';

for (let i = 2; i < 10; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "23456789"

//Ejercicio 6
let n = 2;
while (n < 8) {
  n++;
}

console.log(n);
//Expected output: 8

//Nivel 3
//Ejercicio 7

let i = 0;

do {
  i = i + 2;
  result = result + i;
} while (i < 6);

console.log(result);
//Expected output: "246"

//Ejercicio 8
const lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('click', event => {
    event.target.remove();
  });
});
