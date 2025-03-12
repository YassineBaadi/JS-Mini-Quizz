const questions = [
    { question: "Quel est le père de Naruto ?", answers: ["Minato", "Jiraiya", "Kakashi"], correct: 0 },
    { question: "Quel est le démon en Naruto ?", answers: ["Ichibi", "Kyûbi", "Hachibi"], correct: 1 },
    { question: "Quel est le sensei de l'équipe 7 ?", answers: ["Asuma", "Kakashi", "Gai"], correct: 1 },
    { question: "Quel est le rêve de Naruto ?", answers: ["Devenir Hokage", "Retrouver Sasuke", "Être le plus fort"], correct: 0 },
    { question: "Qui est le frère de Sasuke ?", answers: ["Madara", "Obito", "Itachi"], correct: 2 },
    { question: "Quelle est la technique signature de Naruto ?", answers: ["Chidori", "Rasengan", "Amaterasu"], correct: 1 },
    { question: "Quel bijû possède Gaara ?", answers: ["Ichibi", "Kyûbi", "Sanbi"], correct: 0 },
    { question: "Quel est le village de Naruto ?", answers: ["Suna", "Konoha", "Kiri"], correct: 1 },
    { question: "Quel est le nom du clan de Neji ?", answers: ["Uchiha", "Hyuga", "Nara"], correct: 1 },
    { question: "Quel personnage porte un masque orange ?", answers: ["Kakashi", "Obito", "Zabuza"], correct: 1 }
];

let index = 0;
let score = 0;

// Afficher la question
function showQuestion() {
    let q = questions[index];
    document.getElementById("question").textContent = q.question;
    let answersEl = document.getElementById("answers");
    answersEl.innerHTML = "";
    
    for (let i = 0; i < q.answers.length; i++) {
        let btn = document.createElement("button");
        btn.textContent = q.answers[i];
        btn.onclick = function() { selectAnswer(i, btn); };
        answersEl.appendChild(btn);
    }
    
    document.getElementById("next-btn").disabled = true;
}

// Sélection de la réponse
function selectAnswer(i, btn) {
    // Mettre en surbrillance la réponse sélectionnée
    btn.classList.add('selected');
   
    // Vérifier si la réponse est correcte
    if (i === questions[index].correct) {
        score++;
    }
    
    document.getElementById("next-btn").disabled = false;
}
