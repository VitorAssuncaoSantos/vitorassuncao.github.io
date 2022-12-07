/*Question 1, 2 and 5*/

function bubbleSort(list) {
    let swap;
    let last = list.length - 1;
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]];
                swap = true;
            }
        }
        last--
    } while (swap)
    return list;
}

/*Question 3*/
function invert(list) {
    let size = list.length - 1;
    for (let i = 0; i < Math.ceil(list.length / 2); i++) {
        [list[i], list[size - i]] = [list[size - i], list[i]];
    }
    return list;
}

/*Question 4*/

const formQuestion4 = document.querySelector('#question4');
const qtdOfNumbers = parseFloat(document.querySelector('#qtdOfNumbers').value);
const listBefore = document.querySelector('#arrayBefore');
const listAfter = document.querySelector('#arrayAfter');
const list = [];

formQuestion4.addEventListener("submit", function manipulateOfArray(e) {
    e.preventDefault();
    const num = document.querySelector('#numbers').value;
    if (list.length < qtdOfNumbers) {
        list.push(num);
        listBefore.textContent += `${num},`;
    }
    if (list.length == qtdOfNumbers) {
        listAfter.textContent = `${invert(list)} `;
        formQuestion4.removeEventListener("submit", manipulateOfArray);
    }
});
formQuestion4.addEventListener("submit", (e) => {
    e.preventDefault();
});
/*Question 6*/

function findIndex(listOfNumbers, number) {
    let indexes = [];
    listOfNumbers.forEach((element, index) => {
        if (element == number)
            indexes.push(index);
    });
    return indexes;
}

/*Question 7*/

// const formQuestion7 = document.querySelector('#question7');

// function fibonacci(position) {
//     let fibonacciSequence = [1, 1];
//     return fibonacciSequence.forEach((element, index) => {
//         if (index != 0) {
//             fibonacciSequence[index + 1] = element + fibonacciSequence[index - 1];
//         }
//         if (index + 1 == position) {
//             return element;
//         }
//     })
// }
// console.log(fibonacci(3));

// formQuestion7.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const numberFromUser = document.querySelector('#numberFibonacci');

// })

// Question 9

const sectionQuestion9 = document.querySelector('#question9');
const jogadasVencedoras = [[0,1,2],[3,4,5],[6,7,8]];
let board = [];
let jogadorDaVez = "X"
const getPlays = (player, board) => {
    let result = [];
    board.forEach((pos, index) => {
        if (pos == player)
            result.push(index);
    })
    return result;
}

const verificaVitoria = (jogadas)=>{
    
}
 
sectionQuestion9.addEventListener("click", (e) => {

    for (let i = 0; i < 9; i++) {
        if (e.target.tagName == "BUTTON") {
            let clickedButton = e.target;
            clickedButton.innerHTML = jogadorDaVez;
            board[clickedButton.id] = jogadorDaVez;
            jogadorDaVez = (jogadorDaVez == 'X') ? 'O' : 'X';
        }
    }
    console.log(getPlays("O", board));
})