<template>
  <div>
    <nav class="navbar is-primary is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <span v-if="isRoot" class="has-text-weight-bold">
            exp//hub
          </span>

          <span v-else>
            &lt;-- back
          </span>
        </nuxt-link>
      </div>
    </nav>

    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isRoot () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  font-family: monospace;

  &, .navbar-item {
    border-radius: 20px 0 0 0 !important;
  }
}
</style>
