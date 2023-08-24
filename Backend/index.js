const connectToMongo = require('./db');//importing database as db
const express = require('express');//importing express validator

connectToMongo();//connecting mongodb database 
const port = 5000 
const app = express()
app.use(express.json())

//available routes-endpoint
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})