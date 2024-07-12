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
        const {typeElement, amt, description,totalIncome,totalExpense,balance} = trackerObject;
        const html = `
    <div class="item1">${typeElement}</div>
    <div class="item2">${amt}</div>
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
    let income=0;
    let expense=0;
    let balance=0;

    let typeElement = document.getElementById('js-type').value;
    console.log(typeElement);

    let amountElement = document.querySelector('.js-amount');
    let amt = Number(amountElement.value);


    if(typeElement=='income'){
        income=amt;
        totalIncome += income;
    }

    else if(typeElement=='expense'){
        expense=amt;
        totalExpense += expense;
    }

 
    balance=totalIncome-totalExpense;


    let descElement = document.querySelector('.js-desc');
    let description = descElement.value;


    
    if (typeElement == 'expense' && amt > balance) {
        alert("invalid expense amount");
    }

    else {
        if (amt != "" && description != "") {
            trackerList.push({
                typeElement,
                amt,
                description,
                totalIncome,
                totalExpense,
                balance
            });

            console.log(trackerList);

            localStorage.setItem('exp1', JSON.stringify(trackerList));
        }

    }

    
        renderTrackerList();

        amountElement.value = '';
        descElement.value ='';
   
}