<template>
  <div class="wrapper">
    <header class="header relative">
      <FormTransRequest id="formTrans" :class="{ open: isOpen }" />
      <div class="header-top relative w-full top-0 left-0 z-30">
        <div class="container">
          <div class="header_body relative flex justify-between items-center h-32">
            <div class="logo-sect w-1/3">
              <a @click="$router.push({ name: 'home' })" class="w-fit">
                <img class="w-1/2 max_md:w-3/5 max_min:w-full" src="/logo.png" alt="logo" />
              </a>
            </div>

            <div class="email-block flex items-center gap-3 max_md:hidden">
              <fa :icon="['fas', 'envelope']" class="text-green-600 text-2xl"></fa>
              <p class="text-lg max_md:text-base">info@uzlogistic.uz</p>
            </div>
            <div class="phone-numb-block flex items-center gap-3 relative max_lit:hidden">
              <span class="crug absolute -top-6 right-0 text-lg text-green-600 max_md:text-base"
                >Круглосуточно</span
              >
              <fa :icon="['fas', 'phone']" class="text-2xl text-green-600" />
              <p class="text-lg max_md:text-base">(+998 78) <b>150-80-08</b></p>
            </div>
            <div class="nets-block max_md:hidden">
              <ul class="nets_list flex gap-3">
                <li>
                  <a class="text-white" href="#"
                    ><fa
                      :icon="['fab', 'facebook-f']"
                      class="text-lg duration-300 hover:text-green-600"
                  /></a>
                </li>
                <li>
                  <a class="text-white" href="#"
                    ><fa
                      :icon="['fas', 'paper-plane']"
                      class="text-lg duration-500 hover:text-green-600"
                  /></a>
                </li>
                <li>
                  <a class="text-white" href="#"
                    ><fa
                      :icon="['fab', 'whatsapp']"
                      class="text-xl duration-300 hover:text-green-600"
                  /></a>
                </li>
                <li>
                  <a class="text-white" href="#"
                    ><fa
                      :icon="['fab', 'linkedin-in']"
                      class="text-xl duration-300 hover:text-green-600"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              @click="toggleForm"
              class="btn-block relative bg-green-600 px-4 py-[11px] border-b-[6px] border-green-700 duration-500 hover:border-black max_lg:hidden"
            >
              <div class="btn-content">
                <button class="h-full w-full text-white">
                  <fa :icon="['fas', 'file-signature']" class="text-2xl pr-2" />
                  <span class="text-[15px]">ЗАЯВКА НА ПЕРЕВОЗКУ</span>
                </button>
              </div>
            </div>
            <div class="menu absolute top-[6.2rem] right-5 z-50 bg-red-600 w-fit max_lg:hidden">
              <div class="">
                <ul class="flex items-center">
                  <li>
                    <a
                      @click="$router.push({ name: 'home' })"
                      class="text-sm font-bold p-3 text-white hover:bg-green-600 duration-500"
                      >ГЛАВНАЯ</a
                    >
                  </li>
                  <li>
                    <a
                      @click="$router.push({ name: 'about' })"
                      class="text-sm font-bold p-3 text-white hover:bg-green-600 duration-500"
                      >О НАС</a
                    >
                  </li>
                  <li>
                    <div class="dropdown hover:bg-green-600 duration-500">
                      <button class="dropbtn flex gap-3 py-3 px-4 text-sm font-bold">
                        НАШИ УСЛУГИ <fa :icon="['fas', 'caret-down']" />
                      </button>
                      <div class="dropdown-content">
                        <a
                          class="duration-150 hover:text-white"
                          @click="$router.push({ name: 'multi_trans' })"
                          >Мультимодальные контейнерные перевозки</a
                        >
                        <a
                          class="duration-150 hover:text-white"
                          @click="$router.push({ name: 'auto_trans' })"
                          >Транспортировка автомобилей</a
                        >
                        <a
                          class="duration-150 hover:text-white"
                          @click="$router.push({ name: 'danger_trans' })"
                          >Перевозка опасных грузов</a
                        >
                        <a
                          class="duration-150 hover:text-white"
                          @click="$router.push({ name: 'manage_trans' })"
                          >Управление цепочками поставок и проектная логистика</a
                        >
                        <a
                          class="duration-150 hover:text-white"
                          @click="$router.push({ name: 'terminal_service' })"
                          >Услуги контейнерных терминалов и складские услуги</a
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header_burger"><MenuBurger /></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import MenuBurger from '@/components/MenuBurger/index.vue'
import FormTransRequest from '@/components/FormTransRequest/index.vue'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleForm() {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    MenuBurger,
    FormTransRequest
  }
}
</script>

<style scoped>
#formTrans {
  display: none;
}
#formTrans.open {
  display: block;
}
p {
  font-family: 'Oswald Variable', sans-serif;
}
.header-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(11, 40, 79);
}

.menu {
  background-color: rgb(9, 32, 63);
}

.menu li a {
  font-family: 'Oswald Variable', sans-serif;
}

.btn-block:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
}

.crug {
  font-family: 'Roboto', sans-serif;
}

.btn-div:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
  border-color: rgb(9, 32, 63);
}

.dropbtn {
  color: white;
  border: none;
  font-family: 'Oswald Variable', sans-serif;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #062d5d;
  min-width: 330px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: white;
  font-family: 'Oswald Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  padding: 10px 15px;
}

.dropdown-content a:hover {
  background-color: #1a395e;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
