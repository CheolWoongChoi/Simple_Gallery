<template>
  <v-tabs-items v-model="tab">
    <v-tab-item
      v-for="item in items"
      :key="item.tab"
      transition="false"
    >
      <v-container
        class="tab-content ma-0"
        fluid
      >
        <v-row
          class="tab-content-row"
          justify="center"
          align="center"
        >
          <v-col align="center">
            <div v-if="item.type === 'text'">
              {{ item.content }}
            </div>
            <div v-else-if="item.type === 'image'">
              이미지
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
export default {
  name: 'TabContent',
  computed: {
    tab: {
      get() {
        return this.$store.state.tab;
      },
      set(value) {
        this.$store.commit('updateTab', value);
      }
    },
    items() {
      return this.$store.state.items;
    }
  }
}
</script>

<style lang="scss" scoped>
	@import '@/scss/variables';

	.tab-content {
		border: $border-style;
		height: 375px;

		.tab-content-row {
			height: 100%;
		}
	}
</style>
