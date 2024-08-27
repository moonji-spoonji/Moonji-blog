<script lang="ts">
  import Hero from "../../../lib/components/Hero.svelte";
  import Section from "../../../lib/components/Section.svelte";
  import type { PageData } from "./$types";

  // export let data: PageData;
</script>

<Hero>
  <p class="title">Crochet Tings</p>
  <p class="subtitle">
    Hats, sweaters, scarves, amigurumi, and the like I will share all my
    favorite resources as well as my personal makes!
  </p>
</Hero>

<Section>
  <a href="/create">
    <button class="button is-primary mb-5"> Create New Post </button>
  </a>
</Section>

<!-- <Section>
  <Shirt>Crochet Tings</Shirt>
</Section> -->
