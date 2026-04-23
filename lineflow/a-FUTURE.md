# **Lineflow - Future Todos**

**Links: [Current Todos](./a-TODO)**, **[Done Todos](./a-DONE)**

Please create an [issue here](https://github.com/sahilrajput03/sahilrajput03/issues/new) for any feedback or feature request. I would be happy to discuss it. Thanks.

**LLM Chats:**

- [ChatGPT](https://chatgpt.com/c/69dbb626-7354-83e8-8f14-431bdd1443c8) (private)

**❤️Check ongoing [TODOS](https://github.com/sahilrajput03/sahilrajput03/blob/main/line-flow/_TODO.md) and [DONE](https://github.com/sahilrajput03/sahilrajput03/blob/main/line-flow/_DONE.md) features..**

**More Todos:**

1. Add black and white theme mode.  
2. Add addiction controller or may be other tasks reminder to this app in future becoz it can be too much addictive for me to spend hours in a day.  
3. Add code confuser for frontend code so nobody can copy it simply.  
4. Add ddos protection to the signup API.  
5. Add ai to be able to translate current sentence to hindi language.  
6. **Marketing**: This can be a release platforms for the writers, book authors, etc because the platform is really awesome.  
7. Add a dictionary feature such that you can view the difficult words already underlined (because it has meaning stored and you can view it via simply clicking on it).  
8. I can show many lines and time you spent reading today on the home page.  
9. Make a leader board section to see how much time any user spent in this week and total hours spent as well.  
10. ~~Fix bug:~~  
    1. ~~Add feature that line should only be splitted after there is a space character after . because for below text the line breaking isn’t happening well.~~  
       1. ~~The 4th paragraph of this \- [https://paulgraham.com/brandage.html](https://paulgraham.com/brandage.html)~~  
       2. ~~For text which has text like Mr. Harry (also for Ms. Watson) was splitting into two lines which is wrong.~~  
       3. ***❤️I used [ChatGPT for sentence splitter tools](https://chatgpt.com/c/69baf233-d568-8324-bc84-4fd3391b730b) and I fixed the above issue by using npm library `sbd` ([npm](https://www.npmjs.com/package/sbd?activeTab=readme), [github](https://github.com/Tessmore/sbd)) and now it works pretty amazingly.***  
          1. *The older version of file is still saved as `line-flow-deprecated-1.html`*  
          2. I did the testing for the sbd in this file *`qr-solution-backend/scripts/join-text-lines-by-spaces.ts`*  
11. ❤️Make it a PWA so people can use it in their daily life to read different stuff from the feed.  
12. Persistence for the last saved position to continue later easily.  
    1. NOTE: I must store the character position to bookmark the line number instead of saving the line number itself — why? Because line number tracking can be a bad  tracking option as the text dividing logic may be changed in that case the tracked line number position may represent incorrect line number.  
13. Feature to save a number of different texts.  
14. Feature to mark a line as favourite. This can be useful to view the favourite lines later in lineflow mode directly again.  
15. There is no need to think of copywright issue because people can post the content in their own responsibility and I can accept the claim copywright issue for the authors and they will be paid for their craft (articles, books, magazines, etc).  
16. I can add google login for easy account creation for users. And why have it social reading club? Becuase it would create a change towards reading activity in society.  
17. Text extraction from a url using some library so that it's easy by directly using url instead of manually copy-pasting.  
18. Add feature to be able to read content directly from a url for e.g, to read some of blog of Paul Graham.  
    1. Check how I tested this functionality already in [code here](https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.0#heading=h.ng44nomaqfwm).  
       1. ***(File: qr-solution-backend/scripts/[mozilla-readability.js](http://mozilla-readability.js))***  
19. Add tags features so user can add tags e.g., \#spiritual, \#parents, etc.  
    1. Schema’s updates are added already.
