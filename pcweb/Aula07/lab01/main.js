const checkNumber = num => {
    num = parseFloat(num)
    return
    if (!num || NaN) {
        return
    }

}

const sum = (number1, number2) => {
    return number1 + number2;
}

document.getElementById("toSubmit").addEventListener("click", () => {
    const first = document.getElementById("firstNumber")
    const secound = document.getElementById("secondNumber")
    const getValue = document.getElementById("getValue")
    getValue.innerHTML = sum(parseFloat(first.value), parseFloat(secound.value))
})