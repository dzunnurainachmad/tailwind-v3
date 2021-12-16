<script lang="ts">
import Navbar from "@/components/Navbar.vue"
import { defineComponent } from "vue";
export default defineComponent({
  components: { Navbar }
})
</script>

<template>
  <div>
    <div class="sticky top-0">
      <Navbar/>
    </div>
    <router-view />
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
