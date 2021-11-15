let numBars = 10;
let bars = [];
let barWidth;
let opsPerSecSlider=1;
let xx=0;
let nbars=0;let sw=2;
let canvasDiv = document.getElementById('myCanvas');
let newArrClicked = false;
//bubble sort variables
let currentBar=-2;
let i=0;
let j=0;
let colour=[];

//selection sort variables
let p=0;
let q=1;
let minIndex=0;
let colourselection=[];
let currentBarselection1=-2;
let currentBarselection2=-2;

//insertion sort variables
let colourinsertion=[]
let currentBarinsertion1;
let currentBarinsertion2;
var r = 1, s = 1;

//merge sort variables
let currentBarmerge;
let curr_size=1;

//quick sort variables
let states = [];
let topp = -1;let qq=0;
var stack = [];let pivot=0;

let button1, button2, button3,button4,button5,button6;
let sortType=0;  //sorting type 0->bubble sort, 1->selection sort...
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function minno(x, y) { 
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}
//window.console.log(colour[2]);
// The statements in the setup() function
// execute once when the program begins
function setup() {
    //frameRate( fps );
    // let canvasDiv = document.getElementById('myCanvas');
    // myCanvas.parent("myCanvas");
    createCanvas(windowWidth, windowHeight);
    
    nbars = createSlider(10, 90, 10,20);
    nbars.position(309, 55);
    nbars.style('width', '133px');
    numBars=nbars.value();
    nbars.input(()=>{
        if(newArrClicked) myReset();
        
    });
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
    button1.mousePressed(()=>{
        myReset()
        newArrClicked = true;
    });
    
    
    //stroke( 255 );
    //strokeWeight( 2 );

    //Bubble sort button
    button2 = createButton('Bubble Sort');
    button2.position(210, 10);
    //button.mousePressed(x2);
    button2.mousePressed(()=>{sortType=0; loop()});
    button2.style("font-size", "24px", "color", "gray");
    button2.style("background", "rgb(50, 50, 50)");
    button2.style("color", "rgb(0, 255, 0)");
    
    //Selection sort
    button3 = createButton('Selection Sort');
    button3.position(351, 10);
    //button.mousePressed(x1);
    //button.mousePressed(myResetSelection());
    button3.mousePressed(()=>{sortType=1; loop()});
    button3.style("font-size", "24px", "color", "gray");
    button3.style("background", "rgb(50, 50, 50)");
    button3.style("color", "rgb(0, 255, 0)");

    //Insertion sort button
    button4 = createButton('Insertion Sort');
    button4.position(516, 10);
    button4.mousePressed(()=>{sortType=2; loop()});
    button4.style("font-size", "24px", "color", "gray");
    button4.style("background", "rgb(50, 50, 50)");
    button4.style("color", "rgb(0, 255, 0)");

    //merge sort button
    button5 = createButton('Merge Sort');
    button5.position(674, 10);
    button5.mousePressed(()=>{sortType=3; loop()});
    button5.style("font-size", "24px", "color", "gray");
    button5.style("background", "rgb(50, 50, 50)");
    button5.style("color", "rgb(0, 255, 0)");

    
    //quick sort button
    button5 = createButton('Quick Sort');
    button5.position(808, 10);
    button5.mousePressed(()=>{sortType=4; loop()});
    button5.style("font-size", "24px", "color", "gray");
    button5.style("background", "rgb(50, 50, 50)");
    button5.style("color", "rgb(0, 255, 0)");
    opsPerSecSlider = createSlider(0.5, 50, 1);
    opsPerSecSlider.position(90, 55);
    opsPerSecSlider.style('width', '133px');
    window.console.log("setup");
    noLoop();
}

// The statements in the draw() function are executed until the
// program is stopped.
function draw() {
      
    frameRate(opsPerSecSlider.value());
    numBars=nbars.value();
    //window.console.log(numBars);
    //console.log('sort type ', sortType);
    if(sortType==0){
        background( 0, 0, 255 );
        drawBarsbubble();
        bubbleSort();

    }
    else if(sortType==1){
        background( 0, 0, 255 );
        drawBarsselection();
        selectionSort();
    }
    else if(sortType==2){
        background( 0, 0, 255 );
        drawBarsinsertion();
        insertionSort();
    }
    else if(sortType==3){
        background( 0, 0, 255 );
        drawBarsmerge();
        mergeSort(bars,bars.length);
    }
    else if(sortType==4){
        background( 0, 0, 255 );
        quickSort(bars, 0, bars.length);
        drawbarsquick();
    }
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
  if (p < bars.length-1) {
    let temp = bars[p];
    if(q<bars.length){
      if (bars[q] < bars[minIndex]) {
        minIndex = q;
      }
      q++;
    }else{
    bars[p] = bars[minIndex];
    bars[minIndex] = temp;
    colourselection[p]=2;
    p++;
    minIndex=p;
    q=p+1;
  }
  currentBarselection1=q;
  currentBarselection2=minIndex;
 // window.console.log(i,j);
}else{
    noLoop();
}window.console.log("selection sort");
}

//insertion sort
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


//merge sort function
function mergeSort(bars, n)
{
 // For current size of subarrays to be merged
                // curr_size varies from 1 to n/2
let left_start; // For picking starting index of left subarray
                // to be merged

// Merge subarrays in bottom up manner. First merge subarrays of
// size 1 to create sorted subarrays of size 2, then merge subarrays
// of size 2 to create sorted subarrays of size 4, and so on.
//for (curr_size=1; curr_size<=n-1; curr_size = 2*curr_size)
if(curr_size<=n-1)
{
    // Pick starting point of different subarrays of current size
    for (left_start=0; left_start<n-1; left_start += 2*curr_size)
    {
        // Find ending point of left subarray. mid+1 is starting
        // point of right
        let mid = minno(left_start + curr_size - 1, n-1);

        let right_end = minno(left_start + 2*curr_size - 1, n-1);

        // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end]
        merge(bars, left_start, mid, right_end);
    }
    curr_size = 2*curr_size;
    window.console.log(bars);
}
else{

    noLoop();
}

}

//merge function
function merge(bars,l,m,r)
{
    let i, j, k;
    let n1 = m - l + 1;
    let n2 = r - m;

    /* create temp arrays */
    let L=[n1], R=[n2];

    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++)
        L[i] = bars[l + i];
    for (j = 0; j < n2; j++)
        R[j] = bars[m + 1+ j];

    /* Merge the temp arrays back into arr[l..r]*/
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            bars[k] = L[i];
            i++;
        }
        else
        {
            bars[k] = R[j];
            j++;
        }
        k++;
    }

    /* Copy the remaining elements of L[], if there are any */
    while (i < n1)
    {
        bars[k] = L[i];
        i++;
        k++;
    }

    /* Copy the remaining elements of R[], if there are any */
    while (j < n2)
    {
        bars[k] = R[j];
        j++;
        k++;
    }
}

//quick sort function
function quickSort(arr,l,h)
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
        pivot = partition(arr, l, h);

        // If there are elements on left side of pivot,
        // then push left side to stack
        if (pivot - 1 > l) {
            topp+=1;
            stack[topp] = l;
            topp+=1;
            stack[topp] = pivot - 1;
        }

        // If there are elements on right side of pivot,
        // then push right side to stack
        if (pivot + 1 < h) {
            topp+=1;
            stack[topp] = pivot + 1;
            topp+=1;
            stack[topp] = h;
        }
        states[pivot]=1;
        window.console.log(arr);
        window.console.log(topp);
    }else{
        //window.console.log(bars);
        //window.console.log(topp);
        //drawbars();
        noLoop();
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
Array.prototype.swap = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}
// Prepare the bars for drawing by draw()
function drawBars(){
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
    
    fill(255,0,0);//red
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars);
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    fill( 255, 0, 0 );
    }
    window.console.log("drawbars");
}
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
    window.console.log("drawbarsbubble");
}
//draw bars for selection sort
function drawBarsselection() {
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
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
     if(colourselection[idx]==2||p==numBars-1){
        fill(0,255,0);//green
    }else if ( idx == currentBarselection1) {  
        fill( 255, 255, 0 ); // yellow
    }else if(idx == currentBarselection2){
        fill(255);//white
    } 
    else{
        fill( 255, 0, 0 ); // red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars);
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    //if(i==bars.length-1){
     //   noLoop();
    //}
    fill( 255, 0, 0 );
    }
    window.console.log("drawBarsselection");
}

//draw bars for insertion sort
function drawBarsinsertion() {
    window.console.log(bars);
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
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
    if ( colourinsertion[idx] ==2||colourinsertion[idx-1] ==2||idx==0) {
        fill( 0, 255, 0 ); // green
    } else if ( idx == s) {
        fill( 255, 255, 0 ); // yellow
    }
    else{
        fill( 255, 0, 0 ); // red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars );
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    //if(i==bars.length-1){
     //   noLoop();
    //}
    fill( 255, 0, 0 );
    }
    window.console.log("drawBarsmerge");
}

//draw bars for merge sort
function drawBarsmerge() {
    window.console.log(bars);
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
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
    if(curr_size>=bars.length) {
        fill( 0, 255, 0 ); // green
    } else {
        fill( 255, 0, 0 ); // red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars );
    textAlign( CENTER );
    fill( 255 )
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    //if(i==bars.length-1){
     //   noLoop();
    //}
    fill( 255, 0, 0 );
    }
}
function drawbarsquick(){
    window.console.log(bars);
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
    for (let i = 0; i < bars.length; i++) {
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
    barHeight = ( height - 60 ) / (3*numBars) * bars[i];
    topLeftX = i * ( barWidth );
    topLeftY = height - barHeight 
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 400/numBars );
    textAlign( CENTER );
    fill( 255 );
    let val=bars[i];
    text( val, topLeftX + barWidth / 2, topLeftY-10);
    
    fill( 255, 0, 0 );
    }
}
function myReset(){
    numBars=nbars.value();
    barWidth = width / numBars;
    window.console.log(numBars);
    background( 0, 0, 255 );
    frameRate(opsPerSecSlider.value());
    bars = [];
    bars[0]=getRandomNumberBetween(1,(2*numBars))
    for ( let i = 0; i < numBars; i++ ) {
    bars[i]=getRandomNumberBetween(1,(2*numBars))
    }
    //bubble sort variables
    i = 0;
    j = 0;
    currentBar=0;
    for(let k=0;k<numBars;k++){
        colour[k]=-1;
    }
    //selection sort variables
    p=0;
    q=1;
    minIndex=0;
    colourselection=[];
    currentBarselection1=-2;
    currentBarselection2=-2;
    //insertion sort variables
    currentBarinsertion1=0;
    currentBarinsertion2=0;
    r = 1, s = 1;
    for ( let i = 0; i < numBars; i++ ) {
    colourinsertion[i]=-1;
    }
    //merge sort variables
    curr_size=1;
    //quick sort variables
    for(let i = 0; i < numBars; i++) {
        states[i] = -1; 
    }
    topp=-1;
    topp+=1;
    stack[topp] = 0;
    topp+=1;
    stack[topp] = bars.length-1;
    qq=1;
    sortType=100;
    drawBars();
    window.console.log("myReset");
}
