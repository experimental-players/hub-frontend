<template>
  <div class="main box is-block section my-6 banner" :class="{'gradient-border': withGradientBorder}" :style="[bannerStyle, boxStyle]">
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
          <span v-for="(link, n) in links" :key="n">
            <Link
              v-if="link"
              :to="link"
              class="button is-light is-medium has-text-bold is-rounded mx-2"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Color from 'chroma-js'
import dynamicBanner from '@/mixins/dynamicBanner'
import BaseResource from '@/models/base/BaseResource'
import Link from '@/models/Link'

@Component({ mixins: [dynamicBanner] })
export default class extends Vue {
  @Prop({ type: Object, required: true })
  readonly data!: BaseResource;

  @Prop({ type: Boolean, default: false })
  readonly glow!: Boolean;

  internalLinks: Link[] = [];

  get links (): Link[] {
    const external = this.data.link ? [this.data.link] : []
    return [...external, ...this.internalLinks]
  }

  get colorEntity () {
    return Color(this.data.color ?? 'white')
  }

  get bannerColor () {
    return this.colorEntity.hex()
  }

  get bannerImage () {
    return this.data.image
  }

  get boxStyle (): any {
    return {
      boxShadow: this.glow ? `0 10px 40px ${this.colorEntity.alpha(0.7)}` : null
    }
  }

  get withGradientBorder () {
    return this.colorEntity.luminance() === 0;
  }

  mounted () {
    this.internalLinks = [
      ...this.data.pageLinks
    ]
  }
}
</script>

<style lang="scss" scoped>
.gradient-border {
  border-style: solid;
  border-width: 7px;
  border-radius: 0;
  background-clip: padding;
  border-image: linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% ) 1;
}
</style>
