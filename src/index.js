import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello World')
})

app.listen(port, () => {
  console.log('Bazar API listening to: ' + port)
})
