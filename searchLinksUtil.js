// Select the container
const container = document.querySelector(".search-container");

// Why not algolia?
// I'm not using algolia because it is overkill for my local links search use case. Also free algolia only allows you to have only 1000 links to be indexed which is really low for search links thing.

// Dynamically add the <textarea> inside the <div class="search-container"> 
// Note: I'm adding it dynamically because otherwise I'm seeing textarea element in my readme.md file on github which looks a bit dirty on github.
const textarea = document.createElement("textarea");
// I made it a textarea instead of an input element because on mobile we see credit card related helpful entities when we use input tag
textarea.rows = 1;
textarea.type = "text";
textarea.id = "search-input";
textarea.placeholder = "Search here... ⌘K / Ctrl+K";
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
    // 4.  I'm preferred search-title way because it gives me explicit control of managing my search results whereas if I were using a brute force way to get list of links from website it would be too noisy and harder to add logics to control different types of links because all links on the page are not in uniform pattern. Also I would like to have different search title (name appearing in search results) for some specific links and it can only be done using a special control field like 'search-title' attribute on anchor links.

    searchResultsEl.innerHTML = [...SEARCH_LINKS, ...dynamicSearchLinks]
        .filter(item => item['search-title'].toLowerCase().includes(searchQuery))
        .slice(0, 8) // return only first 8 items
        .map(
            (item) =>
                `<li><a target="_blank" href="${item.url}">${item['search-title']}</a></li>`
        )
        .join("");

}

// keyboard shortcut (⌘K / Ctrl+K)
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault(); // Prevents browser's default behavior
        document.getElementById('search-input').focus();
    }
});


// NOTE TO SAHIL: Do not optimize this process to fetch from a separate json file because that cause more issues than the level of simplicity it is supposed to give because json is actually much more delicate which you can break most of times without noticing it because of a comma or adding a comment (because json doesn't support comments in it) or other syntax issues. THUS STICK TO THIS PATTERN ie., to have links in this same file for ease of use.

// suffix hints - (Github Repo), (Github)
var SEARCH_LINKS = [
    {
        'search-title': "Svelte @ monk techno world",
        url: "https://svelte.monktechnoworld.com/"
    },
];

// STARTS-HERE: Feature to sroll to bottom with a fixed image in bottom-right
// add scroll to bottom icon
const scrollToBottomEl = document.createElement("img");
scrollToBottomEl.alt = "Scroll to Bottom";

// Apply styles to position it at the lower bottom
scrollToBottomEl.style.position = "fixed";
scrollToBottomEl.style.bottom = "10px"; // Adjust as needed
scrollToBottomEl.style.right = "10px"; // Adjust as needed

let size;
if (window.innerWidth < 800) {
    size = "60px";
} else {
    size = "80px";
}
scrollToBottomEl.style.width = size; // Set image width
scrollToBottomEl.style.height = size; // Set image height
scrollToBottomEl.style.zIndex = "1000"; // Ensure it's above other elements

// Function to check if user is at the bottom
function isAtBottom() { return window.innerHeight + window.scrollY >= document.body.offsetHeight; }

// Note: Both of these functions do not work good to set appropriate scrollToBottom/scrollToTop image as per initial scroll position when page loaded so I am setting `scrollToBottomIcon` on page load for now.
// document.addEventListener("DOMContentLoaded", updateScrollToBottomOrTopIcon);
// window.onload = updateScrollToBottomOrTopIcon;
const bottomScrollImgSrc = "./site-assets/scroll-to-bottom-1.png";
scrollToBottomEl.src = bottomScrollImgSrc; // set scroll to bottom image by default

const updateScrollToBottomOrTopIcon = () => {
    if (isAtBottom()) {
        scrollToBottomEl.src = bottomScrollImgSrc;
    } else {
        scrollToBottomEl.src = "./site-assets/scroll-to-top-1.png";
    }
};

// Function to scroll to bottom
scrollToBottomEl.addEventListener("click", () => {
    updateScrollToBottomOrTopIcon();
    if (isAtBottom()) {
        window.scrollTo({ top: 0, behavior: "instant" }); // Scroll to top
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }); // Scroll to bottom
    }
});

// Append to the body
document.body.appendChild(scrollToBottomEl);
// ENDS-HERE: Feature to sroll to bottom with a fixed image in bottom-right
