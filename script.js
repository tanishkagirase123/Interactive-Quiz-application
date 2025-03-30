const quizData = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"], correct: 0 },
    { question: "Which tag is used for paragraphs?", options: ["<div>", "<p>", "<h1>", "<span>"], correct: 1 },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
    { question: "What is the correct tag for inserting an image?", options: ["<image>", "<pic>", "<img>", "<src>"], correct: 2 },
    { question: "Which tag is used to create a link?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
    { question: "Which attribute specifies the URL in an <a> tag?", options: ["src", "href", "link", "url"], correct: 1 },
    { question: "How do you make text bold in HTML?", options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"], correct: 3 },
    { question: "Which tag is used to make an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], correct: 0 },
    { question: "What is the correct HTML for creating a checkbox?", options: ["<input type='checkbox'>", "<check>", "<checkbox>", "<input type='check'>"], correct: 0 },
    { question: "Which tag is used to define a table row?", options: ["<tr>", "<td>", "<th>", "<row>"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    nextBtn.style.display = "none";
    questionEl.innerText = quizData[currentQuestion].question;
    optionsEl.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = 'option';
        btn.onclick = () => selectOption(btn, index);
        optionsEl.appendChild(btn);
    });
}

function selectOption(selectedBtn, index) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(btn => btn.disabled = true);

    if (index === quizData[currentQuestion].correct) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allOptions[quizData[currentQuestion].correct].classList.add('correct');
    }
    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
