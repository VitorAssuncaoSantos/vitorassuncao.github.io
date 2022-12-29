/*Reference to the transaction Ul*/
const $transactionsUl = document.querySelector("#transactions");
/*Reference to the balance h1*/
const $balanceDisplay = document.querySelector("#balance");
/*Reference to income p*/
const $incomeDisplay = document.querySelector("#money-plus");
/* Reference to expense p*/
const $expenseDisplay = document.querySelector("#money-minus");
/*Reference to the form */
const $form = document.querySelector("#form");
/*Reference to the input of the name of transaction*/
const $inputTransactionName = document.querySelector("#nameOfTransaction");
/*Reference to transcation amount input */
const $inputTransactionAmount = document.querySelector("#amount");


//Create transactions using the local storage
const localStorageTransactions = JSON.parse(localStorage
    .getItem("transactions"));
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : [];

const removeTransaction = ID => {
    transactions = transactions
        .filter(transaction => ID !== transaction.id)
    updateLocalStorage();
    init();
}

//Create the list of transaction 
const addTransactionIntoDOM = ({ amount, name, id }) => {
    const operator = amount > 0 ? "+" : "-";
    const CSSClass = amount > 0 ? "plus" : "minus";
    const amountWithoutOperator = Math.abs(amount);
    //Creating a new HTML element
    const $li = document.createElement("li");
    //Below, it's adding in the classList of li the CSSClass
    $li.classList.add(CSSClass);
    $li.innerHTML = `${name}
    <span>${operator} R$ ${amountWithoutOperator}</span>
    <button class="delete-btn" onClick = "remove${id})">x</button>`;
    //The prepend method adds the new li to be the first child 
    $Ul.prepend($li);
}
const getExpenses = transactionsAmounts =>
    Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((accumalator, number) => accumalator + number, 0))
    .toFixed(2);

const getIncomes = transactionsAmounts =>
    transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumalator, number) => accumalator + number, 0)
    .toFixed(2);
const getTotal = transactionsAmounts =>
    transactionsAmounts
    .reduce((accumalator, number) => accumalator + number, 0)
    .toFixed(2);

//This function at the const updateBalanceValues will calculate and display the total values of the transcations in the screen
const updateBalanceValues = () => {
    //Pay attention to the different formatting of the methods
    const transactionsAmounts = transactions.map(({ amount }) => amount); //Pay much attention to this map
    const total = getTotal(transactionsAmounts);
    const income = getIncomes(transactionsAmounts);
    const expense = getExpenses(transactionsAmounts);
    //Change the values of the HTML
    $balanceDisplay.textContent = `R$${total}`;
    $incomeDisplay.textContent = `R$${income}`;
    $expenseDisplay.textContent = `-R$${expense}`;
}

//This function at the const init will display in the screen the transcations when the page is loading
const init = () => {
    $transactionsUl.innerHTML = "";
    transactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}

init();

const updateLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
};

const generateID = () => Math.round(Math.random() * 1000000);

const addToTransactionsArray = (transactionAmount, transactionName) => {
    transactions.push({
        id: generateID(),
        name: transactionName,
        amount: Number(transactionAmount)
    });
}

const cleanInputs = () => {
    $inputTransactionName.value = "";
    $inputTransactionAmount.value = "";
}

const handleFormSubmit = event => {
    //Below is the declaration that avoids the default behavior of the form
    event.preventDefault();
    const transactionName = $inputTransactionName.value.trim();
    const transactionAmount = $inputTransactionAmount.value.trim();
    const isSomeInputEmpty = transactionName === "" || transactionAmount === "";
    //The command below checks if the inputs are empty
    if (isSomeInputEmpty) {
        alert("Por favor, preencha tanto o nome tanto o valor da transação");
        return //This return is intented to terminate the function
    }

    addToTransactionsArray(transactionAmount, transactionName);
    init();
    updateLocalStorage();
    cleanInputs();

};

//Create a submit event listener 
$form.addEventListener("submit", handleFormSubmit);