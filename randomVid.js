var videos = new Array("Clip1.mp4","Clip2.mp4","Clip3.mp4");
var last = 2;

function chooseVid() {
  console.log("running!");
  console.log("last: " + last);
  var randomNum = Math.floor(Math.random() * videos.length);
  while(randomNum == last -1){
    randomNum = Math.floor(Math.random() * videos.length);
  }
  console.log("pickedVideoNumber: " + randomNum);
  document.getElementById("videoClip").src = videos[randomNum];
  document.getElementById("videoClip").play();
};
