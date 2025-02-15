let equation = ""

function appendForEquation(value){
    equation+=value
    document.getElementById('display').value = equation
}

function deleteSymbol(){
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

function deleteAll(){
    document.getElementById('display').value = ""
    equation = ''
}

function calculatedYO(){
    document.getElementById('display').value = eval(equation)
    equation = ''
}