"use strict";
let input = document.getElementById('input'),
  number = document.querySelectorAll('.numbers div'),
  operatorE = document.querySelectorAll('.operators div'),
  result = document.getElementById('result'),
  clear = document.getElementById('clear'),
  resultDisplayed = false,
  efface = document.querySelector('.numbers p'),
  one = document.querySelector('.one'),
  two = document.querySelector('.two'),
  three = document.querySelector('.three'),
  calculator = document.querySelector('.calculator0')

two.classList.remove('two');
three.classList.remove('three');

let currentInput = '0';
let operator = null;
let prevInput = '0';
let prevResult = null;

function updateDisplay() {
  input = document.getElementById('input');
  input.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' || resultDisplayed) {
    currentInput = number;
    resultDisplayed = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay();
}

function setOperator(op) {
    if (operator && !resultDisplayed) {
      calculateResult();
    } else if (resultDisplayed) {
      prevResult = parseFloat(currentInput);
    }
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
    resultDisplayed = false;
    updateDisplay();
  }
  
function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  operator = null;
  prevInput = '0';
  prevResult = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  prevInput = '0';
  prevResult = null;
  updateDisplay();
}

function calculateResult() {
  const num1 = parseFloat(prevResult !== null ? prevResult : prevInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
    default:
      break;
  }

  operator = null;
  prevInput = currentInput;
  prevResult = parseFloat(currentInput);
  resultDisplayed = true;
  updateDisplay();
}

updateDisplay();




// for (let i = 0; i < number.length; i++) {
//   number[i].addEventListener("click", function(e) {
//     input.innerHTML += e.target.innerHTML
//   });
// };

// result.addEventListener('click' , function(){
//   try {
//     input.innerHTML = eval(input.textContent);
//   } catch (error) {
//     input.innerHTML = 'error'
//   }
// });

// clear.addEventListener("click", function() {
//   input.innerHTML = "";
// });


// efface.addEventListener('click', function() {
//   input.innerHTML = input.innerHTML.slice(0, -1);
// });


one.addEventListener('click', function() {
  calculator.classList.remove('calculator1');
  calculator.classList.remove('calculator2');
  calculator.classList.add('calculator0');
  one.classList.add('one');
  two.classList.remove('two');
  three.classList.remove('three');
  document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
  for (let i = 0; i < document.querySelectorAll('.theme div span').length; i++) {
    document.querySelectorAll('.theme div span')[i].style.color = 'white' 
   };
});

two.addEventListener('click', function() {
  calculator.classList.remove('calculator0');
  calculator.classList.remove('calculator2');
  calculator.classList.add('calculator1');
  two.classList.add('two');
  one.classList.remove('one');
  three.classList.remove('three');
  document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
  for (let i = 0; i < document.querySelectorAll('.theme div span').length; i++) {
    document.querySelectorAll('.theme div span')[i].style.color = 'black' ;  
   };
});

three.addEventListener('click', function() {
  calculator.classList.remove('calculator0');
  calculator.classList.remove('calculator1');
  calculator.classList.add('calculator2');
  three.classList.add('three');
  one.classList.remove('one');
  two.classList.remove('two');
  document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
 for (let i = 0; i < document.querySelectorAll('.theme div span').length; i++) {
  document.querySelectorAll('.theme div span')[i].style.color = 'hsl(52, 100%, 62%)';
 
 };
});