<script lang="ts">
  import type { PageData } from "./$types";
  import Section from "$lib/components/Section.svelte";

  import { enhance } from "$app/forms";

  let input: any;
  let container;
  let image: any;
  let placeholder = $state();
  let showImage = $state(false);

  function showpfp() {
    const file = input.files[0];

    if (file) {
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);

      return;
    }
    showImage = false;
  }

  let pfpUsername = $state();
  // let { username = $bindable("username") } = $props();

  // username.oninput = showValue();
  // function showValue() {
  //   pfpUsername.value = this.value;
  // }
  // export let data: PageData;

  // function writeUsername(uName: String) {
  //   document.getElementById("pfpUsername")?.innerText = uName.value;
  // }
</script>

<!-- svelte-ignore non_reactive_update -->
<form action="/" method="post">
  <Section>
    <div class="columns">
      <div class="container block box column is-four-fifths px-4">
        <h1 class="my-4">Sign-up</h1>
        <div class="field">
          <label class="label" for="firstName"> First Name </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              id="firstName"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label" for="lastName"> Last Name </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              id="lastName"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label" for="username"> Username </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              id="username"
              bind:value={pfpUsername}
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

        <div class="field">
          <label class="label" for="profilepic"> Profile Picture </label>
          <div class="control">
            <input
              class="input"
              type="file"
              id="profilepic"
              bind:this={input}
              onchange={showpfp}
            />
          </div>
          <div class=" container box columns mr-3 mt-3" style="display: flex;">
            <div bind:this={container} class="column mr-5">
              {#if showImage}
                <!-- <ProfilePic> -->
                <figure class="image is-128x128">
                  <img
                    bind:this={image}
                    src=""
                    alt="Preview"
                    class="image is-128x128 is-rounded"
                  />
                </figure>
                <!-- </ProfilePic> -->
              {:else}
                <span bind:this={placeholder}>Image Preview</span>
              {/if}
            </div>
            <div class="column is-four-fifths is-align-content-center">
              <p class="title" id="pfpname">{pfpUsername}</p>
            </div>
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
      <div
        class="container block column is-four-fifths px-4 is-align-content-center"
      >
        <h5>
          Already have an account?
          <a href="/login" class="ml-5">
            <button class="button is-primary"> Login </button>
          </a>
        </h5>
      </div>
    </div>
  </Section>
</form>
