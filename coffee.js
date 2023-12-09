img = "";
status = "";

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload() {
    img = loadImage("coffeeSample.jpg");
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function back() {
    window.location = "index.html";
}