<script lang="ts">
  import type { PageData } from "./$types";
  import Section from "$lib/components/Section.svelte";

  import { enhance } from "$app/forms";

  // export let data: PageData;
</script>

<form action="?/login" method="post">
  <Section>
    <div class="columns">
      <div class="container block box column is-four-fifths px-4">
        <h1 class="my-4">Login</h1>
        <div class="field">
          <label class="label" for="username"> Username </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              id="username"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label" for="password"> Password </label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Text input"
              id="password"
              required
            />
          </div>
        </div>

        <div class="field is-grouped mt-5">
          <div class="control">
            <button class="button is-link" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </Section>

  <Section>
    <div class="columns">
      <div class="container block column is-four-fifths px-4">
        <h5>
          Don't have an account?
          <a href="/sign-up" class="ml-5">
            <button class="button is-primary"> Sign up! </button>
          </a>
        </h5>
      </div>
    </div>
  </Section>
</form>
