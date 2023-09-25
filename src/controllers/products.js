export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getAll = async (req, res) => {
    console.log({ model: this.productModel })
    const products = await this.productModel.getAll()
    res.json(products)
  }

  getById = async (req, res) => {
    console.log({ query: req.query })
    const { id } = req.query
    const product = await this.productModel.getById({ id })

    res.json(product)
  }
}
