export const canvas = document.querySelector('canvas');
// I SPENT AN HOUR AND A HALF TRYING TO FIGURE OUT WHY SCALE DIDNT MATCH
// DON'T TOUCH THIS - CSS DOESNT WORK THE SAME
canvas.width = 1024;
canvas.height = 576;

const c = canvas.getContext('2d');

// this is an object that holds all the canvas drawing methods
// draw a white rectangle for the game screen
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

export default c;
