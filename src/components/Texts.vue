<template>
  <v-row
    class="ma-0 texts-wrap"
    justify="center"
    align="center"
  >
    {{ contents }}
  </v-row>
</template>

<script>
export default {
  name: 'Texts',
  props: {
    contents: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
	.texts-wrap {
		height: 100%;
	}
</style>
