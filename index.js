const number1 = parseFloat(window.prompt("Enter the first digit"));
const operator = prompt("Enter the arithmetic operator");
const number2 = parseFloat(window.prompt("Enter the second number"));

let answer;
if(operator == '+'){
    answer = number1 + number2;
} else if(operator == '-'){
    answer = number1 - number2;
} else if(operator == '*'){
    answer = number1 * number2;
} else{
    answer = number1/number2;
}

alert(answer)
