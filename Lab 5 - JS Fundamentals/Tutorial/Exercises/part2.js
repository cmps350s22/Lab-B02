function add(a, b) {
    return a + b
}

const mult = function (a, b) {
    return a * b
}

function calc(a, b, theFunction) {
    return theFunction(a, b)
}

const a = 12
const b = 22

console.log(calc(12, 22, add))
console.log(calc(12, 22, mult))
console.log(`Pass calc(a, b, mult)`, calc(a, b, mult))
console.log(`When we pass the whole declation`, calc(12, 22, function (a, b) {
    return a * b
}))

console.log(`When we pass the whole declation`, calc(12, 22, (a, b) => a * b))

function add(a, b) {
    return a + b
}

const add3 = (a, b) => a + b

function display(c) {
    console.log(c)
}

function max(a, b) {
    if(a > b)
        return a;
    else
        return b;
}

(a, b) => a > b ? a : b
function display(a) {
    console.log(a)
}
a => console.log(a)
console.log(`Multiplication`, mult(12, 15))
console.log(`Addition`, add(22, 11))