// Canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height= canvas.height= window.innerHeight;

// Object


// Animation loop

let fps = 60;
let lastTime = 0;
function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate);



