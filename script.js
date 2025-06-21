// helpter function to get and convert current input values as numbers
function getInputs() {
    const input1= Number(document.getElementById("number-1").value);
    const input2 = Number(document.getElementById("number-2").value);
    return { input1, input2};
}

// Addition
document.getElementById("add").addEventListener("click", function() {
    const { input1, input2 } = getInputs(); // object destructuring:
    const sum = input1 + input2; 
    document.getElementById("result").innerHTML = sum;
})

// Subtraction
document.getElementById("subtract").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    const subtract = input1 - input2;
    document.getElementById("result").innerHTML = subtract;
})

// Division
document.getElementById("divide").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    const divide = input1 / input2;
    document.getElementById("result").innerHTML = divide;
})

// Multiplication
document.getElementById("multiply").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    const multiply = input1 * input2;
    document.getElementById("result").innerHTML = multiply;
})