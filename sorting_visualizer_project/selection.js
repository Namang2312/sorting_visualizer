const numBars = 10;
const fps = 0.5;  // Frame rate
let bars = [];
let barWidth;
let currentBar1;
let currentBar2;
let min_idx;
let i=0;
let j=1;
let minIndex=0;
let colour=[]

// The statements in the setup() function
// execute once when the program begins
function setup() {
    frameRate( 1 );
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
    selectionSort();
}

// The Bubble Sort Algorithm

function selectionSort() {
  if (i < bars.length-1) {
    let temp = bars[i];
    if(j<bars.length){
      if (bars[j] < bars[minIndex]) {
        minIndex = j;
      }
      j++;
    }else{
    bars[i] = bars[minIndex];
    bars[minIndex] = temp;
    colour[i]=2;
    i++;
    minIndex=i;
    j=i+1;
  }
  currentBar1=j;
  currentBar2=minIndex;
  window.console.log(i,j);
}else{
    noLoop();
}}

// Prepare the bars for drawing by draw()
function drawBars() {
    //window.console.log(bars);
    for ( const [idx, val] of bars.entries() ) {
    barHeight = ( height - 50 ) / 10 * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
     if(colour[idx]==2||i==numBars-1){
        fill(0,255,0);
    }else if ( idx == currentBar1) {  
        fill( 255, 255, 0 ); // yellow
    }else if(idx == currentBar2){
        fill(255);//white
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
    i = 0;
    j = 1;
    bars[0] = Math.floor( ( Math.random() * 9 ) + 1 );  // between 1 and 9 inc.
    for ( let i = 1; i < numBars; i++ ) {
    bars[i] = Math.floor( Math.random() * 10 ); // between 0 and 9 inc.
    }
    for ( let i = 0; i < numBars; i++ ) {
    colour[i]=-1;
    }
    loop();
}

function mousePressed(){
    myReset();
}