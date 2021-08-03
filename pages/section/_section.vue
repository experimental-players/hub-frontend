<template>
  <div>
    <div class="hero is-medium banner" :style="bannerStyle">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-0" :style="textStyle" v-text="section.title" />
        </div>
      </div>
    </div>

    <div class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet molestiae totam magni similique iste vel dolore perspiciatis assumenda. Harum doloribus expedita ipsa ipsam commodi fugit eos officia dicta eaque?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isDistant } from '@/helpers/colors'

export default {
  computed: {
    section () {
      return this.$store.state.sections.list.filter(section => section.title === this.$route.params.section)[0] ?? null
    },
    bannerStyle () {
      return {
        background: `linear-gradient(to right, ${this.section.color} 30%, rgba(0, 0, 0, .1)), url(${this.section.image})`
      }
    },
    textStyle () {
      return {
        color: isDistant(this.section.color) ? 'black' : 'white'
      }
    }
  }
}
</script>
