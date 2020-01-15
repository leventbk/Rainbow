// This variable stores the "Pick a Color" button with click
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button with onwheel action
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below this function will change the background color
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;

