// console.log("hi");
const dashboard = document.querySelector(".dashboard");
const taskManager = document.querySelector(".taskManager");
const sessionTracker = document.querySelector(".sessionTracker");
const dailyGoals = document.querySelector(".dailyGoals");
const content = document.querySelector(".content");
const mainHead = document.querySelector(".mainHead");
const mainContent = document.querySelector(".mainContent");


dashboard.style.textDecoration = "Underline";


dashboard.style.textDecoration = "none";
sessionTracker.style.textDecoration = "none";
dailyGoals.style.textDecoration = "none";
taskManager.style.textDecoration = "Underline";
mainHead.textContent="Task Manager";

//Functionalities
const searchBox = document.createElement("input");
searchBox.placeholder = "Search";
const goTask = document.createElement("button");
goTask.textContent="Go";
goTask.classList.add("Btn");
const addTaskBtn1 = document.createElement("button");
addTaskBtn1.textContent="Add";
addTaskBtn1.classList.add("Btn");


const functionalities = document.createElement("div");
functionalities.append(searchBox,goTask,addTaskBtn1);
functionalities.classList.add("functionalities");
mainContent.append(functionalities);

const container = document.createElement("div");

addTaskBtn1.addEventListener("click",()=>{
    const addDialog = document.createElement("dialog");
    addDialog.classList.add("addDialog");

    const head = document.createElement("h2");
    head.textContent = "Add Task";
    
    const div1 = document.createElement("div");
    const label1 = document.createElement("label");
    label1.textContent="Task Name: " 
    const input1 = document.createElement("input");
    input1.placeholder = "Enter Name";
    div1.append(label1,input1);
    
    const div2 = document.createElement("div");
    const label2 = document.createElement("label");
    label2.textContent="Set Priority: " 
    const input2 = document.createElement("input");
    input2.type="radio";
    input2.name="priority";
    input2.value="Low"
    const label3 = document.createElement("label");
    label3.textContent="Low"

    const input3 = document.createElement("input");
    input2.type="radio";
    input2.name="priority";
    input2.value="Medium"
    const label4 = document.createElement("label");
    label3.textContent="Medium"

    const input4 = document.createElement("input");
    input2.type="radio";
    input2.name="priority";
    input2.value="High"
    const label5 = document.createElement("label");
    label3.textContent="High"
    
    div2.append(label2,input2,label3,input3,label4,input4,label5);


    addDialog.append(head,div1,div2);


    document.body.append(addDialog);
    addDialog.showModal();
})
//***************************** Task Manager *****************************
taskManager.addEventListener("click",()=>{
    
})