// Task
// Create a webpage containing an input for a user's name and a button.
// When the button is pressed, display a personalized greeting on the webpage.


// let response = prompt("Enter your name");
// alert("Welcome "+response+"!");
// const body document
const inputName = document.querySelector("#Name");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // form.style.backgroundColor = "red";
    const msg = document.querySelector(".Special_Message");
    msg.textContent="Greetings of the day, "+inputName.value;
    console.log(inputName.value);
    form.reset();
})