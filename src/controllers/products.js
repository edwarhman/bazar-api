export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getAll = async (req, res) => {
    const products = await this.productModel.getAll()
    res.json(products)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const product = await this.productModel.getById({ id })

    res.json(product)
  }
}
