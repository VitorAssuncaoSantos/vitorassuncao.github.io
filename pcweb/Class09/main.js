const eCaracterEspecial= letra=>{
    const caracterEspecial=[",",".","?","\\","\/","-"]
    return caracterEspecial.indexOf(letra) !==-1?true:false
}

const tratarPalavras= seletorHTML =>
{
    //pegar valor do textarea
    let frase= document.querySelector(seletorHTML).value
    frase=frase.toLowerCase()
    const palavrasLista = frase.split(" ")
     //tratar palavrar
    const palavrasTratadasLista = palavrasLista.map(palavra=>{//Uma função que tem no parâmetro outra função
        const ultLetra = palavra[palavra.length-1]
        const primLetra= palavra[0]
        if(eCaracterEspecial(primLetra))
            palavra=palavra.substr(1,palavra.length)
        if(eCaracterEspecial(ultLetra))
            palavra=palavra.substr(0,palavra.length-1)
        return palavra
    })
    //removendo os espaços vazios
    
    let palavrasTratadasSemEspacosVazios=[]
    for(let i=0;i<palavrasTratadasLista.length;i++){
        if(palavrasTratadasLista[i]!=="")
            palavrasTratadasSemEspacosVazios.push(palavrasTratadasLista[i])
    }
    
    return palavrasTratadasSemEspacosVazios
    
};
const contarPalavras= listaPalavras => listaPalavras.length

const contaLetras = listaPalavras =>{
    return listaPalavras.reduce((contador,palavra)=>{
        return contador + palavra.length
    },0)
}
    
const verificaEstatistica=()=>
{
    //pegar o valor do textarea
    const listaPalavras = tratarPalavras("#input")
    //contar palavras
    const resultadoPalavra= document.getElementById("numWords")
    //constar letras
    const resultadoLetra= document.getElementById("numLetters")
    //exibir resultados
    resultadoPalavra.innerHTML=  contarPalavras(listaPalavras)
    resultadoLetra.innerHTML= contaLetras(listaPalavras)
}

const pesquisa = ()=>{
    //pegar o valor dos caracteres digitados
    const palavrasPesquisa = document.getElementById("search").value
    const texto = document.getElementById("input").value
    const resultadoPesquisa = document.getElementById("result_search")
    texto = texto.replaceAll(palavrasPesquisa, `<mark>${search}</mark>`)
    resultadoPesquisa.innerHTML = texto;
    

}
//botão do textarea
const botao= document.getElementById("input_button")
botao.addEventListener("click", verificaEstatistica)
//botão de pesquisa
const botaoPesquisa = document.getElementById("#search_button")
botaoPesquisa.addEventListener("click",pesquisa)




