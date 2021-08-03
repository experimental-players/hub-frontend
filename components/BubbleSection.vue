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
    boxStyle () {
      return {
        background: `linear-gradient(to right, ${this.backgroundColor} 30%, ${this.colorEntity.alpha(0.5)}), ` + (this.image ? `url(${this.image})` : 'transparent')
      }
    },
    textStyle () {
      return {
        color: this.foregroundColor
      }
    },
    colorEntity () {
      return Color(this.color ?? 'white')
    },
    backgroundColor () {
      return this.colorEntity.hex()
    },
    foregroundColor () {
      if (Color.distance(this.backgroundColor, 'black') > 50) {
        return 'black'
      }
      return 'white'
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
