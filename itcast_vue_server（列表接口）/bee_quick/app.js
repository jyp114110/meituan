const express = require('express')
const tools = require('./tools')

const app = express()

app.get('/list', (req, res) => {
  tools
    .readFile('list.json')
    .then(data => {
      res.jsonp(JSON.parse(data))
    })
})

app.listen(3008, () => {
  console.log('vue bee_quick API server is running at： http://localhost:3008/')
})
