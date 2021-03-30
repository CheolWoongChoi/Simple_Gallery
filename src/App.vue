<template>
  <v-app>
    <v-main>
      <v-container class="container">
        <v-row
          class="row"
          justify="center"
          align="center"
        >
          <v-col cols="6">
            <Tab />
            <TabContent />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tab from '@/components/Tab.vue';
import TabContent from '@/components/TabContent.vue';

export default {
  name: 'App',
  components: {
    Tab,
    TabContent
  }
};
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;

    .row {
      height: 100%;
    }
  }
</style>
