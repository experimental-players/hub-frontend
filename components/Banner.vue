<template>
  <div class="hero is-medium banner" :style="[bannerStyle, boxStyle]">
    <div class="hero-body">
      <div class="container">
        <div v-if="data.icon">
          <Icon :src="data.icon" />
        </div>
        <h1
          class="title is-0"
          :style="bannerForegroundStyle"
          v-text="data.title"
        />

        <div v-if="data.link">
          <Link
            :to="data.link"
            class="button is-light is-medium has-text-bold is-rounded mx-2 my-1"
            :class="{ glowing: glow }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Section from '@/components/Section';

export default {
  extends: Section
};
</script>
