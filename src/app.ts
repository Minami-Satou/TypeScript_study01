const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age >= 20) {
//   let isAdult = true;
// }

// console.log(isAdult);

//console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = output => {
//   console.log(output);
// };

// printOutput(add(2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}

const hobbies = ['a','b']
const activeHobbies = ['c', ...hobbies]

const person = {
  name: 'minami',
  age: 24
}

const copiedPerson = person
console.log(copiedPerson.name)

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  },0)
}

const addNumbers = add(1,2,3,4)
console.log(addNumbers)


