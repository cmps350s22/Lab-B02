/*
1. npm init -y
2. npm i express
npm i morgan
npm i fs-extra
npm i uuid

nodemon app.js
nodemon
 */

import express from 'express';
import morgan from 'morgan'
import router from './router.js'

const app = express()
const port = process.env.PORT || 3000

/*
    windows - SET PORT = 5000
    MAC -EXPORT PORT = 5000
 */

// middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api', router)


app.listen(port, ()=>{
    console.log(`server listening on http://localhost:${port}`)
})
