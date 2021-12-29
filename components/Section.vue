<template>
  <div class="main box is-block section my-6 banner" :style="[bannerStyle, boxStyle]">
    <div class="columns is-vcentered">
      <div v-if="data.icon" class="column is-one-fifth">
        <figure class="box is-inline-block has-shadow">
          <p class="image is-64x64">
            <img :src="icon">
          </p>
        </figure>
      </div>

      <div class="column">
        <div class="content">
          <p class="title is-1" :style="bannerForegroundStyle" v-text="data.title" />
        </div>
      </div>

      <div class="column is-flex is-justify-content-flex-end">
        <div v-if="links.length > 0">
          <Link
            v-for="link in links"
            :key="link.href"
            :to="link"
            class="button is-light is-medium has-text-bold is-rounded mx-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Color from 'chroma-js'
import dynamicBanner from '@/mixins/dynamicBanner'
import BaseResource from '@/models/base/BaseResource'
import Link from '@/models/Link'

export default {
  mixins: [dynamicBanner],
  props: {
    data: BaseResource,
    glow: Boolean
  },
  data() {
    return {
      baseLinks: [
        new Link("Test", "#")
      ]
    }
  },
  computed: {
    links () {
      let external = this.data.link ? [this.data.link] : []
      return [...external, ...this.baseLinks]
    },
    colorEntity () {
      return Color(this.data.color ?? 'white')
    },
    bannerColor () {
      return this.colorEntity.hex()
    },
    bannerImage () {
      return this.data.image
    },
    boxStyle () {
      return {
        boxShadow: this.glow ? `0 10px 40px ${this.colorEntity.alpha(0.7)}` : null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main,
.box {
  border-radius: 1em;
}

figure.box {
  background-color: white;
}

.main {
  background-position: right center;
}
</style>
