<template>
  <div class="wrapper">
    <div class="container">
      <div
        class="form-request fixed top-1/2 left-1/2 px-16 py-10 shadow-2xl w-7/12 overflow-auto max_xl:h-[90%] max_xl:w-[80%] max_md:px-8 max_min:py-5 max_min:px-5"
      >
        <div class="form-content">
          <div class="flex justify-between">
            <h1 class="text-2xl relative font-semibold text-green-600 pb-4">ЗАЯВКА НА ПЕРЕВОЗКУ</h1>
            <fa
              @click="myFunction"
              :icon="['fas', 'xmark']"
              class="text-blue-900 text-3xl absolute right-10 top-7 hover:cursor-pointer hover:text-green-600"
            />
          </div>
          <p class="text-black pb-5 max_xl:pb-0">
            Мы вам перезвоним чтобы ответить на Ваши вопросы и обсудим условия договора
          </p>
          <form class="" action="">
            <div class="first-line flex gap-12 mb-8 max_md:flex-col max_md:gap-5 max_md:mb-5">
              <div class="input-content w-10/12 max_md:w-11/12 max_sm:w-full">
                <p class="text-black max_md:text-lg max_min:text-base">*Ваше имя:</p>
                <div class="inputGroup input-group flex-nowrap">
                  <span class="input-group-text duration-300" id="addon-wrapping"
                    ><fa
                      :icon="['fas', 'user']"
                      class="iconLabel duration-300 py-1 text-2xl text-black max_min:text-xl"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="name"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="input-content w-10/12 max_md:w-11/12 max_sm:w-full">
                <p class="text-black max_md:text-lg max_min:text-base">*Ваш номер телефона:</p>
                <div class="inputGroup input-group flex-nowrap">
                  <span class="input-group-text duration-300" id="addon-wrapping"
                    ><fa
                      :icon="['fas', 'phone']"
                      class="iconLabel duration-300 py-1 text-2xl text-black max_min:text-xl"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="phone"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div class="second-line flex gap-12 mb-8 max_md:flex-col max_md:gap-5 max_md:mb-5">
              <div class="input-content w-10/12 max_md:w-11/12 max_sm:w-full">
                <p class="text-black max_md:text-lg max_min:text-base">*Ваша организация:</p>
                <div class="inputGroup input-group flex-nowrap">
                  <span class="input-group-text duration-300" id="addon-wrapping"
                    ><fa
                      :icon="['fas', 'city']"
                      class="iconLabel duration-300 py-1 text-2xl text-black max_min:text-xl"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="organization"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="input-content w-10/12 max_md:w-11/12 max_sm:w-full">
                <p class="text-black max_md:text-lg max_min:text-base">E-mail:</p>
                <div class="inputGroup input-group flex-nowrap">
                  <span class="input-group-text duration-300" id="addon-wrapping">
                    <fa
                      :icon="['fas', 'envelope']"
                      class="iconLabel duration-300 py-1 text-2xl text-black max_min:text-xl"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="organization"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
            </div>
            <div class="third-line flex gap-12 mb-8 max_md:flex-col max_md:gap-5 max_md:mb-5">
              <div class="flex flex-col w-1/2 max_md:w-11/12 max_sm:w-full">
                <p class="text-black">*Виды услуг:</p>
                <select class="formSel form-select p-[0.7rem]" aria-label="Default select example">
                  <option selected></option>
                  <option class="osw text-black" value="1">ЖД перевозки</option>
                  <option class="text-black" value="2">Автомобильные перевозки</option>
                  <option class="text-black" value="3">Мультимодальные перевозки</option>
                  <option class="text-black" value="4">Комплексная логистика</option>
                  <option class="text-black" value="5">Авиаперевозки</option>
                </select>
              </div>
              <div class="flex flex-col w-1/2 max_md:w-11/12 max_sm:w-full">
                <p class="text-black">*Тип опасности товара:</p>
                <select class="formSel form-select p-[0.7rem]" aria-label="Default select example">
                  <option selected></option>
                  <option class="text-black" value="1">One</option>
                  <option class="text-black" value="2">Two</option>
                  <option class="text-black" value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="fourth-line mb-8 max_md:w-11/12 max_sm:w-full">
              <p class="text-black">Тип товара должны написать сами:</p>
              <input
                class="formSel p-[0.7rem] form-control"
                type="text"
                aria-label="default input example"
              />
            </div>
            <div class="fifth-line flex gap-12 mb-8 max_md:flex-col max_md:gap-5 max_md:mb-5">
              <div class="flex flex-col w-1/2 max_md:w-11/12 max_sm:w-full">
                <p class="text-black">Откуда забирать товар:</p>
                <input
                  class="formSel p-[0.7rem] form-control"
                  type="text"
                  aria-label="default input example"
                />
              </div>
              <div class="flex flex-col w-1/2 max_md:w-11/12 max_sm:w-full">
                <p class="text-black">Куда отвезти товар:</p>
                <input
                  class="formSel p-[0.7rem] form-control"
                  type="text"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div class="six-line flex gap-12 mb-8 max_md:flex-col max_md:gap-5 max_md:mb-5">
              <div class="input-content w-10/12 max_md:w-11/12 max_sm:w-full">
                <p class="text-black max_md:text-lg max_min:text-base">Период доставки товара:</p>
                <div class="inputGroup input-group flex-nowrap">
                  <span class="input-group-text duration-300" id="addon-wrapping"
                    ><fa
                      :icon="['fas', 'calendar-days']"
                      class="iconLabel duration-300 py-1 text-3xl text-black max_min:text-xl"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="organization"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="flex flex-col w-1/2 max_md:w-11/12 max_sm:w-full">
                <p class="text-black">Дополнительные заметки:</p>
                <input
                  class="formSel p-[0.7rem] form-control max_md:w-full max_sm:w-full"
                  type="text"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div class="flex justify-end max_lg:mb-2 max_md:justify-center max_md:mr-0">
              <span
                class="btn-block bg-green-600 px-5 py-2 duration-500 border-b-[7px] border-green-500"
              >
                <button class="">Отправить</button>
              </span>
            </div>
          </form>
        </div>
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
p {
  font-size: 15px;
}
.osw {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
}
.form-request {
  background-image: url('/bg/bg-envelope.jpg');
  background-repeat: repeat-y;
  background-size: contain;
  background-position: right top;
  box-shadow: 0 0 90px 0 rgba(0, 0, 0, 0.3);
  min-height: 100svh;
  transform: translate(-50%, -50%);
  z-index: 50;
}
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
.formSel {
  box-shadow: inset 1px 3px 25px -13px black;
}
.formSel:focus {
  box-shadow: inset 1px 3px 25px -13px black;
  border: 1px solid rgb(214, 214, 214);
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

@media (max-width: 768px) {
  .form-request {
    background-image: none;
    background-color: white;
  }
}
</style>
