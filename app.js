const calcInput = document.getElementById('display');
const buttons = document.querySelectorAll('button');

console.table(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        calcInput.textContent += button.textContent; 
    });
});