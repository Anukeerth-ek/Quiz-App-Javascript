const quizData = [
     {
          question: "Which is the best programming language in 2021?",
          a: "javascript",
          b: "Python",
          c: "Java",
          d: "Kotlin",

          correct: "a",
     },

     {
          question: "How many datatypes are there in javascript?",
          a: "3",
          b: "7",
          c: "8",
          d: "5",

          correct: "b",
     },

     {
          question: "Reduce function is bases on what?",
          a: "Higher order function",
          b: "Lower order function",
          c: "Arrow function",
          d: "Mapping function",

          correct: "a",
     },

     {
          question: "What is JavaScript used for?",
          a: "Creating web and mobile apps",
          b: "Game development",
          c: "Adding interactive behavior to web pages ",
          d: "All of above",

          correct: "d",
     },
];

const frontEnd = [
     {
          question: "HTML stands for?",
          a: "HUBER TEXT MAKEUP LANGUAGE",
          b: "HYPER TEXT MARKUP LANGUAGE",
          c: "HIGHER TEXT MACHINE LANGUAGE",
          d: "HYPER TEST MARKING LANGUAGE",

          correct: "b",
     },
     {
          question: "What you mean by SPAN tag?",
          a: "For new line",
          b: "For changing background color",
          c: "For increasing font size",
          d: "None of the above",

          correct: "d",
     },
     {
          question: "Pick a proper shorthand property of margin in the correct order.",
          a: "left-bottom-right-top",
          b: "left-top-right-bottom",
          c: "top-right-bottom-left",
          d: "top-left-bottom-right",

          correct: "c",
     },
     {
          question: "How to set the left border color?",
          a: "border-left-color",
          b: "border-style-left",
          c: "border-color-left",
          d: "left-border-color",

          correct: "a",
     },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById("sub");

let currentQuiz = 0;
let score = 0;
const userDomain = prompt("Ordinary quiz or frontend quiz");
loadQuiz();

function loadQuiz() {
     deselectAnswers();
     if (userDomain === "frontend") {
          const crntFrontQuizData = frontEnd[currentQuiz];
          questionEl.innerText = crntFrontQuizData.question;
          aText.innerText = crntFrontQuizData.a;
          bText.innerText = crntFrontQuizData.b;
          cText.innerText = crntFrontQuizData.c;
          dText.innerText = crntFrontQuizData.d;
     } else {
          const currentQuizData = quizData[currentQuiz];

          questionEl.innerText = currentQuizData.question;

          aText.innerText = currentQuizData.a;
          bText.innerText = currentQuizData.b;
          cText.innerText = currentQuizData.c;
          dText.innerText = currentQuizData.d;
     }
}

function getSelected() {
     let answer = undefined;

     answerEls.forEach((answersEl) => {
          if (answersEl.checked) {
               answer = answersEl.id;
          }
     });
     return answer;
}

function deselectAnswers() {
     answerEls.forEach((answerEl) => {
          answerEl.checked = false;
     });
}

submitBtn.addEventListener("click", () => {
     const answer = getSelected();
     if (answer) {
          if (answer === quizData[currentQuiz].correct || answer === frontEnd[currentQuiz].correct) {
               score++;
               let a = 94,
                    b = 242,
                    c = 149;

               // document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
          } else {
               let a = 242,
                    b = 65,
                    c = 65;
               // document.body.style.backgroundColor = 'rgb('+ a + ','+ b + ',' + c +')'
          }
          currentQuiz++;
          if (currentQuiz < quizData.length) {
               loadQuiz();
          } else {
               quiz.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2> <button onClick="location.reload()"
         >Reload</button>`;
          }
     }
});
