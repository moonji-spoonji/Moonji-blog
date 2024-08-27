<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "../lib/components/Card.svelte";
  import Form from "../lib/components/Form.svelte";
  import Hero from "../lib/components/Hero.svelte";
  import Paragraph from "../lib/components/Paragraph.svelte";
  import Section from "../lib/components/Section.svelte";
  type PostData = { data: PageData };
  let { data }: PostData = $props();

  const postCategory = ["blog", "canvas", "clay", "crochet", "digital"];

  const posts = [
    {
      id: 1,
      title: "first post",
      subtitle: "first subtitle",
      category: "canvas",
      content: "content for canvas things",
    },
    {
      id: 2,
      title: "second post",
      subtitle: "second subtitle",
      category: "clay",
      content: "content for clay things",
    },
    {
      id: 3,
      title: "third post",
      subtitle: "third subtitle",
      category: "crochet",
      content: "content for crochet things",
    },
    {
      id: 4,
      title: "fourth post",
      subtitle: "fourth subtitle",
      category: "digital",
      content: "content for digital things",
    },
  ];

  // import TextArea from "./TextArea.svelte";
</script>

<Hero>
  <p class="title">Hello there! This is a title :)</p>
  <p class="subtitle">I'm Imano and this is a subtitle!</p>
</Hero>

<!-- <Form /> -->

<Section>
  <h1>Lorem, ipsum dolor sit amet</h1>
  <!-- <h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
    voluptas distinctio rem. Quaerat, voluptatum debis.
  </h2> -->
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum
    maiores beatae culpa corrupti excepturi ut, libero, earum odit nihil rem!
    Ducimus eaque eligendi harum atque omnis unde quam iste. Lorem ipsum dolor
    sit, amet consectetur adipisicing elit. Deserunt magni fugiat possimus eaque
    quibusdam illum odio asperiores earum, delectus ipsum fugit nemo molestiae
    aut animi corporis cupiditate consequatur voluptates. Cumque. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Recusandae harum maiores beatae
    culpa corrupti excepturi ut, libero, earum odit nihil rem! Ducimus eaque
    eligendi harum atque omnis unde quam iste. Lorem ipsum dolor sit, amet
    consectetur adipisicing elit. Deserunt magni fugiat possimus eaque quibusdam
    illum odio asperiores earum, delectus ipsum fugit nemo molestiae aut animi
    corporis cupiditate consequatur voluptates. Cumque.
  </Paragraph>
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum
    maiores beatae culpa corrupti excepturi ut, libero, earum odit nihil rem!
    Ducimus eaque eligendi harum atque omnis unde quam iste. Lorem ipsum dolor
    sit, amet consectetur adipisicing elit. Deserunt magni fugiat possimus eaque
    quibusdam illum odio asperiores earum, delectus ipsum fugit nemo molestiae
    aut animi corporis cupiditate consequatur voluptates. Cumque. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Recusandae harum maiores beatae
    culpa corrupti excepturi ut.
  </Paragraph></Section
>

<!-- <Section>
  <div class="is-size-2 has-text-success">
    <YinYang>Balance Is Key</YinYang>
  </div>
</Section>
<Section>
  <div class="is-size-3 has-text-warning py-6">
    <Star>Star Icon Component!</Star>
  </div>
</Section> -->

<Section>
  <!-- might want to add "is-centered" to the class -->
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
      </span>
      <!-- <br /> -->
      <span slot="link"> <a href="/manji's-work/clay"> Read More! </a></span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1604510493959-8a20b3630d53?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Yarn & Needle Art </span>
      <span slot="subtitle">Subtitle for this card</span>
      <span slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        similique vero! Ut eos, fugit molestias, quos nemo natus reiciendis
        facere quo odit est in consequuntur, rerum delectus quod odio repellat.
      </span>
      <span slot="link"> <a href="/manji's-work/crochet"> Read More! </a></span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1661595677003-157c57d7d3e4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Digital Art </span>
      <span slot="subtitle">Subtitle for this card</span>
      <span slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        similique vero! Ut eos, fugit molestias, quos nemo natus reiciendis
        facere quo odit est in consequuntur, rerum delectus quod odio repellat.
      </span>
      <span slot="link"> <a href="/manji's-work/digital"> Read More! </a></span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Writing </span>
      <span slot="subtitle">Subtitle for this card</span>
      <span slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        similique vero! Ut eos, fugit molestias, quos nemo natus reiciendis
        facere quo odit est in consequuntur, rerum delectus quod odio repellat.
      </span>
      <span slot="link"> <a href="/blogs"> Read More! </a></span>
    </Card>
    <Card>
      <span slot="image">
        <img
          src="https://images.unsplash.com/photo-1658303135227-fcdfb0dab396?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder "
        />
      </span>
      <span slot="title"> Canvas Art </span>
      <span slot="subtitle">Subtitle for this card</span>
      <span slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
        similique vero! Ut eos, fugit molestias, quos nemo natus reiciendis
        facere quo odit est in consequuntur, rerum delectus quod odio repellat.
      </span>
      <span slot="link"> <a href="/manji's-work/canvas"> Read More! </a></span>
    </Card>
    <!-- <Card></Card> -->

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
  </div>
</Section>
