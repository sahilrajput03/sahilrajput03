# Thoughts & Principles

## How to publish new thoughts?

Add quotes directly to the `src/thoughts.md` file.

## Note

- You can write markdown + html in file `src/thoughts.md`.
- Currently I'm splitting the whole file with `\n\n` i.e., two new line characters to get markdown and then parse that markdown.
- I am rendering each block of text as markdown via `react-markdown` library. Source: [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)

In this markdown rendering, I added two plugins:

- `rehype-raw`: This plugin helps to render html contained in markdown.
  - Officially recommended by `react-markdown` [here](https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown).
  - Plugin Github: [rehypejs/rehype-raw](https://github.com/rehypejs/rehype-raw)
- `rehype-external-links`: This plugin helps to manipulate markdown links AS WELL AS achor tags `<a>` present in html present in markdown.

  - I am using this plugin so that my markdown links are updated with `target="_blank"`
  - Officially recommended by `react-markdown` [here](https://github.com/remarkjs/react-markdown/blob/main/changelog.md#900---2023-09-27).
  - Plugin Github: [rehypejs/rehype-external-links](https://github.com/rehypejs/rehype-external-links)

Thanks.
