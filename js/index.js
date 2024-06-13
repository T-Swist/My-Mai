
// function userData() {

//  document.addEventListener("DOMContentLoaded", () => {

//   // Getting the stored signup data from localStorage
//   let signup_data = JSON.parse(localStorage.getItem("signup_data"));

//   document.querySelector("#user_profile_name1").textContent = signup_data.userName11;

//   // Store the updated signup data in localStorage
//   localStorage.setItem("signup_data", JSON.stringify(signup_data));

//  });
// }



//The budget setting script 
function budgetSettingForm(){
  document.querySelector("#budget_setting_f").addEventListener("submit", (e) => {
   // Prevent the default form submission behavior
   e.preventDefault();

    let setBudget = JSON.parse(localStorage.getItem("setBudget")) || {};


      // Getting the values from the budget setting form inputs
      let monthBSet = document.querySelector("#budget_setting_month").value;
      let currencyBSet = document.querySelector("#currency_type").value;
      let totalbudgetBSet = document.querySelector("#budget_setting_totalB").value;
      let categoryBSet = document.querySelector("#budget_setting_categories").value;
      let educationBSet = document.querySelector("#budget_setting_education").value;
      let electricityBSet = document.querySelector("#budget_setting_electricity").value;
      let transportationBSet = document.querySelector("#budget_setting_transportation").value;
      let groceriesBSetesBSet = document.querySelector("#budget_setting_groceries").value;
      let dinningBSet = document.querySelector("#budget_setting_dinning").value;
      let healthBSet = document.querySelector("#budget_setting_health").value;
      let utilitiesBSet = document.querySelector("#budget_setting_utilities").value;
      
      
        //putting the input values in a object
       let budget_data = {
        budgetsetmonth: monthBSet,
        monthBSetcurrency: currencyBSet,
        budgetsettotalB: totalbudgetBSet,
        budgetsetcategory: categoryBSet,
        budgetseteducation: educationBSet,
        budgetsetelectricity: electricityBSet,
        budgetsettrasport: transportationBSet,
        budgetsetgroceries: groceriesBSetesBSet,
        budgetsetdinning: dinningBSet,
        budgetsethealth: healthBSet,
        budgetsetutilitie: utilitiesBSet
      };

      setBudget[monthBSet] = budget_data;

      // Store the updated data in localStorage
    localStorage.setItem("setBudget", JSON.stringify(setBudget));

    
    document.querySelector("#budget_setting_f").reset();

  })
}


function budgetSummary(){

document.querySelector(`#budget_summary_f`).addEventListener("submit", (e) => {  
   e.preventDefault();

   let settingBudget =  JSON.parse(localStorage.getItem("setBudget"));

  // Getting the values from the budget setting form inputs

  //The input from the total budget container
  let totalbudgetBSummary = document.querySelector("#total_budget");
  let totalSpentBSummary = document.querySelector("#total_spent");
  let remainderBSummary = document.querySelector("#spent_remainder");

  //The input from the electricity container
  let bSummaryBLEduca = document.querySelector("#budget_summaryBL_education");
  let bSummaryTSEduca = document.querySelector("#budget_summaryTS_education");
  let bSummarySREduca = document.querySelector("#budget_summarySR_education");

   //The input from the education container
  let bSummaryBLElectric = document.querySelector("#budget_summaryBL_electric");
  let bSummaryTSElectric = document.querySelector("#budget_summaryTS_electric");
  let bSummarySRElectric = document.querySelector("#budget_summarySR_electric");
  
   //The input from the transportation container
  let bSummaryBLTransport = document.querySelector("#budget_summaryBL_transport");
  let bSummaryTSTransport = document.querySelector("#budget_summaryTS_transport");
  let bSummarySRTransport = document.querySelector("#budget_summarySR_transport");
  
  //The input from the groceries container
  let bSummaryBLGroceries = document.querySelector("#budget_summaryBL_groceries");
  let bSummaryTSGroceries  = document.querySelector("#budget_summaryTS_groceries");
  let bSummarySRGroceries  = document.querySelector("#budget_summarySR_groceries");
  
  //The input from the dinning container
  let bSummaryBLdinning = document.querySelector("#budget_summaryBL_dinning");
  let bSummaryTSdinning = document.querySelector("#budget_summaryTS_dinning");
  let bSummarySRdinning = document.querySelector("#budget_summarySR_dinning");
  
  //The input from the health container
  let bSummaryBLHealth = document.querySelector("#budget_summaryBL_health");
  let bSummaryTSHealth = document.querySelector("#budget_summaryTS_health");
  let bSummarySRHealth = document.querySelector("#budget_summarySR_health");

  //The input from the utilities container
  let bSummaryBLUtilities = document.querySelector("#budget_summaryBL_utilities");
  let bSummaryTSUtilities = document.querySelector("#budget_summaryTS_utilities");
  let bSummarySRUtilities = document.querySelector("#budget_summarySR_utilities");

  //The input from the main label container
  let bSummaryMonthly = document.querySelector("#budget_summary_month").value;
  let bSummaryCurrency = document.querySelector("#budget_summary_currency_type");
  

  if (monthlyBudget =  settingBudget[bSummaryMonthly]) {
    totalbudgetBSummary.value =  monthlyBudget.budgetsetcategory;
 bSummaryBLEduca.value =  monthlyBudget.budgetseteducation;
 bSummaryBLElectric.value =  monthlyBudget.budgetsetelectricity;
 bSummaryMonthly.value =  monthlyBudget.budgetsetmonth;
 bSummaryCurrency.value =  monthlyBudget.monthBSetcurrency;
 bSummaryBLUtilities.value =  monthlyBudget.budgetsetutilitie;
 bSummaryBLHealth.value =  monthlyBudget.budgetsethealth;
 bSummaryBLdinning.value =  monthlyBudget.budgetsetdinning;
 bSummaryBLGroceries.value =  monthlyBudget.budgetsetgroceries;
 bSummaryBLTransport.value =  monthlyBudget.budgetsettrasport;
  } else {
    alert("Budget wasn't set for the month you selected");
  } 


//   //Gettinghold the expense data 
// let expense_entry_ff_data = JSON.parse(localStorage.getItem("expense_entry_ff_data")) || [];
// for(let i = 0; i < expense_entry_ff_data.length; i++){
//  let saveExpensePoint = expense_entry_ff_data[i];
//  switch (saveExpensePoint.expenseentrycategory1) {
//   case value:
//     totalSpentBSummary.value = (totalSpentBSummary.value - saveExpensePoint.expenseentryamount1)
//     break;
 
//   default:
//     break;
//  }

// }

  });
 }


document.addEventListener("DOMContentLoaded", () => {
  expenseEntryForm();
  displayExpenseEntryData();
  newCategoryForm();
});


//The expense Entry script
function expenseEntryForm() {
  document.querySelector("#expense_entry_ff").addEventListener("submit", (e) => {
    e.preventDefault();
    //getting expenses data from local storage or initializing a empty array
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    //getting the input values from the expense entry form
    let expensename1 = document.querySelector("#expense_name").value;
    let expenseamount1 = document.querySelector("#expense_amount").value;
    let expensedate1 = document.querySelector("#expense_date").value;
    let expensecategory1 = document.querySelector("#expense_category").value;
    let expensepaymantmethod1 = document.querySelector("#expense_payment_method").value;
    let expensedescription1 = document.querySelector("#expense_description").value;
    
     //putting the input values in a object
    let expense_entry_ff_data = {
      expenseentryname1: expensename1,
      expenseentryamount1: expenseamount1,
      expenseentrydata1: expensedate1,
      expenseentrycategory1: expensecategory1,
      expenseentrypayment1: expensepaymantmethod1,
      expenseentrynotes1: expensedescription1,
    };
     //pushing the object in the expenses key with in the local storage 
    expenses.push(expense_entry_ff_data);

    localStorage.setItem("expenses", JSON.stringify(expenses)); 
    document.querySelector("#expense_entry_ff").reset();

     alert("Expense entry saved successfully!");
    // displayExpenseEntryData();
  });
}


 function displayExpenseEntryData() {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const expenseEntries = document.getElementById("expense_entries");
    expenseEntries.innerHTML = "";

    expenses.forEach((expense, index) => {
      const row = document.createElement("div");
      row.className = "row mt-2";
      row.id = `expense_row_${index}`;

//     row.innerHTML = `
//       <div class="col">
//         <input id="expense_name_${index}" class="form-control" value="${expense.expenseentryname1}" disabled>
//       </div>
//       <div class="col">
//         <input id="expense_amount_${index}" class="form-control" value="${expense.expenseentryamount1}" disabled>
//       </div>
//       <div class="col">
//         <input id="expense_date_${index}" class="form-control" value="${expense.expenseentrydata1}" disabled>
//       </div>
//       <div class="col">
//         <input id="expense_category_${index}" class="form-control" value="${expense.expenseentrycategory1}" disabled>
//       </div>
//       <div class="col" id="action_buttons_${index}">
//         <button type="button" class="btn btn-primary" onclick="editExpenseEntry(${index})">Edit</button>
//         <button type="button" class="btn btn-info" onclick="detailExpenseEntry(${index})">Details</button>
//         <button type="button" class="btn btn-danger" onclick="deleteExpenseEntry(${index})">Delete</button>
//       </div>
//     `;

//     expenseEntries.appendChild(row);

   });

 }



// function editExpenseEntry(index) {
//   document.getElementById(`expense_name_${index}`).disabled = false;
//   document.getElementById(`expense_amount_${index}`).disabled = false;
//   document.getElementById(`expense_date_${index}`).disabled = false;
//   document.getElementById(`expense_category_${index}`).disabled = false;

//   const actionButtons = document.getElementById(`action_buttons_${index}`);
//   actionButtons.innerHTML = `
//     <button type="button" class="btn" onclick="saveExpenseEntry(${index})">Save</button>
//     <button type="button" class="btn" onclick="cancelEdit(${index})">Cancel</button>
//   `;
// }



// function saveExpenseEntry(index) {
//   let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//   expenses[index].expenseentryname1 = document.getElementById(`expense_name_${index}`).value;
//   expenses[index].expenseentryamount1 = document.getElementById(`expense_amount_${index}`).value;
//   expenses[index].expenseentrydata1 = document.getElementById(`expense_date_${index}`).value;
//   expenses[index].expenseentrycategory1 = document.getElementById(`expense_category_${index}`).value;

//   localStorage.setItem("expenses", JSON.stringify(expenses));

//   document.getElementById(`expense_name_${index}`).disabled = true;
//   document.getElementById(`expense_amount_${index}`).disabled = true;
//   document.getElementById(`expense_date_${index}`).disabled = true;
//   document.getElementById(`expense_category_${index}`).disabled = true;

//   const actionButtons = document.getElementById(`action_buttons_${index}`);
//   actionButtons.innerHTML = `
//     <button type="button" class="btn btn-primary" onclick="editExpenseEntry(${index})">Edit</button>
//     <button type="button" class="btn btn-info" onclick="detailExpenseEntry(${index})">Details</button>
//     <button type="button" class="btn btn-danger" onclick="deleteExpenseEntry(${index})">Delete</button>
//   `;
// }



// function deleteExpenseEntry(index) {
//   let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   expenses.splice(index, 1);
//   localStorage.setItem("expenses", JSON.stringify(expenses));
//   displayExpenseEntryData();
// }



// function cancelEdit(index) {
//   displayExpenseEntryData();
// }



// function detailExpenseEntry(index) {
//   let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   alert(`Details:\nName: ${expenses[index].expenseentryname1}\nAmount: ${expenses[index].expenseentryamount1}\nDate: ${expenses[index].expenseentrydata1}\nCategory: ${expenses[index].expenseentrycategory1}\nPayment Method: ${expenses[index].expenseentrypayment1}\nDescription: ${expenses[index].expenseentrynotes1}`);
// }



// function newCategoryForm() {
//   document.querySelector("#new_category_form").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let newCategory = document.querySelector("#new_category").value;
//     let categories = JSON.parse(localStorage.getItem("categories")) || [];

//     if (!categories.includes(newCategory)) {
//       categories.push(newCategory);
//       localStorage.setItem("categories", JSON.stringify(categories));
//       alert("New category added successfully!");
//     } else {
//       alert("Category already exists!");
//     }

//     document.querySelector("#new_category_form").reset();
//   });
// }


