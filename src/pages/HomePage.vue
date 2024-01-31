<template>
  <div class="first-sect pt-20 text-white">
    <div class="container txt-log text-left w-full">
      <h1
        class="text-[30px] w-[250px] lit:w-[400px] sm:text-[40px] sm:w-[550px] lg:text-[70px] lg:w-[900px] mb-4"
      >
        Комплексная технологичная ЛОГИСТИКА
      </h1>
      <p class="w-[240px] lit:w-[400px] sm:w-[550px] lg:w-[630px]">
        Компания СП ООО «Uzlogistic» за короткое время успела стать динамично развивающимся
        3PL-оператором, предоставляющим полный спектр логистических услуг. Мы работаем с любыми
        типами грузов и организовываем поставки из любой точки мира под различными таможенными
        процедурами. Ключевым преимуществом компаний является собственная логистическая
        инфраструктура, а также то, что СП ООО «Uzlogistic» включена в реестр таможенных
        перевозчиков, осуществляющих перевозку товаров, находящихся под таможенным контролем без
        таможенного сопровождения, и в реестр единых поставщиков услуг, что позволяет заключать
        прямые договоры с местными организациями, осуществляющими внешнеторговые операции, без
        проведения тендера.
      </p>
    </div>
    <div class="containerr pt-16 pl-8">
      <div class="flex gap-5">
        <div class="flex items-center gap-3">
          <img class="w-12" src="/public/icons/advantage-1.png" alt="" />
          <p class="w-[130px] text-sm font-normal">Професиональная команда</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="w-12" src="/public/icons/advantage-2.png" alt="" />
          <p class="w-[150px] text-sm font-normal">Обширная география перевозок</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="w-12" src="/public/icons/advantage-3.png" alt="" />
          <p class="w-[100px] text-sm font-normal">58 стран</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="w-12" src="/public/icons/advantage-4.png" alt="" />
          <p class="w-[170px] text-sm font-normal">Более 554 автомобилей</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="w-12" src="/public/icons/advantage-5.png" alt="" />
          <p class="w-[130px] text-sm font-normal">Собственный терминал</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.first-sect {
  background-image: url('public/slider/slide-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100svh - 141px);
  font-family: 'Oswald', sans-serif;
}

.containerr {
  max-width: 1200px;
  margin: 0 auto;
}

.txt-log {
  width: 1140px;
  margin: 0 auto;
}
</style>
