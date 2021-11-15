let bars = [];
let numBars = 10;
let states = [];
let barWidth;
let topp = -1;let qq=0;
var stack = [];let p=0;
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function pushh(bars,value){
    let x=bars.length;
    bars[x]=value;
}
Array.prototype.swap = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}

function setup() {
    // Create Canvas of given Size
    createCanvas(800, 400);
    barWidth = width / numBars;
    stroke( 255 );
    strokeWeight( 1 );
    myReset(); 
    print("Sorted Array:" + bars);
}
  

// Definition of Draw function
function draw() {
    // Set Background Color 
    background(0,0,255);
    drawbars();
    quickSortIterative(bars,0,bars.length-1);
    }
  

function quickSortIterative(arr,l,h)
{
    // Create an auxiliary stack
    //int stack[h - l + 1];
    
    // initialize top of stack
    //let top = -1;

    // push initial values of l and h to stack
    

    // Keep popping from stack while is not empty
    if (topp >= 0) {
        // Pop h and l
        h = stack[topp];
        topp-=1
        l = stack[topp];
        topp-=1;
        // Set pivot element at its correct position
        // in sorted array
        p = partition(arr, l, h);

        // If there are elements on left side of pivot,
        // then push left side to stack
        if (p - 1 > l) {
            topp+=1;
            stack[topp] = l;
            topp+=1;
            stack[topp] = p - 1;
        }

        // If there are elements on right side of pivot,
        // then push right side to stack
        if (p + 1 < h) {
            topp+=1;
            stack[topp] = p + 1;
            topp+=1;
            stack[topp] = h;
        }
        states[p]=1;
        window.console.log(arr);
        window.console.log(topp);
    }else{
        //window.console.log(bars);
        //window.console.log(topp);
        //drawbars();
        //noLoop();
    }
} 

function partition(arr,l,h)
{
    let x = arr[h];
    let i = (l - 1);

    for (let j = l; j <= h - 1; j++) {
        if (arr[j] <= x) {
            i++;
            arr.swap(i,j);
            window.console.log(arr[i],arr[j]);
        }
    }
    //swap(arr[i + 1],arr[h]);
    arr.swap(i+1,h);
    window.console.log(arr[i+1],arr[h]);
    return (i + 1);
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
    /*for(let i=0;i<(bars.length-1) + 1;i++){
        pushh(stack,0);
    }*/
    window.console.log(bars);
    topp=-1;
    topp+=1;
    stack[topp] = 0;
    topp+=1;
    stack[topp] = bars.length-1;
    qq=1;
    loop();
}
function drawbars(){
    for(let i = 0; i < bars.length; i++) {
        stroke(255);
        strokeWeight( 1 );
        fill(255);
          
        if(topp< 0) {
          
            // sorted bars
            fill(0,255,0);
        }
        else if (states[i]==1) {
            // pivot element
            fill(255,255,0);
        }
        else {
            // UnSorted Bars
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