<template>
  <div class="blog-all">
    <TheHeader />

    <!-- article -->
    <div class="container py-5 my-5">
      <h1 class="font-weight-bold p-5 text-center">Artikel dan Berita</h1>

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
.blog-all {
  height: 90vh;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
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

</style>