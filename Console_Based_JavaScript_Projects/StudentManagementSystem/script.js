
const studentform = document.querySelector(".studentForm");
const inputName = document.querySelector("#Name");
const inputAge = document.querySelector("#Age");
const inputCourse = document.querySelector("#Course");
const errorMsg = document.querySelector(".Error");

const students = [];
var pid = 1;


const table = document.querySelector(".tableBody")

function add(){
    table.innerHTML = "";
    for(let i = 0; i<students.length;i++){
        const newRow = document.createElement("tr");
        const obj = students[i];
        newRow.innerHTML += `
        <td>${i+1}</td>
        <td>${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.age}</td>
        <td>${obj.course}</td>
        <td><button class="A${obj.id} delete" > Delete </button></td> 
        `
        newRow.classList.add(`A${obj.id}`);
    
        table.append(newRow);
    }
  
}
studentform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const student = {
        id : pid++,
        name : inputName.value.trim(),
        age : Number (inputAge.value),
        course : inputCourse.value
    }
    if(student.name === ""){
        errorMsg.textContent = "Name cannot be empty";
        return;
    }
    if(student.age < 1){
        errorMsg.textContent = "Age should be more than 0";
        return;
    }
    students.push(student);
    errorMsg.textContent = "Added successfully";
    studentform.reset();
    console.log("Added Successfully");

    add();
    addCard();
    updatedel();

    
})
const container = document.querySelector(".container");

function addCard(){
    container.innerHTML = ""
    for(let i =0; i< students.length;i++){
        const card = document.createElement("div")
        card.classList.add("card")
        const obj = students[i];
        card.innerHTML += `
        <div>Student ID: ${obj.id}</div>
        <div>Name: ${obj.name}</div>
        <div>Age: ${obj.age}</div> 
        <div>Course: ${obj.course}</div>   
        <div class="buttonspan"><button class="A${obj.id} delete" > Delete </button></div>
        `;
        card.classList.add(`A${obj.id}`);
        container.append(card);
    }

}

function updatedel(){
    let del = document.querySelectorAll(".delete");
    for(let i =0; i<del.length;i++){
        del[i].addEventListener("click",(event)=>{
            // console.log(event.target)
            const temp = event.target.classList[0];
            // console.log(temp);
            document.querySelectorAll(`.${temp}`).forEach(e =>{
                e.remove();
            })
            const tempId = temp.slice(1);
            // console.log(tempId);
            // console.log(students)
            students.splice(students.findIndex(s => s.id == tempId),1);
            // console.log(students)
            console.log("Deleted Successfully");
            add();
            addCard();
            // updatedel();
        })
    }
}


