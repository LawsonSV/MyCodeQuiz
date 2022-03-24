var startButton = document.getElementById("start-button")
var startPage = document.querySelector("#start-page")
var questionBank = document.getElementById("question-bank")

var questions = [
    {
        question: "Which of the following is an HTML attribute?",
        answersArr: ["const", "var", "img", "src"],
        correct: "src"
    },
    {
        question: "To define a variable in JS we may use the ___ keyword",
        answersArr: ["header", "var", "style", "function"],
        correct: "var"
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



startButton.addEventListener("click", function() {
    //event.preventDefault();
    document.getElementById("start-page").style.display = "none";
    let questionOne = JSON.stringify(questions[0]);
    questionBank.append(questionOne)

});

