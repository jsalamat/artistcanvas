// select canvas
const canvas = document.querySelector('#draw');

//create 2d context which can only be draw on
const ctx = canvas.getContext('2d');

// size the canvas by width of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;