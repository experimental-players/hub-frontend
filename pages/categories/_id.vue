<template>
  <div v-if="selectedCategory" class="has-background-dark">
    <Banner :data="selectedCategory" :glow="false" class="pb-intersection clipped-banner" />

    <div class="container is-rounded mt-negative-intersection pb-medium">
      <div class="px-4 py-2">
        <div class="section is-rounded hero is-dark is-bold is-small description-box mb-4">
          <div class="hero-body">
            <div class="container">
              <p class="subtitle is-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis facere minima consequatur, odio repellendus vitae suscipit unde, soluta reiciendis ad id dolor aperiam omnis veniam esse, quasi nihil magnam.
              </p>
            </div>
          </div>
        </div>

        <div class="is-rounded has-background-light main-page-content">
          <div class="section content" v-html="$md.render(selectedCategory.description)" />
        </div>

        <div class="mt-6">
          <h2 class="title is-1 banner-title has-text-white">
            {{ selectedCategory.title }} bots
          </h2>
          <div class="columns is-multiline">
            <div v-for="bot in everyBot" :key="bot.id" class="column is-half">
              <Section :data="bot" />
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h2 class="title is-1 banner-title has-text-white">
            {{ selectedCategory.title }} projects
          </h2>

          <div class="columns is-multiline">
            <div v-for="project in everyProject" :key="project.id" class="column is-half">
              <Section :data="project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('categories', ['selectedCategory']),
    ...mapGetters('bots', ['everyBot']),
    ...mapGetters('projects', ['everyProject'])
  },
  async mounted () {
    await this.$store.dispatch('categories/find', this.$route.params.id)

    if (this.selectedCategory === null)
      this.$nuxt.$router.push('/')

    await this.$store.dispatch('bots/pull')
    await this.$store.dispatch('projects/pull')
  }
}
</script>
