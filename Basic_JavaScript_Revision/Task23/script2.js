// Connection

const form = document.querySelector(".form");
const newTask = document.querySelector("#Task");
const addBtn = document.querySelector(".addBtn");
const display = document.querySelector(".display");

const Tasks =[];

console.log("1");
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(newTask.value.trim() == ""){
        display.textContent = "Error";
        return;
    }
    
    display.textContent = "Added Successfully";
    
    Tasks.push(newTask.value.trim());
    
    console.log(Tasks)

    addInList(newTask.value.trim());
    form.reset();
})

const taskList = document.querySelector(".taskList");

function addInList(x) {
    const li = document.createElement("li");
    const div1 = document.createElement("div");
    div1.textContent = x;
    
    const complete = document.createElement("button");
    complete.textContent = "Completed";
    complete.addEventListener("click", ()=>{
        div1.classList.toggle("strike");
    })
    complete.classList.add("Btn");
    
    const remBtn = document.createElement("button");
    remBtn.textContent = "Delete";
    remBtn.addEventListener("click",()=>{
        remBtn.parentElement.parentElement.parentElement.remove();
    })
    const div2 = document.createElement("div");
    remBtn.classList.add("Btn");


    div2.append(complete,remBtn);
    div1.append(div2);
    li.append(div1);
    taskList.append(li);
}