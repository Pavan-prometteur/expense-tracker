const trackerList=JSON.parse(localStorage.getItem('exp1')) || [];

let totalIncome= 0;
let totalExpense= 0;
// let balance= 0;

renderTrackerList();

function renderTrackerList() {

    let trackerListHTML = "";
    let trackerListHTML2 ="";
    for (let i = 0; i < trackerList.length; i++) {
        const trackerObject = trackerList[i];
        const { income, expense, description,totalIncome,totalExpense,balance} = trackerObject;
        const html = `
    <div class="item1">${income}</div>
    <div class="item2">${expense}</div>
    <div class="item3">${description}</div>
    <button onclick="
    trackerList.splice(${i},1);
    localStorage.setItem('exp1',JSON.stringify(trackerList));
    renderTrackerList();
    " class="delete-tracker item4">Delete</button>`;

    trackerListHTML2 = renderValues(totalIncome,totalExpense,balance);
    
    function renderValues(totalInc,totalExp,bal){

        if(i==trackerList.length-1){
           return `<div>
            <p>Total Income:</p>
            <h5 class="total-income" style="text-align:center;">${totalInc}</h5>
            </div>
            <div>
            <p>Total Expense:</p>
            <h5 class="total-expense "style="text-align:center;">${totalExp}</h5>
            </div>
            <div>
            <p>Current Balance:</p>
            <h5 class="current-balance" style="text-align:center;">${bal}</h5>
            </div>`
        }
        return;
    }
        trackerListHTML += html;
    }

    document.querySelector('.js-tracker').innerHTML = trackerListHTML;
    document.querySelector('.container2').innerHTML= trackerListHTML2;
}

function addTodo() {

    let incomeElement = document.querySelector('.js-income');

    let income;

    if(incomeElement.value){
    income = Number(incomeElement.value);
    totalIncome += income;
    }

    else{
    income = 0;
    totalIncome += income;
    }

    let expenseElement = document.querySelector('.js-expense')
    
    let expense;

    if(expenseElement.value){
    expense = Number(expenseElement.value);
    totalExpense+=expense;
    }

    else{
    expense = 0;
    totalExpense+= expense;
    }

    balance=totalIncome-totalExpense;


    let descElement = document.querySelector('.js-desc');
    let description = descElement.value;

    // if (income != "" || expense != "" && description!="") {
        trackerList.push({
            income,
            expense,
            description,
            totalIncome,
            totalExpense,
            balance
        });

        console.log(trackerList);

        localStorage.setItem('exp1',JSON.stringify(trackerList));

        renderTrackerList();
        
        incomeElement.value = '';
        expenseElement.value = '';
        descElement.value ='';
    // }
}