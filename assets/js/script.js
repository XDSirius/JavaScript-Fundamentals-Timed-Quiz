
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
    answers:[
    "<script>",
    "<javascript>",
    "<js>",
    "<scripting>" ]
    },

    {question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
    answers:[
    "#demo.innerHTML = 'Hello World!;",
    'document.getElementsByName("p").innerHTML = "Hello World!";',
    'document.getElement("p").innerHTML = "Hello World";',
    'document.getElementById("demo").innerHTML = "Hello World!"' ]
    },

    {question:"Where is the correct place to insert a JavaScript? ",
    answers:[
    "The <body> section",
    " Both the <head> section and the <body> section are correct",
    "The <head> section",
    "Anywhere!" ]
    },

    {question:"The external JavaScript file must contain the <script> tag.",
    answers:[
    "True",
    "False"]
    },

    {question:"How to write an IF statement in JavaScript?",
    answers:[
    " if x = 0 then",
    " if (x==0)",
    "if x=0",
    "if x==0 then" ]
    },

    {question:"How can you add a comment in a JavaScript?",
    answers:[
    "'This is a comment",
    "//This is a comment",
    "<!--This is a comment--",
    "All of the above" ]
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
        var displayAnswers = document.createElement("h5");
        displayAnswers.innerText = testQuestions[x].answers;
        testing.append(displayAnswers);
        
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


    
 



