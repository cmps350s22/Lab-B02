import fs from 'fs'
//Synchronous code. Change it to async using callback.
// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/


function getCourses(filename, cb) {
    fs.readFile(filename, (err, data) => {
        if (!err)
            const courses = JSON.parse(data)
            cb(null, courses)
        else
            cb(err, null)
    })
}

getCourses('data/student.json', (err, data) => {
    if (!err) {
        console.log(data)
    } else
        console.log(err)
})

console.log('this is the reminaing code of your application')
console.log('this is the reminaing code of your application')
console.log('this is the reminaing code of your application')
console.log('this is the reminaing code of your application')
console.log('this is the reminaing code of your application')
