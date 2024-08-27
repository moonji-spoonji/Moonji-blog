<script lang="ts">
  import { enhance } from "$app/forms";
  import { quill } from "$lib/client/actions/quill.svelte";
  const options = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "image"],
        ["link", "code-block"],
      ],
    },
    placeholder: "Type something...",
    theme: "snow",
  };
  let content = $state("");

  const handleChange = (event: Event) => {
    const target = event.currentTarget as HTMLElement;
    const html = target.querySelector(".ql-editor")?.innerHTML;
    const text = target.querySelector(".ql-editor")?.textContent;
    console.log("HTML:", html);
    console.log("Text:", text);
    html && (content = html);
    // Do something with the new content
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div
  class="ql-editor"
  use:quill={{ editorOptions: options }}
  onchange={handleChange}
></div>

<form action="?/save" method="POST" use:enhance>
  <input type="hidden" name="content" value={content} />
  <button class="button" type="submit">Save Content</button>
</form>
