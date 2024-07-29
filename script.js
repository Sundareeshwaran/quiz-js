const questions = [
  {
    id: 1,
    question: "What does a full stack developer typically work with?",
    options: {
      a: "Front-end only",
      b: "Back-end only",
      c: "Both front-end and back-end",
      d: "Database only",
      crt: "c",
    },
  },
  {
    id: 2,
    question: "Which of the following is a popular front-end framework?",
    options: {
      a: "React.Js",
      b: "Django",
      c: "Node.Js",
      d: "Express.Js",
      crt: "a",
    },
  },
  {
    id: 3,
    question: "Which language is commonly used for server-side programming?",
    options: {
      a: "HTML",
      b: "CSS",
      c: "Js",
      d: "Python",
      crt: "d",
    },
  },
  {
    id: 4,
    question: "What is the primary purpose of a RESTful API?",
    options: {
      a: "To style web pages",
      b: "To handle database migrations",
      c: "To enable communication between different software applications",
      d: "To manage server infrastructure",
      crt: "c",
    },
  },
  {
    id: 5,
    question:
      "Which of the following is a common database technology used in full stack development?",
    options: {
      a: "MongoDB",
      b: "Bootstrap",
      c: "SASS",
      d: "Angular",
      crt: "a",
    },
  },
];

let currentQuiz = 0;
let score = document.querySelector(".score");
let selectedAnswer = null;

const questionElement = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".btn");
const nextButton = document.querySelector(".next-btn button");

function loadQuiz() {
  const currentQuestion = questions[currentQuiz];
  questionElement.innerHTML =
    currentQuestion.id + ". " + currentQuestion.question;

  optionButtons.forEach((button, index) => {
    const optionKey = Object.keys(currentQuestion.options)[index];
    if (optionKey !== "crt") {
      button.innerText = currentQuestion.options[optionKey];
      button.setAttribute("data-answer", optionKey);
      button.classList.remove("selected");
    }
  });

  selectedAnswer = null;
}

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    optionButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedAnswer = button.getAttribute("data-answer");
  });
});

nextButton.addEventListener("click", () => {
  if (selectedAnswer) {
    const currentQuestion = questions[currentQuiz];
    if (selectedAnswer === currentQuestion.options.crt) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < questions.length) {
      loadQuiz();
    } else {
      alert("Quiz completed! Your score: " + score + "/" + questions.length);
      window.location.reload();
    }
  } else {
    alert("Please select an answer before proceeding.");
  }
});

loadQuiz();
