import express from 'express'

const app = express()

const port = process.env.PORT || 3000

/*
    http://www.qu.edu.qa/students
    http://www.qu.edu.qa/courses
 */
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
    res.json(accounts)
})

app.get('/api/accounts/:accountNo', (req, res)=>{
    res.json(req.params.accountNo)
})
//http://localhost:3000/api/welcome
//http://localhost:3000/api/accounts

// app.post()
// app.put()
// app.delete()


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
