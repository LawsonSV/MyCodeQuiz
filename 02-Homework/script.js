let startButton = document.getElementById("start-button");
let startPage = document.querySelector("#start-page");
let timeText = document.getElementById("time-left");
let rightOrWrong = document.getElementById("right-or-wrong");
let timeLeft = 150;

let questionOne = document.getElementById("quest-one");
let questionTwo = document.getElementById("quest-two");
let questionThree = document.getElementById("quest-three");
let questionFour = document.getElementById("quest-four");
let questionFive = document.getElementById("quest-five");
let questionSix = document.getElementById("quest-six");
let questionSeven = document.getElementById("quest-seven");
let questionEight = document.getElementById("quest-eight");
let questionNine = document.getElementById("quest-nine");
let questionTen = document.getElementById("quest-ten");

let qOneWrongs = document.getElementsByClassName("q-one-wrong");
let qTwoWrongs = document.getElementsByClassName("q-two-wrong");
let qThreeWrongs = document.getElementsByClassName("q-three-wrong");
let qFourWrongs = document.getElementsByClassName("q-four-wrong");
let qFiveWrongs = document.getElementsByClassName("q-five-wrong");
let qSixWrongs = document.getElementsByClassName("q-six-wrong");
let qSevenWrongs = document.getElementsByClassName("q-seven-wrong");
let qEightWrongs = document.getElementsByClassName("q-eight-wrong");
let qNineWrongs = document.getElementsByClassName("q-nine-wrong");
let qTenWrongs = document.getElementsByClassName("q-ten-wrong");

let qOneRight = document.getElementById("q-one-right");
let qTwoRight = document.getElementById("q-two-right");
let qThreeRight = document.getElementById("q-three-right");
let qFourRight = document.getElementById("q-four-right");
let qFiveRight = document.getElementById("q-five-right");
let qSixRight = document.getElementById("q-six-right");
let qSevenRight = document.getElementById("q-seven-right");
let qEightRight = document.getElementById("q-eight-right");
let qNineRight = document.getElementById("q-nine-right");
let qTenRight = document.getElementById("q-ten-right");

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("start-page").style.display = "none";
    document.getElementById("quest-one").style.display = "block";
    let timerInterval = setInterval(function() {
        timeText.textContent = "Time Left: " + timeLeft
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Game over! Nice try...")
        }
    }, 1000)
});

for (i = 0; i < qOneWrongs.length; i++)
qOneWrongs[i].addEventListener("click", function() {
    let qOneText = document.createElement("h3");
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    qOneText.textContent = "Wrong! 10 seconds lost...";
    rightOrWrong.append(qOneText);
    setTimeout(function(){
        qOneText.remove()
   }, 1000);
   timeLeft-=10;
});

qOneRight.addEventListener("click", function() {
    let qOneText = document.createElement("h3");
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    qOneText.textContent = "Correct!";
    rightOrWrong.append(qOneText);
    setTimeout(function(){
        qOneText.remove()
   }, 1000);
});

for (i = 0; i < qTwoWrongs.length; i++)
qTwoWrongs[i].addEventListener("click", function() {
    let qTwoText = document.createElement("h3");
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
    qTwoText.textContent = "Wrong! 10 seconds lost...";
    rightOrWrong.append(qTwoText);
    setTimeout(function(){
       qTwoText.remove();
   }, 1000);
   timeLeft-=10;
});

qTwoRight.addEventListener("click", function() {
    let qTwoText = document.createElement("h3");
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
    qTwoText.textContent = "Correct!";
    rightOrWrong.append(qTwoText);
    setTimeout(function(){
        qTwoText.remove()
   }, 1000);
});