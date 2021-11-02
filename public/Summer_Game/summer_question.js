var buttonNames =  ["ball", "beach", "bucket", "flip_flop", "float", "hat", "hot", "ice_cream", "pool", "sand_castle", "sand", "shell", "shovel", "summer", "sun_glasses", "sun", "surf_board", "swim", "umbrella", "water", "wave"];
var randomGeneratedNamesArray = [];
var start = false;
var wrongSound = "";
var correctSound = "";
var randomNameGenerated1 = "";
var randomNameGenerated2 = "";
var randomNameGenerated3 = "";
var randomNameGenerated4 = "";
var userChosenName = "";
var computerChosenName = "";
var rightAnswers = 0;
var totalIceCreamHiddenImages = document.querySelectorAll(".ice-cream").length;
var randomNumberForSpeech = 0;
console.log(totalIceCreamHiddenImages);




$("#play-button").click(function() {
  if (!start) {
    unDrawIceCream();
    nextSequence();
    start = true;
  }
});

$("#repeat-button").click(function(){
  playSound(computerChosenName);
});




// $(document).keypress(function() {
//   if (!start) {
//     unDrawIceCream();
//     nextSequence();
//     start = true;
//   }
//
// });

$(".pics").click(function() {

  if (start === true) {
    var clickedCard = $(this).attr("id");
    console.log(clickedCard);
    if (clickedCard === "div1") {
      userChosenName =  randomNameGenerated1;
    } else if (clickedCard === "div2") {
      userChosenName =  randomNameGenerated2;

    }else if (clickedCard === "div3") {
      userChosenName =  randomNameGenerated3;
    } else {
      userChosenName =  randomNameGenerated4;

    }

    if (rightAnswers < 10) {
      checkAnswer();

    }

  }







});



function checkAnswer() {

  if (userChosenName === computerChosenName) {
    console.log("correct");
    rightAnswers++;
    playSound("correct");
   correctSound  = new Audio("sounds/correct_sound.wav");
    correctSound .play();
    drawIceCream();

    console.log(rightAnswers);


  } else {
    console.log("wrong");
   wrongSound = new Audio("sounds/wrong_sound.wav");
    wrongSound.play();
  }

  if (rightAnswers === 10) {
    console.log("Here I come");
    var audio = new Audio("sounds/finish_sound.wav");
    audio.play();

    setTimeout(function() {
      unDrawIceCream();
    }, 2000);

    startOver();


  }

  if (rightAnswers < 10) {
    setTimeout(function() {
      nextSequence();

    }, 3000);

  }




}


function startOver() {
  start = false;
}





function nextSequence() {



  computerChosenName = "";
  randomGeneratedNamesArray = [];
  var randomNumber1 = Math.floor(Math.random() * 21);
  var randomNumber2 = Math.floor(Math.random() * 21);
  var randomNumber3 = Math.floor(Math.random() * 21);
  var randomNumber4 = Math.floor(Math.random() * 21);

  var randomNameForDiv1 = buttonNames[randomNumber1];
  var randomNameForDiv2 = buttonNames[randomNumber2];
  var randomNameForDiv3 = buttonNames[randomNumber3];
  var randomNameForDiv4 = buttonNames[randomNumber4];

  document.getElementById("div1").src = "Summer_Images/" + randomNameForDiv1 + ".jpeg";
  randomNameGenerated1 = randomNameForDiv1;

  document.getElementById("div2").src = "Summer_Images/" + randomNameForDiv2 + ".jpeg";
  randomNameGenerated2 = randomNameForDiv2;

  document.getElementById("div3").src = "Summer_Images/" + randomNameForDiv3 + ".jpeg";
  randomNameGenerated3 = randomNameForDiv3;

  document.getElementById("div4").src = "Summer_Images/" + randomNameForDiv4 + ".jpeg";
  randomNameGenerated4 = randomNameForDiv4;

  randomGeneratedNamesArray.push(randomNameForDiv1, randomNameForDiv2, randomNameForDiv3, randomNameForDiv4);

 randomNumberForSpeech = Math.floor(Math.random() * 4);
computerChosenName = randomGeneratedNamesArray[randomNumberForSpeech];
console.log("Computer Chose To Speak " + computerChosenName);
// playSound("Can You Speak");
playSound(computerChosenName);


}



function playSound(name) {

  switch (name) {
    case "ball":
      audio = new Audio("sounds/beach_ball.mp3");
      audio.play();
      break;
    case "beach":
      audio = new Audio("sounds/beach.mp3");
      audio.play();
      break;
    case "bucket":
     audio = new Audio("sounds/bucket.mp3");
      audio.play();
      break;
    case "flip_flop":
     audio = new Audio("sounds/flip_flops.mp3");
      audio.play();
      break;
    case "float":
       audio = new Audio("sounds/float.mp3");
      audio.play();
      break;
    case "hat":
       audio = new Audio("sounds/hat.mp3");
      audio.play();
      break;
    case "hot":
       audio = new Audio("sounds/hot.mp3");
      audio.play();
      break;
    case "ice_cream":
       audio = new Audio("sounds/ice_cream.mp3");
      audio.play();
      break;
    case "pool":
       audio = new Audio("sounds/pool.mp3");
      audio.play();
      break;
    case "sand_castle":
       audio = new Audio("sounds/sand_castle.mp3");
      audio.play();
      break;
    case "sand":
       audio = new Audio("sounds/sand.mp3");
      audio.play();
      break;
    case "shell":
       audio = new Audio("sounds/shell.mp3");
      audio.play();
      break;
    case "shovel":
       audio = new Audio("sounds/shovel.mp3");
      audio.play();
      break;
    case "summer":
       audio = new Audio("sounds/summer.mp3");
      audio.play();
      break;
    case "sun_glasses":
       audio = new Audio("sounds/sun_glasses.mp3");
      audio.play();
      break;
    case "sun":
       audio = new Audio("sounds/sun.mp3");
      audio.play();
      break;
    case "surf_board":
       audio = new Audio("sounds/surfboard.mp3");
      audio.play();
      break;
    case "swim":
       audio = new Audio("sounds/swim.mp3");
      audio.play();
      break;
    case "umbrella":
       audio = new Audio("sounds/umbrella.mp3");
      audio.play();
      break;
    case "water":
       audio = new Audio("sounds/water.mp3");
      audio.play();
      break;
    case "wave":
       audio = new Audio("sounds/wave.mp3");
      audio.play();
      break;

    default:
      console.log("What is this card???");

  }

}
//Draw IceCream

function drawIceCream() {
  console.log("Here");
  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".ice-cream")[i].src = "Summer_Images/ice_cream.png";
  }
}

function unDrawIceCream() {
  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".ice-cream")[i].src = "Summer_Images/ice_cream_hidden.png";
  }
}
