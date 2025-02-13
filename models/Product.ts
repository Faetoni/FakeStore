import type { ProductInterface, IUpdateProduct, CartProductInterface } from '../interfaces/Product'

export class Product {
  private _id: number
  private _title: string
  private _description: string
  private _category: string
  private _price: number
  private _image: string

  static create ({ id, title, description, category, price, image }: ProductInterface) {
    return new Product({ id, title, description, category, price, image })
  }

  static update (updatedUser: IUpdateProduct) {
    // if (updatedUser.email) {
    //   updatedUser.email = new Email({ address: updatedUser.email }).address
    // }

    return updatedUser
  }

  get id (): number {
    return this._id
  }

  get title (): string {
    return this._title
  }

  get description (): string {
    return this._description
  }

  get category (): string {
    return this._category
  }

  get price (): number {
    return this._price
  }

  get image (): string {
    return this._image
  }

  constructor (props: ProductInterface) {
    this._id = props.id
    this._title = props.title
    this._description = props.description
    this._category = props.category
    this._price = props.price
    this._image = props.image
  }
}

export class CartProduct extends Product {
  private _count: number

  static create ({ id, title, description, category, price, image, count }: CartProductInterface) {
    return new CartProduct({ id, title, description, category, price, image, count })
  }

  get count (): number {
    return this._count
  }

  set count (count: number) {
    this._count = count
  }

  constructor (props: CartProductInterface) {
    super(props)
    this._count = props.count
  }
}
