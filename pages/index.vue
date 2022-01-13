
<template>
  <div id="page">
    <div class="hero is-medium banner">
      <div class="hero-body container">
        <div class="has-text-centered">
          <h1 class="title is-0 has-text-white">
            <span>Experimental Players</span>
            <small class="has-text-primary has-text-bold"><sup>HUB</sup></small>
          </h1>
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <Section
            v-for="(category, n) in everyCategory"
            :key="n"
            :data="category"
            glow
          />
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <Section
            v-for="(bot, n) in everyBot"
            :key="n"
            :data="bot"
          />
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <Section
            v-for="(project, n) in everyProject"
            :key="n"
            :data="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('categories', ['everyCategory']),
    ...mapGetters('projects', ['everyProject']),
    ...mapGetters('bots', ['everyBot'])
  },
  mounted () {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start();

      await this.$store.dispatch('categories/pull');
      await this.$store.dispatch('projects/pull');
      await this.$store.dispatch('bots/pull');

      this.$nuxt.$loading.finish();
    })
  }
}
</script>

<style scoped>
#page {
  background: linear-gradient(to bottom right, #000, rgb(31, 0, 43))
}
</style>
