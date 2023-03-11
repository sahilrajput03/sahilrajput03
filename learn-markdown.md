# Learning Markdown

*You may practise markdown with live updates @ https://marked.js.org/demo/.*

***Favourite markdown docs: https://daringfireball.net/projects/markdown/***

- Underline text:

  ```
  <ins>**This text will be bold and underlined**<ins>
  ```

- Using image:

  ```
  ![](image-url-here)

  To set width for an image, you can use html tag as well:
  <img src="https://some_image.jpg" alt="drawing" width="230"/>
  ```

- **Headings**

  ```md
  # Heading Size 1
  ## Heading Size 2
  ..
  ..
  ###### Heading Size 6

  DON'T DO LIKE BELOW (Notice there is not spaces between # and heading text)
  #Heading1
  ```

- **Paragraphs:** In below example, only when there is empty line the new paragraph starts. **Thats why line1 and line2 will appears as a single paragraph even though they are on different lines.**


  ```md
  This is line1.
  This is line2.
  
  This is line3.
  
  This is line4.
  ```
  
  **Output:**
  
  This is line1.
  This is line2.
  
  This is line3.
  
  This is line4.
  

- **Bold**, *Italics*, ***Bold+Italics***

  ```md
  *This is italics text*
  
  **This is bold text**
  
  ***This is bold+italics text***
  ```

- **Links**: To create a link that says [Click here](https://example.com) and opens up website `https://example.com`, you can do like

  ```md
  [Click here](https://example.com)
  
  To make the link italicized and bold you can do like that:
  
  ***[Click here](https://example.com)***
  ```
  
- **Lists and sublists**: To make a list you can make use of `-` to make a list item. For e.g., 

  ```txt
  - This is list item1
  - This is list item2
    - This is sublist item1 of list item2
    - This is sublist item2 of list item2
  ```
  
  *output of above markdown would look like:*
  - This is list item1
  - This is list item2
    - This is sublist item1 of list item2
    - This is sublist item2 of list item2

- **Code snippets**: To create a inline (in same line as the text) you can use \`code here\` to make a text formatted as code which would look like `code here`. Also to create a block like text formatter as code, you can do like that:

  \```js
  
  console.log("Hello world")
  
  // more code here
  
  \```

  in above we used `css` as language but we can use any languagae like `js`, `ts`, `html`, `txt`, `py`, `bash`, `markdown`, etc.

- Striked out text

```
Use ~~double tildes around the words~~.
```
