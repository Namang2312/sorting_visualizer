const numBars = 10;
const fps = 1;  // Frame rate
let bars = [];
let barWidth;
let currentBar;
let i;
let j;
let colour=[];

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
        colour[bars.length-i-1]=2;
        i++;
    }
    } else {
    noLoop(); // Stop calling draw() once we are done.
    }
}

// Prepare the bars for drawing by draw()
/* drawBars() {
    window.console.log(bars);
    for ( const [idx, val] of bars.entries() ) {
    barHeight = ( height - 50 ) / 10 * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight;
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
}*/
function drawBars() {
    window.console.log(numBars);
    if(numBars==10){
        stroke( 255 );
        strokeWeight( 2 );
    }else if(numBars==30){
        stroke( 255 );
        strokeWeight( 0.8 );
    }else if(numBars==50){
        stroke( 255 );
        strokeWeight( 0.01 );
    }else if(numBars==70){
        stroke( 255 );
        strokeWeight( 0.01 );
    }else if(numBars==90){
        stroke( 255 );
        strokeWeight( 0.01 );
    }
    barWidth = width / numBars;
    for ( const [idx, val] of bars.entries() ) {
    
    barHeight = ( height - 60 ) / (3*numBars) * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight;
    // rect uses topLeftX, topLeftY, width, height
    //window.console.log(i);
    if(colour[idx]==2 || i>=(bars.length-1)){
        fill( 0, 255, 0 ); // green
    }else if ( idx == currentBar || idx == currentBar + 1) {
        fill( 255, 255, 0 ); // yellow
    }
    else{
        fill(255,0,0);//red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars);
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    fill( 255, 0, 0 );
    }
    window.console.log("drawbars");
}
function myReset() {
    bars = [];
    i = 0;
    j = 0;
    for(let k=0;k<numBars;k++){
        colour[k]=-1;
    }
    bars[0] = Math.floor( ( Math.random() * 9 ) + 1 );  // between 1 and 9 inc.
    for ( let i = 0; i < numBars; i++ ) {
    bars[i] = Math.floor( Math.random() * 10 ); // between 0 and 9 inc.
    }
    loop();
}

function mousePressed(){
    myReset();
}