const correctAnswers = ['A', 'B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    // Check Answers
    userAnswers.forEach((answer, i) => {
        if (answer === correctAnswers[i]){
            score += 20;
        }
    });
    //Show Results 
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none');
});
