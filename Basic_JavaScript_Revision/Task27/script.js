// Task
// Allow an existing student's information to be edited.
// The updated information should immediately appear in the interface.

// const id = document.querySelector(".inputID");
const name = document.querySelector(".inputName");
const marks = document.querySelector(".inputMarks");
const form = document.querySelector(".form");
const display = document.querySelector(".display");
const addBtn = document.querySelector(".addBtn");

const students = [];
let id = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // if(students.findIndex((a) => a.id === id.value) != -1){
    //     display.textContent = "Student ID already exists";
    //     console.log("Student ID already exists");
    //     return;
    // }
    if (name.value.trim() === "") {
        display.textContent = "Name cannot be empty";
        console.log("Name cannot be empty");
        return;
    }
    if (marks.value > 100 || marks.value < 0) {
        display.textContent = "Marks must be between 0 and 100";
        console.log("Marks must be between 0 and 100");
        return;
    }

    students.push({
        id: ++id,
        name: name.value.trim(),
        marks: parseInt(marks.value)
    })
    display.textContent = "Added Successfully";

    console.log(students);
    addStudent(students[students.length - 1]);
    form.reset();

})

const tableBody = document.querySelector(".body");

function addStudent(x) {

    const td1 = document.createElement("td");
    td1.textContent = x.id;

    const td2 = document.createElement("td");
    td2.textContent = x.name;

    const td3 = document.createElement("td");
    td3.textContent = x.marks;

    const remBtn = document.createElement("button");
    remBtn.textContent = "Delete"
    remBtn.classList.add("Btn");

    remBtn.addEventListener("click", () => {
        
        // console.log(remBtn.parentElement.parentElement.firstChild.textContent);
        
        let remId = parseInt(remBtn.parentElement.parentElement.firstChild.textContent);
        
        students.splice(students.findIndex((a) => a.id == remId), 1);
        console.log(students);
        remBtn.parentElement.parentElement.remove();

    })

    const updBtn = document.createElement("button");
    updBtn.textContent = "Update";
    updBtn.classList.add("Btn");

    const td4 = document.createElement("td");
    td4.append(updBtn, remBtn);

    updBtn.addEventListener("click", () => {

        const dialog = document.createElement("dialog");
        dialog.classList.add("dialog");
        // console.log(updBtn.parentElement.parentElement.firstChild.textContent);
        document.body.append(dialog);
        const student = students.find((a) => a.id === parseInt(updBtn.parentElement.parentElement.firstChild.textContent));
        // console.log(student.name);
        
        const h3 = document.createElement("h3");
        h3.textContent = "Updating Student Info";
        dialog.append(h3);


        const div1 = document.createElement("div");
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        label1.textContent = "Student ID: "
        label2.textContent = `${student.id}`;
        div1.append(label1,label2);
        dialog.append(div1);
        
        const div2 = document.createElement("div");
        const label3 = document.createElement("label");
        const input1 = document.createElement('input');
        label3.textContent="Student Name: ";
        input1.value = student.name;
        div2.append(label3,input1);
        dialog.append(div2);
        
        const div3 = document.createElement("div");
        const label4 = document.createElement("label");
        const input2 = document.createElement('input');
        label4.textContent="Student Marks: ";
        input2.value = student.marks;
        div3.append(label4,input2);
        dialog.append(div3);
        
        const label5 = document.createElement("label");
        dialog.append(label5);
        
        const div4 = document.createElement("div");
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");
        btn1.textContent = "Update";
        btn2.textContent = "Close";
        btn1.classList.add("dialogBtn");
        btn2.classList.add("dialogBtn");
        div4.append(btn1,btn2);
        dialog.append(div4);
        
        btn1.addEventListener("click",(e)=>{
            if(input1.value.trim() == ""){
                label5.textContent="Name cannot be empty";
                return;
            }
            if(input2.value<0 || input2.value >100){
                label5.textContent="Marks should be between 0 and 100";
                return;
            }
            console.log(parseInt(label2.textContent));
            console.log(students);
            const studentId = students.findIndex((a) => a.id == parseInt(label2.textContent));
            students[studentId].name = input1.value.trim();
            students[studentId].marks = Number(input2.value);
            console.log("3");
            display.textContent = "Updated Successfully";
            console.log(students);

            td2.textContent = students[studentId].name;
            td3.textContent = students[studentId].marks;
            // tr.innerHTML="";
            // tr.append(td1,td2,td3,td4);
            dialog.remove();
        })
        

        btn2.addEventListener("click",()=>{
            dialog.remove();
        })
        
        dialog.showModal();
    })



    const tr = document.createElement("tr");


    tr.append(td1, td2, td3, td4)

    tableBody.append(tr);

}
const search = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const container = document.querySelector(".container");

searchBtn.addEventListener("click", () => {
    container.innerHTML = "";

    const stud = students.filter((a) => (a.name.toLowerCase()).includes(search.value.trim().toLowerCase()));

    stud.forEach(element => {
        const div = document.createElement("div");
        const id = document.createElement("div");
        const name = document.createElement("div");
        const marks = document.createElement("div");
        div.classList.add("card");

        id.textContent = "Student's ID: " + element.id;
        name.textContent = "Student's Name: " + element.name;
        marks.textContent = "Student's Marks: " + element.marks;
        div.append(id, name, marks);
        container.append(div);
    });
    if (stud.length == 0) {
        const div = document.createElement("div");
        div.textContent = "No such Student";
        container.append(div);
    }
})