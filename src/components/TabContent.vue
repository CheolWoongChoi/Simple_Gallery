<template>
  <v-tabs-items v-model="tab">
    <v-tab-item
      v-for="item in items"
      :key="item.tab"
      transition="false"
    >
      <v-container
        class="tab-content ma-0 pa-0"
        fluid
      >
        <template v-if="item.type === 'text'">
          <Texts :contents="item.contents" />
        </template>
        <template v-else-if="item.type === 'image'">
          <Images :contents="item.contents" />
        </template>
      </v-container>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import Texts from '@/components/Texts';
import Images from '@/components/Images';

export default {
  name: 'TabContent',
  components: {
    Texts,
    Images
  },
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
