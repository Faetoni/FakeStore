export interface IUpdateProduct {
    title: string
    description: string
    category: string
    price: number
    image: string
}

export interface ProductInterface {
   id: number
   title: string
   description: string
    category: string
   price: number
    image: string
}

export interface CartProductInterface extends ProductInterface {
    count: number
}
