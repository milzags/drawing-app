const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 10;
let isPressed = false;
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (ev) => {
    isPressed = true;

    x = ev.offsetX;
    y = ev.offsetY;
    
});

canvas.addEventListener('mouseup', (ev) => {
    isPressed = false;

    x = undefined;
    y = undefined;
    
});

canvas.addEventListener('mousemove', (ev) => {
    if (isPressed) {
        const x2 = ev.offsetX;
        const y2 = ev.offsetY;
        drawCircle(x2,y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
};


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2*size;
    ctx.stroke();
};

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (ev) => {
    color = ev.target.value;
});

increase.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decrease.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});


clearBtn.addEventListener('click', () => {
   ctx.clearRect(0,0,canvas.width,canvas.height);
});



