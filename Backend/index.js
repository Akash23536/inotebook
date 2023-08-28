const connectToMongo = require('./db');//importing database as db
const express = require('express');//importing express validator
var cors = require('cors')

connectToMongo();//connecting mongodb database 
const app = express()
const port = 5000 

app.use(cors())
app.use(express.json())

//available routes-endpoint
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook Backend listening at  http://localhost:${port}`)
})