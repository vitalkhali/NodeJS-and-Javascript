// var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "P","Q", "R", "S", "T", "U", "V", "W","X", "Y","Z"];

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var gameAskedQuestion = "";
var randomLetterGenerated1 = "";
var randomLetterGenerated2 = "";
var randomLetterGenerated3 = "";
var randomLetterGenerated4 = "";
var randomLetterGenerated5 = "";

var randomGeneratedLetterOnTheCartArray = [];

var userChosenLetter = "";
var computerChosenletter = "";
var rightAnswers = 0;

var start = false;

var totalCakeHiddenImages = document.querySelectorAll(".cake-hidden").length;



$("#play-button").click(function() {
  if (!start) {

    document.getElementById('myAudio').play();
    document.getElementById("myAudio").volume = 0.3;
    document.getElementById("myAudio").loop = true;

    setTimeout(function() {
      nextSequence();

    }, 1000);

    startDragging();

    start = true;
  }
});

$("#repeat-button").click(function(){
    makeSound(computerChosenletter);
});






function startDragging() {
  document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);

  });

  document.addEventListener("drag", function(event) {
    console.log(event.target.id);

  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });


  document.addEventListener("dragenter", function(event) {

    if (event.target.className === "droptarget") {
      // console.log(event.target.className);
      // event.target.classList.add("glowing-box");
      event.target.style.backgroundColor = "lightblue";
    }
  });


  document.addEventListener("dragleave", function(event) {

    if (event.target.className === "box1 box") {
      // event.target.classList.add("glowing-box");
      event.target.style.backgroundColor = "";
    }
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className === "droptarget") {
      event.target.style.backgroundColor = "";
      var userChosenID = event.dataTransfer.getData("Text");
      console.log(userChosenID);
      if (userChosenID === "mydiv1") {
        userChosenLetter = randomLetterGenerated1;
      } else if (userChosenID === "mydiv2") {
        userChosenLetter = randomLetterGenerated2;
      } else if (userChosenID === "mydiv3") {
        userChosenLetter = randomLetterGenerated3;
      } else if (userChosenID === "mydiv4") {
        userChosenLetter = randomLetterGenerated4;
      } else  {
        userChosenLetter = randomLetterGenerated5;
      }
      document.getElementById("answer-box").src = "images/" + userChosenLetter +".png";


      checkAnswer();



    }
  });


}






function checkAnswer() {


  if (computerChosenletter === userChosenLetter) {
    console.log("correct");
    rightAnswers += 1;
    console.log("Right Answers" + rightAnswers);
    drawCakes();
    var correctSound = new Audio("Sounds/correct_sound.wav");
    correctSound.volume = 0.9;
    correctSound.play();




  } else {
    var wrongSound = new Audio("Sounds/wrong_sound.wav");
    wrongSound.volume = 0.9;
    wrongSound.play();
    console.log("wrong");
    drawCakes();

  }

  if (rightAnswers <= 9) {
    setTimeout(function () {
      nextSequence();
    }, 3000);
    console.log(rightAnswers);
  }

  if (rightAnswers == 10) {

    var audio = new Audio("Sounds/finish_sound.wav");
    audio.play();

    setTimeout(function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = document.body.offsetHeight;
        vanishPointY = height / 2;
        vanishPointX = width / 2;
        render();
    }, 400);

  }




}









// function checkAnswer(letter) {
//
//   if (letter === gameAskedQuestion) {
//     points++;
//     $("#big-heading").text("Point" + points);
//     play("right");
//
//   } else {
//     play("wrong");
//     $("body").addClass("game-over");
//     setTimeout(function() {
//       $("body").removeClass("game-over");
//     }, 100);
//
//   }
//
//
//
// }





function nextSequence() {

  randomGeneratedLetterOnTheCartArray = [];

  var randomNumber1 = Math.floor(Math.random() * 26);
  var randomNumber2 = Math.floor(Math.random() * 26);
  var randomNumber3 = Math.floor(Math.random() * 26);
  var randomNumber4 = Math.floor(Math.random() * 26);
  var randomNumber5 = Math.floor(Math.random() * 26);

  var randomLetter1 = letterArray[randomNumber1];
  var randomLetter2 = letterArray[randomNumber2];
  var randomLetter3 = letterArray[randomNumber3];
  var randomLetter4 = letterArray[randomNumber4];
  var randomLetter5 = letterArray[randomNumber5];




  document.getElementById("mydiv1").src = "images/" + randomLetter1 + ".png";
  randomLetterGenerated1 = randomLetter1;

  document.getElementById("mydiv2").src = "images/" + randomLetter2 + ".png";
  randomLetterGenerated2 = randomLetter2;

  document.getElementById("mydiv3").src = "images/" + randomLetter3 + ".png";
  randomLetterGenerated3 = randomLetter3;

  document.getElementById("mydiv4").src = "images/" + randomLetter4 + ".png";
  randomLetterGenerated4 = randomLetter4;

  document.getElementById("mydiv5").src = "images/" + randomLetter5 + ".png";
  randomLetterGenerated5 = randomLetter5;

  randomGeneratedLetterOnTheCartArray.push(randomLetterGenerated1, randomLetterGenerated2, randomLetterGenerated3, randomLetterGenerated4,randomLetterGenerated5);



  var randomNumberForSpeech = Math.floor(Math.random() * 5);
  computerChosenletter = randomGeneratedLetterOnTheCartArray[randomNumberForSpeech];
  console.log("Computer Chose To Speak " + computerChosenletter);
  makeSound(computerChosenletter);

  // gameAskedQuestion.push(randomLetter);
  // play(randomLetter);
}




function makeSound(key) {

  switch (key) {
    case "a":
      var a = new Audio("Sounds/a.mp3");
      a.play();
      break;

    case "b":
      var b = new Audio("Sounds/b.mp3");
      b.play();
      break;

    case "c":
      var c = new Audio("Sounds/c.mp3");
      c.play();
      break;


    case "d":
      var d = new Audio("Sounds/d.mp3");
      d.play();
      break;

    case "e":
      var e = new Audio("Sounds/e.mp3");
      e.play();
      break;

    case "f":
      var f = new Audio("Sounds/f.mp3");
      f.play();
      break;

    case "g":
      var g = new Audio("Sounds/g.mp3");
      g.play();
      break;

    case "h":
      var h = new Audio("Sounds/h.mp3");
      h.play();
      break;

    case "i":
      var i = new Audio("Sounds/i.mp3");
      i.play();
      break;

    case "j":
      var j = new Audio("Sounds/j.mp3");
      j.play();
      break;

    case "k":
      var k = new Audio("Sounds/k.mp3");
      k.play();
      break;

    case "l":
      var l = new Audio("Sounds/l.mp3");
      l.play();
      break;

    case "m":
      var m = new Audio("Sounds/m.mp3");
      m.play();
      break;

    case "n":
      var n = new Audio("Sounds/n.mp3");
      n.play();
      break;

    case "o":
      var o = new Audio("Sounds/o.mp3");
      o.play();
      break;

    case "p":
      var p = new Audio("Sounds/p.mp3");
      p.play();
      break;

    case "q":
      var q = new Audio("Sounds/q.mp3");
      q.play();
      break;

    case "r":
      var r = new Audio("Sounds/r.mp3");
      r.play();
      break;

    case "s":
      var s = new Audio("Sounds/s.mp3");
      s.play();
      break;

    case "t":
      var t = new Audio("Sounds/t.mp3");
      t.play();
      break;

    case "u":
      var u = new Audio("Sounds/u.mp3");
      u.play();
      break;

    case "v":
      var v = new Audio("Sounds/v.mp3");
      v.play();
      break;

    case "w":
      var w = new Audio("Sounds/w.mp3");
      w.play();
      break;

    case "x":
      var x = new Audio("Sounds/x.mp3");
      x.play();
      break;

    case "y":
      var y = new Audio("Sounds/y.mp3");
      y.play();
      break;

    case "z":
      var z = new Audio("Sounds/z.mp3");
      z.play();
      break;


    default:
      console.log();

  }
}










// Draw Correct Cakes On The Screen
function drawCakes() {

  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".cake-hidden")[i].src = "images/cake.png";
  }
}




// Restart The Game








// For Finish Game Animation

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
// render();


// smart trick from @TimoHausmann for full screen pens
