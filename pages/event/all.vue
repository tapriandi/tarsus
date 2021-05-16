<template>
  <div class="event-all">
    <TheHeader />

    <!-- article -->
    <div class="container py-5 my-5"> 
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
    </div>

    <TheFooter />

  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const events = await $content("events", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      events,
    };
  },
};
</script>


<style>
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