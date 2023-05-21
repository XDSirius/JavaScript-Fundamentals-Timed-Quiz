console.log("File is Linked");
let button = document.getElementById("button");

button.addEventListener("click",startQuiz)

var count = 3;

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


