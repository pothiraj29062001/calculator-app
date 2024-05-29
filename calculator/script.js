let firstOperand = ''
let secondOperand = ''
let currentOperator = ''
  function appendToDisplay(value) {
    display.value += value 
  }
  function clearDisplay() {
    display.value= ''
  }
  
  function del() {
    display.value=display.value.slice(0, -1)
  }
  
  function Operator(operator) {
    currentOperator = operator
    firstOperand = document.getElementById('display').value
    document.getElementById('display').value = ''
  }
  
  function calculate() {
    secondOperand = document.getElementById('display').value
    let result

    if (currentOperator === '+') {
      result = Number(firstOperand) + Number(secondOperand)
    } 
    else if (currentOperator === '-') {
      result = Number(firstOperand) - Number(secondOperand)
    }
     else if (currentOperator === '*') {
      result = Number(firstOperand) * Number(secondOperand)
    }
     else if (currentOperator === '/') {
        result = Number(firstOperand) / Number(secondOperand)
    }
    
    document.getElementById('display').value = result
  }