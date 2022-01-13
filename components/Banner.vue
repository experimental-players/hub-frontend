<template>
  <div class="hero is-medium banner" :style="[bannerStyle, boxStyle]">
    <div class="hero-body">
      <div class="container">
        <div v-if="data.icon" class="column is-one-fifth">
          <figure class="box is-inline-block has-shadow">
            <p class="image is-64x64">
              <img :src="data.icon" />
            </p>
          </figure>
        </div>
        <h1
          class="title is-0"
          :style="bannerForegroundStyle"
          v-text="data.title"
        />
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
