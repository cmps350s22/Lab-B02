import express from 'express'
import morgan from 'morgan'

//port number
const port = 5000
const app = express()


//two types [dynamic , static]
app.use(express.static('public'))
//a middleware
app.use(morgan('dev'))
app.use(express.json())

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//single purpose
//separation of concerns [design pattern]

//repository : the only class allowed to talk to our data
//service : the only class that can communicate with the repo
//router : responsible for handling all the routing
//app for server configurations

