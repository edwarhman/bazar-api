import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const data = require('../../../db/products.json')

export class ProductModel {
  static async getAll () {
    return data
  }

  static async getById ({ id }) {
    return data.products.find((el) => el.id.toString() === id)
  }

  static async searchCoicidences ({ search }) {
    return data.products.filter((product) => {
      const value = Object.values(product)
      return value
        .join(' ')
        .toLowerCase()
        .match(new RegExp(`${search}`))
    })
  }
}
