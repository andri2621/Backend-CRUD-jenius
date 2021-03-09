const express       = require('express')
const mongoose      = require('mongoose')
const morgan        = require('morgan')
// const bodyParser    = require('body-parser')

const userRoute     = require('./routes/user')

mongoose.connect('mongodb://localhost:27017/AndiSetiawan', {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server Is Running on Port ${PORT}`)
})

app.use('/api/user', userRoute)