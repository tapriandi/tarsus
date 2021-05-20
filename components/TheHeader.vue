<template>
  <header class="fixed-top">
    <b-navbar toggleable="lg" type="dark" variant="">
      <div class="container">
      <b-navbar-brand to="/" style="font-size: 24px">Tarsus</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="px-lg-3">Home</b-nav-item>
          <b-nav-item-dropdown text="Kegiatan" right class="px-lg-3">
            <b-dropdown-item href="/sub/all">Sub Tarsus</b-dropdown-item>
            <b-dropdown-item href="/event/lomba">Lomba Tarsus</b-dropdown-item>
            <b-dropdown-item href="/event/pawai-obor">Pawai Obor</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/blog/all" class="px-lg-3">Blog</b-nav-item>
          <b-nav-item to="/about" class="pl-lg-3">Tentang</b-nav-item>
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

  header {
    background: linear-gradient(rgba(38, 118, 247, 0.6), rgba(38, 118, 247, 0.4), transparent);
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }
  .dropdown-menu {
    border: none;
    background: rgba(0, 197, 141, 0.5);
  }
  .dropdown-item {
    color: white;
  }
  .dropdown-item:hover, .dropdown-item:focus {
    background: rgba(0, 224, 160, 0.7);
  }
</style>
