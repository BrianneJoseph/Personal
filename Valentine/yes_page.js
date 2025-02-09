const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("click", function () {
    let audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    }
});


class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 3 + 2;
        this.dx = Math.random() * 6 - 3;
        this.dy = Math.random() * 6 - 3;
        this.life = 50 + Math.random() * 50;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.life -= 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let fireworks = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 30; i++) {
        fireworks.push(new Firework(x, y, color));
    }
}

function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.life <= 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

setInterval(createFirework, 500);
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
