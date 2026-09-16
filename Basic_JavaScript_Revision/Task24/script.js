// Task
// Create a page containing a collection of student objects.
// Display the students dynamically on the webpage.
// Do not manually write each student into the HTML. 

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
    if(marks.value > 100){
        display.textContent = "Marks cannot be greater than 100";
        console.log("Marks cannot be greater than 100");
        return;
    }
    
    students.push({
        id: ++id,
        name: name.value.trim(),
        marks: marks.value
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