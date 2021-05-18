<template>
  <div>
    <TheHeader />
      <div class="event">
        <img
          :src="event.img"
          :alt="event.alt"
          class=""
        />
        <div class="overlay"></div>
        <div class="absolute top-32 left-32 text-white">
          <NuxtLink to="/"><Logo /></NuxtLink>
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3">
              {{ formatDate(event.updatedAt) }}
            </p>
            <span class="mr-3">•</span>
            <!-- <p>{{ event.author.name }}</p> -->
          </div>
          <h1 class="text-6xl font-bold">{{ event.title }}</h1>
          <span v-for="(tag, id) in event.tags" :key="id">
            <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
              <span class="" >
                {{ tags[tag].name }}
              </span>
            </NuxtLink>
          </span>
        </div>
        <div class="flex absolute top-3rem right-3rem">
          <NuxtLink
            to="/"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            All events
          </NuxtLink>
          <a
            href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            Tutorial
          </a>
        </div>
      </div>
      <div
        class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1 class="font-bold text-4xl">{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <p class="pb-4">Post last updated: {{ formatDate(event.updatedAt) }}</p>
        <nav class="pb-6">
          <ul>
            <li
              v-for="link of event.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <nuxt-content :document="event" />
        <!-- <author :author="event.author" /> -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    <TheFooter />
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const event = await $content('events', params).fetch()
    const [prev, next] = await $content('events')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();
    return {
      event,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>


<style scopped>
.event {
  position: relative;
  min-height: 90vh;
}
</style>
