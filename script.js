let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function appendNumber(value){
    currentInput += value
    display.textContent = currentInput

}

function appendOperator(operator){
    if(currentOperator === "" && operator ==! ".") return
    currentInput += operator
    display.textContent = currentInput
}

function calculate(){
   try{
     let result = eval(currentInput)
     currentInput = result
     display.textContent = currentInput;
}
  catch(error){
     display.textContent = "erro"
     currentInput = ""
  }
  
}

function clearDisplay(){
    currentInput = ""
    display.textContent = currentInput
}