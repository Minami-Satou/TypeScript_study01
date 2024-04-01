"use strict";
const e1 = {
    name: 'max',
    privileges: ['create-sever'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toLocaleString() + b.toLocaleString();
    }
    return a + b;
}
const result = add('Hello', 'TypeScript');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'user1',
};
//# sourceMappingURL=app.js.map