let type=0, testButton1, testButton2;
function setup(){
  testButton1 = createButton("Change Type");
  testButton2 = createButton('Set Default')
  
  testButton1.mousePressed(()=>{type = 10; console.log(type)});
  testButton2.mousePressed(()=>{type = 0; console.log(type)});

}
