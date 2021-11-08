const numBars = 20;
const fps = 1;  // Frame rate
let bars = [];
let barWidth;
let currentBar;
let curr_size=1;
function min(x, y) { 
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// The statements in the setup() function
// execute once when the program begins
function setup() {
    frameRate( fps );
    myCanvas = createCanvas( 800, 400 );
    //myCanvas.parent("merge");
    barWidth = width / numBars;
    stroke( 255 );
    strokeWeight( 1 );
    myReset();
}

// The statements in the draw() function are executed until the
// program is stopped.
function draw() {
    background( 0, 0, 255 );
    drawBars();
    mergeSort(bars,bars.length);
    //drawBars();
}

// The merge Sort Algorithm
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
        let mid = min(left_start + curr_size - 1, n-1);

        let right_end = min(left_start + 2*curr_size - 1, n-1);

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



// Prepare the bars for drawing by draw()
function drawBars() {
    //window.console.log(bars);
    for ( const [idx, val] of bars.entries() ) {
    barHeight = ( height - 50 ) / 30 * val;
    topLeftX = idx * ( barWidth );
    topLeftY = height - barHeight
    // rect uses topLeftX, topLeftY, width, height
    if ( idx == currentBar || idx == currentBar + 1 ) {
        fill( 0, 255, 0 ); // green
    } else {
        fill( 255, 0, 0 ); // red
    }
    rect( topLeftX, topLeftY, barWidth, barHeight );
    textSize( 20 );
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
    //bars[0] = Math.floor( ( Math.random(1,20) * 9 ) + 1 );  // between 1 and 9 inc.
    bars[0]=getRandomNumberBetween(1,30)
    for ( let i = 0; i < numBars; i++ ) {
    bars[i]=getRandomNumberBetween(1,30)
    //bars[i] = Math.floor( Math.random(1,20) * 10 ); // between 0 and 9 inc.
    }
    loop();
}

function mousePressed(){
    myReset();
}