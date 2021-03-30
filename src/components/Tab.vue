<template>
  <v-tabs
    v-model="tab"
    background-color="white"
    active-class="tabs-active"
    hide-slider
  >
    <v-tab
      v-for="item in items"
      :key="item.tab"
      class="tab px-10"
    >
      {{ item.tab }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'Tab',
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

  .tabs-active {
    background-color: #ff9800;
  }

  .tab {
    border-left: $border-style;
    border-top: $border-style;
    color: #000 !important;

    &:last-child {
      border-right: $border-style;
    }
  }
</style>
