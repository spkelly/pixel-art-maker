console.log("Hello, World");




function createGrid(){
  var pixelSize = 20;
  var gridSize = 36;
  var canvas = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];
  canvas.id = "pixelCanvas";
  canvas.style.width = gridSize*pixelSize + "px";
  canvas.style.height = gridSize*pixelSize + "px";

  for(var i = 0; i < gridSize * gridSize; i++){
    var box = document.createElement('div');
    box.style.width = pixelSize + "px";
    box.style.height = pixelSize + "px";
    box.id = "pixelBox";
    canvas.appendChild(box);
  }
  // canvas.style.width = "600px";
  // canvas.style.height = "600px";
  // canvas.style.backgroundColor = "blue";
  body.appendChild(canvas);
  return canvas;

}

canvas = createGrid();
console.log(canvas);

var colorPicker = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
colorPicker.id = 'colorPicker';


body.appendChild(colorPicker);

canvas.addEventListener('click',function(e){
  if(e.target.id != "pixelCanvas"){
    e.target.style.backgroundColor = 'red';
    e.target.style.borderColor = 'red';
  }

});
