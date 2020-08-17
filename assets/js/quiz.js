const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');




let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    setNextQuestion();
})


function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')


    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'See Results'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'What keyword do we use to set a new varibale in JavaScript?',
        answers: [
            { text: 'tag', correct: false },
            { text: 'alert', correct: false },
            { text: 'var', correct: true },
            { text: 'variable', correct: false },
        ]
    },
    {
        question: 'What is the "=" called in JavaScript?',
        answers: [
            { text: 'Equal', correct: false },
            { text: 'to', correct: false },
            { text: 'Equal to', correct: false },
            { text: 'Assignment Operator', correct: true }
        ]
    },
    {
        question: 'Complete the sentence: ______ x = 32;',
        answers: [
            { text: 'function', correct: false },
            { text: 'variable', correct: false },
            { text: 'var', correct: true },
            { text: 'let', correct: false }
        ]
    },
    {
        question: 'How many components does the "for" loop has?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: true },
            { text: '4', correct: false }
        ]
    },
    {
        question: 'What keyword do we use to end the "else if" statement?',
        answers: [
            { text: 'break', correct: false },
            { text: 'end', correct: false },
            { text: 'else', correct: true },
            { text: 'stop', correct: false }
        ]
    },
    {
        question: 'What is CSS?',
        answers: [
            { text: 'Cascade Styling Sheet', correct: true },
            { text: 'HTML', correct: false },
            { text: 'a Webpage', correct: false },
            { text: 'A Server', correct: false }
        ]
    },
    {
        question: 'Is HTML easy to learn?',
        answers: [
            { text: 'No', correct: false },
            { text: 'Yes', correct: true },
        ]
    },
    {
        question: 'Is Grid part of JavaScript?',
        answers: [
            { text: 'Yes', correct: false },
            { text: 'No', correct: true },
        ]
    },
    {
        question: 'What is the DOM?',
        answers: [
            { text: 'Definitive Object Model', correct: false },
            { text: 'Document Object Management', correct: false },
            { text: 'Document Object Model', correct: true },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'What function executes when an event occurs?',
        answers: [
            { text: 'event name', correct: false },
            { text: 'event listener', correct: false },
            { text: 'event handler', correct: true },
            { text: 'event fucntion', correct: false }
        ]
    },

]