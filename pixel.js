function createGrid(){
  var pixelSize = 20;
  var gridSize = 30;
  var body = document.getElementsByTagName('body')[0];

  var title = document.createElement('h1');
  title.id = "title";
  title.innerText = "Pixel Art Thing";
  body.appendChild(title);

  var canvas = document.createElement('div');
  canvas.id = "pixelCanvas";

  canvas.style.width = gridSize*pixelSize + "px";
  canvas.style.height = gridSize*pixelSize + "px";

  for(var i = 0; i < gridSize * gridSize; i++){
    var box = document.createElement('div');
    box.id = "pixelBox";

    box.style.width = pixelSize + "px";
    box.style.height = pixelSize + "px";

    canvas.appendChild(box);
  }
  body.appendChild(canvas);
  return canvas;

}
function createColorPicker(colors,container){
  for (var i = 0; i < colors.length; i++) {
    var color = document.createElement('div');
    color.className = 'color';
    container.appendChild(color);
    color.style.backgroundColor = colors[i];
  }
}

var colorArray = ['red','blue','green','yellow','orange','purple','white','pink','brown'];
canvas = createGrid();
console.log(canvas);

var colorPicker = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
colorPicker.id = 'colorPicker';


body.appendChild(colorPicker);
createColorPicker(colorArray,colorPicker);

canvas.addEventListener('mousedown',function(e){
  if(e.target.id != "pixelCanvas"){
    console.log(e);

    e.target.style.backgroundColor = 'red';
    e.target.style.borderColor ="red"
  }

});
