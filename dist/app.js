"use strict";
const userName = 'Max';
let age = 30;
age = 29;
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
const hobbies = ['a', 'b'];
const activeHobbies = ['c', ...hobbies];
const person = {
    name: 'minami',
    age: 24
};
const copiedPerson = person;
console.log(copiedPerson.name);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = add(1, 2, 3, 4);
console.log(addNumbers);
//# sourceMappingURL=app.js.map