<script lang="ts">
  import Hero from "../../lib/components/Hero.svelte";
  import ListItem from "../../lib/components/ListItem.svelte";
  import Paragraph from "../../lib/components/Paragraph.svelte";
  import Quote from "../../lib/components/Quote.svelte";
  import Section from "../../lib/components/Section.svelte";
  import type { PageData } from "./$types";
  import IconBig from "../../lib/components/Icons/IconBig.svelte";
  import IconSmall from "../../lib/components/Icons/IconSmall.svelte";

  // export let data: PageData;
</script>

<Hero>
  <p class="title">About Me</p>
  <p class="subtitle">
    Learn a bittle lit about me through the people in my life and through my
    personality, experiences, thoughts and interests.
  </p>
</Hero>

<Section>
  <div class="content is-flex is-flex-wrap-wrap">
    <Quote>
      <p>The way you see the world is the way you will see yourself.</p>
      <p>&#8212; Chinese Proverb</p>
    </Quote>
    <Quote>
      <p>“We see the world, not as it is, but as we are.”</p>
      <p>&#8212; Anaïs Nin</p>
    </Quote>
    <Quote>
      <p>
        Our identity is the sum of the choices we make, the passions we pursue,
        and the relationships we nurture
      </p>
      <p>&#8212; Lorem Ipsum</p>
    </Quote>
  </div>

  <div class="has-text-info content">
    <IconBig>
      <span slot="icon">
        <i class="fa-solid fa-user"> </i>
      </span>
      <span slot="iconText"> Background </span>
    </IconBig>
  </div>

  <div class="content">
    <ul>
      <ListItem>
        <IconSmall>
          <span slot="icon"><i class="fa-solid fa-cake-candles"></i> </span>
          <span slot="iconText">Birth Date: June XX, 2001</span>
        </IconSmall>
      </ListItem>
      <ListItem>
        <IconSmall>
          <span slot="icon"> <i class="fa-solid fa-star"></i> </span>
          <span slot="iconText"> Zodiac Sign: Cancer (Crab) </span>
        </IconSmall>
      </ListItem>
      <ListItem>
        <IconSmall>
          <span slot="icon"><i class="fa-solid fa-face-laugh-wink"></i></span>
          <span slot="iconText"> Personality Type: INFP (supposedly...) </span>
        </IconSmall>
      </ListItem>
      <ListItem>
        <IconSmall>
          <span slot="icon"><i class="fa-solid fa-globe"></i> </span>
          <span slot="iconText"> Birthplace: Jerusalem, Palestine </span>
        </IconSmall>
      </ListItem>
      <ListItem>
        <IconSmall>
          <span slot="icon"><i class="fa-solid fa-female"></i> </span>
          <span slot="iconText"> Sex & Gender: Female </span>
        </IconSmall>
      </ListItem>
      <ListItem>
        <IconSmall>
          <span slot="icon"><i class="fa-solid fa-graduation-cap"></i> </span>
          <span slot="iconText"> Education: B.S. Computer Science </span>
        </IconSmall>
      </ListItem>
    </ul>
    <Section>
      <Paragraph>
        We all have thought at least once in our lives
        <em>"I have something important to say"</em> and maybe even considered writing
        an autobiography or memoir or publishing a diary or journal, or making a
        documentary or something else that we would hope people would buy or just
        be intrigued in consuming. I have often felt that way but I realized that
        everyone is too focused on themselves to care as much as we ever could. Well,
        actually, that's not true since there are insane, crazed, obsessed individuals
        out there who do care way too much. What I mean is I eventually learned that
        we usually eiter overvalue or undervalue ourselves or pieces of our identity.
        In this case, I decided to go for it just in case someone can benefit from
        it in some way while also sharing personal interests I get insecure about
        from time to time.
      </Paragraph>

      <Paragraph>
        We all have thought at least once in our lives
        <em>"I have something important to say"</em> and maybe even considered writing
        an autobiography or memoir or publishing a diary or journal, or making a
        documentary or something else that we would hope people would buy or just
        be intrigued in consuming. I have often felt that way but I realized that
        everyone is too focused on themselves to care as much as we ever could. Well,
        actually, that's not true since there are insane, crazed, obsessed individuals
        out there who do care way too much. What I mean is I eventually learned that
        we usually eiter overvalue or undervalue ourselves or pieces of our identity.
        In this case, I decided to go for it just in case someone can benefit from
        it in some way while also sharing personal interests I get insecure about
        from time to time.
      </Paragraph>
    </Section>
  </div>
</Section>

<Section>
  <div class="has-text-link content">
    <IconBig>
      <span slot="icon"> <i class="fa-solid fa-brain"></i> </span>
      <span slot="iconText"> Interests</span>
    </IconBig>
  </div>
  <ul>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-cake"></i> </span>
        <span slot="iconText"> Baking </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-star"></i> </span>
        <span slot="iconText"> Pop Culture </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-face-laugh-wink"></i> </span>
        <span slot="iconText"> Human Behavior/Psychology </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-film"></i> </span>
        <span slot="iconText">
          Movies, TV Shows, Documentaries, and Videos
        </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-globe"></i> </span>
        <span slot="iconText"> Global Issues </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-palette"></i> </span>
        <span slot="iconText"> Visual Art and Art History </span>
      </IconSmall>
    </ListItem>
    <ListItem>
      <IconSmall>
        <span slot="icon"> <i class="fa-solid fa-graduation-cap"></i> </span>
        <span slot="iconText"> Intellectual Endeavors </span>
      </IconSmall>
    </ListItem>
  </ul>

  <Section>
    <Paragraph>
      Some of these interests are pretty popular but the subcategories or my
      opinions in regards to the more specific aspects might not be as accepted
      or popular. That's not to say I'm different or special lol, but my
      thoughts and feelings might be deemed as bad by others, so I am a bit
      hesitant to share them with others. I value the truth and authenticity
      from others and accept their thoughts and feelings as they are, and
      naturally, I would want that to be reciprocated to me and people in their
      lives.
    </Paragraph>
  </Section>
</Section>
