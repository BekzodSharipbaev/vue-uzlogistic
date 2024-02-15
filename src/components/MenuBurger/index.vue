<template>
  <div class="burger relative items-center justify-end w-8 h-5 hidden max_md:flex">
    <div class="burger-wrapper" @click="toggleMenu" :class="{ active: isBurgerActive }">
      <i v-if="isBurgerActive" class="fa-solid fa-times text-[1.8rem]"></i>
      <i v-else class="fa-solid fa-bars text-[1.7rem]"></i>
      <!-- <span class="burger-icon"></span> -->
    </div>

    <div :class="{ open: isMenuOpen }" class="sidebar-menu">
      <div class="relative">
        <h1 class="osw text-2xl text-center text-zinc-400">Меню</h1>
      </div>
      <div
        @click="toggleMenu"
        :class="{ active: isBurgerActive }"
        class="flex justify-end absolute top-13 right-10"
      >
        <i class="fa-solid fa-times text-[1.7rem]"></i>
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
            class="osw btn dropdown-toggle text-zinc-200 p-0 text-xl duration-300 hover:text-green-600"
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
                class="dropdown-item text-zinc-200 osw duration-300 hover:bg-green-600"
                >Мультимодальные контейнерные перевозки
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'auto_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:bg-green-600"
                href="#"
                >Транспортировка автомобилей
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'danger_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:bg-green-600"
                href="#"
                >Перевозка опасных грузов
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'manage_trans' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:bg-green-600"
                href="#"
                >Управление цепочками поставок и проектная логистика
              </a>
            </li>
            <li @click="toggleMenu" :class="{ active: isBurgerActive }">
              <a
                @click="$router.push({ name: 'terminal_service' })"
                class="dropdown-item text-zinc-200 osw duration-300 hover:bg-green-600"
                href="#"
                >Услуги контейнерных терминалов и складские услуги
              </a>
            </li>
          </ul>
        </div>
        <div class="flex justify-center">
          <div
            class="btn-block text-center bg-green-600 w-52 py-[11px] duration-500 hover:border-black"
          >
            <div class="btn-content">
              <a href="#" class="h-full w-full">
                <i class="fa-solid fa-file-signature text-lg pr-2"></i>
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
export default {
  data() {
    return {
      isBurgerActive: false,
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isBurgerActive = !this.isBurgerActive
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.osw {
  font-family: 'Oswald', sans-serif;
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

@media (max-width: 767px) {
  .burger {
    display: flex;
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
  .menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
