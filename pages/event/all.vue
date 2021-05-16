<template>
  <div class="blog-all">
    <TheHeader />

    <!-- article -->
    <div class="container py-5"> 
      <h1 class="font-bold text-4xl p-5 text-center">Kegiatan</h1>

      <ul class="d-flex flex-wrap justify-content-center">
        <li
          v-for="event of events"
          :key="event.slug"
          class="event-card"
        >
          <NuxtLink
            :to="{ name: 'event-slug', params: { slug: event.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="event.img"
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


<style scoped>

ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
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