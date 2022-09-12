// initializing variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var home = document.querySelector("#return");

var userScore = localStorage.getItem("userScore");
userScore = JSON.parse(userScore);

if (userScore !== null) {
    for (var i = 0; i < userScore.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = userScore[i].initials + " " + userScore[i].score;
        highScore.appendChild(createLi);
    }
}

// created event to clear the localStorage user data
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// created event to return back to the starting page
home.addEventListener("click", function () {
    window.location.replace("./index.html");
});



