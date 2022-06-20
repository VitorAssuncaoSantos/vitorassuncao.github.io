// First question
const checkNumber = num => {
    num = parseFloat(num)
    if (!num)
        return 0
    return num
}

const sum = (number1, number2) => {
    return number1 + number2
}

document.querySelector("#question1").addEventListener("submit", (event1) => {
    event1.preventDefault()
    const first = document.getElementById("firstNumber")
    const secound = document.getElementById("secondNumber")
    const getValue = document.getElementById("getValue")
    getValue.innerHTML = sum(checkNumber(first.value), checkNumber(secound.value))
})

// Secound question

const compareNumbers = (number01, number02) => {
    if (number01 == number02)
        return 0
    return number01 > number02 ? number01 : number02
}

document.querySelector("#question2").addEventListener("submit", (event2) => {
    event2.preventDefault()
    const one = document.getElementById("number1")
    const two = document.getElementById("number2")
    const results = document.getElementById("result")
    let compared = compareNumbers(checkNumber(one.value), checkNumber(two.value))
    if (compared == 0)
        results.innerHTML = "Os números são iguais"
    else results.innerHTML = compared
})

//Third question

const isPrime = (number01) => {
    let j = 0
    for (let i = 2; i <= number01; i++) {
        if (number01 % i == 0)
            ++j
    }
    if (j == 2)
        return 1
    return 0
}

document.querySelector("#question3").addEventListener("submit", (event3) => {
    event3.preventDefault()
    const theNumber = document.getElementById("theNumber")
    const answer = document.getElementById("results")
    if (isPrime(checkNumber(theNumber.value)))
        answer.innerHTML = "O número é primo"
    else answer.innerHTML = "O número não é primo"
})

// Forth question

const hypotenuse = (number01, number02) => {
    if (number01 < 0 || number02 < 0)
        return null
    return Math.sqrt(Math.pow(number01, 2) + Math.pow(number02, 2))
}

document.querySelector("#question4").addEventListener("submit", (event4) => {
    event4.preventDefault()
    const side1 = document.getElementById("firstSide")
    const side2 = document.getElementById("secoundSide")
    const product = document.getElementById("product")
    let hip = hypotenuse(checkNumber(side1.value), checkNumber(side2.value))
    if (hip == null)
        product.innerHTML = "Insirá valores positivos"
    else product.innerHTML = hip
})

//  Fifth question

const readjustment = (number01, number02) => {
    return number01 + (number01 * (number02 / 100))
}

document.querySelector("#question5").addEventListener("submit", (event5) => {
    event5.preventDefault()
    const salary = document.getElementById("salary")
    const correction = document.getElementById("correction")

})