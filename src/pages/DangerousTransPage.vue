<template>
  <div class="wrapper">
    <div class="top-sect">
      <div class="container">
        <div class="danger-title py-28">
          <h1 class="text-6xl">Перевозка опасных грузов</h1>
        </div>
      </div>
    </div>
    <div class="danger-sect pt-20">
      <div class="container">
        <div class="danger-content-div">
          <nav aria-label="breadcrumb">
            <ol class="breadCrumb breadcrumb">
              <li class="breadcrumb-item">
                <a @click="$router.push({ name: 'home' })" class="text-green-500 hover:text-black"
                  >Главная</a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Перевозка опасных грузов</li>
            </ol>
          </nav>
          <div class="danger-content pt-8 flex gap-10">
            <div class="img-div w-11/12">
              <img src="/newbg/image2.jpg" alt="" />
            </div>
            <div>
              <h1 class="text-black text-xl font-bold pb-3">Перевозка опасных грузов</h1>
              <p class="text-zinc-700 pb-4">
                Перевозка опасных грузов всегда сопровождается различными рисками и только
                профессиональный перевозчик может взять на себя эту ответственность.
              </p>
              <p class="text-zinc-700 pb-4">
                Все транспортные средства Uzlogistic и его контрагентов, используемые для перевозки
                опасных грузов, оснащены специальным оборудованием и системами, позволяющими
                осуществлять безопасную транспортировку грузов.
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
.danger-sect {
  background: white;
  min-height: calc(65svh - 128px);
}
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
  .danger-title h1 {
    font-size: 48px;
  }
  .danger-content p {
    font-size: 12px;
  }
  .breadCrumb li {
    font-size: 12px;
  }
  .danger-content h1 {
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
  .danger-title {
    text-align: center;
  }
  .danger-title h1 {
    font-size: 40px;
  }
  .danger-sect {
    padding-top: 20px;
  }
  .breadCrumb li {
    font-size: 19px;
  }
  .danger-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .danger-content p {
    font-size: 19px;
  }
  .danger-content h1 {
    font-size: 25px;
  }
  .img-div {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .danger-title h1 {
    font-size: 33px;
  }
  .breadCrumb li {
    font-size: 16px;
  }
  .danger-content p {
    font-size: 16px;
  }
  .danger-content h1 {
    font-size: 22px;
  }
}
</style>
