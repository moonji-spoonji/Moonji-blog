<!-- <script lang="ts">
  import type { PageData } from "./$types";
  import Hero from "../../../lib/components/Hero.svelte";
  import Section from "../../../lib/components/Section.svelte";
  import { page } from "$app/stores";
  import Card from "$lib/components/Card.svelte";

  type PostData = { data: PageData };
  let { data }: PostData = $props();

  let posts = $derived(data.records);
</script>

<Hero>
  <p class="title">Digital Art</p>
  <p class="subtitle">
    I use both the Ipad app Procreate and the free app Inkscape on my laptop to
    make all my digital artistic creations.
  </p>
</Hero>

<Section>
  <a href="/create">
    <button class="button is-primary mb-5"> Create New Post </button>
  </a>

  {#each posts as post, idx (`post-${post.id}-${idx}`)}
    {#if post.subtitle === "digital"}
      <Card>
        <span slot="image">
          <img
            src="https://images.unsplash.com/photo-1658303135227-fcdfb0dab396?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Placeholder "
          />
        </span>
        <span slot="title"> {post.title} </span>
        <span slot="subtitle"> {post.subtitle} </span>
        <span slot="content">
          {post.content}
        </span>
        <span slot="link">
          <a href="/manji's-work/{post.category}"> Read More! </a></span
        >
      </Card>
    {/if}
  {/each}
</Section> -->

<h1>Hello</h1>
