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


    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const input2 = document.createElement("input");
    input2.type="radio";
    input2.name="priority";
    input2.value="Low"
    const label3 = document.createElement("label");
    label3.textContent="Low"
    
    const div5 = document.createElement("div");
    const input3 = document.createElement("input");
    input3.type="radio";
    input3.name="priority";
    input3.value="Medium"
    const label4 = document.createElement("label");
    label4.textContent="Medium"
    
    const div6 = document.createElement("div");
    const input4 = document.createElement("input");
    input4.type="radio";
    input4.name="priority";
    input4.value="High"
    const label5 = document.createElement("label");
    label5.textContent="High"
    
    div4.append(input2,label3);
    div5.append(input3,label4);
    div6.append(input4,label5);
    div3.append(div4,div5,div6);
    div2.append(label2,div3);

    const div7 = document.createElement("div");
    const label6 = document.createElement("label");
    label6.textContent="Status:";
    const input5 = document.createElement("select");
    const option1 = document.createElement("option");
    option1.textContent="Pending";
    option1.value="Pending";
    const option2 = document.createElement("option");
    option2.textContent="Completed";
    option2.value="Completed";
    input5.append(option1,option2);
    div7.append(label6,input5);

    const div8 = document.createElement("div");
    const label7 = document.createElement("label");
    label7.textContent="Deadline:";
    const input6 = document.createElement("input");
    input6.type="date";
    div8.append(label7,input6);
    
    
    const div9 = document.createElement("div");
    const addBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    addBtn.classList.add("Btn");
    closeBtn.classList.add("Btn");
    addBtn.textContent="Add";
    closeBtn.textContent="Close";
    div9.append(addBtn,closeBtn);

    addDialog.append(head,div1,div2,div7,div8,div9);


    document.body.append(addDialog);
    addDialog.showModal();
})
//***************************** Task Manager *****************************
taskManager.addEventListener("click",()=>{
    
})