<template>
  <div class="sub-all">
    <!-- article -->
    <div class="container py-5 my-5"> 
      <h2 class="font-weight-bold p-5 text-center">Sub Tarsus</h2>

      <ul class="d-flex flex-wrap justify-content-center">
        <li v-for="sub of subs" :key="sub.slug" class="sub-card">
          <NuxtLink
            :to="{ name: 'sub-slug', params: { slug: sub.slug } }"
          >
            <img
              v-if="sub.imgBanner"
              :src="sub.imgBanner"
              class="rounded-sm"
            />

            <div class="float">
              <h3 class="font-weight-bold">{{ sub.title }}</h3>
              <p>{{sub.year}}</p>
              <p class="desc">
                {{ sub.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const subs = await $content("subs", params.slug)
      .only(["title", "description", "imgBanner", "slug", "author", "year"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      subs,
    };
  },
};
</script>


<style scoped>
.event-all {
  min-height: 90vh;
}

ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}

.sub-card {
  position: relative;
  margin: 8px;
  max-width: 340px;
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


@media (max-width: 380px) {
  .sub-card img {
    height: 260px;
  }
}
</style>