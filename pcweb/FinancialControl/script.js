/*Reference to the transaction Ul*/
const transactionUl = document.querySelector("#transactions")
const incomeDisplay = document.querySelector("#money-plus")
const expenseDisplay = document.querySelector("#money-minus")
const balanceDisplay = document.querySelector("#balance")
const form = document.querySelector("#form")
const inputTransactionName = document.querySelector("#text")
const inputTransactionAmount = document.querySelector("#amount")

/* Array of objects */

const localStorageTransactions = JSON.parse(localStorage
    .getItem("transactions"))
let transaction = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID => {
    transaction = transaction
        .filter(transaction => transaction.id !== ID)
    updateLocalStorage()
    init()
}

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount);
    //Creating a new HTML element
    const li = document.createElement('li')
        //Adding a new class to the element li
    li.classList.add(CSSClass)
    li.innerHTML = `${transaction.name} <span>${operator}R$${amountWithoutOperator}</span><button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>`
        //The prepend method adds the new li to be the first child 
    transactionUl.prepend(li)
}


const updateBalanceValues = () => {
    //Pay attention to the different formatting of the methods
    const transactionsAmounts = transaction
        .map(transaction => transaction.amount)
    const total = transactionsAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2)
    const income = transactionsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    const expense = Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2))

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `- R$ ${expense}`
}

//This function at the const init will desplay in the screen the transcations
const init = () => {
    transactionUl.innerHTML = ''
    transaction.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}
init()

const updateLocalStorage() => {
    localStorage.setItem("transactions", JSON.stringify(transaction))
}

//This function returns a random number from 0 to 100.
const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()
    if (transactionName === "" || transactionAmount === "") {
        alert("Por favor, preencha tanto o nome quanto o valor da transação")
        return //This return is intented to terminate the function
    }
    const transaction = {
        id: generateID(),
        name: transactionName,
        amount: Number(transactionAmount)
    }

    transaction.push(transaction)
    init()
    updateLocalStorage()

    inputTransactionAmount.value = ""
    inputTransactionName.value = ""
})

// 1:05:56