function createGrid(){
  var canvas = {};
  canvas.pixelSize = 20;
  canvas.gridSize = 36;

  var body = document.getElementsByTagName('body')[0];

  var title = document.createElement('h1');
  title.id = "title";
  title.innerText = "Pixel Art Thing";
  body.appendChild(title);

  var canvasElement = document.createElement('div');
  canvasElement.id = "pixelCanvas";

  canvasElement.style.width = (canvas.gridSize*canvas.pixelSize) + "px";
  canvasElement.style.height = (canvas.gridSize*canvas.pixelSize) + "px";

  for(var i = 0; i < canvas.gridSize * canvas.gridSize; i++){
    var box = document.createElement('div');
    box.id = "pixelBox";

    box.style.width = canvas.pixelSize + "px";
    box.style.height = canvas.pixelSize + "px";

    canvasElement.appendChild(box);
  }
  body.appendChild(canvasElement);
  console.log(canvas);
  return canvasElement;

}
function createColorPallete(colors,container){
  for (var i = 0; i < colors.length; i++) {
    var color = document.createElement('div');
    color.className = 'color';
    container.appendChild(color);
    color.style.backgroundColor = colors[i];
  }
  var cur = document.createElement('div');
  cur.id = "currentColor";
  container.appendChild(cur);
  return cur;
}

var currentColor = 'black';
var colorArray = ['red','blue','green','yellow',
                  'orange','purple','white','brown',
                  'grey','black'];


canvas = createGrid();

console.log(canvas);

var colorPicker = document.createElement('section');
var body = document.getElementsByTagName('body')[0];
var mouseHeld = false;

colorPicker.id = 'colorPicker';


body.appendChild(colorPicker);
var currentColorBox = createColorPallete(colorArray,colorPicker);

//Adding event listeners to canvas
canvas.addEventListener('click',function(e){
  if(e.target.id != "pixelCanvas"){
    e.target.style.backgroundColor = currentColor;
    e.target.style.borderColor = currentColor;
  }
});
canvas.addEventListener('mousedown',function(){
  mouseHeld = true;
})
canvas.addEventListener('mouseup',function(){
  mouseHeld = false;
})
canvas.addEventListener('mouseover',function(e){
  if(mouseHeld){
    if(e.target.id !== "pixelCanvas"){
      e.target.style.backgroundColor = currentColor;
      e.target.style.borderColor = currentColor;
    }
  }
})

//adding event listeners to colorPicker
colorPicker.addEventListener('click', function(e){
  if(e.target.className === "color"){
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
    currentColorBox.style.backgroundColor = currentColor;
  }
});
