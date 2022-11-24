import { TestsArray, main } from './array.js';
import { ShowQuestion } from './show-question.js';
class BtnLogic {
    constructor() {
        new ShowQuestion();
        let btn = document.createElement('button');
        btn.classList.add('button');
        btn.textContent = 'CHECK';
        btn.type = 'submit';
        let bill = 0;
        let percent = 0;
        let divresult = document.createElement('div');
        let restartBtn = document.createElement('button');
        restartBtn.textContent = 'restart';
        restartBtn.addEventListener('click', function () {
            window.scrollTo(0, 0);
            location.reload();
        });
        btn.addEventListener('click', function (e) {
            let inputs = document.querySelectorAll('input');
            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];
                if (input.checked) {
                    let array = new TestsArray().arrayTest;
                    for (let i = 0; i < array.length; i++) {
                        const element = array[i];
                        if (input.id == element.answer) {
                            bill += 1;
                            percent += 10;
                        }
                        if (percent >= 70) {
                            divresult.classList.add('complited');
                            divresult.textContent = `You win! You have ${percent}% and you scored ${bill} points out of ${array.length} `;
                            divresult.append(restartBtn);
                        }
                        else {
                            divresult.classList.add('not-complited');
                            divresult.classList.remove('complited');
                            divresult.textContent = `You lose! You have ${percent}% and you scored ${bill} points out of ${array.length} :(`;
                            divresult.append(restartBtn);
                        }
                        if (divresult) {
                            btn.disabled = true;
                        }
                        input.checked = false;
                    }
                }
            }
        });
        main.append(divresult);
        main.append(btn);
    }
}
new BtnLogic();
//# sourceMappingURL=main.js.map