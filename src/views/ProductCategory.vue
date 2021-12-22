<script lang="ts">
import { defineComponent } from "vue"
import { useProductStore } from "@/stores/product"
import { useIsLoading } from "@/stores/isLoading"
import { mapState, mapActions } from 'pinia'
import { Icon } from '@iconify/vue';
export default defineComponent ({
  name: "home",
  components: {
    Icon
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    ...mapState(useIsLoading, ['isLoading'])
  },
  methods: {
    ...mapActions(useProductStore, ['setProductsByCategory']),

    ...mapActions(useIsLoading, ['setIsLoading']),
    getDetailProduct(id: number) {
      this.$router.push({ name: 'ProductDetail', params: { productId: id }})
    }
  },
  async mounted() {
    this.setIsLoading()
    await this.setProductsByCategory(this.$route.params.productCategory)
    this.setIsLoading()
  }
})
</script>

<template>
  <div class="text-primary bg-quaternary height-screen">
    <div class="flex justify-center py-5">
      <div v-if="!isLoading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" >
        <div v-for="product in products" :key="product.id" class="bg-white rounded-md shadow w-36 cursor-pointer" @click="getDetailProduct(product.id)">
          <div class="w-36 h-36 p-3 flex flex-col justify-center items-center ">
            <img :src="product.image" alt="" class="h-4/5">
          </div>
          <div class="h-20 flex flex-col justify-between pb-2">
            <div class="text-xs px-3 line-clamp-2">
              <div>{{product.title}}</div>
            </div>
            <div>
              <div class="px-3 text-sm font-bold">
                <div>$ {{product.price}}</div>
              </div>
              <div class="flex items-center px-2">
                <Icon icon="mdi:star" color="#f4cb00" width="18"/>
                <div class="text-xs px-1">{{product.rating.rate}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-center items-center height-screen">
          <Icon class="animate-spin" icon="mdi:loading" width="36" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>