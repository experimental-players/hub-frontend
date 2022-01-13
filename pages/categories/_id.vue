<template>
  <div class="has-background-dark" v-if="selectedCategory">
    <Banner :data="selectedCategory" :glow="false" class="pb-intersection clipped-banner" />

    <div class="container is-rounded mt-negative-intersection pb-medium">
      <div class="section is-rounded hero is-dark is-bold is-small description-box">
        <div class="hero-body">
          <div class="container">
            <p class="subtitle is-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis facere minima consequatur, odio repellendus vitae suscipit unde, soluta reiciendis ad id dolor aperiam omnis veniam esse, quasi nihil magnam.
            </p>
          </div>
        </div>
      </div>

      <div class="is-rounded has-background-light main-page-content">
        <div class="section content" v-html="$md.render(selectedCategory.description)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('categories', ['selectedCategory'])
  },
  async mounted () {
    await this.$store.dispatch('categories/find', this.$route.params.id);

    if (this.selectedCategory === null)
      this.$nuxt.$router.push('/')
  }
}
</script>
