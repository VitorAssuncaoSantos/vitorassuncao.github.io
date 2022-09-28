//First Problem 
function a (){
    const numbers = []
    let num=  document.getElementById("n1")
    numbers.push(parseFloat(num.value))
    
    const sum = numbers.reduce((acumalation, valueNow)=>{
        return acumalation+valueNow
    }) 

    const sumOdds = numbers.reduce((acumalation, valueNow) =>{
        if(valueNow%2!==0)
            acumalation += valueNow
        return acumalation
    })

    const product = numbers.reduce((acumalation, valueNow)=>{
        return acumalation*valueNow
    }) 
    document.getElementById("result")= sum
    console.log(sum)
}
  
