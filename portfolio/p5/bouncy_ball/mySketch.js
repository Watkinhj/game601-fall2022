let targetX = 100;
let targetY = 400;

let score = 0;
let lives = 3;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// Clear the background
	background(50);
	
	// Move the target
	targetX = targetX + 7;
	// Draw the target
	ellipse(targetX, targetY, 100, 100);
	
	// Draw the score on the screen
	fill(255);
	textSize(40);
	text(score, 100, 100);
	text("Score:", 100, 50);
	text(lives, 250, 100)
	text("Lives:", 250, 50);
	
	//lives counter
		if (targetX > width){
		lives = lives - 1;
		targetX = 100;
	}
	
	//speedup
		if (score > 10){
		targetX = targetX + 2;
		}

		if (score > 20){
		targetX = targetX + 2;
		}
	
		if (score > 30){
		targetX = targetX + 2;
		}
	
	// loss state
		if (lives <= 0){
		textSize(40);
		text("Game Over", 500, 100);
	}
}

function mousePressed() {
	// Use the dist function to compute the distance from the mouse
	// to the center of the target (the ellipse we draw in draw)
	// After this, the variable 'd' contains that numerical distance.
	let d = dist(targetX, targetY, mouseX, mouseY);
	
	// If the distance from the mouse to the center of the target is less
	// than half the diameter of the circle, increment the score variable
	// and reposition the target to a random position.
	if (d < 50) {
		score = score + 1;
		targetX = (0, 0);
		targetY = random(0, height);
	}
}