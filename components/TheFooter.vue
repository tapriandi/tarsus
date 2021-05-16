<template>
  <footer>
    <div class="socials">
      <div class="container d-flex p-3 justify-content-center">
        <b-nav-item to="/" class="px-lg-4">Instagram</b-nav-item>
        <b-nav-item to="/" class="px-lg-4">Facebook</b-nav-item>
        <b-nav-item to="/" class="px-lg-4">Youtube</b-nav-item>
      </div>
    </div>
    <div class="container py-3">
      <div
        class="d-flex px-2 flex-column flex-md-row align-items-center justify-content-md-between"
      >
        <p>Copyright &copy; Tarsus.id 2021</p>
        <p>Created with NuxtJS</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #2675f7;
  color: white;
}
.container {
  padding: 0;
}
.socials {
  background: #679ffa;
}
li {
  list-style: none;
  padding: 5px 0;
}
a {
  color: white;
}
p {
  font-size: 12px;
  margin: 0;
  padding: 5px 0;
}
</style>