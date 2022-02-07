/*
console.log("Welcome to JS")

let age = 100
let name = 'Ali'

console.log(age, name)

const pi = 3.14
console.log(pi)

console.log(`My Name is ${name} and my age is ${age}`)

age++;
console.log(`age ${age}`)

for (let i = 0; i < 3; i++) {
    console.log(i)
}

age > 50 ? console.log("You are old") : console.log("You are young")
let numbers = ``
for (let i = 0; i < 100; i++) {
    numbers = `${numbers} - ${i}`
}

console.log(numbers)

function add(a, b) {
    return a + b
}

console.log(add(33, 44))
console.log(add('Abdulahi', ' Hassen'))

*/

const numbers = [1,2,3,4]
console.log(numbers)

//add a number to the end
numbers.push(10)
console.log(`After pushing` , numbers)

numbers.unshift(11)
console.log(`After unshift` , numbers)

// Remove the first element
numbers.shift()
console.log(`After shift` , numbers)

// Remove the last element
numbers.pop()
console.log(`After pop` , numbers)

// Remove the first element
numbers.splice(2,2)
console.log(`After splice(2,2)` , numbers)


//
for(let num of numbers){
    console.log(num)
}


