//NIVEL 1
//EJERCICIO 1.1 Y 1.2

const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const moveButton = document.getElementById('move');
const resizeButton = document.getElementById('resize');
const locationButton = document.getElementById('location');

let myWindow = null;

openButton.addEventListener('click', () => {
  if (!myWindow || myWindow.closed) {
    myWindow = window.open('', '', 'width=400, height=400');
  }
});

closeButton.addEventListener('click', () => {
  if (myWindow && !myWindow.closed) {
    myWindow.close();
  }
});

moveButton.addEventListener('click', () => {
  if (myWindow && !myWindow.closed) {
    myWindow.moveTo(200, 200);
  }
});

resizeButton.addEventListener('click', () => {
  if (myWindow && !myWindow.closed) {
    myWindow.resizeTo(600, 600);
  }
});

locationButton.addEventListener('click', () => {
  if (myWindow && !myWindow.closed) {
    myWindow.location = "https://google.com";
  }
});

//NIVEL 2
//EJERCICIO 1
function actualizarNumeros() {
  const divs = document.querySelectorAll('.numero-div');

  const min = 1;
  const max = 100;

  divs.forEach(div => {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    div.textContent = numeroAleatorio;
  });
}

//NIVEL 3
//EJERCICIO 1 HAY QUE ARREGLARLO ESTA FATAAAAAAALLL!!!!!!
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultDiv = document.getElementById('result');
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Introduce números";
    return;
  }

  {
    case "+":
      result = num1 + num2;
    break;

    case "-":
      result = num1 - num2;
    break;

    case "*":
      result = num1 * num2;
    break;

    case "/":
      if (num2 === 0) {
        resultDiv.textContent = "Error";
        return;
      }
    result = num1 / num2;
    break;
  }

  resultDiv.textContent = "Resultado: " + result;
}