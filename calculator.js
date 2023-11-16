function addToDisplay(value) {
    document.calculator.display.value += value;
}

function calculateResult() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (error) {
        alert('Entrada inválida');
    }
}

function clearDisplay() {
    document.calculator.display.value = '';
}