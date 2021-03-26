var numberBoxes = 45; //constant: number of boxes that should fit in one width
var maxHeight = 3; //max number of boxes stacked
var width = screen.width;
var boxWidth = (width / numberBoxes) - 2;
var divNumber = 0;
var ongoingInterval;  //this is the global variable which holds the timed randomization process inside it.
var playing = 0; //whether the timed re-randomization is playing or not.
randomizeBoxes();

function randomizeBoxes(){
  for(var i = 1; i < numberBoxes+1; i++){
    var height = Math.floor(Math.random() * (maxHeight+1));
    createBoxes(i, height);
  }
  createBoxes(0,2);
}

function createBoxes(col, height){
  for(var row = 0; row < height; row++){
    createBox(col, row);
  }
}

function createBox(col, row){

  //if it's one of the buttons on the left, make it a button that lets you re-randomize it or play video!
  if(col == 0){
    var node; //node is initialized here because the button's text changes on stop/start
    var newBox = document.createElement("div");

    //lower button re-randomizes
    if(row == 0){
      node = document.createTextNode("o");
      newBox.addEventListener("click", function(){restart();});
    }

    //upper button re-randomizes on time interval.
    else if(row == 1){
      //if it's not playing, the button's function is to play
      if(playing == 0){
        node = document.createTextNode(">>");
        newBox.addEventListener("click", function(){
          ongoingInterval = setInterval(restart, 200);
          playing = 1;
        });
      }
      //if it is playing, the button's function is to stop playing.
      else if(playing == 1){
        node = document.createTextNode("| |");
        newBox.addEventListener("click", function(){
          clearInterval(ongoingInterval);
          playing = 0;
          restart();
        });
      }
    }
    //style the button
    newBox.style.cursor = "pointer";
    var text = document.createElement("p");
    text.style.textAlign = "center";
    text.style.margin = "auto 0 auto 0";
    text.style.color = "#2F4F4F";
    text.appendChild(node);
    newBox.appendChild(text);
  }

  //else: it's not one of the buttons
  else{
    //make the div if its not the final one.
    var newBox = document.createElement("div");
  }

  //give it the correct position
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
  document.getElementById("blocks").appendChild(newBox);
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
