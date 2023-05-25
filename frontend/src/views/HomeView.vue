<template>
  <main>
    <div class="home">
      <h1 class="home__title">Tienda online</h1>
      <img class="home__img" src="../assets/home-image.avif" width="900" height="400" alt="home image">
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__title {
    margin: 0;
    margin-top: 140px;
    margin-bottom: 40px;
    font-size: 60px;
    color: black;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }

  &__img {
    border-radius: 16px;
  }
}
</style>
