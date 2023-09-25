export class ProductController {
  constructor ({ productModel }) {
    this.productModel = productModel
  }

  getAll = async (req, res) => {
    const { search } = req.query
    if (search) {
      const filteredProducts = await this.productModel.searchCoicidences({ search })
      return res.json(filteredProducts)
    }
    const products = await this.productModel.getAll()
    res.json(products)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const product = await this.productModel.getById({ id })

    res.json(product)
  }
}
