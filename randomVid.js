var videos = new Array("clip1.mp4","clip2.mp4","clip3.mp4");
var last = 2;

function chooseVid() {
  console.log("running!");
  console.log("last: " + last);
  var randomNum = Math.floor(Math.random() * videos.length);
  while(randomNum == last){
    randomNum = Math.floor(Math.random() * videos.length);
  }
  console.log("pickedVideoNumber: " + randomNum);
  document.getElementById("videoClip").src = videos[randomNum];
  document.getElementById("videoClip").play();
};
