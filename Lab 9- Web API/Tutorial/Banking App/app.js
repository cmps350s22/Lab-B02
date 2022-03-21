import express from 'express'
import router from './routes.js'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(morgan('combined'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
