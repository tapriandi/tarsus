<template>
  <div class="">
    {{event}}
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


<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
