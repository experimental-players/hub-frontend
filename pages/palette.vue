
<template>
  <div>
    <div class="hero is-medium banner">
      <div class="hero-body container">
        <div class="has-text-centered">
          <h1 class="title is-1">
            <span>Color Palette Test</span>
          </h1>
        </div>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div v-for="type in types" :key="type" class="column hero is-bold" :class="'is-' + type">
        <div class="hero-body container">
          <p>
            {{ type }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: ['primary', 'info', 'link', 'danger', 'warning', 'success', 'light', 'dark']
    }
  }
}
</script>
