let equation = ""

function appendForEquation(value){
    equation+=value
    document.getElementById('display').value = equation
}

function deleteAll(){
    document.getElementById('display').value = ""
}

function calculatedYO(){
    document.getElementById('display').value = eval(equation)
}