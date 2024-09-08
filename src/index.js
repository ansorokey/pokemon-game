const canvas = document.querySelector('canvas');
// Doing this in JS
// Could do in CSS, but issues can arize when loading css properties
canvas.width = 1024;
canvas.height = 576;


// The canvas context gives us access to the entire canvas API and everything we can do with a canvas
const c = canvas.getContext('2d');

// drawing the canvas
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height)

const mapImage = new Image();
mapImage.src = '/assets/images'

// drawing the map onto the canvas
// to draw an image, we need to pass an html image object
c.drawImage(

)

// const canvas = document.querySelector('canvas');
// // Doing this in JS
// // Could do in CSS, but issues can arize when loading css properties
// canvas.width = 1024;
// canvas.height = 576;


// // The canvas context gives us access to the entire canvas API and everything we can do with a canvas
// const c = canvas.getContext('2d');

// // drawing the canvas
// c.fillStyle = 'white';
// c.fillRect(0, 0, canvas.width, canvas.height)

// const mapImage = new Image();
// mapImage.src = '/assets/images'

// // drawing the map onto the canvas
// // to draw an image, we need to pass an html image object
// c.drawImage(

// )
