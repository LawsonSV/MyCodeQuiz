let startButton = document.getElementById("start-button");
let startPage = document.getElementById("start-page");
let timeText = document.getElementById("time-left");
let rightOrWrong = document.getElementById("right-or-wrong");
let timeLeft = 100;
let count = 0;
let scoreEl = document.getElementById("count")
let endPage = document.getElementById("end-page");

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
let questsAll = document.getElementsByClassName("all-quests");

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

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startPage.style.display = "none";
    questionOne.style.display = "block";
    timeLeft = 100
    var timerInterval = setInterval(function () {
        timeText.textContent = "Time Left: " + timeLeft
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Game over! Nice try...")
            for (i = 0; i < questsAll.length; i++) {
                questsAll[i].style.display = "none"
            }
            startPage.style.display = "block"
        }
    }, 1000)
});

for (i = 0; i < qOneWrongs.length; i++)
    qOneWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove()
        }, 1000);
        timeLeft -= 10;
    });

qOneRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qTwoWrongs.length; i++)
    qTwoWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionTwo.style.display = "none";
        questionThree.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qTwoRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qThreeWrongs.length; i++)
    qThreeWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionThree.style.display = "none";
        questionFour.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qThreeRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qFourWrongs.length; i++)
    qFourWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionFour.style.display = "none";
        questionFive.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qFourRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionFour.style.display = "none";
    questionFive.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qFiveWrongs.length; i++)
    qFiveWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionFive.style.display = "none";
        questionSix.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qFiveRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionFive.style.display = "none";
    questionSix.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qSixWrongs.length; i++)
    qSixWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionSix.style.display = "none";
        questionSeven.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qSixRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionSix.style.display = "none";
    questionSeven.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qSevenWrongs.length; i++)
    qSevenWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionSeven.style.display = "none";
        questionEight.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qSevenRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionSeven.style.display = "none";
    questionEight.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qEightWrongs.length; i++)
    qEightWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionEight.style.display = "none";
        questionNine.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qEightRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionEight.style.display = "none";
    questionNine.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qNineWrongs.length; i++)
    qNineWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionNine.style.display = "none";
        questionTen.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
    });

qNineRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionNine.style.display = "none";
    questionTen.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
});

for (i = 0; i < qTenWrongs.length; i++)
    qTenWrongs[i].addEventListener("click", function () {
        let winLoseText = document.createElement("h3");
        questionTen.style.display = "none";
        endPage.style.display = "block";
        winLoseText.textContent = "Wrong! 10 seconds lost...";
        rightOrWrong.append(winLoseText);
        setTimeout(function () {
            winLoseText.remove();
        }, 1000);
        timeLeft -= 10;
        endScoreFunc()
        clearInterval(timerInterval)
        timeText.textContent = ""
    });

qTenRight.addEventListener("click", function () {
    let winLoseText = document.createElement("h3");
    questionTen.style.display = "none";
    endPage.style.display = "block";
    winLoseText.textContent = "Correct!";
    count++;
    scoreEl.textContent = "Score: " + count;
    rightOrWrong.append(winLoseText);
    setTimeout(function () {
        winLoseText.remove()
    }, 1000);
    endScoreFunc()
    clearInterval(timerInterval)
    timeText.textContent = ""
});

function endScoreFunc() {
    let scorePrompt = prompt("Type your initials top save high score")
    let endScore = document.createElement("h1");
    endScore.textContent =  scorePrompt + ": " + count;
    endPage.append(endScore);
    
}