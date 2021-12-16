import { defineStore } from 'pinia'
export const useIsLoading = defineStore({
  id: 'isLoading',
  state: () => ({
    isLoading: false
  }),
  actions: {
    async setIsLoading() {
      this.isLoading = !this.isLoading
    },
  }
})
