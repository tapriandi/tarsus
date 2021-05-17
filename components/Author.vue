<template>
  <div class="py-4">
    <NuxtLink :to="`/blog/author/${author.name}`" class="d-flex">
      <div class="box-img">
        <img v-if="author.img" style="width: 200px" :src="author.img" />
      </div>
      <div class="box-text pl-3 pl-md-4 py-2 flex-col align-items-center">
        <h5 class="text-dark">Author</h5>
        <p class="mb-2">by {{ author.name }}</p>
        <p class="m-0">{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  font-size: 12px;
  color: #212529;
}
.box-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.box-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 480px) {
  .box-text {
    width: 210px;
  }
}
@media (max-width: 330px) {
  .box-text {
    width: 160px;
  }
}
</style>
