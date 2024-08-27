<script lang="ts">
  import Card from "../../../lib/components/Card.svelte";
  import Hero from "../../../lib/components/Hero.svelte";
  import Form from "../../../lib/components/Form.svelte";
  // import Paragraph from "../../../components/Paragraph.svelte";
  import Section from "../../../lib/components/Section.svelte";
  import type { PageData } from "./$types";
  // import TextArea from "../../../components/TextArea.svelte";

  // export let data: PageData;
</script>

<Hero>
  <p class="title">Clay Makings</p>
  <p class="subtitle">
    Functional, decorative, and entertaining clay creations
  </p>
</Hero>

<Section>
  <p class="title">Hello!</p>

  <!-- <Section>
    <Form></Form>
  </Section> -->
  <a href="/create">
    <button class="button is-primary mb-5"> Create New Post </button>
  </a>

  <div class="columns is-mobile is-flex-wrap-wrap is-4">
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Clay Art </span>
      <span slot="subtitle"> Polymer and air dry clay creations </span>
      <span slot="content">
        A recent interest and hobby of mine is creating cute figurines from
        baked polymer clay and functional items like bowls and jars from air dry
        clay!
        <br />
        <a href="/manji's-work/clay"> Read More! </a>
      </span>
    </Card>
  </div>
</Section>
