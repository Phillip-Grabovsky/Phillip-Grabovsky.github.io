var pics = new Array("Pic1.jpg","Pic2.jpg","Pic3.jpg");
var last = 2; //last element index of above list

function choosePic() {
  console.log("running!");
  console.log("last: " + last);
  var randomNum = Math.floor(Math.random() * videos.length);
  while(randomNum == last -1){
    randomNum = Math.floor(Math.random() * videos.length);
  }
  console.log("pickedVideoNumber: " + randomNum);
  document.getElementById("thePic").src = pics[randomNum];
};
