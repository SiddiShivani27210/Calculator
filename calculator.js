let screen = document.getElementById('screen');
let expression = ""

function append(value) {
    expression += value
    screen.innerText = expression
}

function clearScreen() {
    expression = ''
    screen.innerText = '0';
}

function backspace() {
    expression = expression.slice(0, -1);
    screen.innerText = expression || '0';
}

function calculate() {
    let result = eval(expression)
    expression = result.toString()
    screen.innerText = result;
}