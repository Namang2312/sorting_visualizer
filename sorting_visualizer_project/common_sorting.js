let numBars = 10;
let bars = [];
let barWidth;
let opsPerSecSlider=1;
let colour=[];
let xx=0;
let currentBar=-2;
let nbars=0;let sw=2;
//selection sort variables
let currentBar1=0;
let currentBar2=0;
let i=0;
let j=1;
let minIndex=0;
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// The statements in the setup() function
// execute once when the program begins
function setup() {
    //frameRate( fps );
    myCanvas = createCanvas( 800, 400 );
    //myCanvas.parent("bubbleSort");
    
    nbars = createSlider(10, 90, 10,20);
    nbars.position(309, 55);
    nbars.style('width', '133px');
    numBars=nbars.value();
    //nbars.mousePressed(myResetBubble());
    //text button speed
    buttonspeed = createButton('Speed');
    buttonspeed.removeAttribute('box-shadow');
    buttonspeed.position(10, 50);
    buttonspeed.style("font-size", "24px", "color","rgb(0,0,255)",
        "box-shadow","rgb(0,0,255)","border","none");
    buttonspeed.style("background", "rgb(0, 0, 255)");
    buttonspeed.style("color", "rgb(255,255,0)");
    buttonspeed.style("border","none");

    //text button Size
    buttonsize = createButton('Size');
    buttonsize.removeAttribute('box-shadow');
    buttonsize.position(250, 50);
    buttonsize.style("font-size", "24px", "color","rgb(0,0,255)",
        "box-shadow","rgb(0,0,255)","border","none");
    buttonsize.style("background", "rgb(0, 0, 255)");
    buttonsize.style("color", "rgb(255,255,0)");
    buttonsize.style("border","none");    
    
    //Create new array Button
    button1 = createButton('Create new array');
    button1.position(10, 10);
    button1.style("font-size", "24px", "color", "gray");
    button1.style("background", "rgb(50, 50, 50)");
    button1.style("color", "rgb(0, 255, 0)");
    
   // window.console.log(button1.mousePressed());
    button1.mousePressed(num());
    button1.mousePressed(myResetBubble);
    
    
    //stroke( 255 );
    //strokeWeight( 2 );

    //Bubble sort button
    button2 = createButton('BubbleSort');
    button2.position(210, 10);
    //button.mousePressed(x2);
    button2.mousePressed(num());
    button2.mousePressed(loop);
    button2.style("font-size", "24px", "color", "gray");
    button2.style("background", "rgb(50, 50, 50)");
    button2.style("color", "rgb(0, 255, 0)");
    
    //Selection sort
    button3 = createButton('SelectionSort');
    button3.position(344, 10);
    //button.mousePressed(x1);
    //button.mousePressed(myResetSelection());
    button3.mousePressed(loop());
    button3.style("font-size", "24px", "color", "gray");
    button3.style("background", "rgb(50, 50, 50)");
    button3.style("color", "rgb(0, 255, 0)");
    opsPerSecSlider = createSlider(0.5, 50, 1);
    opsPerSecSlider.position(90, 55);
    opsPerSecSlider.style('width', '133px');
    window.console.log("setup");
    noLoop();
}

// The statements in the draw() function are executed until the
// program is stopped.
function draw() {
    background( 0, 0, 255 );  
    frameRate(opsPerSecSlider.value());
    numBars=nbars.value();
    window.console.log(numBars);
    drawBarsbubble();
    bubbleSort();
    //window.console.log(xx);
    window.console.log("draw");
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
        //window.console.log(bars.length-i-1);
        i++;
    }
    } else {
    noLoop(); // Stop calling draw() once we are done.
    }
    window.console.log("bubblesort");
}
//SelectionSort
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
}window.console.log("selection sort");
}
// Prepare the bars for drawing by draw()
function drawBarsbubble() {
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
//draw bars for selection sort
function drawBarsselection() {
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


function myResetBubble() {
    numBars=nbars.value();
    window.console.log(numBars);
    background( 0, 0, 255 );
    frameRate(opsPerSecSlider.value());
    bars = [];
    i = 0;
    j = 0;
    for(let k=0;k<numBars;k++){
        colour[k]=-1;
    }
    bars[0]=getRandomNumberBetween(1,(2*numBars))
    for ( let i = 0; i < numBars; i++ ) {
    bars[i]=getRandomNumberBetween(1,(2*numBars))
    }
    window.console.log(bars);
    currentBar=-2;
    drawBarsbubble();
    currentBar=0;
      
    noLoop();xx++;
    window.console.log("myResetBubble");
}
function myResetSelection() {
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
    window.console.log("myResetSelection");
    loop();

}



 function num(){
    numBars=nbars.value();
    barWidth = width / numBars;
 }