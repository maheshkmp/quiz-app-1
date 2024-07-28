document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quizContainer');
    const nextButton = document.getElementById('nextButton');
    const resultContainer = document.getElementById('resultContainer');
    const scoreDisplay = document.getElementById('score');

    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="question">${currentQuestion.question}</div>
            ${currentQuestion.options.map((option, index) => `
                <label>
                    <input type="radio" name="answer" value="${option}" class="answer">
                    ${option}
                </label>
            `).join('')}
        `;
    }

    function handleNextQuestion() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            if (selectedOption.value === quizData[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        } else {
            alert('Please select an answer!');
        }
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreDisplay.textContent = `${score} out of ${quizData.length}`;
    }

    nextButton.addEventListener('click', handleNextQuestion);

    loadQuestion();
});
