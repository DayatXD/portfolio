<template>
    <div>
        <h1>Gallery</h1>
        <div class="image-wrap">
          <div v-for="image in images" ><img :src="image.pathLong" /></div>
        </div>
    </div>
</template>

<script>

// capek euy
// const waterfall = require('waterfall');
// waterfall('.grid');

export default {
  name: 'Read all image in assets/art',
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.importAll(require.context('../assets/art/', true, /\.jpg$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
  },
};
</script>

<style>
</style>