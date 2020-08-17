const timerDisp = document.getElementById("timer");
const strtBtn = document.getElementById("strtBtn");
const questionEl = document.getElementById("questions");
const answers = document.getElementById("answers");
const answerA = document.getElementById("a");
const answerB = document.getElementById("b");
const answerC = document.getElementById("c");
const answerD = document.getElementById("d");
const formEl = document.getElementById("formEl");
const scoreContent = document.getElementById("scoreContent");
const submitBtn = document.getElementById("submitBtn");
let highScore = [];
let indexNo = 0;

const questions = [{
        question: "What keyword do we use to set a new varibale in JavaScript?",
        a: "tag",
        b: "alert",
        c: "var",
        d: "variable",
        correct: "c"

    },
    {
        question: "What is the ' = ' called in JavaScript?",
        a: "Equal",
        b: "to",
        c: "Equal to",
        d: "Assignment Operator",
        correct: "d"

    },
    {
        question: "Complete the sentence: ______ x = 32;",
        a: "function",
        b: "variable",
        c: "var",
        d: "let",
        correct: "c"
    },
    {
        question: 'How many components does the "for" loop has?',
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c"
    },
    {
        question: 'What keyword do we use to end the "else if" statement?',
        a: "break",
        b: "end",
        c: "else",
        d: "stop",
        correct: "c"
    },
    {
        question: 'What is CSS?',
        a: "Cascade Styling Sheet",
        b: "HTML",
        c: "A webpage",
        d: "A Server",
        correct: "a"
    },
    {
        question: 'Is HTML easy to learn?',
        a: "Yes",
        b: "No",
        correct: "a"
    },
    {
        question: 'Is Grid part of JavaScript?',
        a: "No",
        b: "Yes",
        correct: "a"
    },
    {
        question: 'What is the DOM?',
        a: "Definitive Object Model",
        b: "Document Oriented Model",
        c: "Document Object model",
        d: "None of the above",
        correct: "c"
    },
    {
        question: 'What function executes an event?',
        a: "event name",
        b: "event handler",
        c: "event listener",
        d: "event function",
        correct: "b"
    }

];

let arrLength = questions.length - 1;
let secondsRemaining = 180;
var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);

    function myClock() {
        timerDisp.innerHTML = secondsRemaining + " seconds remaining";
        --secondsRemaining;
        if (secondsRemaining <= 0) {
            clearInterval(myTimer);
            alert("Time is up!");
            clear();
            startAppear();
        }
    }
}

function quiz() {
    let questions1 = questions[indexNo];
    questionEl.innerHTML = "<p>" + questions1.question + "</p>";
    answerA.innerHTML = questions1.a;
    answerB.innerHTML = questions1.b;
    answerC.innerHTML = questions1.c;
    answerD.innerHTML = questions1.d;
}

function startAppear() {
    strtBtn.style.visibility = "visible";

}

function startOff() {
    strtBtn.style.visibility = "hidden";
}

function dispOff() {
    formEl.style.visibility = "hidden";
}

function hiOff() {
    scoreContent.innerHTML = "";
}

function dispOn() {
    formEl.style.visibility = "visible";
    scoreContent.style.visibility = "visible";
}

function contentOn() {
    questionEl.style.visibility = "visible";
    answerA.style.visibility = "visible";
    answerB.style.visibility = "visible";
    answerC.style.visibility = "visible";
    answerD.style.visibility = "visible";
    timerDisp.style.visibility = "visible";
}

function contentOff() {
    questionEl.style.visibility = "hidden";
    answerA.style.visibility = "hidden";
    answerB.style.visibility = "hidden";
    answerC.style.visibility = "hidden";
    answerD.style.visibility = "hidden";
    timerDisp.style.visibility = "hidden";
}

function renderScore() {
    var initials = document.getElementById("initials").value;
    var score = secondsRemaining;
    var scoreLength = highScore.length;
    var addScr = { in: initials,
        sc: score
    }

    highScore.push(addScr);
    if (scoreLength >= 1) {
        highScore.sort(function(a, b) { return b.sc - a.sc });
    }

    for (i = 0; i <= scoreLength; i++) {

        scoreContent.append(highScore[i].in + " score: " + highScore[i].sc);
        scoreContent.append(document.createElement("br"));




    }
    dispOff();
    clear();
    startAppear();
}

function clear() {
    indexNo = 0;
    secondsRemaining = 120;
    contentOff();
    return;
}

function strtQuiz() {
    contentOn();
    hiOff();
    startOff();
    quiz();
    clock();
}

function nextQ() {

    indexNo++;
    quiz();
}

function checkA() {
    if (questions[indexNo].correct === "a" && indexNo < arrLength) {

        nextQ();
    } else if (questions[indexNo].correct != "a") { secondsRemaining = secondsRemaining - 10; } else if (questions[indexNo].correct === "a" && indexNo === arrLength) {
        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;
    }
}

function checkB() {
    if (questions[indexNo].correct === "b" && indexNo < arrLength) {
        nextQ();
    } else if (questions[indexNo].correct != "b") { secondsRemaining = secondsRemaining - 10; } else if (questions[indexNo].correct === "b" && indexNo === arrLength) {
        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;

    }
}

function checkC() {
    if (questions[indexNo].correct === "c" && indexNo < arrLength) {
        nextQ();
    } else if (questions[indexNo].correct != "c") { secondsRemaining = secondsRemaining - 10; } else if (questions[indexNo].correct === "c" && indexNo === arrLength) {
        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;
    }
}

function checkD() {
    if (questions[indexNo].correct === "d" && indexNo < arrLength) {
        nextQ();
    } else if (questions[indexNo].correct != "d") { secondsRemaining = secondsRemaining - 10; } else if (questions[indexNo].correct === "d" && indexNo === arrLength) {
        dispOn();
        clearInterval(myTimer);
        contentOff();
        return;
    }
}


startAppear();
dispOff();
hiOff();
contentOff();