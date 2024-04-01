type Admin = {
    name : string;
    privileges: string[];
}

type Employees = {
    name: string
    startDate: Date
}

type ElevatedEmploee = Admin & Employees

const e1: ElevatedEmploee = {
    name: 'max',
    privileges: ['create-sever'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable | Numeric

function add(a: number, b:number): number
function add(a: string, b:string): string
function add(a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toLocaleString() + b.toLocaleString()
    }
    return a + b
}

const result = add('Hello', 'TypeScript')
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    // job: {
    //     title: 'Developer',
    //     description: 'TypeScript'
    // }
}
// console.log(fetchedUserData?.job?.title)


// type UnknowEmployee = Employees | Admin

// function printEmployeeInformation(emp: UnknowEmployee){
//     console.log(emp.name)
//     if('privileges' in emp){
//         console.log('Privileges' + emp.privileges)
//     }
//     if('startDate' in emp){
//         console.log('Start Date' + emp.startDate)
//     }
// }

// printEmployeeInformation(e1)


// interface Bird {
//     type: 'bird',
//     flyingSpeed: number
// }

// interface Horse {
//     type: 'horse',
//     runningSpeed: number;
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal){
//     let speed
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break
//         case 'horse':
//             speed = animal.runningSpeed
//             break
//     }
//     console.log('移動速度：' + speed)
// }

// moveAnimal({
//     type: 'bird',
//     flyingSpeed: 200
// })

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')
// const userInputElement = document.getElementById('user-input')

// if(userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'aaa'
// }

// // userInputElement.value = 'こんにちは'


// interface ErrorContainer {
//     [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//     email: '正しいメールアドレスではありません。'
// }
