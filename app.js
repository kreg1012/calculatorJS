const calcInput = document.getElementById('display');
const numbers = document.querySelectorAll('#numberCont button');
const operators = document.querySelectorAll('#operatorCont button');
const entries = [];

calcInput.textContent = '0';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calcInput.textContent === '0' ? (calcInput.textContent = '', calcInput.textContent += number.textContent) 
        : calcInput.textContent += number.textContent;
        
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operator.textContent !== '=' ? (
            entries[0] = calcInput.textContent,
            entries[1] = operator.textContent,
            calcInput.textContent = '', 
            calcInput.textContent += entries[0] + operator.textContent
            ) 
            : alert('notDone');
    })

    });
