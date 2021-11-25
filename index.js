console.log("Hello")

const quizData = [
    {
        question: "What is the Capital of India?",
        a: "Dehli",
        b: "Mumbai",
        c: "Kolkata",
        d: "Bengaluru",
        correct: "a"
    },
    {
        question: "Which is India's Longest River?",
        a: "Godavari",
        b: "Krishna",
        c: "Ganga",
        d: "Bramhaputra",
        correct: "c"
    },
    {
        question: "Which city is the Capital of two states?",
        a: "Noida",
        b: "Chandigarh",
        c: "Jaipur",
        d: "Mumbai",
        correct: "b"
    },
    {
        question: "When is India's Independence Day?",
        a: "15 August",
        b: "14 June",
        c: "26 January",
        d: "28 February",
        correct: "a"
    },
    {
        question: "Which one is India's smallest state in area?",
        a: "Goa",
        b: "Sikkim",
        c: "Punjab",
        d: "Himachal Pradesh",
        correct: "a"
    }
]

var currentNum = 0;
console.log(quizData)

let question = document.getElementById('heading-div')
let option1 = document.getElementById('a_text')
let option2 = document.getElementById('b_text')
let option3 = document.getElementById('c_text')
let option4 = document.getElementById('d_text')


function loadQuiz(){
    let currentQuizData = quizData[currentNum];
    question.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;


   
}

loadQuiz();

let score = 0;

function checkquiz(){
   
    console.log(document.querySelector('input[name="answer"]:checked').value);

    if(document.querySelector('input[name="answer"]:checked').value == quizData[currentNum].correct){
        score++;
        console.log("Right")
    }
    else{
        console.log("Wrong")
    }
    
}

function deSelectAns(){
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;
    document.getElementById('d').checked = false;
}

function nextQuizData(event){
    
    if(currentNum < quizData.length-1){
        checkquiz();
        currentNum++
        deSelectAns();
        loadQuiz();
        
    }
    else if(currentNum === quizData.length-1){
        checkquiz();
        deSelectAns();

        document.getElementById("card-div").innerHTML = `<div style="text-align:center; font-size:20px;"> <span style="font-size:15px; margin-bottom:90px">Congratulations you finished the Test! </span><br> You answered <span style="color: green">correctly</span> to ${score}/${quizData.length} questions</div>`;
        document.getElementById("card-div").style.display = 'flex'
        document.getElementById("card-div").style.justifyContent = 'center'
        document.getElementById("card-div").style.alignItems = 'center'
    
        
    }

}