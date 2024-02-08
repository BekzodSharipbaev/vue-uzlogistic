<template>
  <div class="relative overflow-hidden">
    <Header />
    <router-view />
    <Contacts />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Contacts from '@/components/Contacts/index.vue'
</script>
