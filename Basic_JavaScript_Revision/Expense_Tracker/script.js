// Expense Array
const AllExpenses = [];


// Validation Function
function validation(x,p) {
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

    const div6 = document.createElement("div");
    div6.textContent = `Name: ${x.name}`;

    const div7 = document.createElement("div");
    div7.textContent = `Amount: ${x.amount}`;

    const div8 = document.createElement("div");
    div8.textContent = `Date: ${x.date}`;

    const div9 = document.createElement("div");
    div9.textContent = `Additional Note: ${x.note}`;

    card.append(div6, div7, div8, div9);
    container.append(card);
}

// Add Expense 
const addExpenseBtn = document.querySelector(".addExpenseBtn");
addExpenseBtn.addEventListener('click', (e) => {
    const dialog = document.createElement("dialog");
    dialogCreation(dialog);
    dialog.classList.add("dialog");

    const head = dialog.firstChild.firstChild;
    head.textContent= "Add Expense";

    // console.log(head.textContent);

    // head.nextSibling.nextSibling.textContent = "Add Expense";
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

        console.log(exp.name);
        if (validation(exp , dialog.firstChild.lastChild) === -1) {
            return;
        }
        if(exp.note==""){exp.note ="-";}
        AllExpenses.push(exp);

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
    form.append(h3, div1, div2, div3, div4, div5, p);

    dialog.append(form);
}

// Search Expense