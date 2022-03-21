import express from 'express'

const app = express()

const port = process.env.PORT || 3000

/*
    http://www.qu.edu.qa/students
    http://www.qu.edu.qa/courses
 */

//http://localhost:3000/api/welcome
//http://localhost:3000/api/accounts
//http://localhost:3000/api/accounts/1001
//http://localhost:3000/api/accounts/?sort=dec & gender=female

app.get('/api/welcome', (req, res) => {
    res.send('welcome to our banking website')
})

app.get('/api/accounts', (req, res)=>{
    const accounts = [
        {
            name : 'Abdulahi',
            accountNo : 123
        },
        {
            name : 'Saeed',
            accountNo : 125
        }
    ]
    res.json(req.query)
})


// npm i -g nodemon
// sudo npm i -g nodemon


app.get('/api/accounts/:accountNo', (req, res)=>{
    res.json(req.params.accountNo)
})




// app.post()
// app.put()
// app.delete()


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
