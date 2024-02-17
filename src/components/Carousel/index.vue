<template>
  <div class="wrapper">
    <div id="carouselExampleIndicators" class="carousel flex flex-col w-full">
      <div class="carousel-inner p-10">
        <div class="carousel-item active">
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/1.jpg" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/1.jpg" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/3.jpg" class="d-block" alt="..." />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/green.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/green.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/energy.png" class="d-block" alt="..." />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/exchabge_arrow.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/1.jpg" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/3.jpg" class="d-block" alt="..." />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/green.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/energy.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/exchabge_arrow.png" class="d-block" alt="..." />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/3.jpg" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/1.jpg" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/energy.png" class="d-block" alt="..." />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="img-block">
              <img src="/partners/exchabge_arrow.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/green.png" class="d-block" alt="..." />
            </div>
            <div class="img-block">
              <img src="/partners/3.jpg" class="d-block" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-bottom flex justify-center">
        <div class="carousel-indicators w-32 max_lit:w-20">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active p-1 focus:bg-green-600"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            class="p-1 focus:bg-green-600"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            class="p-1 focus:bg-green-600"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="flex justify-end gap-2 w-60 mb-3 ml-40 max_lit:w-20">
          <button
            class="carousel-btn carousel-control-prev relative bg-green-600 opacity-100 w-[25%]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <fa :icon="['fas', 'arrow-left']" class="faaa text-xl p-[0.45rem] max_lit:text-base" />
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-btn carousel-control-next relative bg-green-600 opacity-100 w-[25%]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <fa :icon="['fas', 'arrow-right']" class="faaa text-xl p-[0.45rem] max_lit:text-base" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.img-block img {
  width: 85%;
  height: 90%;
  transform: skew(20deg);
  filter: grayscale(100%);
  transition: 0.3s;
  object-position: center;
  object-fit: contain;
}

.img-block img:hover {
  filter: grayscale(0);
}

.img-block {
  transform: skew(-20deg);
  height: 7.5rem;
  width: 9.8rem;
  margin: 6px;
  background-color: white;
  opacity: 0.8;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-block:hover {
  opacity: 1;
}

.carousel-indicators button {
  transform: skew(-30deg);
}

.carousel-btn {
  transform: skew(-25deg);
}

.carousel-btn:active {
  transform: skew(-25deg) translateY(0.2rem);
}

.faaa {
  transform: skew(25deg);
}

@media (max-width: 1024px) {
  .img-block {
    margin: 10px;
    height: 9rem;
    width: 13rem;
  }
}

@media (max-width: 736px) {
  .img-block {
    margin: 6px;
    height: 6rem;
    width: 10rem;
  }
}

@media (max-width: 530px) {
  .img-block {
    margin: 3px;
    height: 6rem;
    width: 7rem;
  }
}

@media (max-width: 400px) {
  .img-block {
    margin: 2px;
    height: 4rem;
    width: 5rem;
  }
}
</style>
