<template>
  <div class="main box is-block section" :style="boxStyle">
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
          <p class="title is-1" :style="textStyle" v-text="title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Color from 'chroma-js'
import { isDistant } from '@/helpers/colors'

export default {
  props: {
    icon: String,
    image: String,
    color: String,
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    colorEntity () {
      return Color(this.color ?? 'white')
    },
    boxStyle () {
      return {
        background: `linear-gradient(to right, ${this.colorEntity.hex()} 30%, ${this.colorEntity.alpha(0.5)}), ` + (this.image ? `url(${this.image})` : 'transparent')
      }
    },
    textStyle () {
      return {
        color: isDistant(this.colorEntity) ? 'black' : 'white'
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}
</style>
