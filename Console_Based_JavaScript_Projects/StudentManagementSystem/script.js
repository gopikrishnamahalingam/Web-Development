
const studentform = document.querySelector(".studentForm");
const inputName = document.querySelector("#Name");
const inputAge = document.querySelector("#Age");
const inputCourse = document.querySelector("#Course");
const Error = document.querySelector(".Error");

const students = [];

const table = document.querySelector(".table")
function add(){
    const newRow = document.createElement("tr");
    const obj = students[students.length-1];
    newRow.innerHTML += `<td>${students.length}</td>`
    newRow.innerHTML += `<td>${obj.name}</td>`
    newRow.innerHTML += `<td>${obj.age}</td>`
    newRow.innerHTML += `<td>${obj.course}</td>`
    table.append(newRow);
}
studentform.addEventListener("submit",(event)=>{
    event.preventDefault();

    const student = {
        name : inputName.value.trim(),
        age : Number (inputAge.value),
        course : inputCourse.value
    }
    if(student.name === ""){
        Error.textContent = "Name cannot be empty";
        return;
    }
    if(student.age < 1){
        Error.textContent = "Age should be more than 0";
        return;
    }
    students.push(student);
    Error.textContent = "Submitted successfully";
    console.log(students)
    studentform.reset();
    add();
    addCard();
    
})
const container = document.querySelector(".container");
function addCard(){
    const card = document.createElement("div")
    card.classList.add("card")
    const obj = students[students.length-1];
    card.innerHTML += `<div>Student Id: ${students.length}</div>`;
    card.innerHTML += `<div>Name: ${obj.name}</div>`;
    card.innerHTML += `<div>Age: ${obj.age}</div>`;
    card.innerHTML += `<div>Course: ${obj.course}</div>`;
    container.append(card);

}

