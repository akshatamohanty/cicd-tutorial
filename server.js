const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json('Hello Techladies!')
})

app.get('/:name', (req, res) => {
  res.json(`Hello ${req.params.name}!`)
})

module.exports = app.listen(port)
