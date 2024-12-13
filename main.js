const rhetoricalQuestions = document.querySelectorAll(".rhetorical-question");

rhetoricalQuestions.forEach(rhetoricalQuestion => {
    rhetoricalQuestion.addEventListener("click", event => {
        rhetoricalQuestion.classList.toggle("active");
    });
});