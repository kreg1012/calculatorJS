const calcInput = document.getElementById('display');
const numbers = document.querySelectorAll('#numberCont button');

calcInput.textContent = '0';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calcInput.textContent === '0' ? (calcInput.textContent = '', calcInput.textContent += number.textContent) 
        : calcInput.textContent += number.textContent;
        
    });
});