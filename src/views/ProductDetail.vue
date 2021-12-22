<template>
  <div class="text-primary bg-quaternary height-screen">
    <div class="flex justify-center">
      <div v-if="!isLoading" class="w-screen">
        <div class="bg-white p-5 flex justify-center items-center h-80">
          <div class="w-80 flex justify-center items-center">
            <img :src="product.image" alt="" class="h-60">
          </div>
        </div>
        <div class="flex justify-between p-5">
          <div class="font-bold text-2xl">
            $ {{product.price}}
          </div>
          <div>
            <Icon icon="mdi:cards-heart-outline" width="36" />
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

<script lang="ts">
import { useIsLoading } from '@/stores/isLoading';
import axios from 'axios';
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue'
import { Product } from '@/type/Product'
import { Icon } from "@iconify/vue"
export default defineComponent ({
  name: 'ProductDetail',
  data() {
    return {
      product: {} as Product
    }
  },
  components: {
    Icon
  },
  computed: {
    ...mapState(useIsLoading, ['isLoading'])

  },
  methods: {
    async fetchProductDetail() {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.productId}`)
      console.log(data);
      
      this.product = data
    },
    ...mapActions(useIsLoading, ['setIsLoading'])
  },
  async mounted() {
    this.setIsLoading()
    console.log(this.isLoading, 'isLoading');
    
    await this.fetchProductDetail()
    this.setIsLoading()
  }
})
</script>