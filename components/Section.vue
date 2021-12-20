<template>
  <div class="main box is-block section my-6 banner" :style="[bannerStyle, boxStyle]">
    <div class="columns is-vcentered">
      <div v-if="icon" class="column is-one-fifth">
        <figure class="box is-inline-block has-shadow">
          <p class="image is-64x64">
            <img :src="icon">
          </p>
        </figure>
      </div>

      <div class="column">
        <div class="content">
          <p class="title is-1" :style="bannerForegroundStyle" v-text="title" />
        </div>
      </div>

      <div class="column is-one-fifth">
        <div v-if="link">
          <!-- <component :is="c" :href="link.href" :to="link.href" class="button is-light is-medium has-text-bold is-rounded" v-text="link.title"></component> -->
          <Link :to="link" class="button is-light is-medium has-text-bold is-rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Color from 'chroma-js'
import dynamicBanner from '@/mixins/dynamicBanner'
import Link from '@/models/Link'

export default {
  mixins: [dynamicBanner],
  props: {
    icon: String,
    image: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    link: [Link, Object],
    glow: Boolean
  },
  computed: {
    colorEntity () {
      return Color(this.color ?? 'white')
    },
    bannerColor () {
      return this.colorEntity.hex()
    },
    bannerImage () {
      return this.image
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
