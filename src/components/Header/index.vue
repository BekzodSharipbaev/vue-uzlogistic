<template>
  <div>
    <div class="header-main w-full flex items-center justify-evenly pt-2 pl-24 pb-4">
      <div class="left-sect hover:cursor-pointer">
        <a href="#"></a>
        <img class="w-[184px] object-cover" src="/src/assets/media/logo.png" alt="logo" />
      </div>
      <div class="middle-sect flex items-center gap-5">
        <div class="email flex items-center gap-3">
          <i class="fa-solid fa-envelope icons text-green-600"></i>
          <p class="text-lg">info@uzlogistic.uz</p>
        </div>
        <div class="phone flex flex-col items-center justify-items-center gap-3 mb-10">
          <span class="text-green-600 text-xl ml-16">Круглосуточно</span>
          <span
            ><i class="fa-solid fa-phone icons text-green-600 mr-3"></i>
            <span class="font-bold">(+998 78) 150-80-08</span></span
          >
        </div>
        <div class="nets flex items-center gap-3">
          <a href="#" class="hover:text-green-600"
            ><i class="fa-brands fa-facebook-f text-xl"> </i
          ></a>
          <a href="#" class="hover:text-green-600 duration-500"
            ><i class="fa-solid fa-paper-plane text-xl"></i
          ></a>
          <a href="#" class="hover:text-green-600 duration-500"
            ><i class="fa-brands fa-whatsapp text-xl"></i
          ></a>
          <a href="#" class="hover:text-green-600 duration-500"
            ><i class="fa-brands fa-linkedin-in text-xl"></i
          ></a>
        </div>
        <div
          class="btn-div flex bg-green-600 items-center h-14 px-4 duration-500 border-b-[6px] border-green-700"
        >
          <a href="#" class="mr-2"><i class="fa-solid fa-file-signature text-xl"></i></a>
          <p>ЗАЯВКА НА ПЕРЕВОЗКУ</p>
        </div>
        <div class="mob-menu">
          <a href=""></a>
          <i class="fa-solid fa-bars text-green-600"></i>
        </div>
      </div>
    </div>
    <div class="right-sect text-white flex justify-between mr-[312px] -mt-6">
      <div class="text-black"></div>
      <ul class="flex items-center">
        <li>
          <a class="text-sm font-bold p-3 hover:bg-green-600 duration-500">ГЛАВНАЯ</a>
        </li>
        <li>
          <a class="text-sm font-bold p-3 hover:bg-green-600 duration-500">О НАС</a>
        </li>
        <li>
          <a class="text-sm font-bold p-3 hover:bg-green-600 duration-500">НАШИ УСЛУГИ</a>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style>
.header-main {
  background-color: rgb(11, 41, 79);
  color: white;
  font-family: 'Oswald', sans-serif;
}

.mob-menu {
  display: none;
}

.icons {
  font-size: 22px;
}
.btn-div:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
  border-color: rgb(9, 32, 63);
}

ul li a {
  background-color: rgb(9, 32, 63);
}
@media (max-width: 991px) {
  .middle-sect {
    display: none;
    margin: auto;
  }
  .mob-menu {
    display: block;
  }
  .right-sect {
    display: none;
  }
}

@media (max-width: 1172px) {
  .btn-div {
    display: none;
  }
}
</style>
