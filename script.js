function setup() {
	createCanvas(640, 420);
}
function draw() {
	if (mouseIsPressed) {
		let c = color('white');
		fill(c);
	} else {
		let c = color('magenta');
		fill(c);
	}
	ellipse(mouseX, mouseY, 80, 80);
	noStroke();
}