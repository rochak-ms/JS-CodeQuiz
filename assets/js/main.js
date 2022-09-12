/*Initialize the variables and set them to the respective objects and calculations. */

var score = 0;
var questionIndex = 0;
var countTime = document.querySelector("#timer");
var timer = document.querySelector("#startQuiz");
var questionSE = document.querySelector("#startContainer");
var container = document.querySelector("#contain-ID");

var secondsLeft = (questions.length * 10 +1);
var holdInterval = 0;
var penalty = 5;

var ulCreate = document.createElement("ul");
/*Starts the timer at 10 times the number of questions + 1. */
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            countTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                countTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// displays questions on the page with choices
function render(questionIndex) {
  questionSE.innerHTML = "";
  ulCreate.innerHTML = "";
  
  var createH2 = document.createElement("h2");
      createH2.textContent = "";

  for (var i = 0; i < questions.length; i++) {
      var userQuestion = questions[questionIndex].title;
      var userChoices = questions[questionIndex].choices;

      createH2.textContent = userQuestion;
      questionSE.appendChild(createH2);
  }

  userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      
      listItem.textContent = newItem;
      questionSE.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
  })
}

// displays the feedback section with wrong or correct comment when the answer choice is made
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
      var createDiv = document.createElement("div");
      createDiv.setAttribute("class", "feedback");
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct!"
      } else {
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent = "Wrong!"
      }
  }

  questionIndex++;
  if (questionIndex >= questions.length) {
      allDone();
      createDiv.textContent = "";
  } else {
      render(questionIndex);
  }
  questionSE.appendChild(createDiv);
}

// taker user initials for the obtained score and store it into localStorage
function allDone() {
  questionSE.innerHTML = "";
  countTime.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.textContent = "All Done!"

  questionSE.appendChild(createH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionSE.appendChild(createP);

  if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      var createP1 = document.createElement("p");
      clearInterval(holdInterval);
      createP.textContent = "Your final score is: " + timeRemaining;

      questionSE.appendChild(createP1);
  }

  var initialLabel = document.createElement("label");
  initialLabel.setAttribute("id", "initialLabel");
  initialLabel.textContent = "Enter your initials: ";

  questionSE.appendChild(initialLabel);

  var initialInput = document.createElement("input");
  initialInput.setAttribute("type", "text");
  initialInput.setAttribute("id", "initials");
  initialInput.textContent = "";

  questionSE.appendChild(initialInput);

  var submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("class", "submit");
  submit.textContent = "Submit";

  questionSE.appendChild(submit);

  submit.addEventListener("click", function () {
      var initials = initialInput.value;

      if (initials === null) {
          console.log("No value entered!");
      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          console.log(finalScore);

          var userScore = localStorage.getItem("userScore");
          if (userScore === null) {
              userScore = [];
          } else {
              userScore = JSON.parse(userScore);
          }
          userScore.push(finalScore);
          var newScore = JSON.stringify(userScore);
          localStorage.setItem("userScore", newScore);
          window.location.replace("./score.html");
      }
  });

}


