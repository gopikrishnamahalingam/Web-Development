const dashboard = document.querySelector(".dashboard");
const taskManager = document.querySelector(".taskManager");
const sessionTracker = document.querySelector(".sessionTracker");
const dailyGoals = document.querySelector(".dailyGoals");
const content = document.querySelector(".content");
const mainHead = document.querySelector(".mainHead");
const mainContent = document.querySelector(".mainContent");
const container = document.createElement("div");
container.classList.add("container");
const Dashcontainer = document.createElement("div");
Dashcontainer.classList.add("Dashcontainer");

function addTasksLocalStorage() {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    localStorage.setItem("Tasks_id", task_id);
}
function addSessionsLocalStorage() {
    localStorage.setItem("Sessions", JSON.stringify(sessions));
    localStorage.setItem("Sessions_id", session_id);
}
function addGoalsLocalStorage() {
    localStorage.setItem("Goals", JSON.stringify(goals));
    localStorage.setItem("Goals_id", goal_id);
}


const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
const sessions = JSON.parse(localStorage.getItem("Sessions")) || [];
const goals = JSON.parse(localStorage.getItem("Goals")) || [];
let goalsChecked = [];
let goalsNotChecked = [];
allotGoals();

let task_id = JSON.parse(localStorage.getItem("Tasks_id")) || 0;
let session_id = JSON.parse(localStorage.getItem("Sessions_id")) || 0;
let goal_id = JSON.parse(localStorage.getItem("Goals_id")) || 0;


dashboardFunction();
function dashboardFunction() {
    allotGoals();
    dashboard.style.textDecoration = "Underline";
    sessionTracker.style.textDecoration = "none";
    dailyGoals.style.textDecoration = "none";
    taskManager.style.textDecoration = "none";
    mainHead.textContent = "DashBoard";
    mainContent.innerHTML = "";
    container.innerHTML = "";
    Dashcontainer.innerHTML = "";
    container.classList.remove("goalContainer");

    const tasksDashboardCard = document.createElement("div");
    const sessionsDashboardCard = document.createElement("div");
    const goalsDashboardCard = document.createElement("div");
    tasksDashboardCard.classList.add("DashboardCard");
    sessionsDashboardCard.classList.add("DashboardCard");
    goalsDashboardCard.classList.add("DashboardCard");


    tasksDashboardFunction();
    function tasksDashboardFunction() {
        const tasksHeading = document.createElement("h2");
        tasksHeading.textContent = "Tasks"
        tasksHeading.classList.add("DashBoardCardHeads");
        tasksDashboardCard.append(tasksHeading);
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((a) => a.status == "Completed").length;

        const div12 = document.createElement("div");
        const label12 = document.createElement("label");
        const label13 = document.createElement("label");
        label12.textContent = "Remaining Tasks: ";
        label13.textContent = totalTasks - completedTasks;
        div12.append(label12, label13);

        const div11 = document.createElement("div");
        const label10 = document.createElement("label");
        const label11 = document.createElement("label");
        label10.textContent = "Completed Tasks: ";
        label11.textContent = completedTasks;
        div11.append(label10, label11);

        const div10 = document.createElement("div");
        const label8 = document.createElement("label");
        const label9 = document.createElement("label");
        label8.textContent = "Total Tasks: ";
        label9.textContent = totalTasks;
        div10.append(label8, label9);

        const div9 = document.createElement("div");
        div9.textContent = "Upcoming Tasks: "
        tasksDashboardCard.append(tasksHeading, div10, div11, div12, div9);

        const d = new Date();
        let date = d.getDate();
        if (date < 10) {
            date = "0" + date;
        }
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        const todaysDate = `${d.getFullYear()}-${month}-${date}`;
        // console.log(todaysDate);
        let upcomingTasks = tasks;
        upcomingTasks = tasks.filter((a) => a.date == todaysDate && a.status == "Pending");
        if (upcomingTasks.length < 3) {
            upcomingTasks = [...tasks].sort((a, b) => a.date.localeCompare(b.date)).filter((a) => a.date >= todaysDate && a.status == "Pending");
        }
        for (let i = 0; i < 3 && i < upcomingTasks.length; i++) {
            const card = document.createElement("div");
            card.classList.add("card");
            const div1 = document.createElement("div");
            div1.textContent = `Task Name: ${upcomingTasks[i].name}`;
            const div2 = document.createElement("div");
            div2.textContent = `Deadline: ${upcomingTasks[i].date}`;
            card.append(div1, div2);
            tasksDashboardCard.append(card);
        }
    }

    sessionsDashboardFunction();
    function sessionsDashboardFunction() {
        const sessionsHead = document.createElement("h2");
        sessionsHead.textContent = "Sessions"
        sessionsHead.classList.add("DashBoardCardHeads");
        sessionsDashboardCard.append(sessionsHead);
        const totalSessions = sessions.length;
        const completedSessions = sessions.filter((a) => a.status == "Completed").length;

        const div12 = document.createElement("div");
        const label12 = document.createElement("label");
        const label13 = document.createElement("label");
        label12.textContent = "Remaining Sessions: ";
        label13.textContent = totalSessions - completedSessions;
        div12.append(label12, label13);

        const div11 = document.createElement("div");
        const label10 = document.createElement("label");
        const label11 = document.createElement("label");
        label10.textContent = "Completed Sessions: ";
        label11.textContent = completedSessions;
        div11.append(label10, label11);

        const div10 = document.createElement("div");
        const label8 = document.createElement("label");
        const label9 = document.createElement("label");
        label8.textContent = "Total Sessions: ";
        label9.textContent = totalSessions;
        div10.append(label8, label9);

        const div8 = document.createElement("div");
        const label6 = document.createElement("label");
        const label7 = document.createElement("label");
        label6.textContent = "Total Duration: ";
        label7.textContent = sessions.reduce((s, c) => s = s + Number(c.duration), 0) + " mins";
        div8.append(label6, label7);


        const div9 = document.createElement("div");
        div9.textContent = "Upcoming Sessions: "
        sessionsDashboardCard.append(sessionsHead, div10, div11, div12, div8);

        // const d = new Date();
        // let date = d.getDate();
        // if(date<10){
        //     date = "0"+date;
        // }
        // let month = d.getMonth()+1;
        // if(month<10){
        //     month="0"+month;
        // }
        // const todaysDate = `${d.getFullYear()}-${month}-${date}`;
        // // console.log(todaysDate);
        // let upcomingTasks = tasks;
        // upcomingTasks = tasks.filter((a)=>a.date == todaysDate);
        // if(upcomingTasks.length < 3){
        //     upcomingTasks = [...tasks].sort((a,b)=>a.date.localeCompare(b.date)).filter((a)=>a.date >= todaysDate);
        // }
        // for(let i=0; i<3 && i<upcomingTasks.length; i++){
        //         const card = document.createElement("div");
        //         card.classList.add("card");
        //         const div1 = document.createElement("div");
        //         div1.textContent=`Task Name: ${upcomingTasks[i].name}`;
        //         const div2 = document.createElement("div");
        //         div2.textContent=`Deadline: ${upcomingTasks[i].date}`;
        //         card.append(div1,div2);
        //         tasksDashboardCard.append(card);
        // }
    }

    goalsDashboardFunction();
    function goalsDashboardFunction() {
        const goalsHead = document.createElement("h2");
        goalsHead.textContent = "Daily Goals"
        goalsHead.classList.add("DashBoardCardHeads");
        const div1 = document.createElement("div");
        div1.textContent = `Pending: ${goalsNotChecked.length}`

        const div2 = document.createElement("div");
        div2.textContent = `Today's Goal Left:`

        goalsDashboardCard.append(goalsHead, div1, div2);

        goalsNotChecked.forEach((a) => {
            const div3 = document.createElement("div");
            div3.textContent = "~ " + a.name;
            goalsDashboardCard.append(div3);

        })
    }

    Dashcontainer.append(tasksDashboardCard, goalsDashboardCard, sessionsDashboardCard);
    mainContent.append(Dashcontainer);
}
dashboard.addEventListener("click", () => {
    dashboardFunction();
})
//***************************** Task Manager *****************************

let taskShown = false;
taskManager.addEventListener("click", () => {
    dashboard.style.textDecoration = "none";
    sessionTracker.style.textDecoration = "none";
    dailyGoals.style.textDecoration = "none";
    taskManager.style.textDecoration = "Underline";
    mainHead.textContent = "Task Manager";
    mainContent.innerHTML = "";
    container.innerHTML = "";
    container.classList.remove("goalContainer");

    function showTasks() {
        tasks.forEach((a) => {
            AddtoDOM(a);
        })
        taskShown = true;
    }
    if (mainContent.innerHTML == "") {
        taskShown = false;;
    }

    //Functionalities
    // Search by name and date *******************************
    const searchBox = document.createElement("input");
    searchBox.placeholder = "Search";
    const goTask = document.createElement("button");
    goTask.textContent = "Go";
    goTask.classList.add("Btn");
    const addTaskBtn1 = document.createElement("button");
    addTaskBtn1.textContent = "Add";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("errorMsg");
    addTaskBtn1.classList.add("Btn");
    function validation(x) {
        if (x.name.trim() == "") {
            errorMsg.textContent = "Name cannot be empty";
            return -1;
        }
        if (document.querySelector('input[name="priority"]:checked') == null) {
            errorMsg.textContent = "Select Priority";
            return -1;
        }
        if (x.date.trim() == "") {
            errorMsg.textContent = "Date cannot be empty";
            return -1;
        }
    }

    goTask.addEventListener("click", () => { // In case if value is entered without a keyboard
        container.innerHTML = "";
        const searchValue = searchBox.value.trim();
        const searchTasks = tasks.filter((a) => a.name.toLowerCase().includes(searchValue.toLowerCase()) || a.date.toLowerCase().includes(searchValue.toLowerCase()));

        searchTasks.forEach((a) => {
            AddtoDOM(a);
        });
    })
    searchBox.addEventListener("keyup", (e) => { // In case if value is entered without a keyboard
        container.innerHTML = "";
        const searchTasks = tasks.filter((a) => a.name.toLowerCase().includes(e.target.value.trim().toLowerCase())|| a.date.toLowerCase().includes(e.target.value.trim().toLowerCase()));

        searchTasks.forEach((a) => {
            AddtoDOM(a);
        });
    })
    if (!taskShown) {
        const functionalities = document.createElement("div");
        const functionalitiespart = document.createElement("div");
        functionalitiespart.classList.add("functionalitiespart");
        functionalitiespart.append(goTask, addTaskBtn1)
        functionalities.append(searchBox, functionalitiespart);
        functionalities.classList.add("functionalities");
        mainContent.append(functionalities);

        mainContent.append(container);
    }
    showTasks();

    addTaskBtn1.addEventListener("click", () => {
        const addDialog = document.createElement("dialog");
        addDialog.classList.add("Dialog");

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
        input1.type = "text";
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
            let task = {
                id: task_id,
                name: input1.value.trim(),
                status: document.querySelector("#selectingStatus").value.trim(),
                date: input6.value.trim()

            }

            if (validation(task) == -1) {
                return;
            }
            task.priority = document.querySelector('input[name="priority"]:checked').value;

            // console.log(task);
            // console.log(document.querySelector('input[name="priority"]:checked').value);
            tasks.push(task);
            addTasksLocalStorage();
            AddtoDOM(task);
            // console.log(tasks);
            errorMsg.textContent = "";
            addDialog.remove();


        })

        closeBtn.textContent = "Close";
        div9.append(addBtn, closeBtn);

        closeBtn.addEventListener("click", () => {
            task_id--;
            addDialog.remove();
            errorMsg.textContent = "";
        })

        addDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


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
        label16.textContent = "Deadline: ";
        label17.textContent = x.date;
        div14.append(label16, label17);

        const div15 = document.createElement("div");
        div15.classList.add("BtnDiv");
        const UpdBtn = document.createElement("button");
        UpdBtn.textContent = "Update";
        UpdBtn.classList.add("Btn");

        UpdBtn.addEventListener("click", () => {
            const updDialog = document.createElement("dialog");
            updDialog.classList.add("Dialog");

            const head = document.createElement("h2");
            head.textContent = "Update Task";


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
            input1.type = "text";
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

            // console.log(x.priority);
            if (x.priority == "High") {
                input4.checked = true;
            } else if (x.priority == "Medium") {
                input3.checked = true;
            } else {
                input2.checked = true;
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
            const UpdateBtn = document.createElement("button");
            const closeBtn = document.createElement("button");
            UpdateBtn.classList.add("Btn");
            closeBtn.classList.add("Btn");
            UpdateBtn.textContent = "Update";
            UpdateBtn.dataset.id = x.id;

            UpdateBtn.addEventListener("click", () => { //should have used forms but would need to change a lot
                const updIndex = tasks.findIndex((a) => a.id == UpdateBtn.dataset.id);
                const updObj = {
                    name: input1.value.trim(),
                    status: input5.value,
                    date: input6.value

                }
                if (validation(updObj) == -1) {

                    return;
                }
                updObj.priority = document.querySelector('input[name="priority"]:checked').value;
                // ************validation
                tasks[updIndex].name = updObj.name;
                tasks[updIndex].priority = updObj.priority;
                tasks[updIndex].status = updObj.status;
                tasks[updIndex].date = updObj.date;

                addTasksLocalStorage();

                label11.textContent = updObj.name;
                label13.textContent = updObj.priority;
                label15.textContent = updObj.status
                label17.textContent = updObj.date

                // console.log(tasks);
                errorMsg.textContent = "";
                updDialog.remove();
            })

            closeBtn.textContent = "Close";
            div9.append(UpdateBtn, closeBtn);

            closeBtn.addEventListener("click", () => {
                errorMsg.textContent = "";
                updDialog.remove();
            })
            updDialog
            updDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


            document.body.append(updDialog);
            updDialog.showModal();
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
            addTasksLocalStorage()
        })


        card.append(div10, div11, div12, div13, div14, div15);
        container.append(card);
    }

})




//***************************** Session Tracker *****************************
let sessionshown = false;
sessionTracker.addEventListener("click", () => {
    dashboard.style.textDecoration = "none";
    sessionTracker.style.textDecoration = "Underline";
    dailyGoals.style.textDecoration = "none";
    taskManager.style.textDecoration = "none";
    mainHead.textContent = "Session Tracker";
    mainContent.innerHTML = "";
    container.innerHTML = "";
    container.classList.remove("goalContainer");


    function showSessions() {
        sessions.forEach((a) => {
            AddtoDOM(a);
            sessionshown = true;
        })
    }
    if (mainContent.innerHTML == "") {
        sessionshown = false;;
    }

    //Functionalities
    const searchBox = document.createElement("input");
    searchBox.placeholder = "Search";
    const goSessions = document.createElement("button");
    goSessions.textContent = "Go";
    goSessions.classList.add("Btn");
    const addSessionsBtn1 = document.createElement("button");
    addSessionsBtn1.textContent = "Add";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("errorMsg");
    addSessionsBtn1.classList.add("Btn");
    function sessionValidation(x) {
        if (x.name.trim() == "") {
            errorMsg.textContent = "Name cannot be empty";
            return -1;
        }
        if (x.Stime.trim() == "") {
            errorMsg.textContent = "Start Time cannot be empty";
            return -1;
        }
        if (x.Etime.trim() == "") {
            errorMsg.textContent = "End Time cannot be empty";
            return -1;
        }
        if (x.date.trim() == "") {
            errorMsg.textContent = "Date cannot be empty";
            return -1;
        }
    }

    goSessions.addEventListener("click", () => { // In case if value is entered without a keyboard
        container.innerHTML = "";
        const searchValue = searchBox.value.trim();
        const searchSessions = sessions.filter((a) => a.name.toLowerCase().includes(searchValue.toLowerCase())|| a.date.toLowerCase().includes(searchValue.toLowerCase()));
        // console.log("goTask");

        searchSessions.forEach((a) => {
            AddtoDOM(a);
        });
    })
    searchBox.addEventListener("keyup", (e) => {
        container.innerHTML = "";
        const searchSessions = sessions.filter((a) => a.name.toLowerCase().includes(e.target.value.trim().toLowerCase())|| a.date.toLowerCase().includes(e.target.value.trim().toLowerCase()));

        searchSessions.forEach((a) => {
            AddtoDOM(a);
        });
    })
    if (!sessionshown) {
        const functionalities = document.createElement("div");
        const functionalitiespart = document.createElement("div");
        functionalitiespart.classList.add("functionalitiespart");
        functionalitiespart.append(goSessions, addSessionsBtn1);
        functionalities.append(searchBox, functionalitiespart);
        functionalities.classList.add("functionalities");
        mainContent.append(functionalities);

        mainContent.append(container);
    }
    showSessions();

    addSessionsBtn1.addEventListener("click", () => {
        const addDialog = document.createElement("dialog");
        addDialog.classList.add("Dialog");

        const head = document.createElement("h2");
        head.textContent = "Add Session";

        const div16 = document.createElement("div");
        const label18 = document.createElement("label");
        label18.textContent = "Session ID: "
        const label19 = document.createElement("label");
        label19.textContent = ++session_id;
        div16.append(label18, label19);

        const div1 = document.createElement("div");
        const label1 = document.createElement("label");
        label1.textContent = "Session Name: "
        const input1 = document.createElement("input");
        input1.type = "text";
        input1.placeholder = "Enter Name";
        div1.append(label1, input1);

        const div2 = document.createElement("div");
        const label2 = document.createElement("label");
        label2.textContent = "Time: "

        const input2 = document.createElement("input");
        input2.type = "time";
        const label3 = document.createElement("label");
        label3.textContent = " to "
        const input3 = document.createElement("input");
        input3.type = "time";

        const div3 = document.createElement("div");
        div3.append(input2, label3, input3);
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
        label7.textContent = "Date:";
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
            let session = {
                id: session_id,
                name: input1.value.trim(),
                Stime: input2.value,
                Etime: input3.value,
                status: input5.value,
                date: input6.value

            };
            if (sessionValidation(session) == -1) {
                return;
            }
            session.duration = (Number(input3.value.substring(0, 2)) - Number(input2.value.substring(0, 2))) * 60 + (Number(input3.value.substring(3, 5)) - Number(input2.value.substring(3, 5)));
            if (session.duration < 0) {
                session.duration += 1440;
            }

            // console.log(session.duration);



            sessions.push(session);
            addSessionsLocalStorage()
            AddtoDOM(session);
            // console.log(sessions);
            errorMsg.textContent = "";
            addDialog.remove();


        })

        closeBtn.textContent = "Close";
        div9.append(addBtn, closeBtn);

        closeBtn.addEventListener("click", () => {
            session_id--;
            addDialog.remove();
            errorMsg.textContent = "";
        })

        addDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


        document.body.append(addDialog);
        addDialog.showModal();
    });
    //     // ADD TO DOM *************************************
    function AddtoDOM(x) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = x.id;

        const div10 = document.createElement("div");
        const label8 = document.createElement("label");
        const label9 = document.createElement("label");
        label8.textContent = "Session ID: ";
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
        label12.textContent = "Duration: ";
        label13.textContent = x.duration;
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
            const updDialog = document.createElement("dialog");
            updDialog.classList.add("Dialog");

            const head = document.createElement("h2");
            head.textContent = "Update Session";


            const div16 = document.createElement("div");
            const label18 = document.createElement("label");
            label18.textContent = "Session ID: "
            const label19 = document.createElement("label");
            label19.textContent = x.id;
            div16.append(label18, label19);

            const div1 = document.createElement("div");
            const label1 = document.createElement("label");
            label1.textContent = "Session Name: "
            const input1 = document.createElement("input");
            input1.type = "text";
            input1.value = x.name;
            div1.append(label1, input1);


            const div2 = document.createElement("div");
            const label2 = document.createElement("label");
            label2.textContent = "Time: "

            const input2 = document.createElement("input");
            input2.type = "time";
            input2.value = x.Stime;
            const label3 = document.createElement("label");
            label3.textContent = " to "
            const input3 = document.createElement("input");
            input3.type = "time";
            input3.value = x.Etime;

            const div3 = document.createElement("div");
            div3.append(input2, label3, input3);
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
            const UpdateBtn = document.createElement("button");
            const closeBtn = document.createElement("button");
            UpdateBtn.classList.add("Btn");
            closeBtn.classList.add("Btn");
            UpdateBtn.textContent = "Update";
            UpdateBtn.dataset.id = x.id;

            UpdateBtn.addEventListener("click", () => { //should have used forms but would need to change a lot
                const updIndex = sessions.findIndex((a) => a.id == UpdateBtn.dataset.id);
                const updSession = {
                    name: input1.value.trim(),
                    Stime: input2.value,
                    Etime: input3.value,
                    status: input5.value,
                    date: input6.value
                };

                updSession.duration = (Number(input3.value.substring(0, 2)) - Number(input2.value.substring(0, 2))) * 60 + (Number(input3.value.substring(3, 5)) - Number(input2.value.substring(3, 5)));
                if (updSession.duration < 0) {
                    updSession.duration += 1440;
                }


                if (sessionValidation(updSession) == -1) {
                    return;
                }

                // ************validation
                sessions[updIndex].name = updSession.name;
                sessions[updIndex].Stime = updSession.Stime;
                sessions[updIndex].Etime = updSession.Etime;
                sessions[updIndex].duration = updSession.duration;
                sessions[updIndex].status = updSession.status;
                sessions[updIndex].date = updSession.date;

                addSessionsLocalStorage()

                label11.textContent = updSession.name;
                label13.textContent = updSession.duration;
                label15.textContent = updSession.status
                label17.textContent = updSession.date

                errorMsg.textContent = "";
                updDialog.remove();
            })

            closeBtn.textContent = "Close";
            div9.append(UpdateBtn, closeBtn);

            closeBtn.addEventListener("click", () => {
                errorMsg.textContent = "";
                updDialog.remove();
            })
            updDialog
            updDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


            document.body.append(updDialog);
            updDialog.showModal();
        })

        const DelBtn = document.createElement("button");
        DelBtn.textContent = "Delete";
        DelBtn.classList.add("Btn");
        DelBtn.dataset.id = x.id;
        div15.append(UpdBtn, DelBtn);

        DelBtn.addEventListener("click", () => {
            sessions.splice(sessions.findIndex((a) => a.id == DelBtn.dataset.id), 1);
            const delTaskArray = document.querySelectorAll(`[data-id="${DelBtn.dataset.id}"]`);
            delTaskArray[0].remove();
            addSessionsLocalStorage();
        })


        card.append(div10, div11, div12, div13, div14, div15);
        container.append(card);
    }

});



const goalTable = document.createElement("table");
goalTable.classList.add("goalTable");

//***************************** Daily Goals *****************************
let goalsShown = false;
function allotGoals() {
    let tempChecked = document.querySelectorAll('input[name="goalChecker"]:checked') || [];
    tempChecked = [...tempChecked].map((a) => Number(a.dataset.id));
    goals.forEach((a) => { if (tempChecked.includes(a.id)) { a.status = true } });
    goalsChecked = goals.filter((a) => a.status == true);


    let tempNotChecked = document.querySelectorAll('input[name="goalChecker"]:not(:checked)')||[];
    tempNotChecked = [...tempNotChecked].map((a) => Number(a.dataset.id));
    goals.forEach((a) => { if (tempNotChecked.includes(a.id)) { a.status = false } });
    goalsNotChecked = goals.filter((a) => a.status == false);

    // console.log(goalsChecked);

    // console.log(goalsNotChecked);
}
// FILTERRRRRRR -> completed not completed
dailyGoals.addEventListener("click", () => {
    dashboard.style.textDecoration = "none";
    sessionTracker.style.textDecoration = "none";
    dailyGoals.style.textDecoration = "Underline";
    taskManager.style.textDecoration = "none";
    mainHead.textContent = "Daily Goals";
    mainContent.innerHTML = "";
    container.innerHTML = "";
    container.classList.add("goalContainer");
    function showSessions() {
        container.append(goalTable);
        goalTable.innerHTML = "";
        goals.forEach((a) => {
            AddtoDOM(a);
            goalsShown = true;
        })
    }
    if (mainContent.innerHTML == "") {
        goalsShown = false;;
    }

    //Functionalities
    // Add Button
    const addGoalsBtn1 = document.createElement("button");
    addGoalsBtn1.textContent = "Add";
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("errorMsg");
    addGoalsBtn1.classList.add("Btn");
    // Filter
    const filterGoals = document.createElement("select");
    const defaultGoals = document.createElement("option");
    defaultGoals.textContent = "Default";
    const checkedGoalsFilter = document.createElement("option");
    checkedGoalsFilter.textContent = "Completed";
    const uncheckedGoalsFilter = document.createElement("option");
    uncheckedGoalsFilter.textContent = "Remaining";
    filterGoals.append(defaultGoals, checkedGoalsFilter, uncheckedGoalsFilter);
    filterGoals.classList.add("filterGoals");

    const timeResetDiv = document.createElement("div");
    timeResetDiv.classList.add("timeResetDiv");
    function resetGoals() {
        const timer = new Date();
        timeResetDiv.classList.toggle("red")
        if (timer.getHours() == 0 && timer.getMinutes() == 0 && timer.getSeconds() <= 10) {//cannot able to refresh at exact zero
            goals.forEach((a) => a.status = false);
            allotGoals();
            addGoalsLocalStorage();
        }
        let time = `Resets in: ${(23 - timer.getHours() > 9) ? (23 - timer.getHours()) : "0" + (23 - timer.getHours())}:${(59 - timer.getMinutes() > 9) ? (59 - timer.getMinutes()) : "0" + (59 - timer.getMinutes())}:${(59 - timer.getSeconds() > 9) ? (59 - timer.getSeconds()) : "0" + (59 - timer.getSeconds())}`;
        timeResetDiv.textContent = time;
    }
    resetGoals();
    setInterval(resetGoals, 1000);


    filterGoals.addEventListener("change", () => {
        allotGoals();
        goalTable.innerHTML = "";

        switch (filterGoals.value) {
            case "Default": {
                goals.forEach((a) => AddtoDOM(a));
                break;
            }
            case "Completed": {
                goalsChecked.forEach((a) => AddtoDOM(a));
                break;
            }
            case "Remaining": {
                goalsNotChecked.forEach((a) => AddtoDOM(a));
                break;
            }
        }
    })

    function goalValidation(x) {
        if (x.name.trim() == "") {
            errorMsg.textContent = "Name cannot be empty";
            return -1;
        }
    }
    if (!goalsShown) {
        const functionalities = document.createElement("div");
        const functionalitiespart = document.createElement("div");
        functionalitiespart.classList.add("functionalitiespart");
        const scrollOp = document.createElement("div");
        scrollOp.textContent = "{<- Scroll ->}";
        scrollOp.classList.add("scrollOp");
        functionalitiespart.append(addGoalsBtn1, filterGoals, timeResetDiv);
        functionalities.append(functionalitiespart);
        functionalities.classList.add("functionalities");
        mainContent.append(functionalities, scrollOp);

        mainContent.append(container);
    }
    showSessions();

    addGoalsBtn1.addEventListener("click", () => {
        const addDialog = document.createElement("dialog");
        addDialog.classList.add("Dialog");
        addDialog.classList.add("GoalDialog");

        const head = document.createElement("h2");
        head.textContent = "Add Goal";

        const div1 = document.createElement("div");
        const label1 = document.createElement("label");
        label1.textContent = "Goal Name: "
        const input1 = document.createElement("input");
        input1.type = "text";
        input1.placeholder = "Enter Name";
        div1.append(label1, input1);

        const div9 = document.createElement("div");
        div9.classList.add("BtnDiv");
        const addBtn = document.createElement("button");
        const closeBtn = document.createElement("button");
        addBtn.classList.add("Btn");
        closeBtn.classList.add("Btn");
        addBtn.textContent = "Add";

        addBtn.addEventListener("click", () => {
            // VALIDATION ***********
            let goal = {
                id: ++goal_id,
                name: input1.value.trim(),
                status: false
            };

            if (goalValidation(goal) == -1) {
                return;
            }

            goals.push(goal);
            addGoalsLocalStorage();
            AddtoDOM(goal);
            // console.log(goals);
            errorMsg.textContent = "";
            addDialog.remove();


        })

        closeBtn.textContent = "Close";
        div9.append(addBtn, closeBtn);

        closeBtn.addEventListener("click", () => {
            addDialog.remove();
            errorMsg.textContent = "";
        })

        addDialog.append(head, div1, div9, errorMsg);


        document.body.append(addDialog);
        addDialog.showModal();
    });



    //     // ADD TO DOM *************************************
    function AddtoDOM(x) {
        const row = document.createElement("tr");
        row.dataset.id = x.id;

        const td1 = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "goalChecker";
        checkbox.checked = false;
        if (x.status) {
            checkbox.checked = true;
        }
        checkbox.dataset.id = x.id;
        const div2 = document.createElement("div");
        div2.textContent = x.name;
        td1.append(checkbox, div2);

        checkbox.addEventListener("change", () => {
            allotGoals();
            addGoalsLocalStorage();
            // console.log(goalsNotChecked);
        })

        const UpdBtn = document.createElement("button");
        UpdBtn.textContent = "Update";
        UpdBtn.classList.add("Btn");
        const td2 = document.createElement("td");
        td2.classList.add("GoalBtnDiv")
        td2.append(UpdBtn);

        UpdBtn.addEventListener("click", () => {
            const updDialog = document.createElement("dialog");
            updDialog.classList.add("Dialog");
            updDialog.classList.add("GoalDialog");


            const head = document.createElement("h2");
            head.textContent = "Update Goal";

            const div1 = document.createElement("div");
            const label1 = document.createElement("label");
            label1.textContent = "Goal Name: "
            const input1 = document.createElement("input");
            input1.placeholder = "Enter Name";
            input1.type = "text";
            input1.value = x.name;
            div1.append(label1, input1);

            const div9 = document.createElement("div");
            div9.classList.add("BtnDiv");
            const UpdateBtn = document.createElement("button");
            const closeBtn = document.createElement("button");
            UpdateBtn.classList.add("Btn");
            closeBtn.classList.add("Btn");
            UpdateBtn.textContent = "Update";
            UpdateBtn.dataset.id = x.id;

            UpdateBtn.addEventListener("click", () => { //should have used forms but would need to change a lot
                const updIndex = goals.findIndex((a) => a.id == UpdateBtn.dataset.id);
                const updGoal = {
                    name: input1.value.trim(),
                };



                if (goalValidation(updGoal) == -1) {
                    return;
                }

                // ************validation
                goals[updIndex].name = updGoal.name;
                addGoalsLocalStorage();
                div2.textContent = updGoal.name;

                errorMsg.textContent = "";
                updDialog.remove();
            })

            closeBtn.textContent = "Close";
            div9.append(UpdateBtn, closeBtn);

            closeBtn.addEventListener("click", () => {
                errorMsg.textContent = "";
                updDialog.remove();
            })
            updDialog
            updDialog.append(head, div1, div9, errorMsg);


            document.body.append(updDialog);
            updDialog.showModal();
        })

        const DelBtn = document.createElement("button");
        DelBtn.textContent = "Delete";
        DelBtn.classList.add("Btn");
        DelBtn.dataset.id = x.id;
        td2.append(UpdBtn, DelBtn);

        DelBtn.addEventListener("click", () => {
            goals.splice(goals.findIndex((a) => a.id == DelBtn.dataset.id), 1);
            const delTaskArray = document.querySelectorAll(`[data-id="${DelBtn.dataset.id}"]`);
            delTaskArray[0].remove();
            addGoalsLocalStorage();
        })


        row.append(td1, td2);
        goalTable.append(row);
    }

});

