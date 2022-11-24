
export let main = document.querySelector('#form')

export class TestsArray{

public arrayTest:any[] = []

constructor(){
   this.arrayTest[0] = {
      text: 'How much is 2+2?',
      variants: [3,4,6,5],
      answer: 4,
   }
   this.arrayTest[1] = {
      text: 'How much is 10+2?',
      variants: [13,14,12,15],
      answer: 12,
   }
   this.arrayTest[2] = {
      text: 'How much is 9-1?',
      variants: [9,8,6,10],
      answer: 8,
   }
   this.arrayTest[3] = {
      text: 'How much is 7*8?',
      variants: [53,54,56,55],
      answer: 56,
   }
   this.arrayTest[4] = {
      text: 'How much is 7*7?',
      variants: [43,44,49,47],
      answer: 49,
   }
   this.arrayTest[5] = {
      text: 'How much is 49+5?',
      variants: [53,54,57,55],
      answer: 54,
   }
   this.arrayTest[6] = {
      text: 'How much is 50/2?',
      variants: [27,24,26,25],
      answer: 25,
   }
   this.arrayTest[7] = {
      text: 'How much is 6*6?',
      variants: [33,34,36,35],
      answer: 36,
   }
   this.arrayTest[8] = {
      text: 'How much is 8*3?',
      variants: [23,24,26,25],
      answer: 24,
   }
   this.arrayTest[9] = {
      text: 'How much is 9*8?',
      variants: [73,74,72,75],
      answer: 72,
   }

  
   // console.log(this.arrayTest[0].answer);

}
}