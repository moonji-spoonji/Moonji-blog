<script lang="ts">
  import Hero from "../../../lib/components/Hero.svelte";
  import Section from "../../../lib/components/Section.svelte";
  import type { PageData } from "./$types";
  import Card from "$lib/components/Card.svelte";

  import { page } from "$app/stores";
  type CanvasData = { data: PageData };
  let { data }: CanvasData = $props();
  // export let data: PageData;
  const posts = [
    {
      id: 1,
      title: "first post",
      subtitle: "first subtitle",
      category: "canvas",
      content: "content for canvas things",
    },
  ];
</script>

<Hero>
  <p class="title">Canvas Page</p>
  <p class="subtitle">Anything I made on a canvas or piece of paper!</p>
</Hero>

<Section>
  <a href="/create">
    <button class="button is-primary"> Add New Canvas </button>
  </a>
</Section>

<Section>
  <h1>Canvas Cards:</h1>

  {#each posts as post, idx (`post-${post.id}-${idx}`)}
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
  {/each}
</Section>
