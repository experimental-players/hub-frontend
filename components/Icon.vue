<template>
  <figure class="box is-inline-block has-shadow">
    <p class="image is-64x64">
      <img :src="src" />
    </p>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    }
  }
}
</script>
