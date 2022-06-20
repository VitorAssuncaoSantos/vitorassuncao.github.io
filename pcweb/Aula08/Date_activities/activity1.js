const button = document.getElementById("button")

button.addEventListener("click", () => {
    // recuperar a data digitada
    const dtBirth = document.querySelector("#born")
    console.log(dtBirth)
    const strBirth = dtBirth.value //It's a string

    const yearBirth = parseInt(strBirth.split("-")[0])
    const monthBirth = parseInt(strBirth.split("-")[1]) - 1
    const dayBirth = parseInt(strBirth.split("-")[2])

    const birthday = new Date(yearBirth, monthBirth, dayBirth)

    console.log(birthday)

    //calcular a diferença entre data de agora e dtBirth
    const now = new Date()
    const diferenceMill = ((now.getTime() - birthday.getTime()))

    //converter para horas o valor calculado
    let livedHours = (diferenceMill / (1000 * 60 * 60)).toFixed(0)

    //exibir na tela o resultado
    const outcome = document.querySelector("#output")
    outcome.innerHTML = `O total de horas vividas foram ${livedHours} horas`


})