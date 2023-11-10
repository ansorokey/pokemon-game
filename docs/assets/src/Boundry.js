import canvas from './Canvas.js';

class Boundry {
    static tileSize = 48;

    constructor({position}) {
        this.position = position;
        // tiles are 12px x 12px scaled 4x
        this.width = 48;
        this.height = 48;
    }

    draw() {
        // canvas.fillStyle = 'rgba(255, 0, 0, 0.0)';
        canvas.fillStyle = 'red';
        canvas.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

export default Boundry;
