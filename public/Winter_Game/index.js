var audio = "";


$(".card").click(function() {
  var clickedId = $(this).attr("id");
  playSound(clickedId);
});



function playSound(name) {

  switch (name) {
    case "blanket":
      audio = new Audio("sounds/blanket.mp3");
      audio.play();
      break;
    case "boot":
      audio = new Audio("sounds/boot.mp3");
      audio.play();
      break;
    case "christmas-tree":
     audio = new Audio("sounds/christmas_tree.mp3");
      audio.play();
      break;
    case "cocoa":
     audio = new Audio("sounds/cocoa.mp3");
      audio.play();
      break;
    case "cold":
       audio = new Audio("sounds/cold.mp3");
      audio.play();
      break;
    case "fire_place":
       audio = new Audio("sounds/fire_place.mp3");
      audio.play();
      break;
    case "gloves":
       audio = new Audio("sounds/gloves.mp3");
      audio.play();
      break;
    case "Icicle":
       audio = new Audio("sounds/icicle.mp3");
      audio.play();
      break;
    case "Igloo":
       audio = new Audio("sounds/igloo.mp3");
      audio.play();
      break;
    case "jacket":
       audio = new Audio("sounds/jacket.mp3");
      audio.play();
      break;
    case "reindeer":
       audio = new Audio("sounds/reindeer.mp3");
      audio.play();
      break;
    case "santa":
       audio = new Audio("sounds/santa.mp3");
      audio.play();
      break;
    case "scarf":
       audio = new Audio("sounds/scarf.mp3");
      audio.play();
      break;
    case "shovel":
       audio = new Audio("sounds/shovel.mp3");
      audio.play();
      break;
    case "skate":
       audio = new Audio("sounds/skate.mp3");
      audio.play();
      break;
    case "ski":
       audio = new Audio("sounds/ski.mp3");
      audio.play();
      break;
    case "sleigh":
       audio = new Audio("sounds/sleigh.mp3");
      audio.play();
      break;
    case "snow":
       audio = new Audio("sounds/snow.mp3");
      audio.play();
      break;
    case "snowman":
       audio = new Audio("sounds/snowman.mp3");
      audio.play();
      break;
    case "sock":
       audio = new Audio("sounds/sock.mp3");
      audio.play();
      break;
    case "sweater":
       audio = new Audio("sounds/sweater.mp3");
      audio.play();
      break;
    case "winter-tree":
       audio = new Audio("sounds/tree.mp3");
      audio.play();
      break;
    case "winter-clothes":
       audio = new Audio("sounds/winter clothes.mp3");
      audio.play();
      break;
    case "winter":
       audio = new Audio("sounds/winter.mp3");
      audio.play();
      break;

    default:
      console.log("What is this card???");

  }

}
