<template>
  <div>
    <Banner v-bind="section" />
  </div>
</template>

<script>
export default {
  computed: {
    section () {
      return this.$store.state.sections.list.filter(section => section.title === this.$route.params.section)[0] ?? null
    }
  }
}
</script>
