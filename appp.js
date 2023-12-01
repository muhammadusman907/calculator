// var screen = document.querySelectorAll("#screen")[0];
// console.log(screen)

// var operator;
// var num1 = "0";
// var num2 = "0";

// function num(numParameter) {
//     if (operator) {
//         //work for num2
//         num2 = num2 + numParameter;
//         screen.value = Number(num2)
//     }
//     else {
//         //work for num1
//         num1 = num1 + numParameter;
//         screen.value = Number(num1);
//     }
// }

// function setOperator(operatorParameter) {
//     console.log(operatorParameter)
//     operator = operatorParameter;

//     screen.value = 0;
// }

// function calculate() {
//     if (operator === "+") { 
//     screen.value = Number(num1) + Number(num2);
//     }
//     else if(operator === "-"){
//         screen.value = Number(num1) - Number(num2);
//     }
//     else if(operator === "x"){
//         screen.value = Number(num1) * Number(num2);
//     }
//     else if(operator === "/"){
//         screen.value = Number(num1) / Number(num2);
//     }
// }


// function clearAll(){
//     operator = undefined;
//     num1 = "0";
//     num2 = "0";
//     screen.value = "0";
// }


// Calculator Code End Here 

var input = document.getElementById("input")
function num(number){
   input.value += number;
} 

function setOperator(opperator) {
    input.value += opperator ; 
    console.log(input.value[input.value - 2])
}