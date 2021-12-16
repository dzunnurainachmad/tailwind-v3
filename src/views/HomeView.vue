<script lang="ts">
import { defineComponent } from "vue"
import { useProductStore } from "@/stores/product"
import { useIsLoading } from "@/stores/isLoading"
import { mapState, mapActions } from 'pinia'
import { Icon } from '@iconify/vue';
export default defineComponent ({
  name: "App",
  components: {
    Icon
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    ...mapState(useIsLoading, ['isLoading'])
  },
  methods: {
    ...mapActions(useProductStore, ['setProducts']),

    ...mapActions(useIsLoading, ['setIsLoading'])
  },
  async mounted() {
    this.setIsLoading()
    await this.setProducts()
    this.setIsLoading()
  }
})
</script>

<template>
  <div class="text-primary bg-quaternary height-screen">
    <div class="flex justify-center">
      <div v-if="!isLoading" >
        <div v-for="product in products" :key="product.id">
          <div class="bg-white w-32 h-32 p-2 flex justify-center items-center">
            <img :src="product.image" alt="" class="h-20">
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

<style scoped>
.height-screen {
  min-height: calc(100vh - 4rem);
}
</style>