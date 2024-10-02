const questions = [
    { question: 'Face a complex problem', story: 'Early Cancer', lp: 'Dive Deep' },
    { question: 'Find root cause of issue', story: 'Early Cancer', lp: 'Dive Deep' },
    { question: 'In-depth thought analysis', story: 'Early Cancer', lp: 'Dive Deep' },
    { question: 'Overcoming unanticipated obstacle', story: 'Komatsu / Facial Rec', lp: 'Deliver Results' },
    // Add more questions here
];

let currentQuestionIndex = 0;
let askedQuestions = [];
let questionCounter = 0;

function randomizeQuestions() {
    return questions.sort(() => Math.random() - 0.5);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;
        document.getElementById('story').textContent = `Story: ${currentQuestion.story}`;
        document.getElementById('counter').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        askedQuestions.push(currentQuestion);
        currentQuestionIndex++;
    } else {
        document.getElementById('question').textContent = "All questions have been asked!";
        document.getElementById('next-btn').disabled = true;
    }
}

window.onload = () => {
    randomizeQuestions();
    nextQuestion();
};

document.getElementById('next-btn').addEventListener('click', nextQuestion);
