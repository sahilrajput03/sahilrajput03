# Code to generate Lineflow compatible content from Full Stack open's sections (topics)

- I gave this below prompt to chrome's dev tools AI and it generated good code and it worked.
- Note: Using `//` is necessary and use `cmd+shift+i` to trigger generate code via LLM.
- Please run code after the prompt directly in browser console to generate lineflow compatible text output.
- **Check lineflow compatible content:** [Click here](https://github.com/sahilrajput03/sahilrajput03/tree/main/lineflow/fso)

## Prompt

// Please write the code to get all text from element having class - "course-container" but i want to not get content of any pre tag and instead have like "[CODE_SNIPPET_HERE]". Please ignore the content of element with class "scroll-navigation-container". Please add a new line character after block html element like div but not for inline elements like span. For link tags please append to link's text "[LINK_HERE]". For img tags please treat them as block tags such that a new line is there before and after the image tag and replace it with text "[IMAGE_HERE]".

## Code Generated

```js
/**
 * Scrapes text from elements with class "course-container", applying specific
 * formatting rules for block elements, links, images, and exclusions.
 */
(() => {
  const containers = $$('.course-container');
  if (containers.length === 0) {
    console.warn('No elements found with class "course-container"');
    return;
  }

  const blockElements = new Set([
    'ADDRESS', 'ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'DETAILS', 'DIALOG', 'DD', 'DIV', 'DL', 'DT',
    'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
    'HEADER', 'HGROUP', 'HR', 'LI', 'MAIN', 'NAV', 'OL', 'P', 'PRE', 'SECTION', 'TABLE', 'UL'
  ]);

  const processNode = (node) => {
    let output = '';

    // Ignore elements with specific class
    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('scroll-navigation-container')) {
      return '';
    }

    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent.trim() ? node.textContent : '';
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toUpperCase();

      // Handle specific replacements
      if (tagName === 'PRE') {
        return '[CODE_SNIPPET_HERE]';
      }

      if (tagName === 'IMG') {
        return '\n[IMAGE_HERE]\n';
      }

      // Recursive processing for children
      let childrenContent = '';
      node.childNodes.forEach(child => {
        childrenContent += processNode(child);
      });

      if (tagName === 'A') {
        output = `${childrenContent}[LINK_HERE]`;
      } else {
        output = childrenContent;
      }

      // Add newline for block elements
      if (blockElements.has(tagName)) {
        output = `\n${output.trim()}\n`;
      }
    }

    return output;
  };

  const results = containers.map(container => {
    return processNode(container)
      .replace(/\n\s*\n/g, '\n') // Remove excessive whitespace/newlines
      .trim();
  });

  console.log(results.join('\n---\n'));
})();
```