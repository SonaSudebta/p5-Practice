function setup() {
	createCanvas(1366, 768);
}
function draw() {
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY);
}