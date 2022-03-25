let startButton = document.getElementById("start-button");
let startPage = document.querySelector("#start-page");
let questionOne = document.getElementById("quest-one");
let qOneWrongs = document.getElementsByClassName("q-one-wrong");
let qOneRight = document.getElementById("q-one-right");
let timeText = document.getElementById("time-left");
let rightOrWrong = document.getElementById("right-or-wrong");
let timeLeft = 150;
let questions = [
    {
        question: "Which of the following is an HTML attribute?",
        answersArr: ["const", "let", "img", "src"],
        correct: "src"
    },
    {
        question: "To define a letiable in JS we may use the ___ keyword",
        answersArr: ["header", "let", "style", "function"],
        correct: "let"
    },
    {
        question: "In CSS we can define colors using their ___ value",
        answersArr: ["hexadecimal", "binary", "variable", "coloric"],
        correct: "hexadecimal"
    },
    {
        question: "JS files are linked to HTML docs via the ___ tag",
        answersArr: ["<a>", "<script>", "<h1>", "<boolean>"],
        correct: "<script>"
    },
    {
        question: "One can quickly set up the head of their HTML doc by typing which character?",
        answersArr: ["@", "%", "!", "&"],
        correct: "!"
    },
    {
        question: "Which of the following is NOT an example of a JS method?",
        answersArr: ["push()", "slice()", "scrape()", "substring()"],
        correct: "scrape()"
    },
    {
        question: "To make an item clickable on page, one must implement an:",
        answersArr: ["eventListener", "clickFollower", "targetAssigner", "buttonAccepter"],
        correct: "eventListener"
    },
    {
        question: "After clicking the inspect tool in a browser, in which tab can I find error messages?",
        answersArr: ["Application", "Elements", "Sources", "Console"],
        correct: "Console"
    },
    {
        question: "The HTML document holds the ___ of the page",
        answersArr: ["Styling", "Functions", "Content", "None of the above"],
        correct: "Content"
    },
    {
        question: "The link to the CSS stylesheet should be placed in which section of the HTML doc?",
        answersArr: ["head", "body", "footer", "None of the above"],
        correct: "head"
    }
];



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
    questionOne.style.display = "none" 
    qOneText.textContent = "Wrong! 10 seconds lost...";
    rightOrWrong.append(qOneText);
    setTimeout(function(){
        rightOrWrong.style.display = "none"
   }, 1000);

   timeLeft-=10;
});


qOneRight.addEventListener("click", function() {
    let qOneText = document.createElement("h3");
    questionOne.style.display = "none" 
    qOneText.textContent = "Correct!";
    rightOrWrong.append(qOneText);
    setTimeout(function(){
        rightOrWrong.style.display = "none"
   }, 1000);
})