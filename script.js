function setup() {
	backround('black')
	createCanvas(640, 420);
	createCanvas(1366, 768);
}
function draw() {
	if (mouseIsPressed) {
		let c = color('orange');
		fill(c);
	} else {
		let c = color('magenta');
		fill(c);
	}
	ellipse(mouseX, mouseY, 50, 50);
	noStroke();
}