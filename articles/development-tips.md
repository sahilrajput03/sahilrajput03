# Deveopment Tips

21 May 2026

- Making notes is good for long term memory and a little bit for short term memory because you tend to rely on written material. But overall its really great thing to make notes.
- Get summary of any YouTube tutorial video in any language in Google Gemini. ❤️
- Use VS Code default markdown file preview to the side - `cmd+k v`.
- What is REPL:
    - Read → reads your input
    - Eval → evaluates/runs it
    - Print → prints the result
    - Loop → repeats continuously
- Always keep a REPL (Read–Eval–Print Loop) on of nodejs for fast testing by running `node` on your terminal.
    - You can load a js file in repl by running: `.load 1.js` and you can get value of any variable's value in the REPL mode by using the name of variable. Example:
    ```js
    /* Note: Please add below 4 lines of code to your ~/.bashrc file.
    # Run a file in REPL mode and you can access top level variables and functions in REPLY. ❤️
    node.run_in_repl() {
        node -i -e "$(cat $1)"
    }
    */

    const boats = ['abc', 'def'];
    let cars = ['bmw', 'mercedes'];
    const bikes = ['ducati', 'splender'];

    let count = 0;

    setInterval(() => {
        // You get this log in REPL
        console.log('Ran interval function');
        // 🎉 You can run `count` in REPL and you get its latest value always.
        count++;
    }, 2000);
    ```
- HTTP Statuses: [Learn Express](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.0#heading=h.yvdn9vtmve6c)
