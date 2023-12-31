import express from 'express'
import { createProductsRouter } from './routes/products.js'
import 'dotenv/config.js'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT ?? 3000

export const createApp = ({ productModel }) => {
  app.use(morgan('tiny'))
  app.get('/', (req, res) => {
    res.send('hello World')
  })

  app.use('/products', createProductsRouter({ productModel }))

  app.listen(port, () => {
    console.log('Bazar API listening to: ' + port)
  })
}
