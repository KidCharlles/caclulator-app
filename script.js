// helpter function to get and convert current input values as numbers
function getInputs() {
    const input1= Number(document.getElementById("number-1").value);
    const input2 = Number(document.getElementById("number-2").value);
    return { input1, input2};
}

// Addition
document.getElementById("add").addEventListener("click", function() {
    const { input1, input2 } = getInputs(); // object destructuring:
    console.log(input1 + input2); 
})

// Subtraction
document.getElementById("subtract").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    console.log(input1 - input2);
})

// Division
document.getElementById("divide").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    console.log(input1 / input2);
})

// Multiplication
document.getElementById("multiply").addEventListener("click", function() {
    const {input1, input2} = getInputs();
    console.log(input1 * input2);
})