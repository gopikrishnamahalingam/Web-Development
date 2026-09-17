// Task
// Integrate into Student Management system
// Filter students
// Sort students
// Calculate statistics

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
    if(students.length ==0){
        const div = document.createElement("div");
        div.textContent = "No Student to show";
        container.append(div);
        return;
    }
    if(search.value.trim() == ""){
        const div = document.createElement("div");
        div.textContent = "Enter something to start searching";
        container.append(div);
        return;
    }
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
const sortBy = document.querySelector("#sortBy");

sortBy.addEventListener("change",()=>{
    let sortedArray;
    switch (sortBy.value) {
        case "reset":{
            sortedArray = students.sort((a,b)=> a.id-b.id);
            console.log(students);
            
            break;
        }
        case "marksLH":{
            sortedArray = students.sort((a,b)=> a.marks-b.marks);
            console.log(students);
            break;
        }
        case "marksHL":{
            sortedArray = students.sort((a,b)=> b.marks-a.marks);
            console.log(students);
            break;
        }
        case "nameAsc":{
            sortedArray = [...students].sort((a,b)=> a.name.localeCompare(b.name));
            console.log(students);
            break;
        }
        case "nameDesc":{
            sortedArray = [...students].sort((a,b)=> b.name.localeCompare(a.name));
            // sortedArray = [...students].toSorted().reverse();
            console.log(students);
            // sortedArray = students.sort((a,b) => );
            break;
        }
        default:
            break;
    }    

    tableBody.innerHTML = "";
    sortedArray.forEach((a) => {
        addStudent(a);
    })
})
let minFilterValue =0;
let maxFilterValue =100;

const filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click",()=>{
    const dialog1 = document.createElement("dialog");
    dialog1.classList.add("dialog1");
    const h3 = document.createElement("h3");
    h3.textContent = "Filter by Marks";
    const p = document.createElement("p");
    p.textContent = "Range";
    dialog1.append(h3,p);
    
    const div1 = document.createElement("div");
    
    
    const label6 = document.createElement("label");
    label6.textContent = "From";
    const label7 = document.createElement("label");
    label7.textContent = "To";
    
    const fromValue = document.createElement("input");
    fromValue.type = "number";
    fromValue.value = minFilterValue;
    fromValue.min = 0;
    fromValue.max = 100;
    
    const toValue = document.createElement("input");
    toValue.type = "number";
    toValue.value = maxFilterValue;
    toValue.min = 0;
    toValue.max = 100;
    
    div1.append(label6,fromValue,label7,toValue);
    dialog1.append(div1);
    
    const div2 = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    btn1.textContent = "Set";
    btn2.textContent = "Close";
    btn1.classList.add("InsideFilterBtn");
    btn2.classList.add("InsideFilterBtn");
    div2.classList.add("flexyDiv");

    div2.append(btn1,btn2);
    dialog1.append(div2);

    btn1.addEventListener("click",()=>{
        let filteredStudents = students.filter((a)=> a.marks>=Number(fromValue.value) && a.marks <= Number(toValue.value));

        tableBody.innerHTML ="";

        filteredStudents.forEach((chosen) =>{
            addStudent(chosen);
        })

        maxFilterValue = toValue.value;
        minFilterValue = fromValue.value;

        // dialog1.remove();
    })

    btn2.addEventListener("click",()=>{
        dialog1.remove();
    })

    document.body.append(dialog1);
    dialog1.showModal();
    
})


    // const rangeInput = document.createElement("input");
    // rangeInput.type = "range";
    // rangeInput.min = 0;
    // rangeInput.max = 100;
    // rangeInput.value = 100;
    
    // const div5 = document.createElement("div");
    // const label8 = document.createElement("label");
    // div5.append(label8);

    // dialog1.append(label6,rangeInput,label7,div5);
    
    // rangeInput.addEventListener("change",()=>{
    //     label8.textContent = rangeInput.value;
    // })

    // console.log("1");
    
    // const marksRange = document.createElement('input[type="range"]');
    // const marksRange = document.querySelector(".marksRange");
    // const showMarksValue = document.querySelector(".showMarksValue");
    // console.log(marksRange.value);
    // console.log("2");
    
    // marksRange.addEventListener("change",()=>{
    //     showMarksValue.textContent = marksRange.value;
    //     console.log("3");

    // })


const AnalyzeBtn = document.querySelector(".AnalyzeBtn");
AnalyzeBtn.addEventListener(("click"),()=>{
    if(students.length == 0){
        display.textContent = "No Student to analyze";
        return;
    }

    const dialog2 = document.createElement("dialog");
    dialog2.classList.add("dialog2");

    const h3 = document.createElement("h3");
    h3.textContent="Table Statistics";
    
    const div1 = document.createElement("div");
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");

    label1.textContent = "Number of Students: ";
    label2.textContent = students.length;
    div1.classList.add("flexyDiv");
    
    div1.append(label1,label2);
    dialog2.append(h3,div1);
    

    const div2 = document.createElement("div");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");

    label3.textContent = "Average Marks: ";    
    label4.textContent = students.reduce((Sum,Current) => Sum+Current.marks,0)/students.length;

    div2.classList.add("flexyDiv");
    div2.append(label3,label4);
    dialog2.append(div2);

    const statisticalArray = students.sort((a,b)=> b.marks - a.marks);

    const div3 = document.createElement("div");
    const label5 = document.createElement("label");
    const label6 = document.createElement("label");

    label5.textContent = "Highest Marks: ";    
    label6.textContent = statisticalArray[0].marks;

    div3.classList.add("flexyDiv");
    div3.append(label5,label6);
    dialog2.append(div3);
    
    const div4 = document.createElement("div");
    const label7 = document.createElement("label");
    const label8 = document.createElement("label");

    label7.textContent = "Scored By: ";    
    label8.textContent = students.filter((a) => a.marks === statisticalArray[0].marks).map((b) => b.name);

    div4.classList.add("flexyDiv");
    div4.append(label7,label8);
    dialog2.append(div4);
    
    
    const div5 = document.createElement("div");
    const label9 = document.createElement("label");
    const label10 = document.createElement("label");

    label9.textContent = "Lowest Marks: ";    
    label10.textContent = statisticalArray[students.length-1].marks;

    div5.classList.add("flexyDiv");
    div5.append(label9,label10);
    dialog2.append(div5);
    
    const div6 = document.createElement("div");
    const label11 = document.createElement("label");
    const label12 = document.createElement("label");

    label11.textContent = "Scored By: ";    
    label12.textContent = students.filter((a) => a.marks === statisticalArray[students.length-1].marks).map((b) => b.name);

    div6.classList.add("flexyDiv");
    div6.append(label11,label12);
    dialog2.append(div6);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.classList.add("Btn");
    closeBtn.addEventListener("click",()=>{
        dialog2.remove();
    })
    dialog2.append(closeBtn);

    document.body.append(dialog2);
    dialog2.showModal();
})