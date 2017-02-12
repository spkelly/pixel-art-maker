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
  var picker = document.createElement('input');
  picker.setAttribute('type','color');
  picker.id = 'colorPicker';
  container.appendChild(picker);
  return cur;
}

var currentColor = 'black';
var colorArray = ['red','blue','green','yellow',
                  'orange','purple','white','brown',
                  'grey','black'];


canvas = createGrid();


var colorPallete = document.createElement('section');

var body = document.getElementsByTagName('body')[0];
var mouseHeld = false;

colorPallete.id = 'colorPallete';


body.appendChild(colorPallete);
var currentColorBox = createColorPallete(colorArray,colorPallete);
var picker = document.getElementsByTagName('input')[0];
//Adding event listeners to canvas
canvas.addEventListener('click',function(e){
  if(e.target.id != "pixelCanvas"){
    e.target.style.backgroundColor = currentColor;
    e.target.style.borderColor = currentColor;
  }
});

canvas.addEventListener('mousedown',function(){
  mouseHeld = true;
});
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
});
//adding event listeners to colorPallete
colorPallete.addEventListener('click', function(e){
  if(e.target.className === "color"){
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
    currentColorBox.style.backgroundColor = currentColor;
  }
});
picker.addEventListener('change',function(){
  currentColor = picker.value;
  currentColorBox.style.backgroundColor = currentColor;
});
