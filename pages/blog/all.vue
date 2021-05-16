<template>
  <div class="blog-all">
    <TheHeader />

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
      .fetch();

    return {
      articles,
    };
  },
};
</script>


<style scoped>

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
</style>