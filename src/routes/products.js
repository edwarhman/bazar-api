import { Router } from 'express'
import { ProductController } from '../controllers/products.js'

export const createProductsRouter = ({ productModel }) => {
  const productsRouter = Router()

  const productController = new ProductController({ productModel })

  productsRouter.get('/', productController.getAll)
  productsRouter.get('/:id', productController.getById)

  return productsRouter
}
