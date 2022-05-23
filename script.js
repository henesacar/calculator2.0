function add(first,second) {
    let result = parseInt(first)+parseInt(second);  
    return result;  
}

function subtract(first,second) {
    let result = parseInt(first)-parseInt(second);  
    return result; 
}

function divide(first,second) {
    if(second !== 0){
        return parseInt(first)/parseInt(second);
    }else{
        window.prompt("You can't divide by zero!");
    }
}

function multiply(first,second) {
    return parseInt(first)*parseInt(second);
}

function operate(operator,num1,num2) {
    if(operator === "add"){
        return add(num1,num2)
    }else if(operator === "subtract"){
        return subtract(num1,num2);
    }else if(operator === "divide"){
        return divide(num1,num2);
    }else if(operator === "multiply"){
        return multiply(num1,num2);
    }    
}