<template>
  <div class="wrapper">
    <div class="top-sect">
      <div class="container">
        <div class="manage-title py-28">
          <h1 class="text-6xl">Управление цепочками поставок</h1>
        </div>
      </div>
    </div>
    <div class="manage-sect pt-20">
      <div class="container">
        <div class="manage-content-div">
          <nav aria-label="breadcrumb">
            <ol class="breadCrumb breadcrumb">
              <li class="breadcrumb-item">
                <a @click="$router.push({ name: 'home' })" class="text-green-500 hover:text-black"
                  >Главная</a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Управление цепочками поставок
              </li>
            </ol>
          </nav>
          <div class="manage-content pt-8 flex gap-10">
            <div class="img-div w-4/5">
              <img src="/newbg/image4.jpg" alt="" />
            </div>
            <div class="w-full">
              <h1 class="text-black text-xl font-bold pb-3">
                Управление цепочками поставок и проектная логистика
              </h1>
              <p class="text-zinc-700 pb-4">
                Организация перевозок – это сложный процесс, требующий проработки оптимальных
                маршрутов, выбора подходящих транспортных средств и осуществления других действий,
                позволяющих доставить груз заказчику в положенный срок. Управление цепочками
                поставок является единой и глобальной концепцией, которую реализует крупный
                перевозчик в рамках своей деятельности.
              </p>
              <p class="text-zinc-700 pb-4">
                Проектная логистика Uzlogistic основывается на разработке оптимальных логистических
                решений для доставки груза по адресу с использованием мультимодальных схем
                (прохождение различных этапов пути на подходящих видах транспорта).
              </p>
              <p class="text-zinc-700">
                В целях оказания максимально качественных услуг грузоперевозок Uzlogistic использует
                в своей деятельности концепцию управления, основанную на новейших программных
                решениях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  font-size: 15px;
}
a {
  font-family: 'Roboto', sans-serif;
}
.top-sect {
  background:
    linear-gradient(to bottom, rgba(2, 32, 66, 0.877), rgba(3, 33, 68, 0.671)) no-repeat center
      center fixed,
    url('/bg/bnr-partners.jpg') no-repeat bottom left;
  background-size: cover;
  min-height: calc(45svh - 128px);
}
.breadCrumb li {
  font-family: 'Roboto', sans-serif;
  color: black;
}
.manage-sect {
  background: white;
  min-height: calc(65svh - 128px);
}
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
  .manage-title h1 {
    font-size: 48px;
  }
  .manage-content p {
    font-size: 12px;
  }
  .breadCrumb li {
    font-size: 12px;
  }
  .manage-content h1 {
    font-size: 16px;
  }
  .img-div {
    width: 80%;
  }
}
@media (max-width: 990px) {
  .container {
    max-width: 800px;
  }
  .top-sect {
    background:
      linear-gradient(to bottom, rgba(2, 32, 66, 0.877), rgba(3, 33, 68, 0.671)) no-repeat center
        center fixed,
      url('/bg/bnr-partners.jpg') no-repeat bottom left;
    background-size: cover;
    min-height: calc(40svh - 128px);
  }
  .manage-title {
    text-align: center;
  }
  .manage-title h1 {
    font-size: 40px;
  }
  .manage-sect {
    padding-top: 20px;
  }
  .breadCrumb li {
    font-size: 19px;
  }
  .manage-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .manage-content p {
    font-size: 19px;
  }
  .manage-content h1 {
    font-size: 25px;
  }
  .img-div {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .manage-title h1 {
    font-size: 33px;
  }
  .breadCrumb li {
    font-size: 16px;
  }
  .manage-content p {
    font-size: 16px;
  }
  .manage-content h1 {
    font-size: 22px;
  }
}
</style>
