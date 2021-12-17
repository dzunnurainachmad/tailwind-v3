<template>
  <div class="h-16 flex items-center w-full bg-primary shadow relative">
    <div>
      <div class="text-quaternary px-5" @click="$router.push('/')">
        Navbar
      </div>
    </div>
    <div class="relative flex flex-col items-center">
      <div class="text-quaternary px-5 py-2 text-sm cursor-pointer" @click="modalCategory">
        Category
      </div>
      <OnClickOutside v-if="toggleCategory" @trigger.stop="modalCategory" class="absolute top-10 bg-white cursor-pointer text-xs shadow">
        <div v-for="category in categories" >
          <div @click.prevent="clickSetCategory(category)" class="p-2 hover:bg-tertiary w-36 text-center">
            {{category}}
          </div>
        </div>
      </OnClickOutside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios'
import { useProductStore } from "@/stores/product"
import { OnClickOutside } from '@vueuse/components'
import { mapActions, mapState } from "pinia";
import { useIsLoading } from "@/stores/isLoading";
export default defineComponent({
  name: "Navbar",
  data() {
    return {
      categories: [],
      toggleCategory: false
    }
  },
  components: {
    OnClickOutside
  },
  methods: {
    async getCategories() {
      const { data } = await axios.get('https://fakestoreapi.com/products/categories')
      this.categories = data
    },
    modalCategory() {
      this.toggleCategory = !this.toggleCategory
    },
    async clickSetCategory(category:any) {
      this.toggleCategory = false
      this.setIsLoading()
      await this.setProductsByCategory(category)
      this.setIsLoading()
    },
    ...mapActions(useProductStore, ['setProductsByCategory']),
    ...mapActions(useIsLoading, ['setIsLoading'])
  },
  mounted() {
    this.getCategories()
  },
})
</script>

