<template>
  <div class="burger relative items-center justify-end w-8 h-5 hidden">
    <FormTransRequest id="formTrans" :class="{ open: isOpen }" />
    <div class="burger-wrapper text-white" @click="toggleMenu" :class="{ active: isBurgerActive }">
      <fa
        v-if="!isBurgerActive"
        :icon="['fas', 'bars']"
        class="text-[1.7rem] duration-300 hover:cursor-pointer hover:text-green-600"
      />
    </div>

    <div :class="{ open: isMenuOpen }" class="sidebar-menu">
      <div class="relative">
        <h1 class="osw text-2xl text-center text-zinc-400">Меню</h1>
      </div>
      <div
        @click="toggleMenu"
        :class="{ active: isBurgerActive }"
        class="flex text-white justify-end absolute top-13 right-10"
      >
        <fa
          :icon="['fas', 'xmark']"
          class="text-[1.7rem] duration-300 hover:cursor-pointer hover:text-green-600"
        />
      </div>

      <div class="menu">
        <div @click="toggleMenu" :class="{ active: isBurgerActive }">
          <a
            @click="$router.push({ name: 'home' })"
            class="osw text-xl text-zinc-200 duration-300 hover:text-green-600"
            >Главная</a
          >
        </div>
        <div @click="toggleMenu" :class="{ active: isBurgerActive }">
          <a
            @click="$router.push({ name: 'about' })"
            class="osw text-xl text-zinc-200 duration-300 hover:text-green-600"
            >О нас</a
          >
        </div>
        <div class="dropdown">
          <a
            class="osw btn dropdown-toggle border-0 text-zinc-200 p-0 text-xl duration-300 hover:text-green-600 focus:text-zinc-200"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Наши услуги
          </a>

          <ul class="dropp dropdown-menu">
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'multi_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:text-white hover:bg-green-600"
                >Мультимодальные контейнерные перевозки
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'auto_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:text-white hover:bg-green-600"
                href="#"
                >Транспортировка автомобилей
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'danger_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:text-white hover:bg-green-600"
                href="#"
                >Перевозка опасных грузов
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'manage_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:text-white hover:bg-green-600"
                href="#"
                >Управление цепочками поставок и проектная логистика
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'terminal_service' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:text-white hover:bg-green-600"
                href="#"
                >Услуги контейнерных терминалов и складские услуги
              </a>
            </li>
          </ul>
        </div>
        <div class="flex justify-center">
          <div
            @click="toggleForm"
            class="btn-block text-center bg-green-600 w-52 py-[11px] duration-500 hover:border-black"
          >
            <div class="btn-content">
              <a href="#" class="h-full w-full text-white">
                <fa :icon="['fas', 'file-signature']" class="text-lg pr-2" />
                <span class="text-sm osw">ЗАЯВКА НА ПЕРЕВОЗКУ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormTransRequest from '@/components/FormTransRequest/index.vue'

export default {
  data() {
    return {
      isBurgerActive: false,
      isMenuOpen: false,
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isBurgerActive = !this.isBurgerActive
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleForm() {
      this.isOpen = !this.isOpen
    }
  },
  components: {
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
.osw {
  font-family: 'Oswald Variable', sans-serif;
}
.dropp {
  background-color: rgb(56, 55, 55);
}
.open {
  display: flex !important;
}
.burger {
  z-index: 50;
  background-color: rgba(0, 0, 0, 0);
}

.burger-wrapper {
  position: absolute;
  width: 30px;
  height: 30px;
}
.btn-block:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
}

@media (max-width: 1029px) {
  .burger {
    display: flex;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .sidebar-menu {
    display: none;
    gap: 20px;
    flex-direction: column;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    overflow-y: auto;
    padding: 50px 40px;
    background-color: rgb(56, 55, 55);
    /* animation: burgerAnimation 0.4s; */
  }
}
</style>
