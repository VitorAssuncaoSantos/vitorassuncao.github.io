const numbers = [1, 2, 3, 4, 5, 6]

const sum = (numbers) => {
    return numbers.reduce(function(result, number) {
        return result + number
    }, 0)
}
console.log(sum(numbers))