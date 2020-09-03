const rain = document.getElementById("home__overlay");
const ctxRain = rain.getContext("2d");

rain.width = width;
rain.height = height;

ctxRain.strokeStyle = "rgba(225,225,225,0.8)";
ctxRain.lineWidth = 2;
ctxRain.lineCap = "round";

let init = [];
const maxParts = 300;
for (let a = 0; a < maxParts; a++) {
	init.push({
		x: Math.random() * width,
		y: Math.random() * height,
		l: Math.random() * 1,
		xs: -4 + Math.random() * 4 + 2,
		ys: Math.random() * 10 + 10,
	});
}

let particles = [];
for (let b = 0; b < maxParts; b++) {
	particles[b] = init[b];
}

const draw = () => {
	ctxRain.clearRect(0, 0, width, height);
	for (let c = 0; c < particles.length; c++) {
		let p = particles[c];
		ctxRain.beginPath();
		ctxRain.moveTo(p.x, p.y);
		ctxRain.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
		ctxRain.stroke();
	}
	move();
};

const move = () => {
	for (let b = 0; b < particles.length; b++) {
		let p = particles[b];
		p.x += p.xs;
		p.y += p.ys;
		if (p.x > width || p.y > height) {
			p.x = Math.random() * width;
			p.y = -20;
		}
	}
};

setInterval(draw, 50);
