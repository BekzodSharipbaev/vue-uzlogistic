<template>
  <div class="relative overflow-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>
