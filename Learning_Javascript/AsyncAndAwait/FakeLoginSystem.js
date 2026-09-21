const Password = document.querySelector("#Password");
const Username = document.querySelector("#Username");
const Form = document.querySelector(".form");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

Form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Username.value.toLowerCase() == "gopi" && Password.value.toLowerCase() == "1234"){
                resolve("Successful");
            }
            else{
                reject("Failed");
            }
        },2000)
    })


    async function getLogin(){
        try{
            const data = await prom;
            display.textContent=`Login Successful!
            \nWelcome, ${Username.value}`

            const logOut = document.createElement("button");
            logOut.type="button";
            logOut.textContent="Log Out";
            logOut.classList.add("btn");
            buttons.append(logOut);
            logOut.addEventListener("click",()=>{
               setTimeout(()=>{
                   display.textContent="Logged out successfully!";
                   Form.reset();
               },2000);
                // getLogin();
            })
        }
        catch(error){
            display.textContent=`Login Failed
            \nInvalid Username or Password`;
        }
        
    }
    getLogin();
    display.textContent="Logging in...";

})