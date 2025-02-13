import { defineStore } from 'pinia'
import type { ProductInterface } from '../interfaces/Product'
import { Product } from '../models/Product'
import { provider, paths } from '~/utils/api/fetch'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      categories: <Array<string>>[],
      products: [] as ProductInterface[],
      categoryProducts: [] as ProductInterface[],
      product: null as ProductInterface | null,
      loading: <boolean>false
    }
  },

  actions: {
    async loadProducts () {
      this.loading = true

      const data: any = await provider.fetch(paths.PRODUCTS)

      this.products = data.map(dProducts => Product.create(dProducts))
      this.loading = false
    },

    async loadProduct (id: number) {
      this.loading = true

      const dProduct: any = await provider.fetch([paths.PRODUCT, { id }])

      this.product = Product.create(dProduct)
      this.loading = false
    },

    async loadCategoryProducts (categoryName: string) {
      this.loading = true

      const data: any = await provider.fetch([paths.CATEGORY_PRODUCT, { id: categoryName }])

      this.categoryProducts = data.map(dProducts => Product.create(dProducts))
      this.loading = false
    },

    async loadCategories () {
      this.loading = true

      const data: any = await provider.fetch(paths.CATEGORIES)

      this.categories = data
      this.loading = false
    },

    initialize () {
      this.loadProducts()
      this.loadCategories()
    }
  }
})
