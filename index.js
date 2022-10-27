const express = require('express')
const port = 5001
const app = express()
const router = require('./routes/index')

//middleware
app.use(express.json()) 
app.use(router)

app.listen(port, () => {
    console.log('server is listening on port ', port)
})