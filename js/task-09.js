function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('button');
const span = document.querySelector('span');
const body = document.querySelector('body');



button.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor (event) {
  body.style.background = getRandomHexColor();
  span.textContent = body.style.background;

  console.log(span.textContent)
 }




