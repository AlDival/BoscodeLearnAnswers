$(document).ready(function () {
  setAllImagesBlank();
  $('img').click(onImgClick);
});


var setAllImagesBlank = function () {
  $('#diceImg1').attr('src', 'images/blank.jpg');
  $('#diceImg2').attr('src', 'images/blank.jpg');
  $('#diceImg3').attr('src', 'images/blank.jpg');
};
var imgState;
imgState = false;

console.log(imgState)
var onImgClick = function (e) {
  $target = $(e.currentTarget);
  var id = $target.attr('id');

  var imageIdNumber = id.substring(id.length - 1);

  console.log('imageIdNumber = ', imageIdNumber);
  if (imgState == false){
    $target.attr('src', 'images/' + imageIdNumber + '.jpg');
    startTimer();
    imgState = true;
  }
  else{
    console.log("Not Yet");
  }
  
};

var timer;

function startTimer() {
  clearInterval(timer);
  
  timer = setInterval(function () {
    setAllImagesBlank();
    imgState = false;
  }, 5000);
}
