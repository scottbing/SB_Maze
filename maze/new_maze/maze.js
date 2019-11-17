// Scott Bing
// BSSD5520 Javascript
// Fall 2019
// Final Project

var cols, rows;
var w = 40;     // each cell is a square there are 10 rows and 10 columns
var grid = [];  // an array to store the maze

// setup the maze
function setup() {
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    
    // build the grid
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols;  i++) {
            var cell = new Cell(i,j);       // instantiate a Cell object
            grid.push(cell);
        }
        
    }
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

// maze cell constructor
function Cell(i, j) {
    this.i = i;     // column
    this.j = j;     // row
            //  [Top,right,bottom,left]
    this.walls =[true, true, true,true]
    
    // object function - draw cell
    this.show = function() {
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);
        if (this.walls[0]) {
            line(x,y,x+w,y);        // top -north wall
        }
        if (this.walls[1]) {
            line(x+w,y,x+w,y+w);    // right - east wall
        }
        if (this.walls[2]) {
            line(x+w,y+w,x,y+w);    // bottom -south wall
        }
        if (this.walls[3]) {
            line(x,y+w,x,y);        // left - west wall
        }
        
        
//        noFill();
//        rect(x,y,w,w);
    }
    
}