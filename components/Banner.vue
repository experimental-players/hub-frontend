<template>
  <div>
    <div class="hero is-medium banner" :style="bannerStyle">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-0" :style="bannerForegroundStyle" v-text="title" />
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
import Section from '@/components/BubbleSection'

export default {
  extends: Section
}
</script>
