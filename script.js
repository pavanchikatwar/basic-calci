let currentInput = '';

function appendToDisplay(value) {
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = currentInput.slice(-1);

    if (value === '(') {
        if (operators.includes(lastChar) || lastChar === '' || lastChar === '(') {
            currentInput += value;
            document.getElementById('display').innerText = currentInput;
            return;
        }
    }
    if (value === ')') {
        if (!isNaN(lastChar) || lastChar === ')') {
            currentInput += value;
            document.getElementById('display').innerText = currentInput;
            return;
        }
    }
    if (operators.includes(lastChar) && operators.includes(value)) {
        return; 
    }

    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').innerText = currentInput || '0';
}

function calculateResult() {
    if (!currentInput) return; 

    try {
        const result = eval(currentInput);
        document.getElementById('display').innerText = result;
        currentInput = '';
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
        currentInput = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/', '(', ')', '%'];

    if (!isNaN(key) || operators.includes(key) || key === '.') {
        appendToDisplay(key);
    }
    if (key === 'Backspace') {
        backspace();
    }
    if (key === 'Enter') {
        calculateResult(); 
    }
});
