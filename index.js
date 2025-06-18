

function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightblue'; // change to any color you want
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white'; // reset to white
}


function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `You pressed: ${event.key}`;
}


function displayUserInput() {
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  display.textContent = input.value;
}

document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

document.addEventListener('keydown', displayKeyPress);

document
  .getElementById('textInput')
  .addEventListener('input', displayUserInput);
