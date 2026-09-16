// Task
// Add a search interface to Task 24.
// When the user searches, display the matching students.

// const id = document.querySelector(".inputID");
const name = document.querySelector(".inputName");
const marks = document.querySelector(".inputMarks");
const form = document.querySelector(".form");
const display = document.querySelector(".display");
const addBtn = document.querySelector(".addBtn");

const students = [];
let id =0;

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // if(students.findIndex((a) => a.id === id.value) != -1){
    //     display.textContent = "Student ID already exists";
    //     console.log("Student ID already exists");
    //     return;
    // }
    if(name.value.trim() === ""){
        display.textContent = "Name cannot be empty";
        console.log("Name cannot be empty");
        return;
    }
    if(marks.value > 100 || marks.value <0){
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
    addStudent(students[students.length-1]);
    form.reset();

})

const tableBody = document.querySelector(".body");

function addStudent(x){

    const td1 = document.createElement("td");
    td1.textContent = x.id;

    const td2 = document.createElement("td");
    td2.textContent = x.name;

    const td3 = document.createElement("td");
    td3.textContent = x.marks;
    
    const remBtn = document.createElement("button");
    remBtn.textContent ="Delete"
    remBtn.classList.add("Btn");
    
    remBtn.addEventListener("click",()=>{
        remBtn.parentElement.parentElement.remove();

        // console.log(remBtn.parentElement.parentElement.firstChild.textContent);

        let remId = parseInt(remBtn.parentElement.parentElement.firstChild.textContent);
        
        students.splice(students.findIndex((a)=>a.id == remId),1);
        console.log(students);
        
    })

    const td4 = document.createElement("td");
    td4.append(remBtn);

    const tr = document.createElement("tr");


    tr.append(td1,td2,td3,td4)

    tableBody.append(tr);

}
const search = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const container = document.querySelector(".container");

searchBtn.addEventListener("click",()=>{
    container.innerHTML="";
    
    const stud = students.filter((a)=> (a.name.toLowerCase()).includes(search.value.trim().toLowerCase()));
    
    stud.forEach(element => {
        const div = document.createElement("div");
        const id = document.createElement("div");
        const name = document.createElement("div");
        const marks = document.createElement("div");
        div.classList.add("card");
        
        id.textContent = "Student's ID: "+element.id;
        name.textContent = "Student's Name: "+element.name;
        marks.textContent = "Student's Marks: "+element.marks;
        div.append(id,name,marks);
        container.append(div);
    });
    if(stud.length == 0){
        const div = document.createElement("div");
        div.textContent = "No such Student";
        container.append(div);
    }
})