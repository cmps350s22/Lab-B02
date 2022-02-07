let cars = ["Saab", "Volvo", "BMW"];
cars.push('Toyota')
console.log(cars)

cars.unshift('Mercedez')
console.log(cars)

function displayArray(cars) {
    for (const car of cars) {
        console.log(car)
    }
}

displayArray(cars)
console.log('---------Sorted ------')
displayArray(cars.sort())