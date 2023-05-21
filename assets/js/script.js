console.log("File is Linked");
let button = document.getElementById("button");

button.addEventListener("click",startQuiz)

var count = 3;
testQuestions =[
    {question:"inside which Element do we put the JavaScript?",
    choice1 :"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4:"<scripting>" },

    {question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
    choice1 :"#demo.innerHTML = 'Hello World!;",
    choice2:'document.getElementsByName("p").innerHTML = "Hello World!";',
    choice3:'document.getElement("p").innerHTML = "Hello World";',
    choice4:'document.getElementById("demo").innerHTML = "Hello World!"' 
    },

    {question:"Where is the correct place to insert a JavaScript? ",
    choice1 :"The <body> section",
    choice2:" Both the <head> section and the <body> section are correct",
    choice3:"The <head> section",
    choice4:"Anywhere!" },

    {question:"The external JavaScript file must contain the <script> tag.",
    choice1 :"True",
    choice2:"False"
    },

    {question:"How to write an IF statement in JavaScript?",
    choice1:" if x = 0 then",
    choice2:" if (x==0)",
    choice3:"if x=0",
    choice4:"if x==0 then" },

    {question:"How can you add a comment in a JavaScript?",
    choice1 :"'This is a comment",
    choice2:"//This is a comment",
    choice3:"<!--This is a comment--",
    choice4:"All of the above" },
]
console.log(testQuestions);

function startQuiz() {
    console.log("Starting Quiz :D ");
    var testing = document.querySelector(".test");
    testing.classList.remove("hide");
    intervalId = setInterval(displayHello, 1000);
}





function displayHello() {
 var timer= document.getElementById("timer");
 
 timer.innerHTML = count;
 count--;
 if (count === 0){
    clearInterval(intervalId);
     }
 }


