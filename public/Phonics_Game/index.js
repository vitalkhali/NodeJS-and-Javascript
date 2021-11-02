var buttonColors = ["a", "o", "i", "e"];
var gamePattern = [];
var userClickedPattern = [];
// var start = false;
var level = 0;


function preload() {

}


function start() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];

  $('.count').text('--').removeClass('led-off');
  setTimeout(function() {
    // $('.count').text('0' + level);
    $('.count').text('--').addClass('led-off');

  }, 1000);

  setTimeout(function() {
    // $('.count').text('0' + level);
    $('.count').text('--').removeClass('led-off');

  }, 2000);

  setTimeout(function() {
    // $('.count').text('0' + level);
    $('.count').text('0' + level);

  }, 3000);

  setTimeout(function() {
    nextSequence();
  }, 4000);

}


$(".round-btn").click(function() {

  console.log("pressed");
  // if (!start) {
  // $("#level-title").text("Level " + level);
  // fix the audio file
  playSound("correct_sound.mp3");
  start();

  // start = true;



});


$(".push").click(function() {
  var clickedButtonID = $(this).attr("id");
  userClickedPattern.push(clickedButtonID);

  $("#" + clickedButtonID).addClass("light");
  setTimeout(function() {
    $("#" + clickedButtonID).removeClass("light");
  }, 200);

  checkAnswer(userClickedPattern.length - 1);

});


function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong_sound");
    $(".wrap").addClass("game-over");
    // $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $(".wrap").removeClass("game-over");
    }, 200);

    start();
  }
}


function nextSequence() {
  level++;
  $('.count').text('0' + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomButton = buttonColors[randomNumber];
  gamePattern.push(randomButton);
  $("#" + randomButton).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomButton);

}


function playSound(name) {
  var audio = new Audio("phonics_sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
}
