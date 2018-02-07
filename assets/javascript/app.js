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



