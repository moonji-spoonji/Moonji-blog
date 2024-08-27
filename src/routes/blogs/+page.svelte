<script lang="ts">
  import Hero from "../../lib/components/Hero.svelte";
  import type { PageData } from "../blogs/$types";
  // import Form from "../../components/Form.svelte";
  import Section from "../../lib/components/Section.svelte";

  // export let data: PageData;
</script>

<!-- Include stylesheet -->
<!-- <link
  href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css"
  rel="stylesheet"
/> -->

<!-- Create the editor container -->
<!-- <div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br /></p>
</div> -->

<Hero>
  <p class="title">BLOGS</p>
  <p class="subtitle">SUBTITLE</p>
</Hero>

<Section>
  <a href="/create">
    <button class="button is-primary"> Create New Post </button>
  </a>
</Section>
