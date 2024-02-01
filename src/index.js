const canvas = document.querySelector('canvas');
// Doing this in JS
// Could do in CSS, but issues can arize when loading css properties
canvas.width = 1024;
canvas.height = 576;


// The canvas context gives us access to the entire canvas API and everything we can do with a canvas
const c = canvas.getContext('2d');

// drawing
c.fillStyle = 'white';
// PARAMS: x1, y1, x2, y2
c.fillRect(0, 0, canvas.width, canvas.height)
