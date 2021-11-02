var audio = "";


$(".card").click(function() {
  var clickedId = $(this).attr("id");
  playSound(clickedId);
});



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
