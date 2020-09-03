const canvas = document.getElementById("home__canvas");
const ctx = canvas.getContext("2d");
const home = document.getElementById("home");
const homeStyle = getComputedStyle(home);

const width = parseInt(homeStyle.getPropertyValue("width"), 10);
const height = parseInt(homeStyle.getPropertyValue("height"), 10);

canvas.width = width;
canvas.height = height;

/************* image ******************/
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "image/boat.jpg";

let wymReady = false;
const wymImage = new Image();
wymImage.onload = function () {
	wymReady = true;
};
wymImage.src = "image/wym.png";

let playerReady = false;
const playerImage = new Image();
playerImage.onload = function () {
	playerReady = true;
};
playerImage.src = "image/brush.png";

let inkReady = false;
const inkImage = new Image();
inkImage.onload = function () {
	inkReady = true;
};
inkImage.src = "image/ink.png";

let keyboardReady = false;
const keyboardImage = new Image();
keyboardImage.onload = function () {
	keyboardReady = true;
};
keyboardImage.src = "image/keyboard.png";

let heroReady = false;
const heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "image/hero.png";

/**************  **************/
let player = {
	speed: 256,
};
let ink = {};
let progressBar = 20;
let inkNumber = 0;
/************** bind keys **************/
let keysDown = {};
addEventListener(
	"keydown",
	(e) => {
		if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
		keysDown[e.keyCode] = true;
	},
	false
);
addEventListener(
	"keyup",
	(e) => {
		delete keysDown[e.keyCode];
	},
	false
);

/************** reset **************/
const reset = function () {
	ink.x = width / 4 + Math.random() * (width / 2);
	ink.y = height / 4 + Math.random() * (height / 2 - 100);
};

const update = function (modifier) {
	if (38 in keysDown) {
		// Player holding up
		player.y -= player.speed * modifier;
	}
	if (40 in keysDown) {
		// Player holding down
		player.y += player.speed * modifier;
	}
	if (37 in keysDown) {
		// Player holding left
		player.x -= player.speed * modifier;
	}
	if (39 in keysDown) {
		// Player holding right
		player.x += player.speed * modifier;
	}

	// Are they touching
	if (
		player.x <= ink.x + 100 &&
		ink.x <= player.x + 70 &&
		player.y <= ink.y + 100 &&
		ink.y <= player.y + 70
	) {
		++inkNumber;
		reset();
		progressBar += 20;
	}

	//touch border
	if (player.x > width) {
		player.x = 0;
	}
	if (player.x < 0) {
		player.x = width;
	}
	if (player.y > height) {
		player.y = 0;
	}
	if (player.y < 0) {
		player.y = height;
	}
};

// Draw everything
const render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, width, height);
		ctx.font = "900 80px cursive";
		ctx.textAlign = "center";
		ctx.fillStyle = "rgba(5, 5, 5, 0.7)";
		ctx.fillText("YIMENG WANG", width / 2, height / 2 + 40);
	}

	if (wymReady) {
		ctx.globalAlpha = 0.8;
		ctx.drawImage(
			wymImage,
			width / 4,
			height / 4,
			400,
			(400 * wymImage.height) / wymImage.width
		);
	}

	if (playerReady) {
		ctx.drawImage(
			playerImage,
			player.x,
			player.y,
			100,
			(100 * playerImage.height) / playerImage.width
		);
	}

	if (inkReady) {
		ctx.drawImage(inkImage, ink.x, ink.y, 70, 70);
	}

	if (keyboardReady) {
		ctx.drawImage(keyboardImage, 50, height - 150, 100, 100);
	}

	if (heroReady && progressBar >= 120) {
		ctx.drawImage(heroImage, width / 2 - 150, height - 300, 300, 300);
		rain.addEventListener("click", (event) => {
			const x = event.pageX;
			const y = event.pageY;
			if (
				y > height - 300 &&
				y < height &&
				x > width / 2 - 150 &&
				x < width / 2 + 150
			) {
				document.getElementById("works").scrollIntoView({
					behavior: "smooth",
				});
			}
		});
	}

	ctx.fillStyle = "rgb(9, 9, 9)";
	ctx.font = "24px cursive";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Move your brush to touch the ink ", 170, height - 70);

	ctx.fillText(inkNumber, 50, height - 26);
	ctx.fillRect(80, height - 50, progressBar, 20);
};

// The main game loop
const main = function () {
	const now = Date.now();
	const delta = now - then;
	update(delta / 1000);
	render();
	then = now;

	requestAnimationFrame(main);
};

// Let's play this game!
let then = Date.now();
player.x = canvas.width / 2;
player.y = canvas.height / 2;
reset();
main();
