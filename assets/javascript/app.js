// select canvas
const canvas = document.querySelector('#draw');

//create 2d context which can only be draw on
const ctx = canvas.getContext('2d');

// size the canvas by width of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base settings stroke style, line cap, and line join
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// when draw it require a color here start with #BADA55
// lineJoin and lineCap are rounded at start and end of line

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// isDrawing is setting false
	// when click down setting is true
	// when click up (let go of button) set to false
// lastX and lastY need starting x,y and ending x,y

// draw function that take in event 
function draw(e) {
	console.log(e)
};

canvas.addEventListener('mousemove', draw);
// draw event console log when mousemove on canvas