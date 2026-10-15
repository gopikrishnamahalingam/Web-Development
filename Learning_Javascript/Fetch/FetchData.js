const container = document.querySelector(".container")
const messageP = document.querySelector(".message")

const btn = document.querySelector(".btn");
const msg = document.createElement("div");
messageP.insertAdjacentElement("afterend",msg);

btn.addEventListener("click",()=>{
    btn.textContent = "Fetch Again";
    container.innerHTML = "";
    getData();
})

async function getData(){
    try{
        messageP.textContent = "Loading Data";
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("HTTP Response: "+response.status);
        }
        const data = await response.json();
        messageP.textContent = "Data Loaded Successfully";
        msg.remove();
        console.log(data);
        
        addToDom(data);
        
    } catch (e){
        messageP.textContent = `Data failed to Load`;
        msg.textContent = e;
    }

}

function addToDom(d){
    container.textContent = "";
    d.forEach(ele => {
        container.append(createCards(ele));
    });

}
function createCards(d){
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("div");
    name.textContent = `Name: ${d.name}`;
    const email = document.createElement("div");
    email.textContent = `Email: ${d.email}`;
    const city = document.createElement("div");
    city.textContent = `City: ${d.address.city}`;
    card.append(name,email,city);
    return card;
}
