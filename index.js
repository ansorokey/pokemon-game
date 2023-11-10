// reference the canvas element
const canvas = document.querySelector('canvas');
// I SPENT AN HOUR AND A HALF TRYING TO FIGURE OUT WHY SCALE DIDNT MATCH
// DON'T TOUCH THIS - CSS DOESNT WORK THE SAME
canvas.width = 1024;
canvas.height = 576;

// this is an object that holds all the canvas drawing methods
const c = canvas.getContext('2d');
// draw a white rectangle for the game screen
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

// the playr sprite
const playerImage = new Image();
playerImage.src = './docs/assets/Images/playerDown.png';

// creates an image object to work with
const map = new Image();
map.src = './docs/assets/Tiled/Pellet Town.png';

//since the image can take a while to create based on size,
// we want to wait until its loaded to try drawing it to the canvas
map.onload = () => {
    c.drawImage(map, -740, -600) // we can offset the top left corner to change the starting position of the image
    // the player image should load after the background
    c.drawImage(
        playerImage, // the player sprite
        0, // crop start x
        0, // crop start y
        playerImage.width/4, // crop end x
        playerImage.height, //crop end y
        canvas.width / 2 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
    )
}

window.addEventListener('keydown', (e) => {
    // console.log(e.target.key)

});
