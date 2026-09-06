const body = document.body;
const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click",()=>{
    body.classList.toggle("BG");
})

const btn5 = document.querySelector(".btn5");
const m = document.querySelector(".msg")
m.textContent = "Hi i'm muffin";
btn5.addEventListener("click",()=>{

    m.classList.toggle("surprise");
})