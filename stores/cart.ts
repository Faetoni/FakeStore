import { defineStore } from 'pinia'
import type { CartProductInterface } from '~/interfaces/Product'
import { CartProduct } from '~/models'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: [] as CartProductInterface[]
    }
  },

  getters: {
    cartItemsCount (): number {
      return this.items.reduce((total, item) => {
        total = total + Number(item.count)

        return total
      }, 0)
    },
    cartItemsTotalPrice (): number {
      return this.items.reduce((total, item) => {
        total = total + Number(item.price) * Number(item.count)

        return total
      }, 0)
    }
  },

  actions: {
    changeCount (item: CartProductInterface, count: number) {
      if (count > 0) {
        this.add(item, count)
      }
      else {
        this.remove(item.id)
      }
    },

    add (item: CartProductInterface, count: number) {
      const cartItem = this.items.find(_ => _.id === item.id)

      const cartProductToAdd : CartProductInterface = {
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        image: item.image,
        price: item.price,
        count: 1
      }

      cartItem ? cartItem.count = count : this.items.push(CartProduct.create(cartProductToAdd))
    },

    remove (id: number) {
      this.items.splice(this.items.findIndex(_ => _.id === id), 1)
    }
  }
})
