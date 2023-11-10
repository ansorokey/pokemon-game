import c, {canvas} from './Canvas.js';

// Rather than passing in constructor arguments in order,
// destructuring them from an object allows them to be added in any order
class Sprite {
    constructor({position, image, frames = {max:1}}) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max;
            this.height = this.image.height / this.frames.max;
        }
    }

    draw() {
        // c.drawImage(this.image, this.position.x, this.position.y) // we can offset the top left corner to change the starting position of the image
        c.drawImage(
            this.image, // the player sprite
            0, // crop start x
            0, // crop start y
            this.image.width / this.frames.max, // crop end x
            this.image.height, //crop end y
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        )
    }
}

export default Sprite;
