<template>
  <div class="homepage">
    <TheHeader />

    <!-- slider -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        fade
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <!-- about -->
    <div class="about container px-4 py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-sm box-img">
          <img
            src="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
            style="width: 100%"
          />
        </div>
        <div class="col-sm">
          <h3 class="mb-3">Tarsus Merupakan</h3>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi
            unde eaque fugiat maiores est consectetur laboriosam fuga expedita
            quos!
          </p>
        
          <NuxtLink to="/about" class="py-4 link">Baca selanjutnya ></NuxtLink>
        </div>
      </div>
    </div>

    <div class="d-flex py-5 justify-content-center">
      <Donate class="my-4" />
    </div>

    <!-- Kegiatan -->
    <div class="container">
      <h2 class="font-weight-bold p-5 text-center">Kegiatan Tarsus</h2>

      <ul class="d-flex flex-wrap justify-content-center">
        <li v-for="event of events" :key="event.slug" class="event-card">
          <NuxtLink
            :to="{ name: 'event-slug', params: { slug: event.slug } }"
          >
            <img
              v-if="event.img"
              :src="event.img"
              class="rounded-sm"
            />

            <h3 class="title p-4 font-weight-bold">{{ event.title }}</h3>


            <div class="float">
              <h2 class="font-weight-bold">{{ event.title }}</h2>
              <p>2020</p>
              <p class="desc">
                {{ event.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="d-flex justify-content-center">
        <NuxtLink to="/blog/all" class="p-4 link">Lihat Lebih Banyak ></NuxtLink>
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
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <img
              v-if="article.img"
              class="rounded-sm"
              :src="article.img"
            />

            <div class="pb-3" >
              <h4 class="py-3">{{ article.title }}</h4>
              <p>by {{ article.author.name }}</p>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="d-flex justify-content-center">
        <NuxtLink to="/blog/all" class="p-4 link">Lihat Lebih Banyak ></NuxtLink>
      </div>
    </div>

    <div class="d-flex py-5 justify-content-center bg-white">
      <Donate  class="my-5"/>
    </div>

    <TheFooter />
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
    const events = await $content("events", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .limit(4)
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      events,
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

<style>
body {
  overflow-x: hidden;
}
.homepage {
  background-color: aliceblue;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}

.link {
  font-size: 15px;
  transition: 0.5s;
  color: #00c58e;
}

.link:hover {
  color: #00e0a1;
}

.about .box-img {
  height: 400px;
}

.about p {
  font-size: 15px;
}

.about .box-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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




.event-card {
  position: relative;
  margin: 8px;
  max-width: 480px;
}

.event-card a:hover {
  text-decoration: none;
}

.event-card a:hover img {
  transform: scale(1.005);
}

.event-card img {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  transition: 0.5s;
  object-fit: cover;
  object-position: center;
}

.event-card .float {
  position: absolute;
  display: flex;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white !important;
  transition: .5s;
  background: rgba(83, 148, 253, 0.5);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.event-card .float:hover {
  opacity: 1;
}

.event-card .float .desc {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

.event-card .title {
  position: absolute;
  bottom: 0;
  opacity: 1;
  color: white;
  transition: 0.5s;
}

.event-card .float:hover~ .title {
  opacity: 0 !important;
}

@media (max-width: 380px) {
  .event-card img {
    height: 260px;
  }
}
</style>
