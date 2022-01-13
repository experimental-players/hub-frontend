<template>
  <div v-if="loading" class="loading-page hero is-fullheight is-dark is-bold">
    <div class="hero-body container">
      <div>
        <img src="https://static.experimentalplayers.org/loading.gif">
        <p class="has-text-centered">
          Loading...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  inset: 0;
  z-index: 999;
}
</style>
