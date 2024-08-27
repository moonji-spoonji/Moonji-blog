<script lang="ts" src="https://kit.fontawesome.com/f5d5831ef6.js" crossorigin="anonymous">
  import type { Snippet } from "svelte";
  import Footer from "../lib/components/Footer.svelte";
  import Navbar from "../lib/components/Navbar.svelte";

  // import Icon from "@iconify/svelte";
  // import type { LayoutData } from "./$types";

  // export let data: LayoutData;

  const { children }: { children: Snippet } = $props();
</script>
<!-- <script src="https://kit.fontawesome.com/f5d5831ef6.js" crossorigin="anonymous"></script> -->

<Navbar />

<!-- Page content is filled in the slot -->
<div class="container-fluid">
{@render children()} 

</div>
<Footer />

<svelte:head>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
    />
</svelte:head> 