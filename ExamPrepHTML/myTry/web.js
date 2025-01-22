document.addEventListener("DOMContentLoaded", () => {
    fetch('bzffragen.json')
        .then(response => response.json())
        .then(questions => {
            var question = questions[3]
            if (question) {
                const questionEl = document.getElementById("question")
                questionEl.innerText = question.q

                const answersEl = document.querySelectorAll(".answer")
                const answers = question.a

                let currentIndex = answers.length;
                while (currentIndex != 0) {
              
                  let randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  [answers[currentIndex], answers[randomIndex]] = [
                    answers[randomIndex], answers[currentIndex]];
                }

                answersEl.forEach((answer, index) => {
                    answer.querySelector("label").innerText = answers[index].text
                    console.log(answers[index].text)
                })
            }
            

        })
        .catch(err => console.error("Error loading JSON:", err));
})