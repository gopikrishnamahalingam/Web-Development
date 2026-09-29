const dashboard = document.querySelector(".dashboard");
const taskManager = document.querySelector(".taskManager");
const sessionTracker = document.querySelector(".sessionTracker");
const dailyGoals = document.querySelector(".dailyGoals");
const content = document.querySelector(".content");
const mainHead = document.querySelector(".mainHead");
const mainContent = document.querySelector(".mainContent");
const container = document.createElement("div");
container.classList.add("container");
const tasks = [];
let task_id = 0;

dashboard.style.textDecoration = "Underline";


dashboard.style.textDecoration = "none";
sessionTracker.style.textDecoration = "none";
dailyGoals.style.textDecoration = "none";
taskManager.style.textDecoration = "Underline";
mainHead.textContent = "Task Manager";

//Functionalities
const searchBox = document.createElement("input");
searchBox.placeholder = "Search";
const goTask = document.createElement("button");
goTask.textContent = "Go";
goTask.classList.add("Btn");
const addTaskBtn1 = document.createElement("button");
addTaskBtn1.textContent = "Add";
addTaskBtn1.classList.add("Btn");


const functionalities = document.createElement("div");
functionalities.append(searchBox, goTask, addTaskBtn1);
functionalities.classList.add("functionalities");
mainContent.append(functionalities);

mainContent.append(container);

addTaskBtn1.addEventListener("click", () => {
    const addDialog = document.createElement("dialog");
    addDialog.classList.add("addDialog");

    const head = document.createElement("h2");
    head.textContent = "Add Task";

    const div16 = document.createElement("div");
    const label18 = document.createElement("label");
    label18.textContent = "Task ID: "
    const label19 = document.createElement("label");
    label19.textContent = ++task_id;
    div16.append(label18, label19);

    const div1 = document.createElement("div");
    const label1 = document.createElement("label");
    label1.textContent = "Task Name: "
    const input1 = document.createElement("input");
    input1.placeholder = "Enter Name";
    div1.append(label1, input1);

    const div2 = document.createElement("div");
    const label2 = document.createElement("label");
    label2.textContent = "Set Priority: "


    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.name = "priority";
    input2.value = "Low"
    const label3 = document.createElement("label");
    label3.textContent = "Low"

    const div5 = document.createElement("div");
    const input3 = document.createElement("input");
    input3.type = "radio";
    input3.name = "priority";
    input3.value = "Medium"
    const label4 = document.createElement("label");
    label4.textContent = "Medium"

    const div6 = document.createElement("div");
    const input4 = document.createElement("input");
    input4.type = "radio";
    input4.name = "priority";
    input4.value = "High"
    const label5 = document.createElement("label");
    label5.textContent = "High"

    div4.append(input2, label3);
    div5.append(input3, label4);
    div6.append(input4, label5);
    div3.append(div4, div5, div6);
    div2.append(label2, div3);

    const div7 = document.createElement("div");
    const label6 = document.createElement("label");
    label6.textContent = "Status:";
    const input5 = document.createElement("select");
    input5.id = "selectingStatus";
    const option1 = document.createElement("option");
    option1.textContent = "Pending";
    option1.value = "Pending";
    const option2 = document.createElement("option");
    option2.textContent = "Completed";
    option2.value = "Completed";
    input5.append(option1, option2);
    div7.append(label6, input5);

    const div8 = document.createElement("div");
    const label7 = document.createElement("label");
    label7.textContent = "Deadline:";
    const input6 = document.createElement("input");
    input6.type = "date";
    div8.append(label7, input6);


    const div9 = document.createElement("div");
    div9.classList.add("BtnDiv");
    const addBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    addBtn.classList.add("Btn");
    closeBtn.classList.add("Btn");
    addBtn.textContent = "Add";

    addBtn.addEventListener("click", () => {
        // VALIDATION ***********
        const task = {
            id: task_id,
            name: input1.value,
            priority: document.querySelector('input[name="priority"]:checked').value,
            status: document.querySelector("#selectingStatus").value,
            date: input6.value
        }
        // console.log(document.querySelector('input[name="priority"]:checked').value);
        tasks.push(task);
        AddtoDOM(task);
        console.log(tasks);
        addDialog.remove();


    })

    closeBtn.textContent = "Close";
    div9.append(addBtn, closeBtn);

    closeBtn.addEventListener("click", () => {
        task_id--;
        addDialog.remove();
    })

    addDialog.append(head, div16, div1, div2, div7, div8, div9);


    document.body.append(addDialog);
    addDialog.showModal();
})

// ADD TO DOM *************************************
function AddtoDOM(x) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = x.id;

    const div10 = document.createElement("div");
    const label8 = document.createElement("label");
    const label9 = document.createElement("label");
    label8.textContent = "Task ID: ";
    label9.textContent = x.id;
    div10.append(label8, label9);

    const div11 = document.createElement("div");
    const label10 = document.createElement("label");
    const label11 = document.createElement("label");
    label10.textContent = "Name: ";
    label11.textContent = x.name;
    div11.append(label10, label11);

    const div12 = document.createElement("div");
    const label12 = document.createElement("label");
    const label13 = document.createElement("label");
    label12.textContent = "Priority: ";
    label13.textContent = x.priority;
    div12.append(label12, label13);

    const div13 = document.createElement("div");
    const label14 = document.createElement("label");
    const label15 = document.createElement("label");
    label14.textContent = "Status: ";
    label15.textContent = x.status;
    div13.append(label14, label15);

    const div14 = document.createElement("div");
    const label16 = document.createElement("label");
    const label17 = document.createElement("label");
    label16.textContent = "Date: ";
    label17.textContent = x.date;
    div14.append(label16, label17);

    const div15 = document.createElement("div");
    div15.classList.add("BtnDiv");
    const UpdBtn = document.createElement("button");
    UpdBtn.textContent = "Update";
    UpdBtn.classList.add("Btn");

    UpdBtn.addEventListener("click", () => {
        const addDialog = document.createElement("dialog");
        addDialog.classList.add("addDialog");

        const head = document.createElement("h2");
        head.textContent = "Add Task";


        const div16 = document.createElement("div");
        const label18 = document.createElement("label");
        label18.textContent = "Task ID: "
        const label19 = document.createElement("label");
        label19.textContent = x.id;
        div16.append(label18, label19);

        const div1 = document.createElement("div");
        const label1 = document.createElement("label");
        label1.textContent = "Task Name: "
        const input1 = document.createElement("input");
        input1.value = x.name;
        div1.append(label1, input1);

        const div2 = document.createElement("div");
        const label2 = document.createElement("label");
        label2.textContent = "Set Priority: "

        
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const input2 = document.createElement("input");
        input2.type = "radio";
        input2.name = "priority";
        input2.value = "Low"
        const label3 = document.createElement("label");
        label3.textContent = "Low"

        
        const div5 = document.createElement("div");
        const input3 = document.createElement("input");
        input3.type = "radio";
        input3.name = "priority";
        input3.value = "Medium"
        const label4 = document.createElement("label");
        label4.textContent = "Medium"
        
        const div6 = document.createElement("div");
        const input4 = document.createElement("input");
        input4.type = "radio";
        input4.name = "priority";
        input4.value = "High"
        const label5 = document.createElement("label");
        label5.textContent = "High"
        
        div4.append(input2, label3);
        div5.append(input3, label4);
        div6.append(input4, label5);
        div3.append(div4, div5, div6);
        div2.append(label2, div3);
        
        console.log(x.priority);
        if(x.priority == "High"){
            input4.checked = true;
        }else if(x.priority == "Medium"){
            input3.checked= true;
        }else{
            input2.checked= true;
        }
        // input[name="priority"].value = x.priority;
        
        const div7 = document.createElement("div");
        const label6 = document.createElement("label");
        label6.textContent = "Status:";
        const input5 = document.createElement("select");
        input5.id = "selectingStatus";
        const option1 = document.createElement("option");
        option1.textContent = "Pending";
        option1.value = "Pending";
        const option2 = document.createElement("option");
        option2.textContent = "Completed";
        option2.value = "Completed";
        input5.append(option1, option2);
        div7.append(label6, input5);

        input5.value = x.status;


        const div8 = document.createElement("div");
        const label7 = document.createElement("label");
        label7.textContent = "Deadline:";
        const input6 = document.createElement("input");
        input6.type = "date";
        input6.value = x.date;
        div8.append(label7, input6);


        const div9 = document.createElement("div");
        div9.classList.add("BtnDiv");
        const addBtn = document.createElement("button");
        const closeBtn = document.createElement("button");
        addBtn.classList.add("Btn");
        closeBtn.classList.add("Btn");
        addBtn.textContent = "Add";

        closeBtn.textContent = "Close";
        div9.append(addBtn, closeBtn);

        closeBtn.addEventListener("click", () => {
            addDialog.remove();
        })

        addDialog.append(head, div16, div1, div2, div7, div8, div9);


        document.body.append(addDialog);
        addDialog.showModal();
    })

    const DelBtn = document.createElement("button");
    DelBtn.textContent = "Delete";
    DelBtn.classList.add("Btn");
    DelBtn.dataset.id = x.id;
    div15.append(UpdBtn, DelBtn);

    DelBtn.addEventListener("click", () => {
        tasks.splice(tasks.findIndex((a) => a.id == DelBtn.dataset.id), 1);
        const delTaskArray = document.querySelectorAll(`[data-id="${DelBtn.dataset.id}"]`);
        delTaskArray[0].remove();
    })


    card.append(div10, div11, div12, div13, div14, div15);
    container.append(card);
}
//***************************** Task Manager *****************************
taskManager.addEventListener("click", () => {

})