// reference the canvas element
const canvas = document.querySelector('canvas');
// this will be the canvas context
// this is an object that holds all the canvas drawing methods
const c = canvas.getContext('2d');
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width / 2, canvas.height / 2) //, y,

const playerImage = new Image();
playerImage.src = './docs/assets/Images/playerDown.png';

// creates an image object to work with
const image = new Image();
image.src = './docs/assets/Tiled/Pellet Town.png';
// image.src = './docs/assets/sprites/my-map.png';


//since the image can take a while to create based on size,
// we want to wait until its loaded to try drawing it to the canvas
image.onload = async () => {
    c.drawImage(image, -809, -570) // we can offset the top left corner to change the starting position of the image
    // the player image should load after the background
    c.drawImage(
        playerImage, // the player sprite
        0, // crop start x
        0, // crop start y
        playerImage.width/4, // crop end x
        playerImage.height, //crop end y
        canvas.width / 2 - (playerImage.width / 4),
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width/4, // crop end x
        playerImage.height,
    )
}
