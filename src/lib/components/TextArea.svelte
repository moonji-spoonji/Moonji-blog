<script lang="ts">
  import { onMount } from "svelte";
  let editor = $state() as HTMLDivElement;
  let toolbarOptions = [
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "unordered" }],
    [{ align: [] }],
    ["clean"],
  ];

  $effect(() => {
    $inspect(editor.textContent);
  });

  onMount(async () => {
    const { default: Quill } = await import("quill");

    let quill = new Quill(editor, {
      modules: { toolbarOptions },
      theme: "snow",
      // placeholder: "Write your story...",
    });
  });
</script>

<div id="editor">
  <div bind:this={editor}></div>
</div>
