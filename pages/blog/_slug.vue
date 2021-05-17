<template>
  <article class="blog-detail row m-0 mb-5">
    <div class="banner col-lg">
      
      <img :src="article.img" :alt="article.alt" class="w-100 h-100" />
      <!-- <div class="overlay"></div> -->
      <!-- <div class="banner-content position-absolute text-white">
        <NuxtLink to="/"><h3 class="text-dark">Tarsus</h3></NuxtLink>
        <div class="">
          <p class="mr-3">
            {{ formatDate(article.updatedAt) }}
          </p>
          <span class="mr-3">•</span>
          <p>{{ article.author.name }}</p>
        </div>
        <h1 class="font-weight-bold">{{ article.title }}</h1>
        <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
            <span class="">
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>
        <div class="d-flex">
          <NuxtLink to="/" class=""> All articles </NuxtLink>
          <a
            href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
            class=""
          >
            Tutorial
          </a>
        </div>
      </div> -->
   
    </div>

    <div class="content relative col-lg pl-4 pr-4 pr-lg-5 mt-4">
      <h1 class="font-weight-bold pb-2">{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p class="pb-4">Post last updated: {{ formatDate(article.updatedAt) }}</p>
      <!-- table of contents -->
      <nav class="pb-4">
        <ul class="list-unstyled">
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              '': link.depth === 2,
            }"
          >
            <nuxtLink
              :to="`#${link.id}`"
              :class="{
                'py-2': link.depth === 2,
                'pb-2': link.depth === 3,
              }"
              >{{ link.text }}</nuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author class="author-card" :author="article.author" />
      <!-- prevNext component -->
      <div class="d-flex align-items-center my-3">
        <p class="m-0 pr-3">Selanjutnya :</p>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </div>
  </article>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })));
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      tags,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped>
.blog-detail {
  position: relative;
  overflow-x: hidden;
}
.blog-detail .banner {
  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;
}
.blog-detail .banner .banner-content {
  top: 0;
}
.blog-detail .banner img {
  object-fit: cover;
  object-position: center;
}
p {
  font-size: 15px;
}
.col-lg {
  padding: 0;
}

</style>
