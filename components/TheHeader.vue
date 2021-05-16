<template>
  <header class="fixed-top bg-primary">
    <b-navbar toggleable="lg" type="dark" variant="">
      <div class="container">
      <b-navbar-brand to="/">Tarsus</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="px-lg-4">Home</b-nav-item>
          <b-nav-item-dropdown text="Kegiatan" right class="px-lg-4">
            <b-dropdown-item href="#">Kegiatan 2021</b-dropdown-item>
            <b-dropdown-item href="#">Sub Tarsus 2021</b-dropdown-item>
            <b-dropdown-item href="#">Lomba 2021</b-dropdown-item>
            <b-dropdown-item href="#">Pawai Obor 2019</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/about" class="pl-lg-4">Tentang</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<style>
  * {
    outline: none;
  }
</style>
