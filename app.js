//dummy data
let quizDetails = [
    {
        question: "Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to what as the device or viewport size increases?",
        options: ["9-columns", "10-columns", "11-columns", "12-columns"],
        answer: "12-columns",
    },
    {
        question: "What in bootstrap allows you to move, show and hide content based on viewport size?",
        options: ["Media-queries", "Col-queries", "Row-queries", "Subsdairy-queries"],
        answer: "Media-queries",
    },
    {
        question: "How many types of lists are supported by bootstrap?",
        options: ["1", "2", "3", "4"],
        answer: "3",
    },
    {
        question: "Can we make images responsive with bootstrap?",
        options: ["True", "False", "Can-be-true-sometimes", "Not-Possible"],
        answer: "True",
    },
    {
        question: "What is a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development?",
        options: ["HTML", "Bootstrap", "CSS", "Javascript"],
        answer: "Bootstrap",
    },
    {
        question: "Bootstrap package includes",
        options: ["Layouts", "Components", "Forms", "All-of-the-above"],
        answer: "All-of-the-above",
    },
    {
        question: "Which of the following indicates a dangerous or potentially negative action?",
        options: [".active", ".danger", ".warning", "None-of-the-above"],
        answer: ".danger",
    },
    {
        question: "Offsets are a useful feature for more specialized layouts.",
        options: ["No", "Yes", "Sometimes", "Can-not-say"],
        answer: "Yes",
    },
    {
        question: "What are the features of bootstrap?",
        options: ["Mobile-first-approach", "Easy-to-get-started", "Browser-Support", "All-of-the-above"],
        answer: "All-of-the-above",
    },
    {
        question: "Space technology is technology for use in where?",
        options: ["Inner-space", "Outer-space", "Earth", "Sun"],
        answer: "Outer-space",
    },
    {
        question: "What is the smallest header in HTML by default?",
        options: ["H1", "H2", "H3", "H6"],
        answer: "H6",
    },
    {
        question: "HTML files are saved by default with the extension?",
        options: [".in", ".html", ".css", ".js"],
        answer: ".html",
    },
];

let dataDisplay = document.querySelector(".data-display");

function quizApp() {
    let score = 0;
    let corrects = 10;
    let incorrects = 0;
    let quizArray = quizDetails.map((quiz, index)=> {
        return ` <div class="row justify-content-between my-4">
                    <div class="col-6 shadow py-3">
                       <div class="d-flex">
                       <p class="col-1">${index +1}
                       <p class="">${quiz.question}</p>
                       </div>
                       <select name="" id="" class="w-100 py-2">
                         <option value="" select-disabled>Select an answer</option>
                         ${quiz.options.map((option) => {
                            return `<option value=${option}>${option}</option>`;
                         })}
                       </select>
                    </div>
                    <div class="col-5 shadow py-3">
                      <p class="Selected">Selected answer:</p>
                      <p class="right">Correct answer:</p>
                      <p class="">Status: <span class="Status"></span></p>
                    </div>
                 </div>`;
        });
    
        dataDisplay.innerHTML=quizArray.join(" ");
    
        let selectElement = document.querySelectorAll("select");

        selectElement.forEach((select, index) => {
            select.addEventListener("change", (event) => {
                const selectValue = event.target.value;
                let picked = document.querySelectorAll(".Selected")[index]; 
                picked.innerHTML = `Selected answer: ${selectValue}`;
                let right = document.querySelectorAll(".right")[index];
                right.innerHTML = `Correct answer: ${quizDetails[index].answer}`;


                if (quizDetails[index].answer === selectValue){
                    let statusDisplay = document.querySelectorAll(".Status")[index];
                    statusDisplay.textContent = ` Correct`;
                    statusDisplay.style.color = "green";
                    score += corrects;
                    document.querySelector(".score").innerHTML = `${score}/120`;

                }
                else {
                    let statusDisplay = document.querySelectorAll(".Status")[index];
                    statusDisplay.textContent = ` Incorrect`;
                    statusDisplay.style.color = "red";
                    score += incorrects;
                    document.querySelector(".score").innerHTML = `${score}/120`;
                };
            });
        });

        
    
}
  

quizApp();
