import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const data = require('../../../db/products.json')

export class ProductModel {
  static async getAll () {
    return data
  }

  static async getById ({ id }) {
    console.log({ id })
    return data.products.find((el) => el.id === id)
  }
}
