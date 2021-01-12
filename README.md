#### Hi there 👋

### Techonologies 

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>
<img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>
<img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/> [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

### Social

[<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/sahilrajput03)
 [<img src="https://img.shields.io/badge/@freakstarrocks%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/freakstarrocks)
[<img src="https://img.shields.io/badge/sahilrajputfreakstar%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/> ](https://www.youtube.com/user/sahilrajputfreakstar/playlists)
[<img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/sahilrajput03/)
[<img src="https://img.shields.io/badge/sahilrajput03%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"/>](#)
[Liked Badges??](https://github.com/Ileriayo/markdown-badges)

### Codesandboxes

[Sahil Rajput](https://codesandbox.io/u/sahilrajput03),
[Tanner Linsley](https://codesandbox.io/u/tannerlinsley/sandboxes)

### Contact me

Telegram: [sahilrajput03](https://t.me/sahilrajput03)

Discord : [sahilrajput03#4631](#)


### Packages published @ `npm.com`/`yarnpkg.com`

- [useWhat](https://www.npmjs.com/package/usewhat)

- [useStateM](https://www.npmjs.com/package/usestatem)

- [mongo-quick](https://www.npmjs.com/package/mongo-quick)

- [jsonbackend - A true object database server.](https://www.npmjs.com/package/jsonbackend)

- [react-fetch2](https://www.npmjs.com/package/react-fetch2)

- [useEffectFactory](https://www.npmjs.com/package/useeffect-factory)

- [r_global](http://npmjs.org/package/r_global)


### Services

- [Axios playground](http://axiosplayground.ml/)
- [Json backendserver](https://jsonbackendserver.herokuapp.com/)
- [Graphql Playground - Query with power](https://abstraction.ml)

I'm a yarn fan though.

## Coz I forget how codesandbox and github integrations work 

[Link to Article docs](https://codesandbox.io/docs/git)

[Massive different guides for importing to codesandbox directly](https://codesandbox.io/docs/importing#import-from-github)


## Express: `req.body` works only if you'll use `app.use(express.json())`

[Link to section in express docs](https://expressjs.com/en/api.html#req.body) : Coz you don't need bodyparser anymore starting with express v4.0.

[Enable cors in express docs](https://expressjs.com/en/resources/middleware/cors.html#simple-usage-enable-all-cors-requests)

### Sending status code in express

```js
  Below two statements are semantically same in express.
  res.send('You sent ' + id, 201); // Deprecated though, and sends warning in terminal.
  res.status(201).send('You sent ' + id);
```
[`res.send` in Express api docs](https://expressjs.com/en/api.html#res.send)


- Express params and query property of req

Actual middleware splitted (url params)paramas > [Visit here](https://stackoverflow.com/a/15129057/10012446).

But prefer (query) params on a single route like below:

```
axios.get("http://localhost:8080/posts/21", {
    params: {
      id: 20,
      pagesize: 21,
      pageoffset: 22,
    },
  });

app.get("/posts/:id", (req, res) => {
  log("correct route");
  let id = parseInt(req.params.id);
  log("req.params", req.params);
  log("req.query", req.query);
  res.send("You sent " + id);
});

//Output: 
//correct route
//req.params { id: '21' }
//req.query { id: '20', pagesize: '21', pageoffset: '22' }

```

#### Coolest approach of single post on different express route

```
app.get("/post", (req, res) => {
  log("#route: /post");
  log("req.query", req.query); // Here, req.query will have three keys, i.e., id, pagesize, pageoffset.
  // axios.get("http://localhost:8080/post", {
  //   params: {
  //     id: 20,
  //     pagesize: 21,
  //     pageoffset: 22,
  //   },
  // })
  res.send("You sent " + req.query.id);
});
```

