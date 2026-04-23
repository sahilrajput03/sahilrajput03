{% include lineflow-links.md %} 

## Future

- Add black and white theme mode.  
- Add addiction controller or may be other tasks reminder to this app in future becoz it can be too much addictive for me to spend hours in a day.  
- Add code confuser for frontend code so nobody can copy it simply.  
- Add ddos protection to the signup API.  
- Add ai to be able to translate current sentence to hindi language.  
- **Marketing**: This can be a release platforms for the writers, book authors, etc because the platform is really awesome.  
- Add a dictionary feature such that you can view the difficult words already underlined (because it has meaning stored and you can view it via simply clicking on it).  
- I can show many lines and time you spent reading today on the home page.  
- Make a leader board section to see how much time any user spent in this week and total hours spent as well.  
- ~~Fix bug:~~  
    - ~~Add feature that line should only be splitted after there is a space character after . because for below text the line breaking isn’t happening well.~~  
       - ~~The 4th paragraph of this \- [https://paulgraham.com/brandage.html](https://paulgraham.com/brandage.html)~~  
       - ~~For text which has text like Mr. Harry (also for Ms. Watson) was splitting into two lines which is wrong.~~  
       - ***❤️I used [ChatGPT for sentence splitter tools](https://chatgpt.com/c/69baf233-d568-8324-bc84-4fd3391b730b) and I fixed the above issue by using npm library `sbd` ([npm](https://www.npmjs.com/package/sbd?activeTab=readme), [github](https://github.com/Tessmore/sbd)) and now it works pretty amazingly.***  
          - *The older version of file is still saved as `line-flow-deprecated-1.html`*  
          - I did the testing for the sbd in this file *`qr-solution-backend/scripts/join-text-lines-by-spaces.ts`*  
- ❤️Make it a PWA so people can use it in their daily life to read different stuff from the feed.  
- Persistence for the last saved position to continue later easily.  
    - NOTE: I must store the character position to bookmark the line number instead of saving the line number itself — why? Because line number tracking can be a bad  tracking option as the text dividing logic may be changed in that case the tracked line number position may represent incorrect line number.  
- Feature to save a number of different texts.  
- Feature to mark a line as favourite. This can be useful to view the favourite lines later in lineflow mode directly again.  
- There is no need to think of copywright issue because people can post the content in their own responsibility and I can accept the claim copywright issue for the authors and they will be paid for their craft (articles, books, magazines, etc).  
- I can add google login for easy account creation for users. And why have it social reading club? Becuase it would create a change towards reading activity in society.  
- Text extraction from a url using some library so that it's easy by directly using url instead of manually copy-pasting.  
- Add feature to be able to read content directly from a url for e.g, to read some of blog of Paul Graham.  
    - Check how I tested this functionality already in [code here](https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.0#heading=h.ng44nomaqfwm).  
       - ***(File: qr-solution-backend/scripts/[mozilla-readability.js](http://mozilla-readability.js))***  
- Add tags features so user can add tags e.g., \#spiritual, \#parents, etc.  
    - Schema’s updates are added already.
