const quizData = [
    {
        question: "1. Who develpoed python programming language?",
        options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Storm"],
        answer: "Guido van Rossum"
    },
    {
        question: "2. Which type of programming does python support?",
        options: ["object-oriented programming", "structed programming", "functional programming", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "3. Is python case sensitive when dealing with identifiers?",
        options: ["No", "Yes", "Machine Dependent ", "None of the above"],
        answer: "Yes"
    },
    {
        question: "4. Which of the following is the correct extension of the python file?",
        options: [".python", ".pl", ".py", ".p"],
        answer: ".py"
    },
    {
        question: "5. Which of the following is used to define a block of code in python language?",
        options: ["Indentation", "Key", "Brackets", "All of the above"],
        answer: "Indentation"
    },
    {
        question: "6. Which keyword is used for function in python language?",
        options: ["Function", "def", "Fun", "Define"],
        answer: "def"
    },
    {
        question: "7. Which of the following character is used to give single-line comments in Python?",
        options: ["//", "#", "!", "/*"],
        answer: "#"
    },
    {
        question: "8. Which one of the following is not a keyword in Python language?",
        options: ["pass", "eval", "assert", "nonlocal"],
        answer: "eval"
    },
    {
        question: "9. Which of the following statements is used to create an empty set in Python?",
        options: ["()", "[]", "{}", "set()"],
        answer: "set()"
    },
    {
        question: "10. To add a new element to a list we use which python command?",
        options: ["list1.addEnd(5)", "list1.addlast(5)", "list1.append(5)", "list1.add(5)"],
        answer: "list1.append(5)"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const submitBtn = document.getElementById('submitBtn');
    const result = document.getElementById('result');

    function loadQuiz() {
        let output = '';
        quizData.forEach((questionData, index) => {
            const { question, options } = questionData;
            output += `
                <div class="question">
                    <p>${question}</p>
                    <div class="options">
                        ${options.map((option, i) => `
                            <label>
                                <input type="radio" name="question${index}" value="${option}">
                                ${option}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        quizContainer.innerHTML = output;
    }

    function calculateResults() {
        let score = 0;
        quizData.forEach((questionData, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === questionData.answer) {
                score++;
            }
        });
        result.textContent = `You scored ${score} out of ${quizData.length}`;
    }

    submitBtn.addEventListener('click', calculateResults);

    loadQuiz();
});
