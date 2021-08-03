<template>
  <div>
    <Banner v-bind="section" />

    <div class="hero is-dark is-bold is-small">
      <div class="hero-body">
        <div class="container">
          <p class="subtitle is-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis facere minima consequatur, odio repellendus vitae suscipit unde, soluta reiciendis ad id dolor aperiam omnis veniam esse, quasi nihil magnam.
          </p>
        </div>
      </div>
    </div>

    <div class="pb-medium">
      <div class="container section content">
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
