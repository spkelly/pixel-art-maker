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

currentColor = '';

var colorArray = ['red','blue','green','yellow','orange','purple','white','brown','grey','black'];
canvas = createGrid();
console.log(canvas);

var colorPicker = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
var click = false;
var held = false;
colorPicker.id = 'colorPicker';


body.appendChild(colorPicker);
createColorPicker(colorArray,colorPicker);

canvas.addEventListener('click',function(e){
  console.log("works");
  if(e.target.id != "pixelCanvas"){
    console.log(e);

    e.target.style.backgroundColor = currentColor;
    e.target.style.borderColor = currentColor;
  }
});


colorPicker.addEventListener('click', function(e){
  if(e.target.className === "color"){
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
  }
});
