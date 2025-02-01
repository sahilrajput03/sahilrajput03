async function searchFunction(e) {
    const searchQuery = e.target.value.toLowerCase();
    // console.log("🚀 ~ searchFunction ~ searchQuery:", searchQuery)

    const searchResultsEl = document.getElementById("search-results");

    if (searchQuery === "") {
        searchResultsEl.innerHTML = null;
        return;
    }

    try {
        const response = await fetch('/searchLinks.json'); // 😇 file hosted in this same repo
        if (!response.ok) {
            console.error('sahil-error: Unable to fetch - searchLinks.json: Network response was not ok');
            return;
        }
        const data = await response.json();
        // console.log('🚀🚀sahil-searchLinks?', data.links);
        searchResultsEl.innerHTML = data.links.filter(item => item.title.toLowerCase().includes(searchQuery))
            .map(
                (item) =>
                    `<li><a target="_blank" href="${item.url}">${item.title}</a></li>`
            )
            .join("");
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

/**
      <li><a target="_blank" href="https://github.com/sahilrajput03/learning_expressjs">Learn Expressjs</a></li>
    <li><a target="_blank" href="https://sahilrajput.com/learn-markdown">Learn Markdown</a></li>
 */