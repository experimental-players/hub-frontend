
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

    <div class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <BubbleSection
            v-for="(section, n) in everySection"
            :key="n"
            v-bind="section"
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
    ...mapGetters('sections', ['everySection']),
    ...mapGetters('projects', ['everyProject'])
  }
}
</script>
