
//setting it up to have button interactive
let button = document.getElementById("button");
let firstPage = document.getElementById("first-page")
//button is listening for a click
button.addEventListener("click",startQuiz)
//sets count to 3
let count = 3;
//list of questions
testQuestions =[
    {question:"inside which Element do we put the JavaScript?",
    answers:{
    choice1 :"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4:"<scripting>" }
    },

    {question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
    answers:{
    choice1 :"#demo.innerHTML = 'Hello World!;",
    choice2:'document.getElementsByName("p").innerHTML = "Hello World!";',
    choice3:'document.getElement("p").innerHTML = "Hello World";',
    choice4:'document.getElementById("demo").innerHTML = "Hello World!"' }
    },

    {question:"Where is the correct place to insert a JavaScript? ",
    answers:{
    choice1 :"The <body> section",
    choice2:" Both the <head> section and the <body> section are correct",
    choice3:"The <head> section",
    choice4:"Anywhere!" }
    },

    {question:"The external JavaScript file must contain the <script> tag.",
    answers:{
    choice1 :"True",
    choice2:"False"}
    },

    {question:"How to write an IF statement in JavaScript?",
    answers:{
    choice1:" if x = 0 then",
    choice2:" if (x==0)",
    choice3:"if x=0",
    choice4:"if x==0 then" }
    },

    {question:"How can you add a comment in a JavaScript?",
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
    firstPage.classList.add("hide");
    intervalId = setInterval(countdown, 1000);
    for (var x= 0; x <testQuestions.length;x++){
        var displayQuestion = document.createElement("h4");
        displayQuestion.innerText = testQuestions[x].question;
        testing.append(displayQuestion);
        
    }

    
    

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

 //function to display questions and answers


    
 



