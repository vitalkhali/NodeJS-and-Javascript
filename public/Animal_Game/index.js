var audio = "";


$(".card").click(function() {
  var clickedId = $(this).attr("id");
  console.log(clickedId);
  playSound(clickedId);
});





function playSound(name) {

  switch (name) {
    case "bear":
      audio = new Audio("sounds/bear.mp3");
      audio.play();
      break;
    case "cat":
      audio = new Audio("sounds/cat.mp3");
      audio.play();
      break;
    case "cow":
     audio = new Audio("sounds/cow.mp3");
      audio.play();
      break;
    case "dog":
     audio = new Audio("sounds/dog.mp3");
      audio.play();
      break;
    case "elephant":
       audio = new Audio("sounds/elephant.mp3");
      audio.play();
      break;
    case "frog":
       audio = new Audio("sounds/frog.mp3");
      audio.play();
      break;
    case "giraffe":
       audio = new Audio("sounds/giraffe.mp3");
      audio.play();
      break;
    case "goat":
       audio = new Audio("sounds/goat.mp3");
      audio.play();
      break;
    case "kangaroo":
       audio = new Audio("sounds/kangaroo.mp3");
      audio.play();
      break;
    case "koala":
       audio = new Audio("sounds/koala.mp3");
      audio.play();
      break;
    case "ladybird":
       audio = new Audio("sounds/lady_bird.mp3");
      audio.play();
      break;
    case "lion":
       audio = new Audio("sounds/lion.mp3");
      audio.play();
      break;
    case "monkey":
       audio = new Audio("sounds/monkey.mp3");
      audio.play();
      break;
    case "mouse":
       audio = new Audio("sounds/mouse.mp3");
      audio.play();
      break;
    case "panda":
       audio = new Audio("sounds/panda.mp3");
      audio.play();
      break;
    case "penguin":
       audio = new Audio("sounds/penguin.mp3");
      audio.play();
      break;
    case "pig":
       audio = new Audio("sounds/pig.mp3");
      audio.play();
      break;
    case "rabbit":
       audio = new Audio("sounds/rabbit.mp3");
      audio.play();
      break;
    case "shark":
       audio = new Audio("sounds/shark.mp3");
      audio.play();
      break;
    case "snake":
       audio = new Audio("sounds/snake.mp3");
      audio.play();
      break;
    case "tiger":
       audio = new Audio("sounds/tiger.mp3");
      audio.play();
      break;
    case "whale":
       audio = new Audio("sounds/whale.mp3");
      audio.play();
      break;
    case "zebra":
       audio = new Audio("sounds/zebra.mp3");
      audio.play();
      break;


    default:
      console.log("What is this card???");

  }

}
