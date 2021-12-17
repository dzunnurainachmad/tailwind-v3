type Rating = {
  count: number,
  rate: number
}

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  rating: Rating,
  category: string,
  image: string,
}

export type {Product}