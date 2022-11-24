import { TestsArray, main } from './array.js';
export class ShowQuestion {
    constructor() {
        this.showArray = new TestsArray().arrayTest;
        for (let i = 0; i < this.showArray.length; i++) {
            let div = document.createElement('div');
            let hr = document.createElement('hr');
            const element = this.showArray[i];
            div.textContent = element.text;
            div.classList.add('queistion');
            main.append(div);
            main.append(hr);
            for (let i = 0; i < element.variants.length; i++) {
                const showInputs = element.variants[i];
                let divForInput = document.createElement('div');
                let inpRadio = document.createElement('input');
                let label = document.createElement('label');
                inpRadio.type = 'radio';
                inpRadio.name = element.variants;
                label.textContent = showInputs;
                inpRadio.id = showInputs;
                inpRadio.required = true;
                divForInput.append(inpRadio);
                divForInput.append(label);
                div.append(divForInput);
            }
        }
    }
}
//# sourceMappingURL=show-question.js.map