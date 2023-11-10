import collisions from './docs/assets/Tiled/collisions.js';
import Boundry from './docs/assets/src/Boundry.js';
import Sprite from './docs/assets/src/Sprite.js';
import c, {canvas} from './docs/assets/src/Canvas.js';

const offset = {
    x: -736,
    y: -650
}

const boundries = [];
collisions.forEach((row, r) => {
    row.forEach((col, c) => {
        if(row[c] === 1025) boundries.push(new Boundry({
            position: {
                x: c*Boundry.tileSize + offset.x,
                y: r*Boundry.tileSize + offset.y
            }
        }))
    })
});

// creates an image object to work with
const map = new Image();
map.src = './docs/assets/Tiled/Pellet Town.png';

const background = new Sprite({
    position: {x: offset.x, y: offset.y},
    image: map
});

// the player sprite
const playerImage = new Image();
playerImage.src = './docs/assets/Images/playerDown.png';
const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2,
        y: canvas.height / 2 - 68 / 2,
    },
    image: playerImage,
    frames: {max: 4}
});

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const moveables = [background, ...boundries];

function rectangleCollision({rec1, rec2}) {
    return (
        rec1.position.x + rec1.width >= rec2.position.x &&
        rec1.position.x <= rec2.position.x + rec2.width &&
        rec1.position.y <= rec2.position.y + rec2.height &&
        rec1.position.y + rec1.height >= rec2.position.y
    )
}

// the loop that draws and updates the canvas
function gameTick() {
    window.requestAnimationFrame(gameTick);
    background.draw();
    boundries.forEach(b => {
        b.draw();
    });
    player.draw();

    let moving = true;

    if(keys.w.pressed && lastKey === 'w') {
        for(let i = 0; i < boundries.length; i++) {
            let b = boundries[i];
            if(rectangleCollision({
                rec1: player,
                rec2: {...b, position: {x: b.position.x, y: b.position.y + 3}}
            })){
                console.log('hit');
                moving = false;
                break;
            }
        }

        if(moving) moveables.forEach(m => m.position.y += 3);

    } else if(keys.s.pressed && lastKey === 's') {
        for(let i = 0; i < boundries.length; i++) {
            let b = boundries[i];
            if(rectangleCollision({
                rec1: player,
                rec2: {...b, position: {x: b.position.x, y: b.position.y - 3}}
            })){
                moving = false;
                break;
            }
        }
        if(moving) moveables.forEach(m => m.position.y -= 3);

    } else if(keys.a.pressed && lastKey === 'a') {
        for(let i = 0; i < boundries.length; i++) {
            let b = boundries[i];
            if(rectangleCollision({
                rec1: player,
                rec2: {...b, position: {x: b.position.x + 3, y: b.position.y}}
            })){
                moving = false;
                break;
            }
        }
        if(moving) moveables.forEach(m => m.position.x += 3);

    } else if(keys.d.pressed && lastKey === 'd') {
        for(let i = 0; i < boundries.length; i++) {
            let b = boundries[i];
            if(rectangleCollision({
                rec1: player,
                rec2: {...b, position: {x: b.position.x - 3, y: b.position.y}}
            })){
                moving = false;
                break;
            }
        }
        if(moving) moveables.forEach(m => m.position.x -= 3);

    }

}

gameTick();

// lastKey prevents us from changing directions when multiple keys are rpessed at the same time
let lastKey = '';
window.addEventListener('keydown', (e) => {
    // console.log(e.target.key)
    switch(e.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;

        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;

        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;

        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
});

window.addEventListener('keyup', (e) => {
    // console.log(e.target.key)
    switch(e.key) {
        case 'w':
            keys.w.pressed = false;
            break;

        case 'a':
            keys.a.pressed = false;
            break;

        case 's':
            keys.s.pressed = false;
            break;

        case 'd':
            keys.d.pressed = false;
            break;
    }
});
