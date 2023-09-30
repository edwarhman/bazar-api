export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getAll = async (req, res) => {
    const { search } = req.query
    if (search) {
      const filteredProducts = await this.productModel.searchCoicidences({ search })
      return res.status(200).json(filteredProducts)
    }
    const products = await this.productModel.getAll()
    res.status(200).json(products)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const product = await this.productModel.getById({ id })

    if (!product) {
      res.status(404).json({
        error: 'Product not found'
      })
    }

    res.status(200).json(product)
  }
}
