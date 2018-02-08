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
	if(!isDrawing) return; //stop the fn from runnig when not mouse down
	console.log(e)

// ctx involves drawing for canvas
// need to start x,y and move to x,y
	ctx.beginPath();
	// start from
	ctx.moveTo(lastX, lastY);
	// go to
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
// update the lastx and lasty variables
	[lastX, lastY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener('mousemove', draw);
// draw event console log when mousemove on canvas

// toggle isDrawing false or true
// in mousedown need to update the lastx and lasty by passing an event
	// instead return we make a block
// mouse down to start it before it mouse move	
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
	});
}


canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

