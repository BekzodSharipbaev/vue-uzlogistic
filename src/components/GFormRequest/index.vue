<template>
  <div class="wrapper">
    <div class="form-div bg-white pt-2 fixed top-1/2 left-1/2 shadow-2xl overflow-auto z-50">
      <div class="relative">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRpqW2DD25SyvMZeGKjCHwD_c2Z8HSncUdAAAz6a2ydwsKUw/viewform?embedded=true"
          width="640"
          height="830"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Загрузка…</iframe
        >
      </div>
      <div class="absolute top-3 right-3">
        <fa
          @click="myFunction"
          :icon="['fas', 'xmark']"
          class="text-blue-900 text-3xl absolute right-10 top-7 hover:cursor-pointer hover:text-green-600"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    myFunction: Function
  }
}
</script>

<style scoped>
.form-div {
  box-shadow: 0 0 90px 0 rgba(0, 0, 0, 0.3);
  /* min-height: 100svh; */
  transform: translate(-50%, -50%);
  z-index: 50;
}
</style>
