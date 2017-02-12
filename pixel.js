
/*
Functions
*/

//generates and returns a a canvas object
function createGrid(container){
  var canvas = {};
  canvas.pixelSize = 20;
  canvas.gridSize = 36;
  canvas.colorData = [];
  var colorRow = [];

  var canvasWidth = canvas.gridSize*canvas.pixelSize + "px";
  var canvasHeight = canvas.gridSize*canvas.pixelSize + "px";
  var gridSize = canvasHeight * canvasWidth;
  var canvasElement = document.createElement('div');


  canvasElement.id = "pixelCanvas";
  canvasElement.style.width = canvasWidth;
  canvasElement.style.height = canvasHeight;

  for(var i = 0; i < canvas.gridSize * canvas.gridSize; i++){
    var box = document.createElement('div');
    box.id = "pixelBox";

    box.style.width = canvas.pixelSize + "px";
    box.style.height = canvas.pixelSize + "px";

    canvasElement.appendChild(box);
  }

  container.appendChild(canvasElement);
  console.log(canvas);
  canvas.canvasElement = canvasElement;
  return canvas;

}
//generates a pallete of colors
function createColorPallete(colors,container){
  for (var i = 0; i < colors.length; i++) {
    var color = document.createElement('div');
    color.className = 'color';
    container.appendChild(color);
    color.style.backgroundColor = colors[i];
  }


  return cur;
}
//saves canvas object to local storage
function saveArt(data){
  var grid = data.canvasElement.getElementsByTagName('div');
  var colorArray = []
  for(element of grid){
    colorArray.push(element.style.backgroundColor);
  }

  localStorage.setItem('calorData',JSON.stringify(colorArray));
  localStorage.setItem('gridSize',JSON.stringify(data.gridSize));
}
//loads canvas from local storage
function loadArt(){}


/*
HTML Creation
*/

//create array of colors used in pallete
var colorArray = [ 'rgb\(255,255,255\)','blue','green','yellow',
                  'orange','purple','white','brown',
                  'grey','black'];
var mouseHeld = false;
var body = document.getElementsByTagName('body')[0];
//
// for(var i=0;i < 3; i++){
//   for (var j = 0; i < 255; i++) {
//
//   }
// }


//create site wrapper
var wrapper = document.createElement('section');
wrapper.id = "wrapper";
body.appendChild(wrapper);

//creates title;
var title = document.createElement('h1');
title.id = "title";
title.innerText = "Pixel Art Thing";
wrapper.appendChild(title);

//create pixel grid
canvas = createGrid(wrapper);

//creates
var cur = document.createElement('div');
cur.id = "currentColor";
wrapper.appendChild(cur);
var currentColor = 'black';




//create of custom color picker
var picker = document.createElement('input');
picker.setAttribute('type','color');
picker.setAttribute('value','#ff0000');
picker.id = 'colorPicker';
wrapper.appendChild(picker);


//create color pallete element
var colorPallete = document.createElement('section');
colorPallete.id = 'colorPallete';
wrapper.appendChild(colorPallete);
var currentColorBox = createColorPallete(colorArray,colorPallete);

/*
Event Listeners
*/

//Adding event listeners to canvas
canvas.canvasElement.addEventListener('click',function(e){
  if(e.target.id != "pixelCanvas"){
    e.target.style.backgroundColor = currentColor;
    e.target.style.borderColor = currentColor;
  }
});
canvas.canvasElement.addEventListener('mousedown',function(){
  mouseHeld = true;
});
canvas.canvasElement.addEventListener('mouseover',function(e){
  //changeColor(e)
  if(mouseHeld){
    if(e.target.id !== "pixelCanvas"){
      e.target.style.backgroundColor = currentColor;
      e.target.style.borderColor = currentColor;
    }
  }
});
body.addEventListener('mouseup',function(){
  mouseHeld = false;
})
//adding event listeners to Color Buttons
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

/*
Save Test

*/
canvas.colorData = ['255','255'];
saveArt(canvas)
