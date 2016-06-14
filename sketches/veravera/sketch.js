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


var length_multiple = 4;
var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var points;
var num_items;
var triangles;


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


function calcNewTriangles() {
    for (var i = 0; i < yvalues.length; i++) {
        var point = points[i];
        // ellipse(point.x, point.y, 16, 16);
        // var max_triangle_size = 200;
        var max_triangle_size = 5;
        var x1 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        var y1 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        var x2 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        var y2 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        var x3 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        var y3 = randInt(0 - max_triangle_size, 0 + max_triangle_size);
        triangles[i] = {
            'x1': x1,
            'y1': y1,
            'x2': x2,
            'y2': y2,
            'x3': x3,
            'y3': y3
        };
    }
}

function renderTrianglesWave() {
    // noStroke();
    // fill(0);
    // A simple way to draw the wave with an ellipse at each location
    // for (var x = 0; x < yvalues.length; x++) {
    //     ellipse(x*xspacing, height/2+points[x]['y'], 16, 16);
    // }
    noFill();
    for (var i = 0; i < triangles.length; i++) {
        var point = points[i];
        var c_triangle = triangles[i];
        triangle(point.x + c_triangle.x1,point.y + c_triangle.y1,point.x + c_triangle.x2,point.y + c_triangle.y2,
            point.x + c_triangle.x3, point.y + c_triangle.y3)
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

last_update = 0;

function drawFunction() {
    background(255);
    calcWave();

    var int_theta = int(theta);
    if (int_theta != last_update) {
        last_update = int_theta;
        // calcNewTriangles();
    }
    renderTrianglesWave();
}

function setup() {
    // textSize(32);
    // textAlign(CENTER);
    // textFont("Avenir");
    // text('start typing', windowWidth / 2.0, windowHeight / 2.0);

    createCanvas(windowWidth, windowHeight);
    w = width+16;
    num_items = floor(w/xspacing)*length_multiple;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(num_items);
    points = new Array(num_items);
    triangles = new Array(num_items);
    calcWave();
    calcNewTriangles();
}

function draw() {
    drawFunction();
}