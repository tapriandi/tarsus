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

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <!-- about -->
    <div class="about container py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-sm" style="height: 400px; overflow: hidden;">
          <img
            src="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
            style="width: 100%;"
          />
        </div>
        <div class="col-sm">
          <h2 class="text-left">Sekilas Tentang Tarsus</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi
            unde eaque fugiat maiores est consectetur laboriosam fuga expedita
            quos!
          </p>
        </div>
      </div>
    </div>

    <!-- Kegiatan -->
    <div class="container">
      <h1 class="font-bold text-4xl p-5 text-center">Kegiatan Tarsus</h1>

      <ul class="d-flex flex-wrap justify-content-center">
        <li v-for="event of events" :key="event.slug" class="event-card">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: event.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="event.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="event.img"
            />

            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ event.title }}</h2>
              <p>by {{ event.author.name }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ event.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- article -->
    <div class="container">
      <h1 class="font-bold text-4xl p-5 text-center">Artikel dan Berita</h1>

      <ul class="d-flex flex-wrap justify-content-center">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="article.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="article.img"
            />

            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>by {{ article.author.name }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="d-flex justify-content-center">
        <NuxtLink to="/blog/all" class="p-4">Lihat Lebih Banyak ></NuxtLink>
      </div>
    </div>

    <!-- <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p
            class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul> -->

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

<style scoped>
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
.article-card {
  border-radius: 8px;
  margin: 8px;
  max-width: 320px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
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

.article-card img div {
  border-radius: 8px 0 0 8px;
}

.event-card {
  border-radius: 8px;
  margin: 8px;
  max-width: 480px;
}
.event-card a {
  background-color: #fff;
  border-radius: 8px;
}

.event-card a:hover {
  text-decoration: none;
}

.event-card a:hover img {
  transform: scale(1.01);
}

.event-card img {
  width: 100%;
  height: 320px;
  overflow: hidden;
  transition: 0.5s;
  object-fit: cover;
  object-position: center;
}

.event-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
