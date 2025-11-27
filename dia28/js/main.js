//NIVEL 2.1
const btns = document.querySelectorAll(".button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(225)}, ${random(225)}, ${random(225)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btns.forEach(btn => btn.addEventListener("click", bgChange))


//NIVEL 2.2
function generarColorAleatorio() {
  const letrasHex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letrasHex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiarColores() {

  const divs = document.querySelectorAll('.color');

  divs.forEach(div => {
    div.style.backgroundColor = generarColorAleatorio();
  });
}

//NIVEL 2.4
function getRandomHexColor() {
  const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
  return randomColor();
}

const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mouseenter', function () {
  colorBox.style.backgroundColor = getRandomHexColor();
});

colorBox.addEventListener('mouseleave', function () {
  colorBox.style.backgroundColor = getRandomHexColor();
});
