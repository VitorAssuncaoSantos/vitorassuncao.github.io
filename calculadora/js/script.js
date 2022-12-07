const calc = document.querySelector(".calc"); //Recupera o elemento calculadora
const display = document.querySelector(".calc-display"); //Recupera o elemento display

const adicionarDigito = (digito, display) => {
    display.textContent = (display.textContent === "0") ? digito.textContent : display.textContent + digito.textContent
}
calc.addEventListener("click", (e) => {
    let elementoClicado = e.target;

    if (e.target.tagName.toLowerCase() === "button") {
        console.log(`Botão clicado: ${elementoClicado}`)

        //Adicionando valores no display
        /*
            se numero:
                valores display = valor do display + valor da tecla
                
        */
        const digitos = "1234567890".split("")
        console.log(digitos.indexOf(elementoClicado))
        adicionarDigito(elementoClicado, display);
    }
    //tratando operadores aritmédicos

    //adicionando . (decimal)

    //
})

function somar(op1, op2) {
    return op1 + op2;
}


/*Desafios*
número decimal
    adicionar 
*/