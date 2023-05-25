
//setting it up to have button interactive
let button = document.getElementById("button");
let firstPage = document.getElementById("first-page")
//button is listening for a click
button.addEventListener("click",startQuiz)
//sets count to 3
let count = 60;
//setting element to create to add choices in li element
let li = document.createElement("li");
//list of questions

testQuestions =[
    {question:"inside which Element do we put the JavaScript?",
    choices:[
    "<script>",
    "<javascript>",
    "<js>",
    "<scripting>" ],
    answer:["<script>"]
    },

    {question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
    choices:[
    "#demo.innerHTML = 'Hello World!;",
    'document.getElementsByName("p").innerHTML = "Hello World!";',
    'document.getElement("p").innerHTML = "Hello World";',
    'document.getElementById("demo").innerHTML = "Hello World!"' ],
    answer:['document.getElement("p").innerHTML = "Hello World";']
    },

    {question:"Where is the correct place to insert a JavaScript? ",
    choices:[
    "The <body> section",
    " Both the <head> section and the <body> section are correct",
    "The <head> section",
    "Anywhere!" ],
    answer:["The <body> section"]
    },

    {question:"How to write an IF statement in JavaScript?",
    choices:[
    " if x = 0 then",
    " if (x==0)",
    "if x=0",
    "if x==0 then" ],
    answer:["if (x==0)"]
    },

    {question:"How can you add a comment in a JavaScript?",
    choices:[
    "'This is a comment",
    "//This is a comment",
    "<!--This is a comment--",
    "All of the above" ],
    answer:["//This is a comment"]
    }
]

questionContainer = document.querySelector(".question-container");
choicesContainer = document.querySelector(".choices-container");
choice1 = document.getElementById("1");
choice2 = document.getElementById("2");
choice3 = document.getElementById("3");
choice4 = document.getElementById("4");
choicesDisplay = document.querySelector(".choices-display");


//STARTS THE QUIZ
function startQuiz() {
    console.log("Starting Quiz :D ");
    let testing = document.querySelector(".test");
    testing.classList.remove("hide");
    button.classList.add("hide");
    firstPage.classList.add("hide");
    intervalId = setInterval(countdown, 1000);

   // addEventListener
    questionContainer.innerText = testQuestions[0].question;
    choice1.innerText = testQuestions[0].choices[0];
    choice2.innerText = testQuestions[0].choices[1];
    choice3.innerText = testQuestions[0].choices[2];
    choice4.innerText = testQuestions[0].choices[3];

    
  
    

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
   
//  for (var x= 0; x <testQuestions.length;x++){
//     var displayQuestion = document.createElement("h4");
//     displayQuestion.innerText = testQuestions[x].question;

//     questionContainer.append(displayQuestion);
// for (var x =0; x <testQuestion.length; x++){
//     var displayChoices = document.createElement("h5");
//     displayChoices.innerText = testQuestions[x].choices[x];
//     choicesDisplay.append(displayChoices);
//     }
    
   
    
// }


    
 



