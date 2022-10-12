//criação de um objeto para as requisições
let xhttp = new XMLHttpRequest()
let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
    //função para calcular a média entre as avaliações
let averageGrade = note => {
        let avg = note.reduce((total, number) => {
            return total + number
        }, 0)
        return avg / note.length
    }
    //função para fazer o elenco dos filmes
let createCast = cast => cast.reduce((listCast, person) => { return listCast + `<li>${person}</li>` }, "")
    //função para criar um filme
let createFilm = (listOfFilm, film) => {
        return `<div>
    <img src="${film.figura}" alt="poster">
    <h2>${film.titulo}</h2>
    <p>${film.generos}</p>
    <p><b>Elenco:</b></p>
    <ul>${createCast(film.elenco)}</ul>
    <h3>Opinião</h3>
    <p>${similares(listOfFilm, film.titulosSemelhantes)}</p>
    </div>`
    }
    //função para pesquisar os filmes semelhantes
let findSimilar = (listOfFilm, id) => {
        return listOfFilm.find(element => {
            element.id == id
        })
    }
    //função para retornar as fotos dos filmes semelhantes
let similares = (film, listOfFilm) => {
    let id = film.
    console.log(findSimilar(listOfFilm, film.titulosSemelhantes))
}
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && xhttp.status == 200) {
        console.log(this.responseText)
        let listOfFilm = JSON.parse(this.responseText)
        let sec = document.querySelector("#listOfFilms")
        listOfFilm.forEach(film => {
            sec.innerHTML += createFilm(listOfFilm, film)
        });
    }
}

xhttp.open("GET", url, true)
xhttp.send()