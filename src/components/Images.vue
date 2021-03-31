<template>
  <div
    class="imgs-wrap"
    @click="handleBackgroundClick"
  >
    <gallery
      :images="imgUrls"
      :index="galleryIdx"
      @close="galleryIdx = null"
    />
    <v-col
      cols="12"
      align-self="center"
    >
      <v-row
        class="ma-0 px-12"
        justify="space-around"
        align="center"
      >
        <img
          v-for="({ name, url }, idx) in topImgs"
          :key="name"
          class="img"
          :src="url"
          @click="galleryIdx = idx"
        >
      </v-row>
      <v-row
        class="ma-0 px-12"
        justify="space-around"
        align="center"
      >
        <img
          v-for="({ name, url }, idx) in bottomImgs"
          :key="name"
          class="img"
          :src="url"
          @click="galleryIdx = 3+idx"
        >
      </v-row>
    </v-col>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  name: "Images",
  components: {
    gallery: VueGallery,
  },
  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      galleryIdx: null,
    };
  },
  computed: {
    imgUrls() {
      return this.contents.map(img => img.url);
    },
    topImgs() {
      return this.contents.slice(0, 3);
    },
    bottomImgs() {
      return this.contents.slice(3);
    },
  },
  methods: {
    handleBackgroundClick(e) {
      console.log(e.target);
      console.log('hi')
    }
  }
};
</script>

<style lang="scss" scoped>
.imgs-wrap {
	display: flex;
  height: 100%;

  .row {
		&:last-child {
			margin-top: 25px !important;
		}

    .img {
      max-width: 20%;
    }
  }
}
</style>
