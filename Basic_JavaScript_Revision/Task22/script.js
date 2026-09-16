// Task
// Create:
// Increase button
// Decrease button
// Reset button
// Counter display
// The counter should update on the webpage. 

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");
let count =0;
display.textContent = count;

increment.addEventListener("click",()=>{
    count += 1;
    display.textContent = count;
})
decrement.addEventListener("click",()=>{
    if(count >0){
        count -= 1;
    }
    display.textContent = count;
})
reset.addEventListener("click",()=>{
    count =0;
    display.textContent = count;
})
