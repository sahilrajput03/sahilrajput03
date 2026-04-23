# Lineflow - SURGERY (Current Todos)

**Links: [Future Todos](./a-FUTURE)**, **[Done Todos](./a-DONE)**

**LEARN: I have not added is reading progress while reading because I don't like seeing reading progress as it needs your thinking and it's just some percentage that you are trying to achieve.**

- [ ] PWA for easy access by my friends on both desktop and mobile.
- [ ] Hide line number wala feature simply by having a toogle on the ui to hide/show the line number in the reading panel.
- FUTURE: Add a big button to simply open your last reading doc as it will.
- [ ] Whenever "doc-create-card" or "doc-update-card" is shown please hide "search-card" and "feed-card".
<!-- FUTURE -->
- [ ] Follow Features:
  - [ ] Update "Followed" to "Following" after clicking follow on a user.
  - [ ] Show unfollow button on users to unfollow if user is already following them.
  - [ ] My feed should have filter by `lastReadtAt` (create this field name in `document` model).
- [ ] AI tranalation feature of the sentence.
- [ ] Hindi text reading feature - User can upload hindi document and for that it will load the hindi parser to calculate the lines because probably sbd doesn't parser hindi text line by line properly. I can make custom parser for hindi probably. This would work by studying the encoding as "en", "hi", etc.
- [ ] BONUS: NUMBER OF LINES AND NUMBER OF LINES PROGRESS FOR SELF DOCUMENTS:
  - [ ] Store and show the total number of lines of each doc in the doc UI. This should be stored in db at the time of adding a document and also at the time of updating the document. Also show the number of lines you have read - only for documents which belongs to you.
- [ ] CONDITIONAL: DO WHEN READ PROGRESS IS TRACKED FOR EVERY DOCUMENT:
  - Make another section besides "My Feed" i.e,  "Recent reads" where you can check your recent reads.
  - Use can see each other's progress of each document.
  -  % completion status of self
  - % completion status of other users


- There is this file which I made to remember the dom elements in frontend for myself:
  `~/Documents/github_repos/sahilrajput03/line-flow.notes.txt`
