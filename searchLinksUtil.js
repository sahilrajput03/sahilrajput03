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

    // Get all links from the page
    const dynamicSearchLinks = Array.from(document.querySelectorAll("a"))
        .filter(item => !!item.getAttribute('search-title')) // Filter anchor tags which has title attribute (we assign title attribute to a markdown link by adding suffix like `{: title="Learn Algolia"}`)
        .map((item) => ({
            'search-title': item.getAttribute('search-title'), // i am using kebab case (using hyphens) instead of camelCase because if I use camelCase it is converted to camelcase (bad casing for second `c` character).
            url: item.href,
        }));
    // console.log("🚀 ~ dynamicSearchLinks:", dynamicSearchLinks);

    // Note to Sahil: I am using a suffix like `{: search-title="Learn Algolia"}` in markdown to identify the title of the link instead of parsing the text before the "click here" anchor tags because ---
    // 1. it is complex to extract the exact desired text before those anchor tags and it can sometimes be part of <li> item and sometimes not for e.g, when there are two links in the same line.
    // 2. Also, it is again harder to extract the text when the text before the "click here" anchor tag is sometimes inside <strong> tags because of bold style set using markdown's **text** syntax.
    // 3. It is important that links which do not have "click here" text e.g., "Blog Recommendation" and other links in top navigation bar so I can simply use those links directly by assigning "title" attribute to those links.

    searchResultsEl.innerHTML = [...SEARCH_LINKS, ...dynamicSearchLinks]
        .filter(item => item['search-title'].toLowerCase().includes(searchQuery))
        .slice(0, 5) // return only first 5 items
        .map(
            (item) =>
                `<li><a target="_blank" href="${item.url}">${item['search-title']}</a></li>`
        )
        .join("");

}

// NOTE TO SAHIL: Do not optimize this process to fetch from a separate json file because that cause more issues than the level of simplicity it is supposed to give because json is actually much more delicate which you can break most of times without noticing it because of a comma or adding a comment (because json doesn't support comments in it) or other syntax issues. THUS STICK TO THIS PATTERN ie., to have links in this same file for ease of use.

// suffix hints - (Github Repo), (Github)
var SEARCH_LINKS = [
    {
        'search-title': "Svelte @ monk techno world",
        url: "https://svelte.monktechnoworld.com/"
    },
];