'use strict'


const sectionBox = document.querySelector("body > div > section.box"),
      numArr = ['AC', '%', '/', '+', '-', 'x', 7, 8, 9, 4, 5, 6,
               1, 2, 3, '.', 0, '='],
      sectionDisplay = document.querySelector('body > div.calc > section.display'),
      divCalc = document.querySelector('.calc')

function createButtons(value) {

for (let adder = 0; adder < value; adder++) {      
        let numButtons = document.createElement('button') 
        numButtons.textContent = numArr[adder];
        sectionBox.appendChild(numButtons)
      }
}

let span = document.querySelector('div.calc > section.display > span') 


function buttonFunctionality() {
  const button = document.querySelectorAll('button')
  
  //Array of number buttons
   let numbers = Object.values(button).filter(num => { 
         return !isNaN(num.textContent)
   })

   //Array of operator buttons
   let operations = Object.values(button).filter(o => {
      return isNaN(o.textContent) 
   })

 
  

   let firstVal, secVal;



  operations.forEach(oppy => { 
    oppy.onclick = () => {

    let buttonClicked = oppy.textContent

    switch (buttonClicked) {
      case "AC":
        span.teContent = "";
        break;

      case "+" :
      case "x":
      case "/":
      case "%":
      case "-":
        span.textContent = "";
        operations[6].removeAttribute('disabled')
        break;
      
      case ".": 
        span.textContent+="."
        operations[6].setAttribute('disabled', 'disabled')
    }  

    }
  })
  
  

   numbers.forEach(num => { 
      num.onclick = () => {
         span.textContent += num.textContent
         
         
         if (span.textContent.length > 25)
              span.textContent = "Relax Brethren, Num is too big boy"
      }
   })

    
}
createButtons(18)
buttonFunctionality()









 