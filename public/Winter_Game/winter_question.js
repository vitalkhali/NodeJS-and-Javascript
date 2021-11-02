var buttonNames =  ["blanket", "boot", "christmas-tree", "cocoa", "cold", "fireplace", "gloves", "Icicle", "Igloo", "jacket", "reindeer", "santa", "scarf", "shovel", "skate", "ski", "sleigh", "snow", "snowman", "sock", "sweater", "winter-tree", "winter-clothes", "winter"];
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
    setTimeout(function () {

        width = canvas.width = window.innerWidth;
        height = canvas.height = document.body.offsetHeight;
        vanishPointY = height / 2;
        vanishPointX = width / 2;
        render();
    }, 400);
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
  var randomNumber1 = Math.floor(Math.random() * 24);
  var randomNumber2 = Math.floor(Math.random() * 24);
  var randomNumber3 = Math.floor(Math.random() * 24);
  var randomNumber4 = Math.floor(Math.random() * 24);

  var randomNameForDiv1 = buttonNames[randomNumber1];
  var randomNameForDiv2 = buttonNames[randomNumber2];
  var randomNameForDiv3 = buttonNames[randomNumber3];
  var randomNameForDiv4 = buttonNames[randomNumber4];

  document.getElementById("div1").src = "Winter Images/" + randomNameForDiv1 + ".png";
  randomNameGenerated1 = randomNameForDiv1;

  document.getElementById("div2").src = "Winter Images/" + randomNameForDiv2 + ".png";
  randomNameGenerated2 = randomNameForDiv2;

  document.getElementById("div3").src = "Winter Images/" + randomNameForDiv3 + ".png";
  randomNameGenerated3 = randomNameForDiv3;

  document.getElementById("div4").src = "Winter Images/" + randomNameForDiv4 + ".png";
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
    case "fireplace":
       audio = new Audio("sounds/fireplace.mp3");
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
//Draw IceCream

function drawIceCream() {
  console.log("Here");
  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".ice-cream")[i].src = "ice_cream.png";
  }
}

function unDrawIceCream() {
  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".ice-cream")[i].src = "ice_cream_hidden.png";
  }
}


// End Animation

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 0,
    height = 0,
    vanishPointY = 0,
    vanishPointX = 0,
    focalLength = 300,
    angleX = 180,
    angleY = 180,
    angleZ = 180,
    angle = 0,
    cycle = 0,
    colors = {r : 255, g : 0, b : 0},
    lastShot = new Date().getTime();

canvas.width = width;
canvas.height = height;

/*
 *	Controls the emitter
 */
function Emitter() {
    this.reset();

}


Emitter.prototype.reset = function () {
    var PART_NUM = 200,
        x = (Math.random() * 400) - 200,
        y = (Math.random() * 400) - 200,
        z = (Math.random() * 800) - 200;

    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

    var color = [~~(Math.random() * 150) + 10, ~~(Math.random() * 150) + 10, ~~(Math.random() * 150) + 10];
    this.particles = [];

    for (var i = 0; i < PART_NUM; i++) {
        this.particles.push(new Particle(this.x, this.y, this.z, {
            r: colors.r,
            g: colors.g,
            b: colors.b
        }));
    }
};

Emitter.prototype.update = function () {
    var partLen = this.particles.length;

    angleY = (angle - vanishPointX) * 0.0001;
    angleX = (angle - vanishPointX) * 0.0001;

    this.particles.sort(function (a, b) {
        return b.z - a.z;
    });

    for (var i = 0; i < partLen; i++) {
        this.particles[i].update();
    }

    if(this.particles.length <= 0){
      this.reset();
    }

};

Emitter.prototype.render = function (imgData) {
    var data = imgData.data;

    for (i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i],
            dist = Math.sqrt((particle.x - particle.ox) * (particle.x - particle.ox) + (particle.y - particle.oy) * (particle.y - particle.oy) + (particle.z - particle.oz) * (particle.z - particle.oz));

        if (dist > 255) {
            particle.render = false;
            this.particles.splice(i, 1);
            this.particles.length--;
        }

        if (particle.render && particle.xPos < width && particle.xPos > 0 && particle.yPos > 0 && particle.yPos < height) {
            for (w = 0; w < particle.size; w++) {
                for (h = 0; h < particle.size; h++) {
                    if (particle.xPos + w < width && particle.xPos + w > 0 && particle.yPos + h > 0 && particle.yPos + h < height) {
                        pData = (~~ (particle.xPos + w) + (~~ (particle.yPos + h) * width)) * 4;
                        data[pData] = particle.color[0];
                        data[pData + 1] = particle.color[1];
                        data[pData + 2] = particle.color[2];
                        data[pData + 3] = 255 - dist;
                    }
                }
            }
        }
    }
};


/*
 *	Controls the individual particles
 */
function Particle(x, y, z, color) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.startX = this.x;
    this.startY = this.y;
    this.startZ = this.z;

    this.ox = this.x;
    this.oy = this.y;
    this.oz = this.z;

    this.xPos = 0;
    this.yPos = 0;

    this.vx = (Math.random() * 10) - 5;
    this.vy = (Math.random() * 10) - 5;
    this.vz = (Math.random() * 10) - 5;

    this.color = [color.r, color.g, color.b];
    this.render = true;

    this.size = Math.round(1 + Math.random() * 1);
}

Particle.prototype.rotate = function () {
    var x = this.startX * Math.cos(angleZ) - this.startY * Math.sin(angleZ),
        y = this.startY * Math.cos(angleZ) + this.startX * Math.sin(angleZ);

     this.x = x;
     this.y = y;
};

Particle.prototype.update = function () {
    var cosY = Math.cos(angleX),
        sinY = Math.sin(angleX);

    this.x = (this.startX += this.vx);
    this.y = (this.startY += this.vy);
    this.z = (this.startZ -= this.vz);
    this.rotate();

    this.vy += 0.1;
    this.x += this.vx;
    this.y += this.vy;
    this.z -= this.vz;

    this.render = false;

    if (this.z > -focalLength) {
        var scale = focalLength / (focalLength + this.z);

        this.size = scale * 2;
        this.xPos = vanishPointX + this.x * scale;
        this.yPos = vanishPointY + this.y * scale;
        this.render = true;
    }
};

function render() {
    colorCycle();
    angleY = Math.sin(angle += 0.01);
    angleX = Math.sin(angle);
    angleZ = Math.sin(angle);

    var imgData = ctx.createImageData(width, height);

    for (var e = 0; e < 30; e++) {
        emitters[e].update();
        emitters[e].render(imgData);
    }
    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(render);
}

function colorCycle() {
    cycle += 0.6;
    if (cycle > 100) {
        cycle = 0;
    }
    colors.r = ~~ (Math.sin(0.3 * cycle + 0) * 127 + 128);
    colors.g = ~~ (Math.sin(0.3 * cycle + 2) * 127 + 128);
    colors.b = ~~ (Math.sin(0.3 * cycle + 4) * 127 + 128);
}

var emitters = [];
for (var e = 0; e < 30; e++) {
    colorCycle();
    emitters.push(new Emitter());
}
