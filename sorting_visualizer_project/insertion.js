//let iteration = 1;
const numBars = 10;
const fps = 5;  // Frame rate
let bars = [];
let colourinsertion=[]
let barWidth;
let currentBarinsertion1;
let currentBarinsertion2;
var r = 1, s = 1;

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
    drawBarsinsertion();
    //bubbleSort();
    //selectionSort(iteration);
    insertionSort();
    //iteration++;
}

// The Bubble Sort Algorithm

function insertionSort() {
    if (r < numBars) {
    if (s > 0 && bars[s - 1] > bars[s]) {
      var temp = bars[s];
      bars[s] = bars[s - 1];
      bars[s - 1] = temp;

      s--;
    } else {
      colourinsertion[r]=2;
      r++;
      s = r;
    }
  }
  else{
    noLoop();
  }
}

// Prepare the bars for drawing by draw()
function drawBarsinsertion() {
    window.console.log(bars);
    for ( const [idx, val] of bars.entries() ) {
    barHeight = ( height-50) / 10 * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
    if ( colourinsertion[idx] ==2||colourinsertion[idx-1] ==2||idx==0) {
        fill( 0, 255, 0 ); // green
    } else 
    if ( idx == s) {
        fill( 255, 255, 0 ); // yellow
    }
    else{
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
    j = iteration;
    bars[0] = Math.floor( ( Math.random() * 9 ) + 1 );  // between 1 and 9 inc.
    for ( let i = 1; i < numBars; i++ ) {
    bars[i] = Math.floor( Math.random() * 10 ); // between 0 and 9 inc.
    }
    for ( let i = 0; i < numBars; i++ ) {
    colourinsertion[i]=-1;
    }
    loop();
}

function mousePressed(){
    myReset();
}