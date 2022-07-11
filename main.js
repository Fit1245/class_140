img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);

	poseNet = ml5.poseNet(video , modalLoaded);
	poseNet.on('pose' , gotPoses);
}
function modalLoaded() {
	console.log("model Loaded!");
}
function draw() {
	game();
	background('#D3D3D3');
	if (noseX < 300) {
		marioX = marioX - 1;
	}
	if (noseX > 300) {
		marioX = marioX + 1;
	}
	if (noseY < 150) {
		marioY = marioY - 1;
	}
	image(img , marioX , marioY , 40 , 70);
}
function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log("noseX = " + noseX + "noseY = " + noseY);
	}
}






