const numBars = 10;
const fps = 0.5;  // Frame rate
let bars = [];
let barWidth;
let currentBar1;
let currentBar2;
let min_idx;
let i;
let j;
let iteration = 0;

// The statements in the setup() function
// execute once when the program begins
function setup() {
    frameRate( fps );
    myCanvas = createCanvas( 800, 400 );
    //myCanvas.parent("selectionSort()");
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
    //bubbleSort();
    selectionSort(iteration);
    iteration++;
}

// The Bubble Sort Algorithm

function selectionSort(iteration) {
  if (iteration < bars.length) {
    let min = bars.length;
    let minIndex;
    let temp = bars[iteration];
    for (let j = iteration; j < bars.length; j++) {
      if (bars[j] < min) {
        min = bars[j];
        minIndex = j;
      }
    }
    bars[iteration] = bars[minIndex];
    bars[minIndex] = temp;
    currentBar1=iteration;
    currentBar2=minIndex;
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
    if ( idx == currentBar1 || idx == currentBar2 ||iteration==bars.length-1||iteration==bars.length) {
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
    iteration = 0;
    j = i+1;
    bars[0] = Math.floor( ( Math.random() * 9 ) + 1 );  // between 1 and 9 inc.
    for ( let i = 1; i < numBars; i++ ) {
    bars[i] = Math.floor( Math.random() * 10 ); // between 0 and 9 inc.
    }
    loop();
}

function mousePressed(){
    myReset();
}