# **Lineflow - DONE Todos**

<!-- Reverse chronology order -->

**Links: [Future Todos](./_FUTURE)**, **[Done Todos](./_DONE)**

- [x] VSCode Extension for LineFlow

- [x] Fix the line number continuation issue via using `lastReadPosition`.
  Learn: I do it simply based on line number count only instead of character count because sentence breaking algorithm is outsourced from `sdb` library now.

- BONUSE: FRONTEND: ALERTS:
  - [x] On closing the doc I want to show the number of lines I have
    read in this session as an alert like "Congrats you read x
    number lines in this session".
    On opening the doc for reading which are not owned by logged-
    in user we need to show an initial alert that says "The
    progress will not be saved for this session because reading
    progress is saved only for the documents you own. To create
    your own copy of this document, use the COPY button to copy
    it to "My Docs" start reading that document instead. Happy
    reading!."

- [x] 🔴🔴All documents's text content should only be loaded via api when READ button is pressed. This is to prevent over fetching issue otherwise it may lead to browser getting unresponsive due to text of so many docs loaded at once.

- [x] On pressing the read button fetch the document again and set the line number in the READER-PANEL.

- [x] (This task is alrady written in your hard copy notes) When calling the edit API from frontend do fetch the document via `/documents/:documentId` API to fill the text value in the form because we do not fetch `text` field in `/feed`, `/mine` or `/search` API.

- [x] (18 April 2026) Do below tasks: (I gave these 4 tasks at once to codex to fix all at once:)
  - [x] Task 1: Whenever READ button is pressed we need to fetch the document using the document._id by calling the API GET /api/v1/ line-flow/documents/:documentId because GET /feed, /search and / mine APIs do not return document.text field for any document to prevent overfetching issue.

    The shape of response of GET /api/v1/line-flow/ documents/:documentId is like below:
    { success: true, data: { document: documentWithUser } }

  - [x] Task 2: Whenever the EDIT button is pressed in document card UI (feed or search), the document must be loaded from the API GET / api/v1/line-flow/documents/:documentId (response of this API is given in previous task already). This is because the text field of document in the response provided by /feed, /search and /mine API do not return document.text field for any document to prevent overfetching issue.

  - [x] Task 3: Resume from last read position should only work if the document belogns to logged in user.

  - Task 4: Again, the API call of PATCH /api/v1/line-flow/ documents/:documentId/read-position should only be called if the document belogns to logged in user.
