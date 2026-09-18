// Expense Array
let AllExpenses = [];


// Validation Function
function validation(x, p) {
    if (x.name == "") {
        p.textContent = "Name Cannot be empty!";
        return -1;
    }
    else if (x.amount == "") {
        p.textContent = "Amount Cannot be empty!";
        return -1;
    }
    else if (x.date == "") {
        p.textContent = "Enter a valid Date";
        return -1;
    }
}


const container = document.querySelector(".expenseContainer");
// Add to DOM Function
function addExpenseToDOM(x) {
    const card = document.createElement("div");
    card.classList.add("expenseCard");

    const div1 = document.createElement("div");
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    label1.textContent = "Expense ID: ";
    label2.textContent = x.expense_ID;
    div1.append(label1, label2);

    const div2 = document.createElement("div");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");
    label3.textContent = "Name: ";
    label4.textContent = x.name;
    div2.append(label3, label4);

    const div3 = document.createElement("div");
    const label5 = document.createElement("label");
    const label6 = document.createElement("label");
    label5.textContent = "Amount: ₹";
    label6.textContent = x.amount;
    div3.append(label5, label6);

    const div4 = document.createElement("div");
    const label7 = document.createElement("label");
    const label8 = document.createElement("label");
    label7.textContent = "Date: ";
    label8.textContent = x.date;
    div4.append(label7, label8);

    const div5 = document.createElement("div");
    const label9 = document.createElement("label");
    const label10 = document.createElement("label");
    label9.textContent = "Additional Note: ";
    label10.textContent = x.note;
    div5.append(label9, label10);

    const div6 = document.createElement("div");
    const updBtn = document.createElement("button");
    updBtn.textContent = "Update";
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    div6.append(updBtn, delBtn);

    updBtn.addEventListener("click", () => {
        const findingExpense = updBtn.parentElement.parentElement.firstChild.lastChild.textContent;
        const findingData = AllExpenses.find((a) => a.expense_ID == findingExpense);

        const dialog = document.createElement("dialog");
        dialog.classList.add("dialog");
        dialogCreation(dialog);

        const head = dialog.firstChild.firstChild;

        head.textContent = "Update Expense";

        head.nextSibling.lastChild.value = findingData.name;
        head.nextSibling.nextSibling.lastChild.value = Number(findingData.amount);
        head.nextSibling.nextSibling.nextSibling.lastChild.value = findingData.date;
        head.nextSibling.nextSibling.nextSibling.nextSibling.lastChild.value = findingData.note;

        dialog.firstChild.lastChild.previousSibling.firstChild.textContent = "Update";

        dialog.firstChild.addEventListener("submit", (e) => {
            e.preventDefault();

            const exp = {
                name: head.nextSibling.lastChild.value.trim(),
                amount: head.nextSibling.nextSibling.lastChild.value,
                date: head.nextSibling.nextSibling.nextSibling.lastChild.value,
                note: head.nextSibling.nextSibling.nextSibling.nextSibling.lastChild.value,
            }

            // if(validation(exp,dialog.firstChild.lastChild) ==-1){
            //     return;
            // }

            const expenseIndex = AllExpenses.findIndex((a) => a.expense_ID == findingExpense);
            label4.textContent = AllExpenses[expenseIndex].name = exp.name;
            label6.textContent = AllExpenses[expenseIndex].amount = exp.amount;
            label8.textContent = AllExpenses[expenseIndex].date = exp.date;
            label10.textContent = AllExpenses[expenseIndex].note = exp.note;

            dialog.remove();
        })

        document.body.append(dialog);
        dialog.showModal();


    })

    delBtn.addEventListener("click", () => {
        const findingExpense = updBtn.parentElement.parentElement.firstChild.lastChild.textContent;
        AllExpenses.splice(AllExpenses.findIndex((a) => a.expense_ID == findingExpense), 1);
        console.log(findingExpense);
        console.log(AllExpenses);
        updBtn.parentElement.parentElement.remove();

    })

    card.append(div1, div2, div3, div4, div5, div6);
    container.append(card);
}
let Exp_Id = 0;
// Add Expense 
const addExpenseBtn = document.querySelector(".addExpenseBtn");
addExpenseBtn.addEventListener('click', (e) => {
    const dialog = document.createElement("dialog");
    dialogCreation(dialog);
    dialog.classList.add("dialog");

    const head = dialog.firstChild.firstChild;
    head.textContent = "Add Expense";

    // console.log(head.textContent);

    dialog.firstChild.lastChild.previousSibling.firstChild.textContent = "Add Expense";
    head.parentElement.addEventListener("submit", (e) => {
        e.preventDefault();

        // console.log(input4.value=="");
        // console.log(typeof(input3.value));
        const exp = {
            name: head.nextSibling.lastChild.value.trim(),
            amount: head.nextSibling.nextSibling.lastChild.value,
            date: head.nextSibling.nextSibling.nextSibling.lastChild.value,
            note: head.nextSibling.nextSibling.nextSibling.nextSibling.lastChild.value,
        }

        // console.log(exp.name);

        // ******
        // if (validation(exp , dialog.firstChild.lastChild) === -1) {
        //     return;
        // }
        console.log("ADD VALIDATION");

        AllExpenses.push({
            expense_ID: ++Exp_Id,
            name: exp.name,
            amount: Number(exp.amount),
            date: exp.date,
            note: (exp.note == "") ? "-" : exp.note
        });
        // input1.value = "";
        // input2.value = "";
        // input3.value = "";
        // input4.value = "";
        dialog.remove();
        addExpenseToDOM(AllExpenses[AllExpenses.length - 1]);
        console.log(AllExpenses);
    })


    document.body.append(dialog);
    dialog.showModal();
})


// Dialog Box Elements
function dialogCreation(dialog) {
    const h3 = document.createElement("h3");

    const form = document.createElement("form");

    const div1 = document.createElement("div");
    const label1 = document.createElement("label");
    label1.textContent = "Name: "
    const input1 = document.createElement("input");
    input1.type = "text";
    div1.append(label1, input1);

    const div2 = document.createElement("div");
    const label2 = document.createElement("label");
    label2.textContent = "Amount: "
    const input2 = document.createElement("input");
    input2.type = "number";
    input2.min = 0;
    div2.append(label2, input2);

    const div3 = document.createElement("div");
    const label3 = document.createElement("label");
    label3.textContent = "Date: "
    const input3 = document.createElement("input");
    input3.type = "date";
    div3.append(label3, input3);

    const div4 = document.createElement("div");
    const label4 = document.createElement("label");
    label4.textContent = "Additional Note: "
    const input4 = document.createElement("textarea");
    div4.append(label4, input4);

    const div5 = document.createElement("div");

    const p = document.createElement("p");

    const AddUpdBtn = document.createElement("button");
    div5.append(AddUpdBtn);
    AddUpdBtn.type = "submit";

    const CloseBtn = document.createElement("button");
    div5.append(CloseBtn);
    CloseBtn.type = "button";
    form.append(h3, div1, div2, div3, div4, div5, p);

    CloseBtn.textContent = "Close";
    CloseBtn.addEventListener("click", () => {
        dialog.remove();
    })
    dialog.append(form);
}

// Search Expense
const searchExpense = document.querySelector("#searchExpense");
const searchExpenseBtn = document.querySelector(".searchExpenseBtn");

searchExpenseBtn.addEventListener("click",()=>{
    // if(searchExpense.value ==""){}
    
    const filteredArray = AllExpenses.filter((a) => a.name.toLowerCase().includes(searchExpense.value.toLowerCase().trim()));
    
    container.innerHTML = "";
    filteredArray.forEach(e => addExpenseToDOM(e));
    
})

// Reset Expense
const resetExpenseBtn = document.querySelector(".resetExpenseBtn");
resetExpenseBtn.addEventListener("click",()=>{
    Exp_Id =0;
    container.innerHTML ="";
    AllExpenses = [];
    console.log(AllExpenses);
    
})

// Expense Statistic
