<template>
  <div class="wrapper">
    <div class="top-sect">
      <div class="container">
        <div class="multi-title py-28">
          <h1 class="text-6xl">Мультимодальные контейнерные перевозки</h1>
        </div>
      </div>
    </div>
    <div class="multi-sect pt-20">
      <div class="container">
        <div class="multi-content-div">
          <nav aria-label="breadcrumb">
            <ol class="breadCrumb breadcrumb">
              <li class="breadcrumb-item">
                <a @click="$router.push({ name: 'home' })" class="text-green-500 hover:text-black"
                  >Главная</a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Мультимодальные контейнерные перевозки
              </li>
            </ol>
          </nav>
          <div class="multi-content pt-8 flex gap-10">
            <div class="img-div w-11/12">
              <img src="/newbg/image5.jpg" alt="" />
            </div>
            <div>
              <h1 class="text-black text-xl font-bold pb-3">
                Мультимодальные контейнерные перевозки
              </h1>
              <p class="text-zinc-700 pb-4">
                Мультимодальные контейнерные перевозки включают в себя перевозку груза одним
                генеральным перевозчиком различными видами транспорта – поездами, грузовиками,
                самолётами и морскими судами.
              </p>
              <p class="text-zinc-700 pb-4">
                При этом генеральный перевозчик может использовать транспорт своих контрагентов, но
                вся ответственность перед заказчиком лежит на нём.
              </p>
              <p class="text-zinc-700 pb-3">
                Ответственность за всю перевозку и координация контрагентов отличает Uzlogistic как
                3PL-оператора от других перевозчиков, отвечающих каждый только за свой участок пути.
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
.multi-sect {
  background: white;
  min-height: calc(65svh - 128px);
}
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
  .multi-title h1 {
    font-size: 48px;
  }
  .multi-content p {
    font-size: 12px;
  }
  .breadCrumb li {
    font-size: 12px;
  }
  .multi-content h1 {
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
  .multi-title {
    text-align: center;
  }
  .multi-title h1 {
    font-size: 40px;
  }
  .multi-sect {
    padding-top: 20px;
  }
  .breadCrumb li {
    font-size: 19px;
  }
  .multi-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .multi-content p {
    font-size: 19px;
  }
  .multi-content h1 {
    font-size: 25px;
  }
  .img-div {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .multi-title h1 {
    font-size: 33px;
  }
  .breadCrumb li {
    font-size: 16px;
  }
  .multi-content p {
    font-size: 16px;
  }
  .multi-content h1 {
    font-size: 22px;
  }
}
</style>
