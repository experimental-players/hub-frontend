<template>
  <div class="hero is-medium banner" :style="[bannerStyle, boxStyle]">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-0" :style="bannerForegroundStyle" v-text="title" />
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
