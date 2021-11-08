const numBars = 10;
const fps = 1;  // Frame rate
let bars = [];
let barWidth;
let currentBar;
let i;
let j;

// The statements in the setup() function
// execute once when the program begins
function setup() {
    frameRate( fps );
    myCanvas = createCanvas( 800, 400 );
    //myCanvas.parent("bubbleSort");
    barWidth = width / numBars;
    stroke( 255 );
    strokeWeight( 2 );
    myReset();
}

// The statements in the draw() function are executed until the
// program is stopped.
function draw() {
    background( 0, 0, 255 );
    drawBars();
    bubbleSort();
}

// The Bubble Sort Algorithm
function bubbleSort() {
    currentBar = j;
    if ( i < bars.length ) {
    let temp = bars[j];
    if ( bars[j] > bars[j + 1] ) {
        bars[j] = bars[j + 1];
        bars[j + 1] = temp;
    }
    j++;

    if ( j >= bars.length - i - 1 ) {
        j = 0;
        i++;
    }
    } else {
    noLoop(); // Stop calling draw() once we are done.
    }
}

// Prepare the bars for drawing by draw()
function drawBars() {
    window.console.log(bars);
    for ( const [idx, val] of bars.entries() ) {
    barHeight = ( height - 50 ) / 10 * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
    if ( idx == currentBar || idx == currentBar + 1 ||i==bars.length-1||i==bars.length) {
        fill( 0, 255, 0 ); // green
    } else {
        fill( 255, 0, 0 ); // red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 40 );
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    //if(i==bars.length-1){
     //   noLoop();
    //}
    fill( 255, 0, 0 );
    }
}

function myReset() {
    bars = [];
    i = 0;
    j = 0;
    bars[0] = Math.floor( ( Math.random() * 9 ) + 1 );  // between 1 and 9 inc.
    for ( let i = 0; i < numBars; i++ ) {
    bars[i] = Math.floor( Math.random() * 10 ); // between 0 and 9 inc.
    }
    loop();
}

function mousePressed(){
    myReset();
}