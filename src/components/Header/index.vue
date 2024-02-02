<template>
  <div class="wrapper">
    <header class="header">
      <div class="header-top relative w-full top-0 left-0 z-30">
        <div class="container">
          <div class="header_body relative flex justify-between items-center h-32">
            <div class="logo-sect w-1/3">
              <a href="#">
                <img class="w-1/2 max_md:w-3/5 max_min:w-full" src="/public/logo.png" alt="logo" />
              </a>
            </div>
            <div class="header_burger hidden">
              <span></span>
            </div>
            <div class="email-block flex items-center gap-3 max_min:hidden">
              <i class="fa-solid fa-envelope text-green-600 text-2xl"></i>
              <p class="text-lg max_md:text-base">info@uzlogistic.uz</p>
            </div>
            <div class="phone-numb-block flex items-center gap-3 relative max_lit:hidden">
              <span class="absolute -top-6 right-0 text-lg text-green-600 max_md:text-base"
                >Круглосуточно</span
              >
              <i class="fa-solid fa-phone icons text-green-600 text-2xl"></i>
              <p class="text-lg max_md:text-base">(+998 78) <b>150-80-08</b></p>
            </div>
            <div class="nets-block max_md:hidden">
              <ul class="nets_list flex gap-3">
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-facebook-f text-xl hover:text-green-600 duration-500">
                    </i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i
                      class="fa-solid fa-paper-plane text-xl hover:text-green-600 duration-500"
                    ></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa-brands fa-whatsapp text-xl hover:text-green-600 duration-500"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i
                      class="fa-brands fa-linkedin-in text-xl hover:text-green-600 duration-500"
                    ></i
                  ></a>
                </li>
              </ul>
            </div>
            <div
              class="btn-block bg-green-600 px-4 py-[11px] border-b-[6px] border-green-700 duration-500 hover:border-black max_lg:hidden"
            >
              <div class="btn-content">
                <a href="#" class="h-full w-full">
                  <i class="fa-solid fa-file-signature text-2xl pr-2"></i>
                  <span class="text-[15px]">ЗАЯВКА НА ПЕРЕВОЗКУ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <!-- <div>
    <div class="header-main flex items-center justify-evenly pt-2 pl-24 pb-4">
      <div class="container">
        <div class="left-sect hover:cursor-pointer">
          <a href="#"></a>
          <img class="w-[100px] lg:w-[184px] object-cover" src="/public/logo.png" alt="logo" />
        </div>
        <div class="middle-sect hidden sm:flex items-center gap-5">
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
    </div>
    <div class="right-sect hidden text-white lg:flex justify-between mr-[312px] -mt-6">
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
  </div> -->
</template>

<script></script>

<style>
p {
  font-family: 'Oswald', sans-serif;
}

.header-top::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(11, 41, 79);
}

.btn-block:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
}

.menu {
  background-color: rgb(9, 32, 63);
}

.btn-div:hover {
  background-color: rgb(9, 32, 63);
  cursor: pointer;
  border-color: rgb(9, 32, 63);
}
</style>
