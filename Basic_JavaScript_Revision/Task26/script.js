// Task
// Create a registration form containing:
// Name
// Email
// Age
// Password
// Course
// Validate the form when it is submitted.
// Display appropriate feedback for invalid input. 

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const pass = document.querySelector("#pass");


// console.log(selected.value);
const form = document.querySelector(".form");
const p = document.querySelector(".forErrors");
const submitBtn = document.querySelector(".submitBtn");
const mentor = document.querySelector("#mentor");

const students =[];
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const coursesSelected = document.querySelectorAll('input[name="course"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');

    if(name.value.trim() == ""){
        p.textContent = "Name cannot be empty!";
        return;
    }
    else if(!((email.value.trim()).endsWith("@gmail.com"))){
        p.textContent = "Enter a valid email address!";
        return;
    }
    // else if(age.value == null){
    //     p.textContent = "Age cannot be empty";
    //     return;
    // }
    else if(age.value <= 0){
        p.textContent = "Age should be positive!";
        return;
    }
    else if(pass.value.trim().length < 4){
        p.textContent = "Password must be of 4 characters!";
        return;
    }
    else if(pass.value.trim() == pass.value.trim().toLowerCase()){
        p.textContent = "Enter a strong password!";
        return;
    }
    else if(gender == null){
        p.textContent = "Select a gender!";
        return;
    }
    else if(coursesSelected.length == 0){
        p.textContent = "Select a course!";
        return;
    }
    const courses = [];
    for(let i=0; i<coursesSelected.length;i++){
        courses.push(coursesSelected[i].value);
    }
    students.push({
        name: name.value.trim(),
        age: (Number) (age.value),
        email: email.value,
        pass: pass.value,
        gender: gender.value,
        courses: courses,
        mentor: mentor.value
    })
    console.log(students);
    p.textContent = "Added succesfully";
    form.reset();
})
