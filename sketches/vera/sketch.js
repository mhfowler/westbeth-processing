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


var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var points;


function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x)*amplitude;
        points[i] = {
            'x': x*xspacing*PI*2 % w,
            'y': height/2+yvalues[i]
        };
        x+=dx;
    }
}

function renderWave() {
    noStroke();
    fill(255);
    // A simple way to draw the wave with an ellipse at each location
    // for (var x = 0; x < yvalues.length; x++) {
    //     ellipse(x*xspacing, height/2+points[x]['y'], 16, 16);
    // }
    for (var i = 0; i < yvalues.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 16, 16);
    }
}


function refreshScreen() {
    // clear();
    // var dis_width=width;
    // var dis_height=height;
    // var triangles = [];
    // var max_triangle_size = 100;
    // for (i = 0; i < 100; i++) {
    //     var triangle_center_x = randInt(0, dis_width);
    //     var triangle_center_y = randInt(0, dis_height);
    //     var y_delta = sin(triangle_center_x)*100;
    //     console.log(y_delta);
    //     triangle_center_y = triangle_center_x + y_delta;
    //     var x1 = randInt(triangle_center_x - max_triangle_size, triangle_center_x + max_triangle_size);
    //     var y1 = randInt(triangle_center_y - max_triangle_size, triangle_center_y + max_triangle_size);
    //     var x2 = randInt(triangle_center_x - max_triangle_size, triangle_center_x + max_triangle_size);
    //     var y2 = randInt(triangle_center_y - max_triangle_size, triangle_center_y + max_triangle_size);
    //     var x3 = randInt(triangle_center_x - max_triangle_size, triangle_center_x + max_triangle_size);
    //     var y3 = randInt(triangle_center_y - max_triangle_size, triangle_center_y + max_triangle_size);
    //     noFill();
    //     triangle(x1,y1,x2,y2,x3,y3)
    // }
    //
    // for (x = 0; x < int(dis_width); x++) {
    //             var x_percentage = dis_width / triangle_center_x;
    // }
    clear();

    
}

function drawFunction() {
    background(0);
    calcWave();
    renderWave();
}

function setup() {
    // textSize(32);
    // textAlign(CENTER);
    // textFont("Avenir");
    // text('start typing', windowWidth / 2.0, windowHeight / 2.0);

    createCanvas(windowWidth, windowHeight);
    w = width+16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w/xspacing)*4);
    points = new Array(floor(w/xspacing)*4);
}

function draw() {
    drawFunction();
}