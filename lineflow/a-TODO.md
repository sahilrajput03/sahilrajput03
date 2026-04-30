{% include lineflow-links.md %} 

**Note:**
- I have not added reading progress while reading because I don't like seeing reading progress as it needs your thinking and it's just some percentage that you are trying to achieve.
- There is this file which I made to remember the dom elements in frontend for myself: `~/Documents/github_repos/sahilrajput03/line-flow.notes.txt`
- The purpose to show line number with each line is that user can remember the line number if they want to go further and then back to the point they were reading.

## SURGERY (Current Todos)

- [ ] PWA for easy access by my friends on both desktop and mobile.
- [ ] Creating a new document sometimes shows content of previous document instead of empty content.
- [ ] Scroll position restore after a document is closed (which was earlier opened from the feed on mobile).
- [ ] Using the arrow keys on edit document page triggers read-position API.
- [ ] Fix the number of lines read bug especially when you go once forward and then backward thus it counts them as separate lines read instead of of just 1 line.
- [ ] By keeping arrows key presed it app-wide rate limiter is triggered to disable the API totally, should I do something about it? Like call the read-position API using a debounced call to limit immediate API call?
- [ ] Show the Followed text after following a user.
- [ ] Show view to see following and followers of self and other users (Check how other social media platforms do this).
- [ ] Make the logout time if token for lineflow as 1 month becoz 1 week is too low.
- [ ] Hide line number wala feature simply by having a toogle on the ui to hide/show the line number in the reading panel. I see that the reason I like to have the lines number is also because it's developer friendly as it helps debugging.
- FUTURE: Add a big button to simply open your last reading doc as it will.
- [ ] Whenever "doc-create-card" or "doc-update-card" is shown please hide "search-card" and "feed-card".
<!-- FUTURE -->
- [ ] Follow Features:
  - [ ] Update "Followed" to "Following" after clicking follow on a user.
  - [ ] Show unfollow button on users to unfollow if user is already following them.
  - [ ] My feed should have filter by `lastReadtAt` (create this field name in `document` model).
- [ ] AI tranalation feature of the sentence.
- **NOTE: I must add the hindi reading feature only when I myself have some good text to read in hindi.**
  - [ ] Hindi text reading feature - User can upload hindi document and for that it will load the hindi parser to calculate the lines because probably sbd doesn't parser hindi text line by line properly. I can make custom parser for hindi probably. This would work by studying the encoding as "en", "hi", etc.
  - Hindi content:
    - [Google Search - Hindi Stories](https://www.google.com/search?q=hindi+stories&oq=hindi+stories&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgoIAhAAGIAEGMcFMgoIAxAAGIAEGMcFMgoIBBAAGIAEGMcFMgoIBRAAGIAEGMcFMgoIBhAAGIAEGMcFMgcIBxAAGIAEMgcICBAAGIAEMgoICRAAGIAEGMcF0gEIMTczNWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8), [hindikahani.hindi-kavita.com](https://hindikahani.hindi-kavita.com/Bulbul-Aur-Amrood-Karamjit-Singh-Gathwala.php)
- [ ] BONUS: NUMBER OF LINES AND NUMBER OF LINES PROGRESS FOR SELF DOCUMENTS:
  - [ ] Store and show the total number of lines of each doc in the doc UI. This should be stored in db at the time of adding a document and also at the time of updating the document. Also show the number of lines you have read - only for documents which belongs to you.
- [ ] CONDITIONAL: DO WHEN READ PROGRESS IS TRACKED FOR EVERY DOCUMENT:
  - Make another section besides "My Feed" i.e,  "Recent reads" where you can check your recent reads.
  - Use can see each other's progress of each document.
  -  % completion status of self
  - % completion status of other users

