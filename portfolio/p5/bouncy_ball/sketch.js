function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

let cloud1_x = 100
let cloud2_x = 500
let cloud3_x = 1300
let cloud4_x = 1600

function draw() {
	noStroke();
	
	//sky
	background(77, 195, 255);
	
	//cloud1
	fill (255, 255, 255);
	ellipse (cloud1_x, 300, 100, 50)
	
	//cloud2
	ellipse (cloud2_x, 400, 100, 50)
	//cloud3
	ellipse (cloud3_x, 200, 100, 50)
	
	//cloud4
	ellipse (cloud4_x, 50, 100, 50)
	
	//cloud logic
	cloud1_x-=5
	if(cloud1_x == -400){
		cloud1_x = 2000
	}
	
	cloud2_x-=5
	if(cloud2_x == -400){
		cloud2_x = 2000
	}
	
	cloud3_x-=5
	if(cloud3_x == -400){
		cloud3_x = 2000
	}
	
	cloud4_x-=5
	if(cloud4_x == -400){
		cloud4_x = 2000
	}
	
	
	//bird
	fill (227, 207, 75);
	triangle(mouseX + 70, mouseY, mouseX + 40, mouseY + 10, mouseX + 40, mouseY - 10);
	fill (224, 224, 224);
	triangle(mouseX-20, mouseY, mouseX - 60, mouseY + 30, mouseX - 60, mouseY - 30);
	fill (224, 224, 224);
	triangle(mouseX + 5, mouseY, mouseX - 25, mouseY, mouseX - 25, mouseY - 40);
	fill (240, 240, 240);
	ellipse(mouseX, mouseY, 100, 40);
	fill (224, 224, 224);
	triangle(mouseX- 10, mouseY, mouseX - 40, mouseY, mouseX - 45, mouseY - 40);
	fill (0, 0, 0);
	circle(mouseX+30, mouseY-5, 10)

	
	
	//trees
	fill(0, 112, 2);
	circle(0, 850, 500);
	circle(300, 800, 500);
	circle(600, 900, 500);
	circle(900, 850, 500);
	circle(1200, 800, 500);
	circle(1500, 900, 500);
	circle(1800, 850, 500);
	circle(2100, 800, 500);
	circle(2400, 900, 500);
	
}