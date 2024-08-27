type QuillOptions = {
    editorOptions?: {
        modules?: {
            toolbar?: Array<Array<any>>;
        };
        placeholder?: string;
        theme?: string;
    };
    content?: string;
    css?: string;
};

export function quill(node: HTMLElement, opts?: QuillOptions): void {
    const css = opts?.css || "//cdn.quilljs.com/1.3.6/quill.snow.css";
    // Ensure the CSS is only added once
    if (!document.querySelector(`link[href='${ css}']`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "//cdn.quilljs.com/1.3.6/quill.snow.css";
        document.head.appendChild(link);
    }

    // Dynamically import Quill when the DOM is ready
    import("quill").then((QuillModule) => {
        const Quill = QuillModule.default;

        const defaultOptions = {
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["link", "code-block"]
                ]
            },
            placeholder: "Type something...",
            theme: "snow", // or 'bubble'
        };

        const quill = new Quill(node, opts?.editorOptions || defaultOptions);

        const container = node.getElementsByClassName("ql-editor")[0] as HTMLElement;

        // Set up the 'text-change' listener to trigger the 'change' event
        quill.on("text-change", function () {
            const event = new Event('change', {
                bubbles: true,
                cancelable: true,
            });
            node.dispatchEvent(event);
        });

        opts?.content && (quill.root.innerHTML = opts.content);
    }).catch((error) => {
        console.error("Failed to load Quill:", error);
    });
}