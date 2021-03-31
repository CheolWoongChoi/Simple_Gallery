<template>
  <v-row
    class="ma-0 texts"
    justify="center"
    align="center"
  >
    {{ contents }}
  </v-row>
</template>

<script>
export default {
  name: 'Images',
  props: {
    contents: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
	.texts {
		height: 100%;
	}
</style>
