<template>
  <div class="wrapper">
    <div class="top-sect">
      <div class="container">
        <div class="terminal-title py-28">
          <h1 class="text-6xl">Услуги контейнерных терминалов</h1>
        </div>
      </div>
    </div>
    <div class="terminal-sect pt-20">
      <div class="container">
        <div class="terminal-content-div">
          <nav aria-label="breadcrumb">
            <ol class="breadCrumb breadcrumb">
              <li class="breadcrumb-item">
                <a @click="$router.push({ name: 'home' })" class="text-green-500 hover:text-black"
                  >Главная</a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Услуги контейнерных терминалов
              </li>
            </ol>
          </nav>
          <div class="terminal-content pt-8 flex gap-10">
            <div class="img-div w-11/12">
              <img src="/newbg/image.jpg" alt="" />
            </div>
            <div class="">
              <h1 class="text-black text-xl font-bold pb-3">
                Услуги контейнерных терминалов и складские услуги
              </h1>
              <p class="text-zinc-700 pb-4">
                Услуги транспортных контейнерных терминалов - это производственные операции по
                приемке, перемещению и сдаче грузов. К ним относятся операции, которые неразрывно
                связаны с обслуживанием перевозчика грузов.
              </p>
              <p class="text-zinc-700 pb-4">
                Uzlogistic имеет два транспортных терминала в г. Ангрене – терминал «Uzlogistic» и
                «Е-площадка», которые оказывают полный спектр контейнерных терминальных услуг.
                Совокупная площадь обоих терминалов превышает 20 га.
              </p>
              <p class="text-zinc-700">
                Uzlogistic также оказывает широкий спектр складских услуг, включая
                погрузочно-разгрузочные работы, кросс-докинг, хранение, упаковку и переупаковку,
                управление запасами и многое другое.
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
.terminal-sect {
  background: white;
  min-height: calc(65svh - 128px);
}
@media (max-width: 1200px) {
  .container {
    max-width: 1000px;
  }
  .terminal-title h1 {
    font-size: 48px;
  }
  .terminal-content p {
    font-size: 12px;
  }
  .breadCrumb li {
    font-size: 12px;
  }
  .terminal-content h1 {
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
  .terminal-title {
    text-align: center;
  }
  .terminal-title h1 {
    font-size: 40px;
  }
  .terminal-sect {
    padding-top: 20px;
  }
  .breadCrumb li {
    font-size: 19px;
  }
  .terminal-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .terminal-content p {
    font-size: 19px;
  }
  .terminal-content h1 {
    font-size: 25px;
  }
  .img-div {
    width: 90%;
  }
}
@media (max-width: 500px) {
  .terminal-title h1 {
    font-size: 33px;
  }
  .breadCrumb li {
    font-size: 16px;
  }
  .terminal-content p {
    font-size: 16px;
  }
  .terminal-content h1 {
    font-size: 22px;
  }
}
</style>
