<template>
  <div class="wrapper">
    <div class="top-sect">
      <div class="container">
        <div class="about-title py-28">
          <h1 class="text-6xl">О нашей компании</h1>
        </div>
      </div>
    </div>
    <div class="about-sect pt-20">
      <div class="container">
        <div class="about-content-div">
          <div class="breadcrumb-div">
            <ol class="flex gap-3">
              <li class="text-green-600">
                <a href="#">Главная</a>
              </li>
              <li>
                <p class="text-black">/</p>
              </li>
              <li class="text-black">
                <a href="#">О нас</a>
              </li>
            </ol>
          </div>
          <div class="about-content pt-14">
            <p class="text-black">
              Компания СП ООО «Uzlogistic» создана в 2018 г. и за короткое время успела стать
              динамично развивающимся 3PL-оператором, предоставляющим полный спектр логистических
              услуг. Основными направлениями деятельности являются интермодальные и мультимодальные
              перевозки всеми видами транспорта, а также складские и терминальные услуги внутри и за
              пределами Республики Узбекистан.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped>
a {
  font-family: 'Roboto', sans-serif;
}
.top-sect {
  background:
    linear-gradient(to bottom, rgba(2, 32, 66, 0.705), rgba(3, 32, 65, 0.658)) no-repeat center
      center fixed,
    url('/public/slider/slide-1.jpg') no-repeat center center;
  background-size: cover;
  min-height: calc(45svh - 128px);
}

.about-sect {
  background: white;
  min-height: calc(80svh - 128px);
}
</style>
