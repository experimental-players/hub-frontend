
<template>
  <div>
    <div class="hero is-dark is-bold is-medium banner">
      <div class="hero-body container">
        <div class="has-text-centered">
          <h1 class="title is-0">
            <span>Experimental Players</span>
            <small class="has-text-primary has-text-bold"><sup>HUB</sup></small>
          </h1>
        </div>
      </div>
    </div>

    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <Section
            v-for="(category, n) in everyCategory"
            :key="n"
            :data="category"
          />
        </div>
      </div>
    </div>

    <div class="hero is-light is-bold">
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

    <div class="hero is-dark is-bold">
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
      this.$app.$loading.start();
      await this.$store.dispatch('categories/pull');
      await this.$store.dispatch('projects/pull');
      await this.$store.dispatch('bots/pull');

      this.$app.$loading.finish();
    })
  }
}
</script>
