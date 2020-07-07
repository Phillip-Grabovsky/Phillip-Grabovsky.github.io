var numberBoxes = 30; //constant: number of boxes that should fit in one width
var maxHeight = 3; //max number of boxes stacked
var width = screen.width;
var boxWidth = (width / numberBoxes) - 2;
var divNumber = 0;

function randomizeBoxes(){
  for(var i = 0; i < numberBoxes; i++){
    var height = Math.floor(Math.random() * (maxHeight+1));
    createBoxes(i, height);
  }
}

function createBoxes(col, height){
  for(var row = 0; row < height; row++){
    console.log(col);
    console.log(row);
    createBox(col, row);
  }
}

function createBox(col, row){
  var newBox = document.createElement("div");
  var left = col*boxWidth;
  var top = (-1)*(row+1)*boxWidth - boxWidth*divNumber;  //2nd term accounts for downshift in starting points of divs

  newBox.className = "white-block";
  newBox.style.width = pxPrefix(boxWidth);
  newBox.style.height = pxPrefix(boxWidth);
  newBox.style.left = pxPrefix(left);
  newBox.style.top = pxPrefix(top);
  newBox.style.zIndex = 0;

  document.getElementById("secondScreen").appendChild(newBox);
  divNumber++;
}

function pxPrefix(number){
  return "" + number + "px";
}

randomizeBoxes();
