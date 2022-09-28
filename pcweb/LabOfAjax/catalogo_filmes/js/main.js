//criação de um objeto para as requisições
let xhttp = new XMLHttpRequest()
let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"

let averageGrade = note => {
    let avg = note.reduce((total,number)=>{
        return total+number
    },0)
    return avg/note.length
}

let createCast = cast=> cast.reduce((listCast,person)=>{return listCast + `<li>${person}</li>`},"")

let createFilm = film =>{
    return `<div>
    <img src="${film.figura}" alt="poster">
    <h2>${film.titulo}</h2>
    <p>${film.generos}</p>
    <p><b>Elenco:</b></p>
    <ul>${createCast(film.elenco)}</ul>
    <h3>Opinião</h3>
    <p>${film.opinioes.descricao}</p>
    </div>`
}

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && xhttp.status == 200)
    {
        console.log(this.responseText)
        let listOfFilm = JSON.parse(this.responseText)
        let sec = document.querySelector("#listOfFilms")
        listOfFilm.forEach(film =>{
            sec.innerHTML += createFilm(film)
        });
    }
}

xhttp.open("GET",url, true)
xhttp.send()