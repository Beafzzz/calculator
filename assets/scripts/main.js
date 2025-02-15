let equation = ""

function appendForEquation(value){
    equation+=value
    document.getElementById('display').value = equation
}

function deleteSymbol(){
    equation = equation.slice(0, -1)
    document.getElementById('display').value = equation
}

function deleteAll(){
    document.getElementById('display').value = ""
    equation = ''
}

function calculatedYO(){
    try{
        document.getElementById('display').value = eval(equation)
        equation = eval(equation)
    }
    catch{
        document.getElementById('display').value = "Ошибка!"
    }
}

