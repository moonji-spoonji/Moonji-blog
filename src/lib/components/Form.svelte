<script lang="ts">
  import TextArea from "./TextArea.svelte";

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

<!-- <link
  href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css"
  rel="stylesheet"
/> -->

<div class="container block box">
  <div class="field">
    <label class="label" for="title"> Title </label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Text input"
        id="title"
        name="title"
        required
      />
    </div>
  </div>

  <div class="field">
    <label class="label" for="subtitle"> Subtitle </label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="Text input"
        name="subtitle"
        id="subtitle"
      />
    </div>
  </div>

  <div class="field">
    <label class="label" for="image"> Image File/URL </label>
    <div class="control">
      <!-- <input
        class="input"
        type="text"
        placeholder="Text input"
        id="image"
        required
      /> -->
      <input type="file" required id="image" class="input" name="image" />
    </div>
  </div>

  <div class="field">
    <label class="label" for="category"> Category </label>
    <div class="control">
      <div class="select" id="category">
        <select required name="category">
          <option> Select category </option>
          <option value="canvas"> Canvas </option>
          <option value="clay"> Clay </option>
          <option value="crochet"> Crochet </option>
          <option value="digital"> Digital </option>
        </select>
      </div>
    </div>
  </div>

  <div class="field">
    <label class="label" for="content"> Content </label>
    <div class="control">
      <!-- <TextArea></TextArea> -->
      <!-- <div bind:this={editor}>
        <textarea id="editor" name="content" class="content"> </textarea>
      </div> -->
      <div
        class="ql-editor"
        use:quill={{ editorOptions: options }}
        onchange={handleChange}
      ></div>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <input type="hidden" name="content" value={content} />
      <button class="button is-link" type="submit">Submit</button>
    </div>
    <!-- <div class="control">
      <button class="button is-success is-light">Save</button>
    </div> -->
    <div class="control">
      <button class="button is-link is-light" type="reset">Reset</button>
    </div>
  </div>
</div>
