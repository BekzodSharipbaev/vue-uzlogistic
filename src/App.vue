<template>
  <div class="relative overflow-hidden">
    <Header />
    <router-view />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Contacts from '@/components/Contacts/index.vue'
import FormTransRequest from '@/components/FormTransRequest/index.vue'
export default {
  components: {
    FormTransRequest,
    Header,
    Footer,
    Contacts
  }
}
</script>
