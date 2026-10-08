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
let session_id = 0;

// dashboard.style.textDecoration = "Underline";


//***************************** Task Manager *****************************

// let taskShown = false;
// taskManager.addEventListener("click", () => {
//     dashboard.style.textDecoration = "none";
//     sessionTracker.style.textDecoration = "none";
//     dailyGoals.style.textDecoration = "none";
//     taskManager.style.textDecoration = "Underline";
//     mainHead.textContent = "Task Manager";
//     mainContent.innerHTML="";
//     function showTasks() {
//         tasks.forEach((a) => {
//             AddtoDOM(a);
//         })
//         taskShown = true;
//     }
//     if(mainContent.innerHTML == ""){
//         taskShown = false;;
//     }

//     //Functionalities
//     const searchBox = document.createElement("input");
//     searchBox.placeholder = "Search";
//     const goTask = document.createElement("button");
//     goTask.textContent = "Go";
//     goTask.classList.add("Btn");
//     const addTaskBtn1 = document.createElement("button");
//     addTaskBtn1.textContent = "Add";
//     const errorMsg = document.createElement("p");
//     errorMsg.classList.add("errorMsg");
//     addTaskBtn1.classList.add("Btn");
//     function validation(x) {
//         // if (x.name.trim() == "") {
//         //     errorMsg.textContent = "Name cannot be empty";
//         //     return -1;
//         // }
//         // if (document.querySelector('input[name="priority"]:checked') == null) {
//         //     errorMsg.textContent = "Select Priority";
//         //     return -1;
//         // }
//         // if (x.date.trim() == "") {
//         //     errorMsg.textContent = "Date cannot be empty";
//         //     return -1;
//         // }
//     }

//     goTask.addEventListener("click", () => {
//         container.innerHTML = "";
//         const searchValue = searchBox.value;
//         const searchTasks = tasks.filter((a) => a.name.toLowerCase().includes(searchValue.toLowerCase()));
//         // console.log("goTask");

//         searchTasks.forEach((a) => {
//             console.log(a);
//             console.log("1");

//             AddtoDOM(a);
//         });
//         console.log("k");

//     })
//     if (!taskShown) {
//         const functionalities = document.createElement("div");
//         functionalities.append(searchBox, goTask, addTaskBtn1);
//         functionalities.classList.add("functionalities");
//         mainContent.append(functionalities);

//         mainContent.append(container);
//     }
//     showTasks();

//     addTaskBtn1.addEventListener("click", () => {
//         const addDialog = document.createElement("dialog");
//         addDialog.classList.add("Dialog");

//         const head = document.createElement("h2");
//         head.textContent = "Add Task";

//         const div16 = document.createElement("div");
//         const label18 = document.createElement("label");
//         label18.textContent = "Task ID: "
//         const label19 = document.createElement("label");
//         label19.textContent = ++task_id;
//         div16.append(label18, label19);

//         const div1 = document.createElement("div");
//         const label1 = document.createElement("label");
//         label1.textContent = "Task Name: "
//         const input1 = document.createElement("input");
//         input1.placeholder = "Enter Name";
//         div1.append(label1, input1);

//         const div2 = document.createElement("div");
//         const label2 = document.createElement("label");
//         label2.textContent = "Set Priority: "


//         const div3 = document.createElement("div");
//         const div4 = document.createElement("div");
//         const input2 = document.createElement("input");
//         input2.type = "radio";
//         input2.name = "priority";
//         input2.value = "Low"
//         const label3 = document.createElement("label");
//         label3.textContent = "Low"

//         const div5 = document.createElement("div");
//         const input3 = document.createElement("input");
//         input3.type = "radio";
//         input3.name = "priority";
//         input3.value = "Medium"
//         const label4 = document.createElement("label");
//         label4.textContent = "Medium"

//         const div6 = document.createElement("div");
//         const input4 = document.createElement("input");
//         input4.type = "radio";
//         input4.name = "priority";
//         input4.value = "High"
//         const label5 = document.createElement("label");
//         label5.textContent = "High"

//         div4.append(input2, label3);
//         div5.append(input3, label4);
//         div6.append(input4, label5);
//         div3.append(div4, div5, div6);
//         div2.append(label2, div3);

//         const div7 = document.createElement("div");
//         const label6 = document.createElement("label");
//         label6.textContent = "Status:";
//         const input5 = document.createElement("select");
//         input5.id = "selectingStatus";
//         const option1 = document.createElement("option");
//         option1.textContent = "Pending";
//         option1.value = "Pending";
//         const option2 = document.createElement("option");
//         option2.textContent = "Completed";
//         option2.value = "Completed";
//         input5.append(option1, option2);
//         div7.append(label6, input5);

//         const div8 = document.createElement("div");
//         const label7 = document.createElement("label");
//         label7.textContent = "Deadline:";
//         const input6 = document.createElement("input");
//         input6.type = "date";
//         div8.append(label7, input6);


//         const div9 = document.createElement("div");
//         div9.classList.add("BtnDiv");
//         const addBtn = document.createElement("button");
//         const closeBtn = document.createElement("button");
//         addBtn.classList.add("Btn");
//         closeBtn.classList.add("Btn");
//         addBtn.textContent = "Add";

//         addBtn.addEventListener("click", () => {
//             // VALIDATION ***********
//             let task = {
//                 id: task_id,
//                 name: input1.value,
//                 status: document.querySelector("#selectingStatus").value,
//                 date: input6.value

//             }

//             if (validation(task) == -1) {
//                 return;
//             }
//             task.priority = document.querySelector('input[name="priority"]:checked').value;

//             console.log(task);
//             // console.log(document.querySelector('input[name="priority"]:checked').value);
//             tasks.push(task);
//             AddtoDOM(task);
//             console.log(tasks);
//             errorMsg.textContent = "";
//             addDialog.remove();


//         })

//         closeBtn.textContent = "Close";
//         div9.append(addBtn, closeBtn);

//         closeBtn.addEventListener("click", () => {
//             task_id--;
//             addDialog.remove();
//             errorMsg.textContent = "";
//         })

//         addDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


//         document.body.append(addDialog);
//         addDialog.showModal();
//     })

//     // ADD TO DOM *************************************
//     function AddtoDOM(x) {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.dataset.id = x.id;

//         const div10 = document.createElement("div");
//         const label8 = document.createElement("label");
//         const label9 = document.createElement("label");
//         label8.textContent = "Task ID: ";
//         label9.textContent = x.id;
//         div10.append(label8, label9);

//         const div11 = document.createElement("div");
//         const label10 = document.createElement("label");
//         const label11 = document.createElement("label");
//         label10.textContent = "Name: ";
//         label11.textContent = x.name;
//         div11.append(label10, label11);

//         const div12 = document.createElement("div");
//         const label12 = document.createElement("label");
//         const label13 = document.createElement("label");
//         label12.textContent = "Priority: ";
//         label13.textContent = x.priority;
//         div12.append(label12, label13);

//         const div13 = document.createElement("div");
//         const label14 = document.createElement("label");
//         const label15 = document.createElement("label");
//         label14.textContent = "Status: ";
//         label15.textContent = x.status;
//         div13.append(label14, label15);

//         const div14 = document.createElement("div");
//         const label16 = document.createElement("label");
//         const label17 = document.createElement("label");
//         label16.textContent = "Date: ";
//         label17.textContent = x.date;
//         div14.append(label16, label17);

//         const div15 = document.createElement("div");
//         div15.classList.add("BtnDiv");
//         const UpdBtn = document.createElement("button");
//         UpdBtn.textContent = "Update";
//         UpdBtn.classList.add("Btn");

//         UpdBtn.addEventListener("click", () => {
//             const updDialog = document.createElement("dialog");
//             updDialog.classList.add("Dialog");

//             const head = document.createElement("h2");
//             head.textContent = "Update Task";


//             const div16 = document.createElement("div");
//             const label18 = document.createElement("label");
//             label18.textContent = "Task ID: "
//             const label19 = document.createElement("label");
//             label19.textContent = x.id;
//             div16.append(label18, label19);

//             const div1 = document.createElement("div");
//             const label1 = document.createElement("label");
//             label1.textContent = "Task Name: "
//             const input1 = document.createElement("input");
//             input1.value = x.name;
//             div1.append(label1, input1);

//             const div2 = document.createElement("div");
//             const label2 = document.createElement("label");
//             label2.textContent = "Set Priority: "


//             const div3 = document.createElement("div");
//             const div4 = document.createElement("div");
//             const input2 = document.createElement("input");
//             input2.type = "radio";
//             input2.name = "priority";
//             input2.value = "Low"
//             const label3 = document.createElement("label");
//             label3.textContent = "Low"


//             const div5 = document.createElement("div");
//             const input3 = document.createElement("input");
//             input3.type = "radio";
//             input3.name = "priority";
//             input3.value = "Medium"
//             const label4 = document.createElement("label");
//             label4.textContent = "Medium"

//             const div6 = document.createElement("div");
//             const input4 = document.createElement("input");
//             input4.type = "radio";
//             input4.name = "priority";
//             input4.value = "High"
//             const label5 = document.createElement("label");
//             label5.textContent = "High"

//             div4.append(input2, label3);
//             div5.append(input3, label4);
//             div6.append(input4, label5);
//             div3.append(div4, div5, div6);
//             div2.append(label2, div3);

//             console.log(x.priority);
//             if (x.priority == "High") {
//                 input4.checked = true;
//             } else if (x.priority == "Medium") {
//                 input3.checked = true;
//             } else {
//                 input2.checked = true;
//             }
//             // input[name="priority"].value = x.priority;

//             const div7 = document.createElement("div");
//             const label6 = document.createElement("label");
//             label6.textContent = "Status:";
//             const input5 = document.createElement("select");
//             input5.id = "selectingStatus";
//             const option1 = document.createElement("option");
//             option1.textContent = "Pending";
//             option1.value = "Pending";
//             const option2 = document.createElement("option");
//             option2.textContent = "Completed";
//             option2.value = "Completed";
//             input5.append(option1, option2);
//             div7.append(label6, input5);

//             input5.value = x.status;


//             const div8 = document.createElement("div");
//             const label7 = document.createElement("label");
//             label7.textContent = "Deadline:";
//             const input6 = document.createElement("input");
//             input6.type = "date";
//             input6.value = x.date;
//             div8.append(label7, input6);


//             const div9 = document.createElement("div");
//             div9.classList.add("BtnDiv");
//             const UpdateBtn = document.createElement("button");
//             const closeBtn = document.createElement("button");
//             UpdateBtn.classList.add("Btn");
//             closeBtn.classList.add("Btn");
//             UpdateBtn.textContent = "Update";
//             UpdateBtn.dataset.id = x.id;

//             UpdateBtn.addEventListener("click", () => { //should have used forms but would need to change a lot
//                 const updIndex = tasks.findIndex((a) => a.id == UpdateBtn.dataset.id);
//                 const updObj = {
//                     name: input1.value,
//                     status: input5.value,
//                     date: input6.value

//                 }
//                 if (validation(updObj) == -1) {
//                     console.log("WOking");

//                     return;
//                 }
//                 updObj.priority = document.querySelector('input[name="priority"]:checked').value;
//                 // ************validation
//                 tasks[updIndex].name = updObj.name;
//                 tasks[updIndex].priority = updObj.priority;
//                 tasks[updIndex].status = updObj.status;
//                 tasks[updIndex].date = updObj.date;

//                 label11.textContent = updObj.name;
//                 label13.textContent = updObj.priority;
//                 label15.textContent = updObj.status
//                 label17.textContent = updObj.date

//                 console.log(tasks);
//                 errorMsg.textContent = "";
//                 updDialog.remove();
//             })

//             closeBtn.textContent = "Close";
//             div9.append(UpdateBtn, closeBtn);

//             closeBtn.addEventListener("click", () => {
//                 errorMsg.textContent = "";
//                 updDialog.remove();
//             })
//             updDialog
//             updDialog.append(head, div16, div1, div2, div7, div8, div9, errorMsg);


//             document.body.append(updDialog);
//             updDialog.showModal();
//         })

//         const DelBtn = document.createElement("button");
//         DelBtn.textContent = "Delete";
//         DelBtn.classList.add("Btn");
//         DelBtn.dataset.id = x.id;
//         div15.append(UpdBtn, DelBtn);

//         DelBtn.addEventListener("click", () => {
//             tasks.splice(tasks.findIndex((a) => a.id == DelBtn.dataset.id), 1);
//             const delTaskArray = document.querySelectorAll(`[data-id="${DelBtn.dataset.id}"]`);
//             delTaskArray[0].remove();
//         })


//         card.append(div10, div11, div12, div13, div14, div15);
//         container.append(card);
//     }

// })




//***************************** Session Tracker *****************************
const sessions = [];
let sessionshown = false;
// sessionTracker.addEventListener("click", () => {
    dashboard.style.textDecoration = "none";
    sessionTracker.style.textDecoration = "Underline";
    dailyGoals.style.textDecoration = "none";
    taskManager.style.textDecoration = "none";
    mainHead.textContent = "Session Tracker";
    mainContent.innerHTML = "";
    function showSessions() {
        sessions.forEach((a) => {
            AddtoDOM(a);
            sessionshown = true;
        })
    }
    if(mainContent.innerHTML == ""){
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
        // if (x.name.trim() == "") {
        //     errorMsg.textContent = "Name cannot be empty";
        //     return -1;
        // }
        // if (document.querySelector('input[name="priority"]:checked') == null) {
        //     errorMsg.textContent = "Select Priority";
        //     return -1;
        // }
        // if (x.date.trim() == "") {
        //     errorMsg.textContent = "Date cannot be empty";
        //     return -1;
        // }
    }

    goSessions.addEventListener("click", () => {
        container.innerHTML = "";
        const searchValue = searchBox.value;
        const searchSessions= sessions.filter((a) => a.name.toLowerCase().includes(searchValue.toLowerCase()));
        // console.log("goTask");

        searchSessions.forEach((a) => {
            console.log(a);
            console.log("1");

            AddtoDOM(a);
        });
    })
    if (!sessionshown) {
        const functionalities = document.createElement("div");
        functionalities.append(searchBox, goSessions, addSessionsBtn1);
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
        div3.append(input2,label3,input3);
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
                name: input1.value,
                Stime: input2.value,
                Etime: input3.value,
                date: input6.value
                
            };
             session.duration = (Number(input3.value.substring(0,2)) - Number(input2.value.substring(0,2)))*60 + (Number(input3.value.substring(3,5)) - Number(input2.value.substring(3,5)));
            if(session.duration < 0){
                session.duration += 1440;
            }

            console.log(session.duration);
            

            if (sessionValidation(session) == -1) {
                return;
            }
            // session.priority = document.querySelector('input[name="priority"]:checked').value;

            // console.log(document.querySelector('input[name="priority"]:checked').value);
            sessions.push(session);
            AddtoDOM(session);
            console.log(sessions);
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
                    name: input1.value,
                    status: input5.value,
                    date: input6.value

                }
                if (sessionValidation(updObj) == -1) {
                    console.log("WOking");

                    return;
                }
                updObj.priority = document.querySelector('input[name="priority"]:checked').value;
                // ************validation
                tasks[updIndex].name = updObj.name;
                tasks[updIndex].priority = updObj.priority;
                tasks[updIndex].status = updObj.status;
                tasks[updIndex].date = updObj.date;

                label11.textContent = updObj.name;
                label13.textContent = updObj.priority;
                label15.textContent = updObj.status
                label17.textContent = updObj.date

                console.log(tasks);
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
        })


        card.append(div10, div11, div12, div14, div15);
        container.append(card);
    }

})

