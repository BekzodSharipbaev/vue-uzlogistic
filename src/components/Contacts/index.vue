<template>
  <div>
    <div class="contacts-sect flex items-center gap-24 max_md:flex-col">
      <div
        class="contacts-short w-1/2 h-[41rem] pt-14 pl-64 max_2big:pl-32 max_lg:pl-20 max_md:text-center max_md:pl-0 max_md:w-4/5"
      >
        <div class="contacts-title w-11/12">
          <h1 class="text-xl text-black font-semibold max_md:text-2xl max_min:text-xl">
            Оставьте заявку на бесплатную
          </h1>
          <h2 class="text-2xl text-green-600 font-bold my-3 max_md:text-3xl max_min:text-2xl">
            КОНСУЛЬТАЦИЮ
          </h2>
          <p class="text-neutral-700 my-1 max_md:text-lg max_min:text-base">
            Мы вам перезвоним что бы ответить на Ваши вопросы и обсудим условия договора
          </p>
        </div>
        <form class="pt-4" action="">
          <div class="input-content mb-3 w-10/12 max_md:w-full">
            <p class="text-black max_md:text-lg max_min:text-base">*Ваше имя:</p>
            <div class="inputGroup input-group flex-nowrap">
              <span class="input-group-text duration-300" id="addon-wrapping"
                ><fa
                  :icon="['fas', 'user']"
                  class="iconLabel duration-300 py-1 text-2xl max_min:text-xl"
              /></span>
              <input
                type="text"
                class="form-control"
                aria-label="name"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="input-content mb-3 w-10/12 max_md:w-full">
            <p class="text-black max_md:text-lg max_min:text-base">*Ваш номер телефона:</p>
            <div class="inputGroup input-group flex-nowrap">
              <span class="input-group-text duration-300" id="addon-wrapping"
                ><fa
                  :icon="['fas', 'phone']"
                  class="iconLabel duration-300 py-1 text-2xl max_min:text-xl"
                />
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="phone"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="input-content mb-3 w-10/12 max_md:w-full">
            <p class="text-black max_md:text-lg max_min:text-base">*Ваша организация:</p>
            <div class="inputGroup input-group flex-nowrap">
              <span class="input-group-text duration-300" id="addon-wrapping"
                ><fa
                  :icon="['fas', 'city']"
                  class="iconLabel duration-300 py-1 text-2xl max_min:text-xl"
              /></span>
              <input
                type="text"
                class="form-control"
                aria-label="organization"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="input-content mb-4 w-10/12 max_md:w-full">
            <p class="text-black max_md:text-lg max_min:text-base">
              *Когда вам позвонить по Ташкентскому времени:
            </p>
            <div class="inputGroup input-group flex-nowrap">
              <span class="input-group-text duration-300" id="addon-wrapping"
                ><fa
                  :icon="['fas', 'clock']"
                  class="iconLabel duration-300 py-1 text-2xl max_min:text-xl"
              /></span>
              <input
                type="text"
                class="form-control"
                aria-label="time"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div class="flex justify-end mr-20 max_lg:mb-2 max_md:justify-center max_md:mr-0">
            <span
              class="btn-block bg-green-600 px-5 py-2 duration-500 border-b-[7px] border-green-500"
            >
              <button class="">Отправить</button>
            </span>
          </div>
        </form>
      </div>
      <div class="contacts-content w-1/2 h-[38rem] max_min:w-4/5 max_lit:pt-20">
        <div class="text-gray-800">
          <h1 class="text-6xl text-gray-800 max_lg:text-4xl max_lit:text-3xl">Контакты</h1>
          <br />
          <div class="contacts-info">
            <div class="contacts-info-item flex items-center gap-4 mb-10">
              <p class="iconss bg-green-600 p-[10px]">
                <fa :icon="['fas', 'phone']" class="faaa text-3xl max_lg:text-xl" />
              </p>
              <p class="text-black text-3xl max_lg:text-xl">
                (+998 78) <b class="text-black">150-80-08</b>
              </p>
            </div>
            <div class="contacts-info-item flex items-center gap-4 mb-10">
              <p class="iconss bg-green-600 p-[10px]">
                <fa :icon="['fas', 'fax']" class="faaa text-3xl max_lg:text-xl" />
              </p>
              <p class="text-black text-3xl max_lg:text-xl">
                (+998 78) <b class="text-black">150-80-08</b>
              </p>
            </div>
            <div class="contacts-info-item flex items-center gap-4 mb-10">
              <p class="iconss bg-green-600 p-[10px]">
                <fa :icon="['fas', 'envelope']" class="faaa text-3xl max_lg:text-xl" />
              </p>
              <p class="text-black text-xl max_lg:text-lg">info@uzlogistic.uz</p>
            </div>
            <div class="contacts-info-item flex items-center gap-4 mb-10">
              <p class="iconss bg-green-600 px-[11.3px] py-[8px]">
                <fa :icon="['fas', 'location-dot']" class="faaa text-4xl max_lg:text-xl" />
              </p>
              <p class="text-black text-xl max_lg:text-lg">
                Республика Узбекистан, г.Ташкент, ул. Ойбек, 36
              </p>
            </div>
          </div>
        </div>
        <div class="social-nets pl-5">
          <h1 class="text-black text-[1.5rem] font-bold max_lit:text-[1.3rem]">
            Мы в социальных сетях
          </h1>
          <ul class="nets_list flex gap-4 pt-3">
            <li>
              <a href="#"
                ><fa
                  :icon="['fab', 'facebook-f']"
                  class="text-blue-900 text-2xl hover:text-green-600 duration-500 max_min:text-xl"
                />
              </a>
            </li>
            <li>
              <a href="#"
                ><fa
                  :icon="['fas', 'paper-plane']"
                  class="text-blue-900 text-2xl hover:text-green-600 duration-500 max_min:text-xl"
              /></a>
            </li>
            <li>
              <a href="#"
                ><fa
                  :icon="['fab', 'whatsapp']"
                  class="text-blue-900 text-2xl hover:text-green-600 duration-500 max_min:text-xl"
              /></a>
            </li>
            <li>
              <a href="#"
                ><fa
                  :icon="['fab', 'linkedin-in']"
                  class="text-blue-900 text-2xl hover:text-green-600 duration-500 max_min:text-xl"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.inputGroup input {
  box-shadow: inset 1px 3px 25px -13px black;
}

.inputGroup input:focus {
  box-shadow: inset 1px 3px 25px -13px black;
  border: 1px solid rgb(214, 214, 214);
}

.inputGroup:focus-within span {
  background: green;
}

.inputGroup:focus-within .iconLabel {
  color: #fff !important;
}

.contacts-sect {
  background-image: url('/bg/bg-contacts.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 123svh;
}

.contacts-short {
  background-image: url('/bg/bg-envelope.jpg');
  background-repeat: repeat-y;
  background-size: contain;
  background-position: right top;
  box-shadow: 0 0 90px 0 rgba(0, 0, 0, 0.3);
}

.btn-block {
  transform: skew(-20deg);
}
.btn-block button {
  transform: skew(20deg);
}

.btn-block:hover {
  background-color: rgb(11, 39, 75);
  cursor: pointer;
  border-color: rgb(15, 58, 114);
}

.iconss {
  transform: skew(-10deg);
}

.faaa {
  transform: skew(10deg);
  padding: 2px;
}

@media (max-width: 768px) {
  .contacts-sect {
    background-image: none;
  }
  .contacts-short {
    background-image: none;
    box-shadow: none;
  }
}
</style>
