<template>
  <div class="d-flex justify-content-between">
    <nuxt-link
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="btn btn-primary"
    >
      {{ prev.title }}
    </nuxt-link>
    <span v-else>&nbsp;</span>

    <nuxt-link
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="btn btn-succes"
    >
      {{ next.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>