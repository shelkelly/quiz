var start = document.getElementById('#start');
var timer = document.getElementById('#time')
var quizQuestion = document.getElementById("#question");
var answerChoices = document.getElementById('#answers');
var zero = 0;
var createUL = document.createElement("ul");
var quizAnswers = document.getElementById("answers");
var score = 0;
var penalty = 10;


// function loadQuestions() {
    const questions = [
        {
            title: "Question 1: What is Javascript?",
            choices: ["A programming language", "The creation of complex features on a page", "All of the above"],
            answer: "All of the above"
        },
        {
            title: "Question 2: What does it mean to render a page?",
            choices: ["To take the script that is contained, process it, and run it.", "It allows you to view the code within your web browser", "It increases your page load speed."],
            answer: "To take the script that is contained, process it, and run it."
        },
        {
            title: "Question 3: What is the Document Object Model (DOM)?",
            choices: ["To take the script that is contained, process it, and run it.", "It allows you to view the code within your web browser", "It increases your page load speed."],
            answer: "To take the script that is contained, process it, and run it."
        },
    ];

//};
// loadQuestions();

start.addEventListener('click', function() {
    if (zero = 0) {
        zero = setInterval(function () {
            timeLeft--;
            timer.textContent = "Time Left: " + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(zero);
                timer.textContent = "Time is up.";
            };
        }, 1000);
    };
    //render(generateQuestions);
});

function render(generateQuestions) {
    question.innerHTML = "";
    createUL.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questions.textContent = userQuestion;
}
   userChoices.forEach(function (newItem) {
       var listItem = document.createElement("li");
       listItem.textContent = newItem;
       createUL.appendChild(listItem);
       listItem.addEventListener("click", (Score));
   }) 
};

function score(event) {
    var element = event.target;
    if (element.matches("li") {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[questionIndex].answer) {
        score++;
        createDiv.textContent = "Correct!";
    } else {
        secondsLeft = secondsLeft - penalty;
        createDiv.textcontent = "The correct answer is " + questions[questionIndex].answer;
    }

    })
};

questionIndex++;

if (questionIndex >= questions.length) {
    completedQuiz();
    createDiv.textcontent = "You got " + score + "/" + questions.length + " correct!";
} else {
    render(questionIndex);
}

question.appendChild(createDiv);

function completedQuiz() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Comeplete!";
    question.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(zero);
        createP.textContent = "Your final score is: " + timeRemaining;

        question.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials";

    question.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");

    question.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    question.appendChild(createSubmit);
};
