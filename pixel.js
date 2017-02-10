console.log("Hello, World");




function createGrid(){
  var pixelSize = 20;
  var gridSize = 36;
  var canvas = document.createElement('div');
  body = document.getElementsByTagName('body')[0];
  canvas.id = "canvas";
  canvas.style.width = gridSize*pixelSize + "px";
  canvas.style.margin = "auto";
  canvas.style.border = "1px black solid"
  for(var i = 0; i < gridSize * gridSize; i++){
    var box = document.createElement('div');
    box.style.width = pixelSize + "px";
    box.style.paddingBottom = pixelSize + "px";
    box.style.float = "left";
    box.style.border = "1px black solid";
    box.style.boxSizing = "border-box";
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

canvas.addEventListener('click',function(e){
  e.target.style.backgroundColor = 'red';
});
