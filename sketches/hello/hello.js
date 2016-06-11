function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function keyReleased() {
    refreshScreen();
    return false; // prevent any default behavior
}

function mouseClicked() {
    refreshScreen();
    return false;
}

function touchStarted() {
    refreshScreen();
    return false;
}

function refreshScreen() {
    clear();
    var dis_width=width;
    var dis_height=height;
    for (i = 0; i < 100; i++) {
        line(randInt(0, dis_width), randInt(0, dis_height), randInt(0, dis_width), randInt(0, dis_height));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    textAlign(CENTER);
    textFont("Avenir");
    text('start typing', windowWidth / 2.0, windowHeight / 2.0);
}

function draw() {

}