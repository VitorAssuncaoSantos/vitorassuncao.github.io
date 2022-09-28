//criar o objeto XMKHttpRequest
let xhttp = new XMLHttpRequest()
let url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

let criarLista = lista => lista.reduce((elementos,item)=>{return elementos + `<li>${item}</li>`},"")

let criarPrato = prato=>{
    return `<div class="receita">
            <img src="${prato.foto}" alt="${prato.nome}">
            <h3>${prato.nome}</h3>
            <p id="descricao">Descrição da Receita</p>
        </div>
        <div class="ingredientes">
            <ul>
                ${criarLista(prato.ingredientes)}
            </ul>
        </div>
        <div class="preparo">
            <ol>
                ${criarLista(prato.preparo)}
            </ol>
        </div>`
}
xhttp.onreadystatechange = function() {
    //Recebeu uam resposta(readyState == 4)
    //O status de resposta é positiva(xhttpstatus==200)
    if(this.readyState==4 && xhttp.status==200){
        console.log(this.responseText)
        let receitas= JSON.parse(this.responseText)
        let secao = document.querySelector(".receitas")
        receitas.forEach(receita => {
            secao.innerHTML += criarPrato(receita)
        });
        
    }
}

//prepara a requisição
//configurar o objeto AJAX
//Parâmetro 1 - verbo
//Parâmetro 2 - Caminha(URL)
//Parâmetro 3 - Tipo de requisição -- assíncrona (true), síncrona(false)
xhttp.open("GET",url, true)
//envia a requisição
xhttp.send()

