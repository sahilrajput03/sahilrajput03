// Select the container
const container = document.querySelector(".search-container");

// Dynamically add the <textarea> inside the <div class="search-container"> 
// Note: I'm adding it dynamically because otherwise I'm seeing textarea element in my readme.md file on github which looks a bit dirty on github.
const textarea = document.createElement("textarea");
// I made it a textarea instead of an input element because on mobile we see credit card related helpful entities when we use input tag
textarea.rows = 1;
textarea.type = "text";
textarea.id = "search-input";
textarea.placeholder = "Search here...";
textarea.setAttribute("oninput", "searchFunction(event)");

// Add the textarea as the first element
container.prepend(textarea);

async function searchFunction(e) {
    const searchQuery = e.target.value.toLowerCase();
    // console.log("🚀 ~ searchFunction ~ searchQuery:", searchQuery)

    const searchResultsEl = document.getElementById("search-results");

    if (searchQuery === "") {
        searchResultsEl.innerHTML = null;
        return;
    }
    searchResultsEl.innerHTML = searchLinks
        .filter(item => item.title.toLowerCase().includes(searchQuery))
        .slice(0, 5) // return only first 5 items
        .map(
            (item) =>
                `<li><a target="_blank" href="${item.url}">${item.title}</a></li>`
        )
        .join("");

}

// NOTE TO SAHIL: Do not optimize this process to fetch from a separate json file because that cause more issues than the level of simplicity it is supposed to give because json is actually much more delicate which you can break most of times without noticing it because of a comma or adding a comment (because json doesn't support comments in it) or other syntax issues. THUS STICK TO THIS PATTERN ie., to have links in this same file for ease of use.

// suffix hints - (Github Repo), (Github)
var searchLinks = [
    {
        title: "Learn Expressjs (Github Repo)",
        url: "https://github.com/sahilrajput03/learning_expressjs"
    },
    {
        title: "Learn Markdown (Github)",
        url: "https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-markdown.md"
    },
    {
        title: "Learn Markdown",
        url: "https://sahilrajput.com/learn-markdown"
    },
];