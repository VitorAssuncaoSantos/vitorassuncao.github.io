//Questão 1

let x = "global"

function f2() {
    x = "outside"

    function f1() {
        x = "inside"
    }
    f1()
    return x
}
console.log(x) //global
let y = f2()
console.log(y) //inside

//Questão 2

function ocorrencias(texto, termo) {
    //decompoem a frase em conjunto de palavras
    let palavras = texto.split(" ")
    let ocorrencia = palavras.reduce((total, elemento) => {
        return total + (elemento.toLowerCase() == termo.toLowerCase ? 1 : 0)
    }, 0)
    console.log(palavras)
    return ocorrencia
}

console.log(ocorrencias("Lorem, Lorem", "Lorem"))

//Questão 3

let media = (...altura) => altura.reduce((total, element) => total + element, 0) / altura.length

//Questão 4

function recorrente(...altura) {
    let maisOcorrencia = 0
    let ocorrencias = 0
    let recorrente = 0
    altura.forEach(tamanho => {
        altura.forEach(element => {
            if (element == tamanho)
                ++ocorrencias
        })
        if (maisOcorrencia < ocorrencias) {
            maisOcorrencia = ocorrencias
            recorrente = tamanho
        }
        ocorrencias = 0
    })
    return recorrente
}

//Função para calcular a quantidade
//Outra solução usando o método map

// function moda(...lista) {
//     listaOcorrencias = lista.map(altura=>{
//         let numOcorrencia = contaAltura((lista, altura)){

//         }
//     })
// }

//Questão 5
//Há a necessidade de melhora
function produto(...numero) {
    return numero.reduce((total, element) => {
        if (!isNaN(element))
            return total * element
        else throw new Error ` o elemento ${element} não é um número`
    }, 1)
}

/*Questão 6
Letra A*/

let calculaTemperaturaMedia = temperaturaArray => temperaturaArray.reduce((total, element) => total + element, 0) / temperaturaArray.length