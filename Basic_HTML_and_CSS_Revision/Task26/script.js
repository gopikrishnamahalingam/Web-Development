
const arrow = document.querySelector(".dropDown");
const navTitles = document.querySelector(".titles");
const body = document.body;

arrow.addEventListener("click",(e)=>{
    console.log("Clicked");
    navTitles.classList.toggle("show");
})
