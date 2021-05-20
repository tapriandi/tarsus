<template>
  <div class="event">
    <div class="banner">
      <img src="~/assets/images/home/banner-1.jpg" />
      <div class="text">
        <h1 class="font-weight-bold">Perlombaan Tarsus</h1>
        <p></p>
      </div>

      <div class="path">
        <img src="~/assets/images/path/path-1.png" alt="" />
      </div>
    </div>

    <div class="container px-4 py-5 my-5">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quod ad tempore. Minus natus at dignissimos, magnam suscipit ut nostrum ipsa voluptatum dolorem assumenda illo saepe eum labore facere voluptatem!
    </div>
  </div>
</template>


<style scopped>
.event {
  position: relative;
  min-height: 90vh;
}
.banner {
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
}
.banner > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.banner .text {
  position: absolute;
  top: 45%;
  left: 12%;
  color: white;
}
.banner .path {
  position: absolute;
  bottom: -2px;
  left: 0;
  z-index: 3;
  width: 100%;
  /* height: 80px; */
}
.banner .path img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
</style>
