const tableBody = document.querySelector(".TableBody");
const loadStudents = document.querySelector(".loadStudents");
const p = document.querySelector(".display");



loadStudents.addEventListener("click",()=>{
    const promise = new Promise((resolve,reject)=>{
        const status = true; //false for rejection
        setTimeout(()=>{
            if(status){
                resolve("Data");
            }
            else{
                reject("Not Found");
            }
        },2000);

    })
    async function getData() {
        try{
            const data = await promise;
            if(data == "Data"){
                tableBody.classList.toggle("none");
            }
            p.textContent="Loaded"
        }catch(error){
            p.textContent="Unavailable"
        }
    }
    getData();
    p.textContent="Loading Students..."
    
})