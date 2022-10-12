// const sexo = document.getElementById(sex).value
// const idade = document.getElementById(age).value


let createObject = (age, sex) => {
    return { age: age, sex: sex }
}

let sexAge = (people) => {
    let numberMen = 0
    let numberWomen = 0
    let totalAgeWomen = 0
    let totalAgeMen = 0
    let totalAge = 0
    let numberTotal = 0
    let moreEighteen = people.reduce((total, previous) => {
        if (previous >= 18)
            ++total
    }, 0)
    people.forEach(element => {
        if ((element.sex == "M") || (element.sex == "Masculino")) {
            ++numberMen
            totalAgeMen += element.age
        }
        if ((element.sex == "F") || (element.sex == "Feminino")) {
            ++numberWomen
            totalAgeWomen += element.age
        }
        totalAge = totalAgeWomen + totalAgeMen
        numberTotal = numberMen + numberWomen
    })
    totalAge /= numberTotal
    totalAgeMen /= numberMen
    totalAgeWomen /= numberWomen
    console.log(`O número de homens ${numberMen} tem a média de idade de ${totalAgeMen}
    O número de mulheres ${numberWomen} tem a média de idade de ${totalAgeWomen}
    O total de pessoas é ${people.length} que tem média de idade de ${totalAge}`)
}
sexAge([createObject(20, "M"), createObject(20, "Masculino"), createObject(20, "Feminino")])