//assign
var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];

//event
$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  //console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});


//functions
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4); //randomNumber 0-3

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name){
  // audio from the array
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");

        setTimeout(function() {
        $("."+currentColor).removeClass("pressed");
      }, 100);
}
