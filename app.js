const calcInput = document.getElementById('display');
const buttons = document.querySelectorAll('button');

calcInput.textContent = '0';

console.table(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        calcInput.textContent === '0' ? (calcInput.textContent = '', calcInput.textContent += button.textContent) 
        : calcInput.textContent += button.textContent;
        
    });
});