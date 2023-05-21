console.log("File is Linked");
var button = document.getElementById("button");
button.addEventListener("click",startQuiz)

function startQuiz() {
    console.log("Starting Quiz :D ");
    var testing = document.querySelector(".test");
    testing.classList.remove("hide");
    setInterval(displayHello, 1000);
}


var count = 59;
function displayHello() {
 var timer= document.getElementById("timer");
 
 timer.innerHTML =count;
 count--;
}
