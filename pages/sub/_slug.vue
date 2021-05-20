<template>
  <div>
    <div class="sub">
      <div class="banner">
        <img :src="sub.imgBanner" :alt="sub.altBanner" />
        <div class="text">
          <h1>{{ sub.title }}</h1>
          <p>{{ sub.description }}</p>
        </div>

        <div class="path">
          <img src="~/assets/images/path/path-1.png" alt="" />
        </div>
      </div>
      <div class="container px-4 py-5 my-5">
        <p class="mb-5">Update: {{ formatDate(sub.updatedAt) }}</p>
        <nuxt-content :document="sub" />
      </div>

      <div class="">
        
      </div>
    </div>

  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const sub = await $content("subs", params.slug).fetch();
    const [prev, next] = await $content("subs")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      sub,
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


<style scopped>
h2 {
  margin-bottom: 20px;
}
.sub {
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
