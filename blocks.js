var numberBoxes = 37.5; //constant: number of boxes that should fit in one width
var maxHeight = 3; //max number of boxes stacked
var width = screen.width;
var boxWidth = (width / numberBoxes) - 2;
var divNumber = 0;

function randomizeBoxes(){
  for(var i = 1; i < numberBoxes+1; i++){
    var height = Math.floor(Math.random() * (maxHeight+1));
    createBoxes(i, height);
  }
  createBoxes(0,1);
}

function createBoxes(col, height){
  for(var row = 0; row < height; row++){
    createBox(col, row);
  }
}

function createBox(col, row){
  //if its the final box on the right, make it a button that lets you re-randomize it or play video!
  if(col == 0){
    var newBox = document.createElement("button");
    newBox.type = "button"
    //lower button re-randomizes
    if(row == 0){
      newBox.addEventListener("click", function(){restart();});
      //style the button
      var text = document.createElement("p");
      var node = document.createTextNode("o");
      text.style.textAlign = "center";
      text.style.margin = "auto 0 auto 0";
      text.style.color = "#2F4F4F";
      text.appendChild(node);
      newBox.appendChild(text);
    }
  }

  else{
    //make the div if its not the final one.
    var newBox = document.createElement("div");
  }
  var left = col*boxWidth;
  var top = (-1)*(row+1)*boxWidth - boxWidth*divNumber;  //2nd term accounts for downshift in starting points of divs

  //set style properties
  newBox.className = "white-box";
  newBox.style.width = pxPrefix(boxWidth);
  newBox.style.height = pxPrefix(boxWidth);
  newBox.style.left = pxPrefix(left);
  newBox.style.top = pxPrefix(top);
  newBox.style.zIndex = 0;
  newBox.id = "box" + divNumber;

  //add it as a child, and increment the baseline adjustment
  document.getElementById("secondScreen").appendChild(newBox);
  divNumber++;
}

function pxPrefix(number){
  return "" + number + "px";
}

function restart(){
  //remove all boxes
  for(var i = 0; i < divNumber; i++){
    var box = document.getElementById("box"+i);
    box.parentNode.removeChild(box);
  }
  divNumber = 0;

  //build new boxes!
  randomizeBoxes();
}

function randomizeBoxesInterval(){
  setInterval(restart, 500);
}


randomizeBoxesInterval();
