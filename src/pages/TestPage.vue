<template>
  <div class="carousel-sect">
    <Carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/index.vue'
export default {
  components: {
    Carousel
  }
}
</script>

<style scoped>
.carousel-sect {
  min-height: 100svh;
  background-color: black;
}
</style>
