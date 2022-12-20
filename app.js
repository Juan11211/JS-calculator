const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')


let calculation = [] // everything we click will be stored in array
let accumulativeCaculation 

function calculate(button){
    const value = button.textContent
    if(value === 'C'){
        calculation = []
        screenDisplay.textContent = ' '
    } else if ( value === '='){ 
           screenDisplay.textContent = eval(accumulativeCaculation) // eval method 
    } else { 
        calculation.push(value)
    accumulativeCaculation = calculation.join('')
    screenDisplay.textContent = accumulativeCaculation

    }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button))) // everytime you do eventListener you gotta pass in callback function