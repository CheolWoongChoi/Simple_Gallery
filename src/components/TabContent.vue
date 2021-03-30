<template>
  <v-tabs-items v-model="tab">
    <v-tab-item
      v-for="item in items"
      :key="item.tab"
    >
      <v-container
        class="tab-content ma-0"
      >
        {{ item.content }}
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
		height: 350px;
	}
</style>
