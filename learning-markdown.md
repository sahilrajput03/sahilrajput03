# Learning Markdown

*You may practise markdown with live updates @ https://marked.js.org/demo/.*

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
  *This is bold text*
  
  **This is italics text**
  
  ***This is bold+italics text***
  ```

- **Links**: To create a link that says [Click here](https://example.com) and opens up website `https://example.com`, you can do like

  ```md
  [Click here](https://example.com)
  
  ***[Click here](https://example.com)***
  ```

  The second link would be ***italicized + bold** as well.
  
- **Lists and sublists**: To make a list you can make use of `-` to make a list item. For e.g., 

  ```txt
  - This is list item1
  - This is list item2
    - This is sublist item1 of list item2
    - This is sublist item2 of list item2
  ```
  
  output of above markdown would look like:
  - This is list item1
  - This is list item2
    - This is sublist item1 of list item2
    - This is sublist item2 of list item2

  
  To make a

- **Code snippets**: To create a inline (in same line as the text) you can use \`code here\` to make a text formatted as code which would look like `code here`. Also to create a block like text formatter as code, you can do like: (**NOTE: In place of `'''` you must use ` ``` ` when writing your markdown, I have done that to show on that on purpose**).

  ```
  '''languageName
  console.log("Hello world")
  // more code here
  
  '''
  ```

  where *languageName* is **optional**, it can have values like txt, js, py, bash, markdown, etc.
