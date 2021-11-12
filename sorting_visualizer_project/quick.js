// Assign Global Values
let bars = [];
let numBars = 20;
let states = [];
let barWidth;
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function setup() {
  
    // Create Canvas of given Size
    createCanvas(800, 400);
  
    // Assign Array of Random Values
    //values = new Array(floor(width/w));
      
    
      
    // To print values to Browser's Console
    //print("Unsorted Array:" + values);
      
    // Invoke QuickSort Function
    
    barWidth = width / numBars;
    stroke( 255 );
    strokeWeight( 1 );
    myReset(); 
    quickSort(bars, 0, bars.length);
    print("Sorted Array:" + bars);
}
  
// Asynchronous Definition of Quick Sort Function
async function quickSort(arr, start, end) {
    if(start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;
      
    // Promise.all is used so that each function
    // should invoke simultaneously
    await Promise.all([quickSort(arr, start, index-1),
            quickSort(arr, index+1, end)]);
}
  
// Asynchronous Definition of Partition Function
async function partition(arr, start, end) {
      
    for(let i = start; i< end; i++) {
        states[i] = 1;
    }
      
    let pivotIndex = start;
    let pivotValue = arr[end];
    states[pivotIndex] = 0;
      
    for(let i = start; i < end; i++) {
        if(arr[i]<pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }
      
    await swap(arr, pivotIndex, end);
      
        for(let i = start; i < end; i++) {
            states[i] = -1;
        }
      
    return pivotIndex;
}
  
// Definition of Draw function
function draw() {
      
    // Set Background Color 
    background(0,0,255);
    drawbars();
      
    
}
  
async function swap(arr, a, b) {
      
    // Call to sleep function
    await sleep(100);
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}
  
// Definition of sleep function
function sleep(ms) {
    return new Promise(resolve=> setTimeout(resolve, ms));
}

function myReset() {
    bars = [];
    i = 0;
    j = 0;
    for(let i = 0; i < numBars; i++) {
        bars[i] = floor(getRandomNumberBetween(1,40));
        states[i] = -1; 
    }
    window.console.log(bars);
    loop();
}
function drawbars(){
    for(let i = 0; i < bars.length; i++) {
        stroke(255);
        strokeWeight( 1 );
        fill(255);
          
        if(states[i] == 0) {
          
            // Pivot Element
            fill(0,255,0);
        }
        else if (states[i]==1) {
            // Sorting bar
            fill(255,255,0);
        }
        else {
            // Sorted Bars
            fill(255,0, 0);
        }
        barHeight = ( height - 50 ) / 40 * bars[i];
        topLeftX = i * ( barWidth );
        topLeftY = height - barHeight 
        rect( topLeftX, topLeftY, barWidth, barHeight );
        textSize( 20 );
        textAlign( CENTER );
        fill( 255 )
        text( bars[i], topLeftX + barWidth / 2, topLeftY-10);
        
        fill( 255, 0, 0 );
        }
}