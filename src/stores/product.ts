import { defineStore } from 'pinia'
import axios from 'axios'
import { Product } from '@/type/Product'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [] as Product[]
  }),
  getters: {
  },
  actions: {
    async setProducts() {
      const { data } = await axios.get('https://fakestoreapi.com/products?limit=10')
      this.products = data
    },
    async setProductsByCategory(category: any) {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      console.log(data);
      
      this.products = data
    }
  }
})
