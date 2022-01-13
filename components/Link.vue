<template>
  <component :is="linkType" :to="to.href" :href="to.href" :target="target" v-text="to.title" />
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '@/models/Link'
import { isAbsoluteURL } from '@/helpers/url';

export default Vue.extend({
  props: {
    to: {
      type: Link,
      required: true
    }
  },
  computed: {
    linkType (): string {
      return isAbsoluteURL(this.to.href) ? 'a' : 'nuxt-link';
    },
    target (): string {
      return this.to.title.trim().toLowerCase().replace(' ', '.');
    }
  }
})
</script>
