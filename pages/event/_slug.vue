<template>
  <div>
    <TheHeader />
    <div class="event">
      <div class="banner">
        <img :src="event.imgBanner" :alt="event.altBanner" />
        <div class="text">
          <h1>{{ event.title }}</h1>
          <p>{{ event.description }}</p>
        </div>

        <div class="path">
          <img src="~/assets/images/path/path-1.png" alt="" />
        </div>
      </div>
      <div class="container px-4 py-5 my-5">
        <p class="mb-4">Update: {{ formatDate(event.updatedAt) }}</p>
        <nuxt-content :document="event" />
      </div>

      <div class="">
        
      </div>
    </div>

    <TheFooter />
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const event = await $content("events", params.slug).fetch();
    const [prev, next] = await $content("events")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      event,
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
