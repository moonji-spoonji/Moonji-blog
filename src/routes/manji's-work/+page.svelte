<script lang="ts">
  import Hero from "../../lib/components/Hero.svelte";
  import IconBig from "../../lib/components/Icons/IconBig.svelte";
  import Paragraph from "../../lib/components/Paragraph.svelte";
  import Section from "../../lib/components/Section.svelte";
  import type { PageData } from "./$types";

  // export let data: PageData;
</script>

<Hero>
  <p class="title">Manji's Work</p>
  <p class="subtitle">
    All types of my creations I would like to share with you!
  </p>
</Hero>

<Section>
  <div class="has-text-warning">
    <IconBig>
      <span slot="icon">
        <i class="fa-solid fa-laptop-code"></i>
      </span>
      <span slot="iconText"> Code </span>
    </IconBig>
  </div>

  <Section>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut
      impedit doloribus laboriosam esse repudiandae eos consectetur unde?
      Quaerat facere rerum dolores dolor. Illum enim eius unde, voluptate quam
      ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
      asperiores corrupti voluptatibus quis. Aliquam minus dolorum
      exercitationem repellat reiciendis eveniet in eius quas excepturi nisi
      modi saepe, unde, deserunt voluptate? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Tempora ut impedit doloribus laboriosam esse
      repudiandae eos consectetur unde? Quaerat facere rerum dolores dolor.
      Illum enim eius unde, voluptate quam ut? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Itaque asperiores corrupti voluptatibus
      quis. Aliquam minus dolorum exercitationem repellat reiciendis eveniet in
      eius quas excepturi nisi modi saepe, unde, deserunt voluptate? Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Tempora ut impedit doloribus
      laboriosam esse repudiandae eos consectetur unde? Quaerat facere rerum
      dolores dolor. Illum enim eius unde, voluptate quam ut? Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Itaque asperiores corrupti
      voluptatibus quis. Aliquam minus dolorum exercitationem repellat
      reiciendis eveniet in eius quas excepturi nisi modi saepe, unde, deserunt
      voluptate?
    </Paragraph>
  </Section>
</Section>

<Section>
  <div class="has-text-success">
    <IconBig>
      <span slot="icon">
        <i class="fa-solid fa-palette"></i>
      </span>
      <span slot="iconText"> Visual Art </span>
    </IconBig>
  </div>

  <Section>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      consequatur, totam repellendus asperiores minus eveniet perspiciatis
      quibusdam? Libero aliquam nesciunt pariatur cum, tenetur obcaecati
      recusandae harum perferendis architecto ea enim.
    </Paragraph>
  </Section>
</Section>

<Section>
  <div class="has-text-info">
    <IconBig>
      <span slot="icon">
        <i class="fa-solid fa-pen"></i>
      </span>
      <span slot="iconText"> Writing </span>
    </IconBig>
  </div>

  <Section>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      consequatur, totam repellendus asperiores minus eveniet perspiciatis
      quibusdam? Libero aliquam nesciunt pariatur cum, tenetur obcaecati
      recusandae harum perferendis architecto ea enim.
    </Paragraph>
  </Section>
</Section>
