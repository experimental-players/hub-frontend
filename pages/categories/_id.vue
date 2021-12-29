<template>
  <div>
    <p>Test</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('category', ['categories/singleCategory', 'test']),
    ...mapActions('pull', ['categories/pull'])
  },
  async mounted () {
    await this.pull()
  }
}
</script>
