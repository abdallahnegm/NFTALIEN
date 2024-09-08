let menu = document.getElementById("menu");
let menuBar = document.getElementById("menu-bar");
menu.addEventListener("click", () => {
    menuBar.classList.toggle("active");
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// let darkMode = document.getElementById("dark-mode");
// darkMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// })
let answers = document.querySelectorAll(".answer");
let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    answers.forEach((answer) => {
      // answer.classList.remove("show");
      if (answer.classList.contains("show")) {
        answer.classList.remove("show");
      }
    })
    answers.forEach((answer) => {
      if (answer.parentElement === question) {
        answer.classList.add("show");
      }
      })

         })
    })