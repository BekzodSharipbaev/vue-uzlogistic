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
          <nav aria-label="breadcrumb">
            <ol class="breadCrumb breadcrumb">
              <li class="breadcrumb-item">
                <a @click="$router.push({ name: 'home' })" class="text-green-500 hover:text-black"
                  >Главная</a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">О нас</li>
            </ol>
          </nav>
          <div class="about-content pt-8">
            <p class="text-zinc-800 pb-3">
              Компания СП ООО «Uzlogistic» создана в 2018 г. и за короткое время успела стать
              динамично развивающимся 3PL-оператором, предоставляющим полный спектр логистических
              услуг. Основными направлениями деятельности являются интермодальные и мультимодальные
              перевозки всеми видами транспорта, а также складские и терминальные услуги внутри и за
              пределами Республики Узбекистан.
            </p>
            <p class="text-zinc-800 pb-3">
              Компания имеет статус уполномоченного экономического оператора, что позволяет
              осуществлять таможенные операции с КНР в упрощенном порядке, а также включена в реестр
              таможенных перевозчиков, осуществляющих перевозку товаров, находящихся под таможенным
              контролем без таможенного сопровождения и реестр единых поставщиков услуг, что
              позволит заключать прямые договоры с местными организациями, осуществляющими
              внешнеторговые операции.
            </p>
            <h3 class="text-zinc-800 font-bold text-xl pb-3">
              Ключевым преимуществом компаний является собственная логистическая инфраструктура,
              включающая:
            </h3>
            <p class="text-zinc-800 pb-3">
              100 крупнотоннажных фитинговых железнодорожных платформ; 55 грузовых автомобилей, в
              том числе 10 контейнеровозов, 30 автомобилевозов и 15 автомобильных тягачей;
              логистический центр «Ангрен», расположенный в пригороде Ангрена Ташкентской области.
              Логистический центр оказывает широкий спектр логистических услуг по приёму, хранению и
              отгрузке грузов. Общая площадь территории центра составляет 18,33 гектара, при этом 2
              162,84 квадратных метров приходится на административно-бытовой комплекс, а 3,57
              гектаров занимают приёмоотправочные пути. Помимо этого, на территории логистического
              центра находится таможенный склад общей площадью 4,2 гектара, а также необходимая
              техника для разгрузочно-погрузочных работ, включая козловой кран мощностью до 50 тонн.
            </p>
            <p class="text-zinc-800">
              Компания постоянно развивает свои возможности и проектные мощности в целях роста
              потенциала и расширения географии перевозки грузов.
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

.breadCrumb li {
  font-family: 'Roboto', sans-serif;
  color: black;
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

@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
  .about-title h1 {
    font-size: 48px;
  }
  .about-content p {
    font-size: 12px;
  }
  .breadCrumb li {
    font-size: 12px;
  }
  .about-content h3 {
    font-size: 16px;
  }
}
@media (max-width: 990px) {
  .container {
    max-width: 800px;
  }
  .top-sect {
    background:
      linear-gradient(to bottom, rgba(2, 32, 66, 0.705), rgba(3, 32, 65, 0.658)) no-repeat center
        center fixed,
      url('/public/slider/slide-1.jpg') no-repeat top left;
    background-size: cover;
    min-height: calc(40svh - 128px);
  }
  .about-title {
    text-align: center;
  }
  .about-title h1 {
    font-size: 40px;
  }
  .about-sect {
    padding-top: 20px;
  }
  .breadCrumb li {
    font-size: 19px;
  }
  .about-content p {
    font-size: 19px;
  }
  .about-content h3 {
    font-size: 25px;
  }
}

@media (max-width: 500px) {
  .about-title h1 {
    font-size: 33px;
  }
  .breadCrumb li {
    font-size: 16px;
  }
  .about-content p {
    font-size: 16px;
  }
  .about-content h3 {
    font-size: 22px;
  }
}
</style>
