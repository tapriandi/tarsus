<template>
  <div class="homepage">
    <!-- slider -->
    <div>
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="4000"
        fade
        controls
        indicators
        img-height="480"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Selamat Hari Raya Idhul Fitri 1442 Hijriah"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="~/assets/images/home/banner-ramadhan-mubarak.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
          caption=""
          text=" "
          img-src="~/assets/images/home/banner-1.jpg"
        >
        </b-carousel-slide>

        <b-carousel-slide
          caption="Pandemi Bukan Halangan Berkompetisi"
          text="Suasana lomba cerdas cermat di Masjid Baiturahman Pakulaut"
          img-src="~/assets/images/home/banner-lcc.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <!-- about -->
    <div class="about container px-4 py-5 mt-5 mb-sm-5">
      <div class="row justify-content-center">
        <div class="col-sm box-img">
          <img src="~/assets/images/home/banner-about.png" alt="" />
        </div>
        <div class="col-sm pt-5 pt-sm-0 px-sm-4">
          <h3 class="mb-3">Tarsus Merupakan</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi
            unde eaque fugiat maiores est consectetur laboriosam fuga expedita
            quos!
          </p>
          <p class="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nam
            suscipit eius corporis cumque saepe reprehenderit exercitationem
            placeat eum consequuntur ipsam recusandae est possimus earum numquam
            ad! Hic, vel sed?
          </p>

          <div class="d-flex justify-content-start">
            <NuxtLink to="/about" class="p-4 link">
              Lihat Lebih Banyak
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div id="donasi" class="d-flex my-5 justify-content-center">
      <Donate />
      <b-tooltip target="donasi" title="Coming Soon"></b-tooltip>
    </div>

    <!-- Sub -->
    <div class="container">
      <h2 class="font-weight-bold p-5 text-center">Sub Tarsus</h2>

      <ul class="d-flex flex-wrap justify-content-center">
        <li v-for="sub of subs" :key="sub.slug" class="sub-card">
          <NuxtLink :to="{ name: 'sub-slug', params: { slug: sub.slug } }">
            <img v-if="sub.imgBanner" :src="sub.imgBanner" class="rounded-sm" />

            <div class="float">
              <h3 class="font-weight-bold text-center">{{ sub.title }}</h3>
              <p>2020</p>
              <p class="desc">
                {{ sub.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="d-flex justify-content-center">
        <NuxtLink to="/blog/all" class="p-4 link">
          Lihat Lebih Banyak
        </NuxtLink>
      </div>
    </div>

    <!-- kegiatan -->
    <div class="container my-5">
      <h2 class="font-weight-bold p-5 text-center">Kegiatan Tarsus</h2>
      <div class="row">
        <NuxtLink to="/event/lomba" class="col-sm p-0 m-3 card-event">
          <img src="~/assets/images/home/banner-lcc.jpg" alt="" />
          <div class="float">
            <h3 class="font-weight-bold text-white">Lomba Tarsus</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/event/pawai-obor" class="col-sm p-0 m-3 card-event">
          <img src="~/assets/images/home/banner-lcc.jpg" alt="" />
          <div class="float">
            <h3 class="font-weight-bold text-white">Pawai Obor</h3>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- article -->
    <div class="container py-5">
      <h2 class="font-weight-bold p-5 text-center">Artikel dan Berita</h2>

      <ul class="d-flex flex-wrap justify-content-center">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="article-card"
        >
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img v-if="article.img" class="rounded-sm" :src="article.img" />

            <div class="pb-3">
              <h4 class="py-3">{{ article.title }}</h4>
              <p>by {{ article.author.name }}</p>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="d-flex justify-content-center">
        <NuxtLink to="/blog/all" class="p-4 link">Lihat Lebih Banyak </NuxtLink>
      </div>
    </div>

    <div id="donasi-2" class="d-flex mt-5 pb-5 justify-content-center">
      <Donate />
      <b-tooltip target="donasi-2" title="Coming Soon"></b-tooltip>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();
    const subs = await $content("subs", params.slug)
      .only(["title", "description", "imgBanner", "slug", "author"])
      .sortBy("createdAt", "desc")
      .limit(4)
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      subs,
      tags,
    };
  },

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.homepage {
  background-color: rgba(194, 212, 255, 0.2);
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}

.carousel-inner {
  width: 100%;
  height: 100vh;
}
.carousel-caption {
  bottom: 80px;
  width: fit-content;
  left: 50%;
  padding: 20px;
  /* background: rgba(33, 37, 41, 0.2); */
  transform: translateX(-50%);
  /* box-shadow: 0 0 10px rgba(33, 37, 41, 0.2); */
}
.carousel-item img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}

.link {
  position: relative;
  font-size: 15px;
  transition: 0.5s;
  color: #00c58e;
  margin-right: 15px;
}

.link:after {
  position: absolute;
  left: 94%;
  content: "\1F862";
  transition: 0.4s;
}

.link:hover {
  color: #00e0a1;
}

.link:hover:after {
  left: 90%;
}

.about .box-img img {
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 680px) {
  .about .box-img img {
    width: 100%;
  }
}

.about p {
  font-size: 15px;
}

.article-card {
  margin: 8px;
  max-width: 320px;
}

.article-card a:hover {
  text-decoration: none;
}

.article-card a:hover img {
  transform: scale(1.01);
}

.article-card img {
  width: 100%;
  height: 220px;
  overflow: hidden;
  transition: 0.5s;
  object-fit: cover;
  object-position: center;
}

.article-card p {
  color: #212529;
  font-size: 15px;
  margin-bottom: 10px;
}

.article-card h4 {
  margin: 0;
}

.sub-card {
  position: relative;
  margin: 8px;
  max-width: 240px;
}

.sub-card a:hover {
  text-decoration: none;
}

.sub-card a:hover img {
  transform: scale(1.005);
}

.sub-card img {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  transition: 0.5s;
  object-fit: cover;
  object-position: center;
}

.sub-card .float {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white !important;
  transition: 0.5s;
  background: rgba(83, 148, 253, 0.5);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.sub-card .float h3 {
  padding-top: 70%;
  transition: 0.5s;
}

.sub-card .float p {
  display: none;
  transition: 0.5s;
}

.sub-card .float:hover p {
  display: block;
}

.sub-card .float:hover h3 {
  padding-top: 0;
}

.sub-card .float .desc {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

.sub-card .float:hover ~ .title {
  opacity: 0 !important;
  display: none;
}



.card-event {
  position: relative;
  overflow: hidden;
  height: 400px;
  border-radius: 5px;
}
.card-event img {
  height: 100%;
  width: 100%;
  transition: 0.5s;
  object-fit: cover;
  object-position: center;
}
.card-event .float {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-event .float h3 {
  position: relative;
  top: 80%;
  text-align: center;
  transition: 0.5s;
  transform: translateY(-50%);
}
.card-event:hover img {
  transform: scale(1.01);
}
.card-event:hover .float {
  background: rgba(83, 148, 253, 0.5);
}
.card-event:hover .float h3 {
  top: 50%;
}

@media (max-width: 480px) {
  .sub-card {
    max-width: 300px;
  }
}
@media (max-width: 380px) {
  .sub-card img,
  .card-event img {
    height: 260px;
  }
}
</style>
