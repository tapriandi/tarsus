<template>
  <div class="about">
    <div class="banner">
      <img src="~/assets/images/home/banner-lcc.jpg" alt="" />

      <div class="path">
        <img src="~/assets/images/path/path-2.png" alt="" />
      </div>
    </div>

    <div class="container my-5 py-5">
      <h2 class="text-center mb-5 font-weight-bold">
        Sejarah Tarsus Desa Pakulaut
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae
        omnis aspernatur libero cumque exercitationem excepturi tempora at,
        debitis tempore nisi iste neque deleniti praesentium hic autem
        repudiandae reprehenderit. Iste natus, laudantium odio eius similique
        magni dolores qui autem dolor quibusdam totam aperiam commodi eligendi
        sunt nam animi unde voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae
        omnis aspernatur libero cumque exercitationem excepturi tempora at,
        debitis tempore nisi iste neque deleniti praesentium hic autem
        repudiandae reprehenderit. Iste natus, laudantium odio eius similique
        magni dolores qui autem dolor quibusdam totam aperiam commodi eligendi
        sunt nam animi unde voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae
        omnis aspernatur libero cumque exercitationem excepturi tempora at,
        debitis tempore nisi iste neque deleniti praesentium hic autem
        repudiandae reprehenderit. Iste natus, laudantium odio eius similique
        magni dolores qui autem dolor quibusdam totam aperiam commodi eligendi
        sunt nam animi unde voluptates.
      </p>

      <h4 class="text-center pt-4 my-5 font-weight-bold">
        Daftar Nama Ketua Tarsus dari Tahun 1970 - 2021
        <span class="font-weight-normal">(Sekarang)</span>
      </h4>
      <div class="row px-2">
        <table class="col table mx-3 table-bordered">
          <thead>
            <tr>
              <th scope="col-2">Tahun</th>
              <th scope="col">Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ketua in content.ketuaA" :key="ketua">
              
              <th scope="row">{{ ketua.tahun }}</th>
              <td>{{ ketua.nama }}</td>
            </tr>
          </tbody>
        </table>
        <table class="col table mx-3 table-bordered">
          <thead>
            <tr>
              <th scope="col-2">Tahun</th>
              <th scope="col">Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ketua in content.ketuaB" :key="ketua">
              
              <th scope="row">{{ ketua.tahun }}</th>
              <td>{{ ketua.nama }}</td>
            </tr>
          </tbody>
        </table>
        <table class="col table mx-3 table-bordered">
          <thead>
            <tr>
              <th scope="col-2">Tahun</th>
              <th scope="col">Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ketua in content.ketuaC" :key="ketua">
              
              <th scope="row">{{ ketua.tahun }}</th>
              <td>{{ ketua.nama }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import conf from "../conf";
export default {
  head() {
    return { title: this.content.title };
  },
  async asyncData({ $content }) {
    const content = await $content(conf.CONTENT).fetch();
    return { content };
  },
};
</script>


<style scoped>
.about {
  min-height: 80vh;
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