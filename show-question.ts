import {TestsArray, main} from './array.js'

export class ShowQuestion{

   public showArray: any = new TestsArray().arrayTest

   constructor(){

      for (let i = 0; i < this.showArray.length; i++) {
      let div:HTMLDivElement = document.createElement('div')
      let hr:HTMLHRElement = document.createElement('hr')

         const element = this.showArray[i];
         div.textContent = element.text
         div.classList.add('queistion')
         main.append(div)
         main.append(hr)

         for (let i = 0; i < element.variants.length; i++) {
            const showInputs = element.variants[i];
            
            let divForInput:HTMLDivElement = document.createElement('div')
            let inpRadio:HTMLInputElement = document.createElement('input')
            let label:HTMLLabelElement = document.createElement('label')

            inpRadio.type = 'radio'
            inpRadio.name = element.variants
            label.textContent = showInputs
            inpRadio.id = showInputs
            inpRadio.required = true

            divForInput.append(inpRadio)
            divForInput.append(label)

            div.append(divForInput)
         }
      }
   }
}
