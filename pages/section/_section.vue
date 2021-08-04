<template>
  <div class="has-background-dark">
    <Banner v-bind="section" :glow="false" class="pb-intersection clipped-banner" />

    <div class="container is-rounded mt-negative-intersection pb-medium">
      <div class="section is-rounded hero is-dark is-bold is-small description-box">
        <div class="hero-body">
          <div class="container">
            <p class="subtitle is-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis facere minima consequatur, odio repellendus vitae suscipit unde, soluta reiciendis ad id dolor aperiam omnis veniam esse, quasi nihil magnam.
            </p>
          </div>
        </div>
      </div>

      <div class="is-rounded has-background-light main-page-content">
        <div class="section content">
          <!-- EXAMPLE CONTENT -->
          <h1 id="sample-markdown">
            Sample Markdown
          </h1>
          <p>This is some basic, sample markdown.</p>
          <h2 id="second-heading">
            Second Heading
          </h2>
          <ul>
            <li>
              Unordered lists, and:
              <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ol>
            </li>
            <li>More</li>
          </ul>
          <blockquote>
            <p>Blockquote</p>
          </blockquote>
          <p>
            And <strong>bold</strong>, <em>italics</em>, and even
            <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>.
            <a href="https://markdowntohtml.com">A link</a> to somewhere.
          </p>
          <p>And code highlighting:</p>
          <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
          <p>Or an image of bears</p>
          <p><img src="http://placebear.com/200/200" alt="bears"></p>
          <p>The end ...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    section () {
      return (
        this.$store.state.sections.list.filter(
          section => section.title === this.$route.params.section
        )[0] ?? null
      );
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes bannerIntro {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.clipped-banner {
  // animation: bannerIntro 1s ease-out forwards;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
}

.description-box {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.main-page-content {
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
}
</style>
