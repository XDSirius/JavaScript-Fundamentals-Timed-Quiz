
//setting it up to have button interactive
let button = document.getElementById("button");
//button is listening for a click
button.addEventListener("click",startQuiz)
//sets count to 3
let count = 3;
//list of questions
testQuestions =[
    {question1:"inside which Element do we put the JavaScript?",
    answers:{
    choice1 :"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4:"<scripting>" }
    },

    {question2:"What is the correct JavaScript syntax to change the content of the HTML element below?",
    answers:{
    choice1 :"#demo.innerHTML = 'Hello World!;",
    choice2:'document.getElementsByName("p").innerHTML = "Hello World!";',
    choice3:'document.getElement("p").innerHTML = "Hello World";',
    choice4:'document.getElementById("demo").innerHTML = "Hello World!"' }
    },

    {question3:"Where is the correct place to insert a JavaScript? ",
    answers:{
    choice1 :"The <body> section",
    choice2:" Both the <head> section and the <body> section are correct",
    choice3:"The <head> section",
    choice4:"Anywhere!" }
    },

    {question4:"The external JavaScript file must contain the <script> tag.",
    answers:{
    choice1 :"True",
    choice2:"False"}
    },

    {question5:"How to write an IF statement in JavaScript?",
    answers:{
    choice1:" if x = 0 then",
    choice2:" if (x==0)",
    choice3:"if x=0",
    choice4:"if x==0 then" }
    },

    {question6:"How can you add a comment in a JavaScript?",
    answers:{
    choice1 :"'This is a comment",
    choice2:"//This is a comment",
    choice3:"<!--This is a comment--",
    choice4:"All of the above" }
    }
]
console.log(testQuestions);

//STARTS THE QUIZ
function startQuiz() {
    console.log("Starting Quiz :D ");
    let testing = document.querySelector(".test");
    testing.classList.remove("hide");
    button.classList.add("hide");
    intervalId = setInterval(countdown, 1000);
    

}





//timer
function countdown() {
 var timer= document.getElementById("timer");
 
 timer.innerHTML = count;
 count--;
 if (count === 0){
    clearInterval(intervalId);

    
     }

 }

 



