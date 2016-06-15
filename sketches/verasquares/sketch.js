function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function keyReleased() {
    drawFunction();
    return false; // prevent any default behavior
}

deviance_factor = 0.45;
w;
h;

function mouseMoved() {
    // deviance_factor = mouseX/w * 5;
    // console.log(deviance_factor);
    drawFunction();
    return false;
}

function drawSquares(color, basic_center, num_items) {
    noFill();
    strokeWeight(1.25);
    stroke(color[0], color[1], color[2]);
    for (var i = 0; i < num_squares; i++) {
        var square_size = i*(10 + randInt(1, 10));
        
        var deviance = square_size*deviance_factor;
        var square_center = {
            'x': basic_center.x + randInt(-deviance, deviance),
            'y': basic_center.y + randInt(-deviance, deviance)
        };
        rect(square_center.x, square_center.y, square_size, square_size);
    }
}


function setup() {
    w = 350;
    h = 350;
    createCanvas(w, h);
    // textSize(32);
    // textAlign(CENTER);
    // textFont("Avenir");
    // text('start typing', windowWidth / 2.0, windowHeight / 2.0);
    drawFunction();




}

function drawFunction() {
    
    background(243,241,246);
    
    num_squares = 10;
    red_center = {
        'x': 75,
        'y': 75
    };
    yellow_center = {
        'x': red_center.x + 25,
        'y': red_center.y + 25
    };
    blue_center = {
        'x': yellow_center.x + 25,
        'y': yellow_center.y + 25
    };
    drawSquares([201, 43, 91], red_center, num_squares);
    drawSquares([30, 29, 213], blue_center, num_squares);
    drawSquares([250, 237, 78], yellow_center, num_squares);
}


function draw() {};
