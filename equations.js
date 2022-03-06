'use strict'


const sectionBox = document.querySelector("body > div > section.box") 
const numArr = ['AC', '%', '/', '+', '-', 'x', 7, 8, 9, 4, 5, 6,
               1, 2, 3, '.', 0, '=']
const sectionDisplay = document.querySelector('body > div.calc > section.display') 
const divCalc = document.querySelector('.calc')

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


  operations.forEach(oppy => { 
    oppy.onclick = () => {
    let o = oppy.textContent
      if (o == "AC") span.textContent = ""

      if (o == "AC" || "%" || 'x' || '+' || '-' || '/')  {
           operations[6].removeAttribute('disabled')
      }
      if (o == ".") { 
           span.textContent += o
           operations[6].setAttribute('disabled','disabled')
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

