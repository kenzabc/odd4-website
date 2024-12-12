document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quizForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Les bonnes réponses pour chaque question
        const answers = {
            q1: "Olympe de Gouges",
            q2: "1944",
            q3: "Malala Yousafzai"
        };
        
            if (quizForm) {
                quizForm.addEventListener("submit", function (e) {
                    e.preventDefault(); // Empêche le rechargement de la page
        
                    // Les bonnes réponses pour chaque question
                    const answers = {
                        q1: "Olympe de Gouges",
                        q2: "1944",
                        q3: "Malala Yousafzai"
                    };
        
                    let score = 0; // Initialisation du score
        
                    // Boucle à travers chaque question
                    for (const question in answers) {
                        const selected = document.querySelector(`input[name="${question}"]:checked`);
                        
                        if (selected && selected.value === answers[question]) {
                            score++; // Incrémentation du score pour chaque bonne réponse
                            selected.parentElement.style.color = "green"; // Bonne réponse en vert
                        } else if (selected) {
                            selected.parentElement.style.color = "red"; // Mauvaise réponse en rouge
                        }
                    }
        
                    // Afficher le score final
                    const feedback = document.getElementById("quizFeedback");
                    if (feedback) {
                        feedback.textContent = `Votre score : ${score} / ${Object.keys(answers).length}`;
                        feedback.style.fontWeight = "bold";
                        feedback.style.color = score === Object.keys(answers).length ? "green" : "red";
                    }
                });
            } else {
                console.error("Le formulaire de quiz n'a pas été trouvé.");
            }
        });
        
        let score = 0; // Initialisation du score

        // Boucle à travers chaque question
        for (const question in answers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selected && selected.value === answers[question]) {
                score++; // Incrémentation du score pour chaque bonne réponse
                selected.parentElement.style.color = "green"; // Bonne réponse en vert
            } else if (selected) {
                selected.parentElement.style.color = "red"; // Mauvaise réponse en rouge
            }
        }

        // Afficher le score final
        const feedback = document.getElementById("quizFeedback");
        feedback.textContent = `Votre score : ${score} / ${Object.keys(answers).length}`;
        feedback.style.fontWeight = "bold";
        feedback.style.color = score === Object.keys(answers).length ? "green" : "red";
    ;
});

