<template>
  <div
    class="imgs-wrap"
    @click="handleBackgroundClick"
  >
    <!-- Helper Components -->
    <gallery
      :images="imgUrls"
      :index="galleryIdx"
      @close="galleryIdx = null"
    />
    <v-snackbar
      v-model="snackbarState"
      :timeout="snackbarTimeout"
      multi-line="true"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbarState = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Images -->
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
      snackbarState: false,
      snackbarText: '바탕화면이 아닌 이미지를 누르세요',
      snackbarTimeout: 3000
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
      const { classList } = e.target;

      if (classList.contains('imgs-wrap') || classList.contains('row')) {
        console.log('Is background');
        this.snackbarState = true;
      }
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
      cursor: pointer;
    }
  }
}
</style>
