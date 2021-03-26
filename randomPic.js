var pics = new Array("Pics/Pic1.jpg","Pics/Pic2.jpg","Pics/Pic3.jpg","Pics/Pic4.jpg","Pics/SkiResortBackground.jpg");

function choosePic() {
  console.log("choosing pic");
  var randomNum = Math.floor(Math.random() * pics.length);
  console.log("pickedVideoNumber: " + randomNum);
  document.getElementById("thePic").src = pics[randomNum];
};

choosePic();
