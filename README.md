# 🤺︎ Hi there 👋 Trying what I can ! ![](https://www.linuxquestions.org/questions/images/smilies/emot-tiphat.gif)

[relaxing](https://www.youtube.com/watch?v=PAvDi3bS6uw)

Unwinding is hot no-sugar coffee beated with coco powder!

```bash
echo Hello world! > /dev/null
cat /dev/null
```

**Start react project**

```bash
npx degit sahilrajput03/react-app my-react-app
cd my-react-app; npm install; npm run dev
```

Find me on terminal via `npx sahilrajput03` command.

## References:

- Quick: **Docker helsinki**: [Click here](https://github.com/sahilrajput03/dockerHelsinki)
- **Acronyms:** [Click here](acroynms.md)
- **Ask me anything:** [Click here](https://github.com/sahilrajput03/askMeAnything)
- **Archlinux Notes, #ArchLinux, #Arch linux:** [Click here](arch-notes.md)
- **Bash Coding, # Bash Programming, # Learning Bash:** [Click here](learn-bash.md)
- **Book logs:** [Click here](./book-logs/README.md)
- **Config** Files Repo: [Click here](https://github.com/sahilrajput03/config)
- **Courses**: [Click here](courses-list.md).
- **Enlightment:** [Cick here](enlightenment.md)
- **FSO contribution:** [Click here](my-fso-contribution.md)
- **Github Actions:** [Click here](github-actions.md)
- **Hindi:** [Click here](learn-hindi.md)
- **Jokes:** [Click here](https://xkcd.com/)
- **Learn Regex:** [Click here](learn-regex.md)
- **Learn Markdown:** [Click here](learn-markdown.md)
- **Learn Perl:** [Click here](learn-perl)
- **Learn Figma:** [Click here](learn-figma.md)
- **Learn from State of Javascript 2021:** [Click here](learn-state-of-javascript.md)
- **Learn qutebrowser:** [Click here](qutebrowser.md)
- **Learn Zerodha Varasity:** [Click here](learn-zerodha-varasity.md)
- **Learn Urdu:** [Click here](./learn-urdu/)
- **Prime Resources - Javascript:** [Click here](prime-resources-js.md)
- **PopOS Notes:** [sahilrajput03/my_bin/blob/master/notes/linux-notes.txt](https://github.com/sahilrajput03/my_bin/blob/master/notes/linux-notes.txt)
- **React file structure:** [Click here](https://react-file-structure.surge.sh/)
- **Thoughts, Principles:** [Click here](thoughts-principles.md)
- **Url shorteners:** [Bitly](https://bitly.com/)
- **Vim-notes:** [Click here](vim.md)
- **Vscode Settings:** [Click here](vscode-settings.md)
- [Why DSA based interviews are stupid ?](dsa.md)
- **Learn Photoshop:**[Click here](learn-photoshop.md)
- **Why telegram (not whatsapp):** [Click here](why-telegram.md)
- **Learn gmail:** [Click here](learn-gmail.md)

## what is `env` cli ?

Linked quest: What is `#/usr/bin/env bash` or `#/usr/bin/env node` shebang in various scripts ?

From `man env` in terminal, I found: 


Ans. `env - run a program in a modified environment`.

```bash
type env
# Output:
# env is hashed (/usr/bin/env)

env --help
# Output:
# Usage: env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]
# Set each NAME to VALUE in the environment and run COMMAND.
# 
# Mandatory arguments to long options are mandatory for short options too.
#   -i, --ignore-environment  start with an empty environment
#   -0, --null           end each output line with NUL, not newline
#   -u, --unset=NAME     remove variable from the environment
#   -C, --chdir=DIR      change working directory to DIR
#   -S, --split-string=S  process and split S into separate arguments;
#                         used to pass multiple arguments on shebang lines
#       --block-signal[=SIG]    block delivery of SIG signal(s) to COMMAND
#       --default-signal[=SIG]  reset handling of SIG signal(s) to the default
#       --ignore-signal[=SIG]   set handling of SIG signal(s) to do nothing
#       --list-signal-handling  list non default signal handling to stderr
#   -v, --debug          print verbose information for each processing step
#       --help     display this help and exit
#       --version  output version information and exit
# 
# A mere - implies -i.  If no COMMAND, print the resulting environment.
# 
# SIG may be a signal name like 'PIPE', or a signal number like '13'.
# Without SIG, all known signals are included.  Multiple signals can be
# comma-separated.
# 
# GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
# Full documentation <https://www.gnu.org/software/coreutils/env>
# or available locally via: info '(coreutils) env invocation'

man env
# Output: manual pages!

```

## kubernetes hierarchy

**Kubernetes cluster is a group of nodes!**

**A node can have a list of deployments.**

**A deployment controls a list of pods.**

**A pod has a list of containers.**

**A kubelet is an agent that runs on each node in the cluster. It makes sure that containers are running in a pod.**

## what?

https://en.wikipedia.org/wiki/Recursive_Bayesian_estimation helps to pick up abnormal activity say if people try to scrap off content from fb, they used this esimation to detect that and ban it.

Src: https://www.youtube.com/watch?v=xFFs9UgOAlE

## memcache used by fb earlier

https://github.com/memcached/memcached

https://memcached.org/

## convert javascript object to json cli tool

Source: [sahilrajput03/obj-json](https://github.com/sahilrajput03/obj-json)

[@npm](https://www.npmjs.com/package/obj-json)

Install:

```bash
npm i -g obj-json

# Usage:
echo "{a: 10, b: 20, name: 'sahil'}" | obj-json
# Output: {"a":10,"b":20,"name":"sahil"}

echo "{a: 10, b: 20, name: 'sahil'}" | obj-json | jq
# Output:
{
  "a": 10,
  "b": 20,
  "name": "sahil"
}
```

## flashcards website

http://cram.com

You may login with google simpley. It has a playstore app as well.



## send a file with express route

https://stackoverflow.com/a/17516733/10012446

## downloading image with axios

Src: https://futurestud.io/tutorials/download-files-images-with-axios-in-node-js

## Fast reading

**[Shift Reader](https://chrome.google.com/webstore/detail/shiftreader-speed-read-th/clcbpepidaphghjahkionjhffkolcpek/related?hl=en)**: An amazing fast text reader tool as chrome extension.

ALL YOU NEED TO DO IS:

- Select some text and select **Read selection in ShiftReader** in the menu.
- OR you may click on the **blue square box icon on in the extension to activate** it.
- You can use **up(increase WPM by 50)/down(decrease WPM by 50) arrows** as well.
- You can use mouse to **click a word to start reading from there.**

other tools if you wanna try:

1. [ReadFast powered by Spritz](https://chrome.google.com/webstore/detail/readfast-powered-by-sprit/blbpafkooanpdcdcndkcckblghjddpke/related?hl=en)
2. [Read fast - Speed Reading Extension](https://chrome.google.com/webstore/detail/read-fast-speed-reading-e/pnffahcjemjliibgcafjpklgmbeknldi?hl=en) (haven't tried at all)
3. Article on fast reading apps [here](https://www.readlax.com/blog/en/5_speed_reading_extensions_chrome).

The coolest thing about this is that we can easily read pds with this extension, we only need to select a piece of text (say ten pages) and then right click and select 

**bus factor**: *[From Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Bus_factor)*

The bus factor is a measurement of the risk resulting from information and capabilities not being shared among team members, derived from the phrase "in case they get hit by a bus". It is also known as the bus problem, lottery factor, truck factor,[1] bus/truck number, or lorry factor. 

**In a sentence** (from devopsiwthkubernetes): *If your files don't tell Kubernetes and your team what the state should be and instead you run commands that edit the state you are just lowering the bus factor for your cluster and application.*


**Why do one need a mock testing? :** [Click here to know](https://youtu.be/_Ms1Z4xfqv4?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J&t=2287).

**Getting automated "Product experience insights"** using https://www.hotjar.com/

- It can record user experience and you can play the user experiences as a video sort of thing.
- It can tell what motivates the user to go into your site and dig more and what demotivates the user.

**(free to use)no-Code Website Builder: The Webflow Designer lets you build any website you can imagine with the full power of HTML, CSS, and Javascript in a VISUAL CANVAS.** using https://webflow.com/. See [customer stories](https://webflow.com/customers) of webflow users.

**Schedule your meets with anybody ?** _Ans. *A perfect solution*: https://calendly.com/app/signup_

## things i kept doing doing..

I have a habit of looking for the **_best of best_** of the articles, courses, blogs, books, materials that I feel sometimes is a time taking process and I don't follow or kind of forget like the official way of doing things me or anybody else must be doing, i.e., follow official documentation of softwares, libraries, tools, standards, ie., OFFICIAL documentation. One big mistake: "Not able to find the real production ready free template of coreui in previous job is this only".

## using `auto-changelog`

Source: https://www.npmjs.com/package/auto-changelog

Sample generated: [Click here](https://github.com/coreui/coreui-free-react-admin-template/blob/main/CHANGELOG.md)

Sample (this repository): [Click here](CHANGELOG.md)

Tip: You can use custom template as [shown here](https://github.com/cookpete/auto-changelog#custom-templates) in docs.

Add below to your `package.json` file and run `npm run changelog` to generate a `CHANGELOG.md` file. It simply generates list of all commit to the target file simply date wise.

```json
    "changelog": "auto-changelog -p --commit-limit false"
```

FYI (using -p is important else you won't get commits in your `CHANGELOG.md` file): `-p, --package # use version from package.json as latest release`

FYI: If you plan to execute it on npm version script, then you do it like (official docs of auto-changelog):

```json
  "scripts": {
    "version": "auto-changelog -p && git add CHANGELOG.md"
  }
```

**_HENCE, whenever you run `npm version patch/minor/major`, your `version` script will be run as well. YO_**

## monkey*patching ( or \_hot fixes*) ?

Source: https://en.wikipedia.org/wiki/Monkey_patch

A monkey patch is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program).

_Etymology_

The term monkey patch seems to have come from an earlier term, guerrilla patch, which referred to changing code sneakily – and possibly incompatibly with other such patches – at runtime. The word guerrilla, homophonous with gorilla (or nearly so), became monkey, possibly to make the patch sound less intimidating.[1]

An alternative etymology is that it refers to “monkeying about” with the code (messing with it).

Despite the name's suggestion, the "monkey patch" is sometimes the official method of extending a program. For example, web browsers such as Firefox and Internet Explorer used to encourage this, although modern browsers (including Firefox) now have an official extensions system.

## get 1 day or some weeks ago git diff

Source: https://stackoverflow.com/a/9658178/10012446

```
# Get diff for only today
git diff 'HEAD@{1 day ago}'

# Get diff from 3weeks back
git diff 'HEAD@{3 weeks ago}'
```

## cool alias

```
alias lsg='ls -a | grep -i'
# Usage:
lsg json
lsg -E '*json'
# NOTE: quotes are important.( double quotes work as well).
```

## cool things about kentcdodds that i didn't know

1. He is 11th child of his parents.
2. He listens to podcasts at 3x speed, i.e., he started listening at 1.5x and eventually he came to this point.
3. His most important philosophy of teaching is caring about retention! What other people learn when he teach is most important, so students don't forget what he taught.
4. Anybody can record a question on his website kentcdodds.com
5. Listen to kents podcasts on his https://kentcdodds.com/chats/04.

## Declarative vs. imperative

REMEMBERING SHORTFORM: **HI** (**h**ow->**i**mperative), so declarative must a **what**.

```
WORD MEANINGS:
==============
imperative (dictionary):
1. of vital importance; crucial. E.g., "immediate action was imperative"
2. giving an authoritative command; peremptory.

declarative
1. of the nature of or making a declaration.
"declarative statements"
2. (COMPUTING)
denoting high-level programming languages which can be used to solve problems without requiring the programmer to specify an exact procedure to be followed.

```

**Imperative(HOW)**: In computer science, imperative programming is a programming paradigm that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform. Imperative programming focuses on describing ***how*** a program operates. The term is often used in contrast to declarative programming, which focuses on what the program should accomplish without specifying all the details of how the program should achieve the result. ***Exampe of imperative programming, is like we defined algorithms in explicit steps. ~Sahil***

**Declarative (WHAT)**: In computer science, declarative programming is a programming paradigm—a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow. Many languages that apply this style attempt to minimize or eliminate side effects by describing ***what*** the program must accomplish in terms of the problem domain, rather than describe how to accomplish it as a sequence of the programming language primitives (the how being left up to the language's implementation). ***This is in contrast with imperative programming, which implements algorithms in explicit steps.***

## Referencial links in markdown

```
[Google Link][1] [Yahoo link][2]

[1]: https://google.com "Google - I am hovering text"
[2]: https://yahoo.com "Yahoo - I am hovering text"

# Above code will produce below html-
<a href="https://google.com" title="Google - I am hovering text">Google Link</a>
<a href="https://yahoo.com" title="Yahoo - I am hovering text">Yahoo Link</a>
```

## Dependency injection === highorder function

The very first example in below article that accepts a function as a parameter will serve as depedency injection there. Simple, yah!

Source: https://blog.openreplay.com/dependency-injection-in-node-js-higher-order-routing-with-express

## expressions are `awiated`

```
let a = async () => ({data: "cool"})
console.log(await a().data) // Output: <nothing>
// The reason it doesn't work bcoz we're trying to await the data property of the promise returned by `a()`.

console.log((await a()).data) // Output: 'cool'
// works good enough!
```

## `for await` syntax in js

```js
for await (const i of [Promise.resolve(10), Promise.resolve(20), Promise.resolve(30)]){
    console.log(await i)
}
# Output:
# 10
# 20
# 30
```

## filetype `myFile.asciidoc`

Sample: https://github.com/qutebrowser/qutebrowser/blob/master/doc/userscripts.asciidoc

## Avoiding nuclear approach to fix a git repository

![](https://imgs.xkcd.com/comics/git.png)

_Pic Credits: https://xkcd.com/1597/_

**BEWARE**: Below give methodology will change your git history and other people's unpushed work might break after this IMO ~Sahil.

**_You can remove files/folder from your git history at once using below commands._**

```bash
git filter-branch --tree-filter 'rm -f <path_to_file>' HEAD
git filter-branch --tree-filter 'rm -rf <path_to_folder>' HEAD
# Source: https://stackoverflow.com/a/43762489/10012446

# Force pushing all branches in case you need that, but think TWICE before doing that:
git push origin --force --all
```

## `.editorconfig` file

Source: https://editorconfig.org/

vim: https://github.com/editorconfig/editorconfig-vim#readme

vscode: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

Sample I came across:

- https://github.com/qutebrowser/qutebrowser/blob/master/.editorconfig

## Git diff explained in simple terms

````bash
$ cat a
hello sahil
hello bellow

$ cat b
hello messi
hello bellow

######## DIFF SYNTAX ########
$ git diff a b
diff --git a/a b/b
index 87b4ccc..82c725d 100644
--- a/a
+++ b/b
@@ -1,2 +1,2 @@
-hello sahil
+hello messi
 hello bellow

# NOTICE: The - and + signs represents changes while going from source to target i.e., file a to file b.







$ git log --oneline
# Output:
commit5 (HEAD -> main) Add file3.txt
commit4 Add express
commit3 Add react.
commit2 Npm init the project.
commit1 Add two files.
# FYI:
commit0=4b825dc642cb6eb9a060e54bf8d69288fbee4904 # THIS LINE IS NOT SHOWN BUT IS ALWAYS COMMIT0. This is useful when you want to see diff from origin or repo.
# You can set empty variable in bash so that you can reference 0th commit easily.



######## DIFF SYNTAX ########
git diff sourceCommit [targetCommit=HEAD]


# GIT EXAMPLE 0:
git diff commit4
# Shows changed made AFTER commit4 state.
# this can be done otherwise
git diff commit4 commmit5


# GIT EXAMPLE 1:
git diff commitId1 commitId2
# FYI: The - and + signs represents changes while going from source(commitId1) to target(commitId2) i.e., file `a` to file `b`.
# FYI: To see the chronological changes(i.e, + and - signs with respect to real time) you must use the source commitID as commit that you made before target commitId.


# GIT EXAMPLE 2:
# Get the detais of any commmit it'll show you the diff from /dev/null state to the final states of all the files after making the commit.
git show COMMIT_3 # Same as below
git diff commit2 COMMIT_3


# GIT EXAMPLE 3:
git show commit1
# FYI: This shows all the details of that commit, like time/date, author and the diff with source as state before the commit and target as state after the commit.

# GIT EXAMPLE 4:
# What does below command do? (LEAST USEFUL, unless you want to use `git diff HEAD` to view the diff for currently staged changes)
git diff commit3
# Ans: It shows all the changes made after `commit3` to the current staged area or the last commit state.

# GIT EXAMPLE 5:
# FUN FACT: If you use
git diff <lastCommit>
# OR
git diff HEAD
# You will see diff only if you have changes in staged area. (i.e., you changed something and did ```git add .```


# GIT EXAMPLE 6:
# NOTICE IF YOU WANT TO SEE DIFF FROM EMPTY COMMIT(source commit) TO A PARTICULAR COMMIT (target commit), you would need use something like:
# First we need to define the empty commit id (which is same for all git repositories), then we can use ```git diff```: Source: https://stackoverflow.com/a/25064285/10012446
empty=4b825dc642cb6eb9a060e54bf8d69288fbee4904
git diff $empty commit3

# GIT EXAMPLE 6a (COPY OF 6):
#### FUN FACT : FOR THE FIRST COMMIT WE CAN ACHIEVE THE SAME (bcoz there were no changes before that commit) BY:
git diff $empty commit1
# would output same result as below command:
git show commit1
````

## Amazing bootstrapping/scaffolding project templates

Source: https://github.com/Rich-Harris/degit

```bash
# Creates a new folder for the project
degit user/repo my-new-project

# If the second argument is omitted, the repo will be cloned to the current directory.
degit user/repo
degit user/repo#dev       # branch
degit user/repo#1234abcd  # commit hash

# To clone a specific subdirectory instead of the entire repo, just add it to the argument:
degit user/repo/subdirectory
```

## in/of in for

```js
let k = [1,2,3]

for (i in k){           // in means index
    console.log(i)
}
# Output:
0
1
2


for (i of k){           // of means item itself
    console.log(i)
}
# Output:
1
2
3
```

## List all available scripts/commands from package.json file

```bash
npm run
# Source: https://stackoverflow.com/a/59613935/10012446
```

## piping data into nodejs script..

```bash
nodemon -x 'ls -l | node test.js'
```

```js
// code: Source: https://stackoverflow.com/a/16351842/10012446
var stdin = process.openStdin()

var data = ''

stdin.on('data', function (chunk) {
	data += chunk
})

stdin.on('end', function () {
	console.log('DATA:')
	console.log(data)
	console.log('END DATA')
})
```

```txt
// output:
DATA:
total 12
-rwxr-xr-x  1 array array  501 Feb 11 22:31 echo-with-colors.sh
drwxr-xr-x 10 array array 4096 Jan 27 16:27 jonhoo-config
-rw-r--r--  1 array array  220 Feb 16 03:19 test.js

END DATA
```

## `console.assert` ?

```js
let a = 10
let b = 20

console.assert(a == b, 'a is equal to b')
console.log('Hello, world!')

// Output:
// Assertion failed: a is equal to b
// Hello, world!
```

## Trigger an artificial filewrite event for something like nodemon to trigger to restart server ??

Reason: Sometimes you need to make event from another process to restart the nodemon server, in that case simply `touch fileWhichAlreadyExists.js` command rocks to restart the nodemon server.

Source: https://stackoverflow.com/a/49772236/10012446

Source (what does touch do when file already exists?): https://unix.stackexchange.com/a/427240/504112

## Directory/File structure in Github

```txt
github.com/userName/repoName/tree/branchName/directoryPathHere
e.g., https://github.com/sahilrajput03/learning_rust/tree/master/Lesson1/mouse

github.com/userName/repoName/blob/branchName/filePathHere
e.g., https://github.com/sahilrajput03/learning_rust/blob/master/Lesson1/mouse/mod.rs

TIP: You can download the file via wget, say:
wget https://github.com/sahilrajput03/learning_rust/blob/master/Lesson1/mouse/mod.rs
```

## Difference between `git reset --hard` and `git revert <shaHere>`

tl;dr: There is a very great significance of using `revert` instead of `git reset` coz it preserver all history and its important if you pushed earlier commmit to puclic and want it to be undone(remove) and still don't want to force push then `git revert` rocks coz it does exactly that! Read below like for more insights!.

Source: [Here](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/#undo-a-public-change).

## Get back to previous commit but keep the directory as it is (i.e., only change the commit history and keep the source code as it is)

The key point is that you don't do

```bash
git reset --hard HEAD^
# rather you should do below >>>
git reset HEAD^
# And now your source code is AS IT IS but the last commit is removed from the history.
```

## Set github remote url directly without removing origin url

```bash
git remote set-url origin <url>

# A little verbose way?
git remote rm origin
git remote add origin <url>

# FYI: If you try to set url for origin which isn't there already then git throws error:
git remote set-url origin1 <urlHere>
# Output: error: No such remote 'origin1'
```

## My own watch/developement service using inotifywait

Browser @ https://github.com/sahilrajput03/watchAll/blob/main/watchAll.sh

## Check if jre/jdk installed on your system ?

[Source](https://stackoverflow.com/questions/22539779/how-to-tell-if-jre-or-jdk-is-installed)

## Error lens for kids

Vscode [extension](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens).

## Difference b/w res.send and res.json ?

Read [here](https://stackoverflow.com/a/19041848/10012446).

**Also read the original code of express's** `res.json` and `res.send` code [here](https://github.com/expressjs/express/blob/master/lib/response.js).

## Setting auto-attching ready debugger for nodejs/expressjs via nodemon

**_FYI: I created a entry for `launch config` in system wide `settings.json` file so I don't necessaryily need to add below `launch.json` file for each nodejs based project or any file coz I CAN DIRECTLY CALL DEBUGGER NOW!!!!. Yikes!_**

**1. Create a file `.vscode/launch.json` in root folder.**

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "attach",
            // ^^ note that this is a of type attach and we have specified to `restart` via the restart option below to reattch to that process and pick the new processid automatically, yikes!
            "name": "Attach to node process((hint: which has ``node --inpect``))",
            "processId": "${command:PickProcess}",
            "restart": true,
            "protocol": "inspector",
            "envFile": "${workspaceFolder}/.env"
           // Our .env file is loaded simply (no need of cross-env), also the terminal would pick the values of `.env` file once you attach the debugger. Yikes!
        }
    ]
}

```

**2. Now use nodemon to start the server i.e., `nodemon --inspect app.js`**. (NOTE: `.env` file will be in effect once the vscode debugger is attached). FYI: You can use alias like `nma file.js` or `nmas file.js` for `nodemon --inspect` or `nodemon --inspect-brk` respectively.\*\*

> **You can break on the very first line of the program via flag `--inspect-brk` instead of `--inspect` in you node/nodemon command. [Src](https://stackoverflow.com/a/39493551/10012446), [Src2](https://nodejs.org/api/debugger.html#v8-inspector-integration-for-nodejs), [Src3](https://nodejs.org/en/docs/guides/debugging-getting-started/#command-line-options), [Src4 @ FSO](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#debugging-node-applications). The benefit of using --inspect-brk can ensure that our program must break at the desired breakpoint coz in some cases the oprations in the our app.js gets done even before getting the debugger attached so the breakpoint gets missed thus to ensure that our desired breakpoint must hit we use --inspect-brk thus the program won't even run at all from the very first line of code so our node app gets enough time to get the vscode debugger attached and then we start the program execution. Yikes!**

**3. Get `debugger select-dropdown` with `f5` key (use `shift+f5` to stop debugger) in vscode and select the entry with text `nodemon --inspect app.js` or `nodemon --inspect-brk app.js` in the list of processes in there. ROCKON!**

> IMPORTANT: FYI: Read about the paramters you can use in `configuration` for `launch` settings in vscode: [Click here](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes).

**More**

- _TIP: Use f9 to add/remove the breakpoint._

- _Loading .env file in the debugging mode. [Src](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_load-environment-variables-from-external-file)_

- Remote debugging applications: [@nodejs docs](https://nodejs.org/en/docs/guides/debugging-getting-started/#enabling-remote-debugging-scenarios), [@vscode docs](https://code.visualstudio.com/docs/editor/debugging#_remote-debugging).

## The arguments keyword in a function:

[Src](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

```js
function func1(a, b, c) {
	console.log(arguments[0])
	// expected output: 1

	console.log(arguments[1])
	// expected output: 2

	console.log(arguments[2])
	// expected output: 3
}

func1(1, 2, 3)
```

## Print object/arrays of any depth:

[Src1](https://dev.to/ehlo_250/the-trick-to-making-consolelog-play-nice-with-complex-objects-gma), [Src2](https://stackoverflow.com/a/10729284/10012446)

TIP: You can make use of simple json.stringify too (but it won't be cloured ouput for different type of data, [src](https://stackoverflow.com/a/10729391/10012446)).

```
const util = require("util");

let a = { b: { c: { d: { e: "f" } } } };
console.log(a);
// Output: { b: { c: { d: [Object] } } }

console.log({ myText: "hello", myNumber: 21, myBoolean: true });

// LEARN: Print any object of any depth.
console.log(util.inspect(a, false, null, true /* enable colors */));
// Output:
// {
//     b: { c: { d: { e: 'f' } } }
// }
```

## Install file as depencdency in nodejs

```bash
npm i my-pkg@file:./path-to-my-pkg.js

# Usage in js file:
const logMw = require("log-mw");

# Should work as esm as well IMO (didn't test yet :o  ).
import logMw from "log-mw";
```

[Source](https://stackoverflow.com/a/70451584/10012446) 🍭

## Custom logging middleware expressjs

Refer @ node-with-live-testing project.

```
// Usage:
lgMw(req) // in any route or controller.

// or use as a common middleware:
app.use(logMw)
```

## Learning file descriptions, stdin(0), stdoutput(1) and stderr(2) ?

| File Descriptor | Abbreviation | Description     |
| --------------- | ------------ | --------------- |
| 0               | STDIN        | Standard Input  |
| 1               | STDOUT       | Standard Output |
| 2               | STDERR       | Standard Error  |

Example 1:

```bash
#Note: We can replace > with 1> as well and it behaves exactly same.

echo I am sahil 2> output1          # One file is created.
cat output1
# Output: --no-output



echo I am sahil > output1             #  One file is created.
cat output1
# Output: I am sahil



echo I am sahil > ouput1 > ouput2     # Two files are created.
cat output1
# Ouput: --no-ouput
cat output2
# Output: I am sahil




echo I am sahil > output1 > output2 2> output3      # Three files are created.
ls
# Output: output1  output2  output3
cat output1 # No contents.
cat output2
# Output: I am sahil
cat output3 # No contents.




echo I am sahil 2> output1 > output2 > output3        # Three files are created.
ls
# Output: output1  output2  output3
cat output1 # No contents.
cat output2 # No contents.
cat output3
# Output: I am sahil
```

Example 2:

````bash
wc doesntexist.txt > output                   # Output: ```cat ouput``` prints nothing.
wc doesntexist.txt 2> output                  # Output: ```cat ouput``` prints ```wc: does: No such file or directory```

wc doesntexist.txt > /dev/null | grep ""      # Ouput: grep prints the error i.e., stderr is passed via pipe to grep.
wc doesntexist.txt 2> /dev/null | grep ""     # Ouput: grep DOESN'T prints the error i.e., stderr is passed to /dev/null and not passed via pipe to grep.

wc doesntexist 2> /dev/stdout | grep ""       # Output: grep prints the error, i.e., stderr is passed to stdout then stdout is passed via pipe to grep.
wc doesntexist 2> /dev/stderr | grep ""       # Output: grep prints the error, i.e., we redirect stderr to stderr then stderr is passed via pipe to grep.

# LEARNING: Both stdout and stderr are passed via pipe and grep gets both of those.
````

## Pipe stderr via without forwarding standard ouput

```
command 2>&1 >/dev/null | grep 'something'

# A more verbose manner to do that as stated in first comment of the SO's answer @ https://stackoverflow.com/a/2342841/10012446
command 2> /dev/stdout 1> /dev/null | grep 'something'
```

So, How to redirect STDERR to STDOUT in Linux ??
Answer: The command to do that is `2>&1`. [Source](https://www.middlewareinventory.com/blog/linux-stdout-stderr-bash/).

## Commited _node_modules_ to your repository along with the **some new and modified files** accidentally ?

The solution is recommended when you can manage to put all the commits after the node*modules added to the repository to be squashed to a single commit because its a very \_naive* solution of my own to remove `node_modules` from the git history.

**Remove `node_modules` from the most recent commit only via `--amend` method:**

```bash
# You can literally copy paste below commands to fix the shit.
git rm --cached -r .                          # Reset the tracking area.
echo node_modules >> .gitignore
git add . && git commit --amend --no-edit      # Amend last commit as it is(but with node_modules ``git ignored``)!
```

**Another way if are in situation where lots of commits are made since you added `node_modules` to the repository (i.e., BLUNDER HELL ehh..) via:**

````bash
git branch temp                   # Make a backup branch of current branch's status.
git reset --hard HEAD             # Get to the desired/last commit where you didn't have node_modules.
git merge --no-ff temp            # Merge without making a commit.
git rm --cached -r .              # Now remove everything(_node_modules_) coz ```git merge --no-ff``` re-added everything to the the staging area.
echo node_modules >> .gitignore
git add . && git commit -m 'My new commit without node_modules.'
````

## Interesting way to join classes in jsx

```jsx
<MyComp className={['carl', 'barl', 'amaz'].join()}></MyComp>
```

## Promise based apis of `fs` in Node.js..

Source, firt seen in remix's code by Ryan Florence [here](https://remix.run/docs/en/v1/tutorials/blog).

Look [here for docs](https://nodejs.org/api/fs.html#promise-example).

i.e.,

```js
import {unlink, readFile} from 'fs/promises'

try {
	await unlink('/tmp/hello') // unlink is used to delte a file.
	console.log('successfully deleted /tmp/hello')
} catch (error) {
	console.error('there was an error:', error.message)
}

// ~sahill: for reading file
const file = await readFile(filepath)
```

## Frontmatter ?

**And.** Its reffered to **yaml code in the start of blog post file**. Popularized by jekyll in first. Read about [Front matter at Jekyll](https://jekyllrb.com/docs/front-matter/).

For converting yaml to js object you can use [`front-matter`](https://github.com/jxson/front-matter) package from npm and thats awesome. Atleast _Ryan Florence_ uses this in his remix's quick start guide. So it must be good! 💯 And this front-matter does whats its description says **Extract YAML front matter from strings** in the github repo.

Why use `front-matter` package which is not much popular and simply use some other yaml to js-object/json converter package from npm ?

**Ans.** Bcoz when we need to read file such as blog post we know that its just first few lines between === or --- or some pattern like that made by different blog post frameworks (e.g., jekyll and gatsby). **_So if we use front-matter then it manages and deals with yaml + non yaml(i.e. content of blog-post) on its own. So this way using a library like front-matter rocks! 💯_**

## Yaml curiosity ?

**FYI: Yaml to json converter**:  [onlineyamltools.com](https://www.convertjson.com/yaml-to-json.htm)

Example:

```yaml
indian:
  - 1
  - 2 > 3
  - '2'
  - true
  - 'true'
  - truthy
  - null
  - 'null'
  - cost: 5
  - otherPeople:
    rohit: 10
    admins:
      aman: 10
      alergy:
      - dust
      - particles
india: 10
```

converts to:

```json
{
  "indian": [
    1,
    "2 > 3",
    "2",
    true,
    "true",
    "truthy",
    null,
    "null",
    {
      "cost": 5
    },
    {
      "otherPeople": null,
      "rohit": 10,
      "admins": {
        "aman": 10,
        "alergy": [
          "dust",
          "particles"
        ]
      }
    }
  ],
  "india": 10
}
```

[yaml.org](https://yaml.org/) - Yaml official site.

Q. What is the need of `-` when we can have something like

```yaml
# Example from https://yaml.org ~sahil.
YAML on GitHub: # github.com/yaml/
  YAML Specs: yaml-spec/
  YAML 1.2 Grammar: yaml-grammar/
  YAML Test Suite: yaml-test-suite/
  YAML Issues: issues/
```

and we can do nest multiple items under a particular property (if we talk about nesting in terms of entities) ?

**Ans.** Its designed to **pass values** whereas other entities with `:` are **key-value pairs**. A `-` in yaml means start of a list though so we can pass multiple values via this list too.

[Ref 1-amaz](https://www.reddit.com/r/ansible/comments/5jhff3/when_to_use_dash_in_yaml/?utm_source=amp&utm_medium=&utm_content=post_body), [Ref 2-seems amazing too](https://community.home-assistant.io/t/when-to-use-in-yaml-files/62790)

From Ref 1's:

```txt
It may help to convert to JSON.

Hyphens indicate list items. Lists can contain:

1. simple values like strings:

YAML e.g.1

- "string1"
- "string2"

In JSON:

["string1", "string2"]
They can also contain sets of key-value pairs:

YAML e.g.2

- item1key1: "string1"
  item1key2: "string2"
- item2key1: "string3"
  item2key2: "string4"

In JSON:

[{
  item1key1: "string1",
  item1key2: "string2"
},{
  item2key1: "string3",
  item2key2: "string4"
}]
That's what tasks is. Each hyphen starts a new list item (a task), and each list item may have multiple key-value pairs (properties of the task).
```

and another reddit comment about the formatting in the yaml file that helps in readability:

```
Good explanation. I think also what is confusing him is that the list is lumped up in one 'paragraph'. For readability, I would format the above code as:

tasks:
    - name: date/time stamp
      command: /usr/bin/date
      register: timestamp_start

    - debug: var=timestamp_start

    - name: another task
```

## Testing side by side everywhere you write code:

```js
require('colors')

console.assert(user.userName, 'Username is not found..'.red) // only prints the log in red when username is a falsy value.
console.assert(user.age, 'Password not found..'.red) // only prints the log in red when age is a falsy value.

//FYI: Above works in node and browser both. console.assert is just a wrapper over console.error on a false condition and for true it does nothing as like test is passed!
```

## markdown to html conversion in milliseconds with marked! Works so great!!

```
npm i marked
```

@npm: https://www.npmjs.com/package/marked

Also this live markdown parser in the browser @ https://marked.js.org/demo/ is so awesome(mentioned in the docs of `marked` package)!

[Source (first seen @remix's Quick start guide!)](https://remix.run/docs/en/v1/tutorials/blog)

## setTimeout's third and more argument

```
let print = (...args) => console.log(...args)

setTimeout(print, 2000, 'Carl', 'Sahil', 'Mennu', 'Prabhat')
// after 2 seconds it logs like, console.log('Carl', 'Sahil', 'Mennu', 'Prabhat') and thats really amazing!
```

[Source](https://www.w3schools.com/jsref/met_win_settimeout.asp)

## Promise more ..

[Source - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

```js
let a = new Promise((res) => res(10))
console.log(a instanceof Promise) // thats how you type check a promise in runtime.
// true

let str = 'carl'

typeof str
// 'string'

stringPromise = Promise.resolve(str)
// Promise {<fulfilled>: 'carl'}

stringPromise instanceof Promise
// true

typeof stringPromise === 'object' // thats how you type check a promise in runtime.
// true

// simple error handling in promises
let b = new Promise(
	(res) => {
		throw 'kaboom'
	},
	(err) => err
)
b.then(
	(v) => console.log('resolved => ', v),
	(e) => console.log('oops', e)
)
// VM1385:1 oops kaboom
```

[promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all): method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.) The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

[promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) (my favourite ~Sahil): The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise. >>>> It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise. >>>> In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.

[promise.any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any): Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

[promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race): The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

There are other iterable based methods in javascript as well on [mdn - amazing docs by mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods).

## React Suspense - uncensored

[Click here](https://github.com/sahilrajput03/react_suspense_for_data_fetching)

## Git

Set default upstream remote branch same as local branch name in git so that when you do `git push` it won't ask you to do `git push -u origin myBranchName` each single time.

```bash
git config --global push.default current #This sets configuration to push to current on remote.
# for pulling you still might need to do it for once for each branch:
git branch --set-upstream-to=origin/main main  # Replace main with your desired branch.
```

## Get colors on screen on nodejs

```js
// install dependency first: npm i colors

require('colors')

const str = 'Hello this is Sahil!'
const object = JSON.stringify({a: 10, b: 20}, null, 2)

console.log(str.red)
console.log(str.red.bold)
console.log(str.bold.red) // Order doesn't matter.
console.log(str.bold.red.bgRed) // Order doesn't matter.
console.log(str.blue.italic.bold.bgYellow)
console.log(object.black.magenta.bgWhite)
console.log(object.white.bgYellow)
```

BUT, you should create some theme:

```js
// FILE: colorConfig.js
const colors = require('colors')

colors.setTheme({
	info: 'bgGreen',
	help: 'cyan',
	warn: 'yellow',
	success: 'bgBlue',
	error: 'red',
	m: 'magenta', // myString.m.b Fox chaining.: for chaining.
	b: 'bold',
	bm: ['bold', 'magenta'],
	by: ['bold', 'yellow'],
})

// Usage: Simply put below line in your server file:
// require('./colorsConfig')


myString.m.b // works good!
myString.mb // works good!
```

## Missed some files to add to your git commit ?

```bash
git add the_left_out_file
git commit --amend --no-edit
```

#### Nodemon clear on restart

[Click here](nodemon.md)

## Why does this seems tough ??

```
let s
console.log("s is undefined: ", typeof s === 'undefined') // true

let r = null
console.log("r is null: ", r === null) // true

console.log("s is undefined or null", typeof s === 'undefined' || s === null) // true
console.log("r is undefined or null", typeof r === 'undefined' || r === null) // true
```

## ~~Stop using postman and use curl commands as different files to store requests~~

**_UPDATE: Always prefer using test-driven development using `jest` using shared requests between frontend and backend so there is zero-overhead in request making procedure and code communtication say the api parameter preferences with the frontend team or yourself._**

**First**, bash file commands give you infinite scalability and customizability to store and share requests over github repo, as you can share updated request in that folder and other team memebers can simply use them as it is.

**Second**, bash and curl is opensource, so free forever while with postman -> you can only have at max of 3 members to share your requests with and with that you can only share a limited no. of requests only. So postman sucks when compared with curl command files. Yikes@@

**Third**, variables are also suppored simply using bash scripts, i.e.,

```
$cat staging
v=one

$ cat development
v=two

$cat curl1
echo Firing request @ $v

## We use `. <anyScript>` to run any command in current bash. Tip: `.` is just alias of `source` command.

################ STAGING ENVIRONMENT ################
$ . staging
$ echo $v
one
$ . curl1
Firing request @ one

################ DEVELOPMENT ENVIRONMENT ################
$ . development
$ echo $v
two
$ . curl1
Firing request @ two
```

So this way all variables can use used while executing any file with curl command. Yikes!!

Curl cli tip:

- By default when you make request with curl then only response's body is shown. To view the reponse's body and reponse's headers you use user option like `curl -D - my_url` to get response headers as well.
- In fact if you want to see all the details of the request the req's headers as well, the you can simply use `curl -v my_url` to view the verbosed output that has every minute detail you might want to see to debug anything.

## do console.logs in javascript or print in python can cause performance issues ??

YES. How. ?, So, try guessing the time taken of below two programs.

```js
i = 1
console.time()
while (i < 1000) {
	i++
}
console.timeEnd()
```

Output: **0.05 ms**

```js
i = 1
console.time()
while (i < 1000) {
	i++
	console.log('having fun')
}
console.timeEnd()
```

Ouput: **31.6 ms** ( So that means a console.log statement can ruin the performance for sure.

You might be thinking its just in **_ms_**, whats the matter. But not small enough, coz if you add more zeroes to the program the result would be shoking and the proportional changes would be same but in seconds now.

Try doing in python now if you want..

```py
import time

i = 0
while i < 1_000_000:
    # print('hel') # << Here..
    i = i + 1

end = time.perf_counter()
print(end - start)
```

`print` statement uncommented : **.08s** and **3.72s** when **uncommented**. So, thats makes a huge huge difference in performance.

## jump between words in bash, use ctrl+h or backspace ??

#hotkeys, #shortcuts, #linux, #bash

```
#Instead of using backspace in shell, you can use ctrl+h as its far reachable as compared to `backspace key`.
ctrl+h

#word jumping
alt + b : jumb back a word
alt + f : jump forward a word

#char jumping
ctrl + f : jump forward a char
ctrl + b : jump back a char

#alt+l : Also jumps forward a word.

### Use alt+backspace to delete PART of last word
### Use ctrl+backspace to delete last word COMPLETELY.
```

`ctrl+d` closes the terminal itself.

## linux fun

```bash
$ ls -l /mnt/sda3/ /mnt/sda4/ /mnt/sda5/
# This will list out file/directories for all the specified directories above.

$ echo $USER     # Prints username of current user.
$ echo $HOSTNAME # Printes hostname of the machine.
```

## Limitation of javascript (Amazing bigInt type):

```js
let k
k = 1_000_000_000_000_00_1 * 2
// Output: 2000000000000002
k = 1_000_000_000_000_000_1 * 2
// Output: 20000000000000000 // Notice the end digit is calculated wrong JAVASCRIPT sucks in artronomical figures.

// Fixing issue: Use bigints in javascript
// Syntax: Just add n to the end of the number and thats a bigInt.

let k
k = 1_000_000_000_000_000_1n * 2
// ^^ above expression throws error as ->>
// VM52:1 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// So, instead we try with 2n (earlier we used 2 (number type) to multiply with a BigInt type.
k = 1_000_000_000_000_000_1n * 2n
20000000000000002n // Voila! It works!!
```

Read about bigint @ MDN [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Format a disk/usb in windows with `diskpart`

```
diskpart
list disk
select disk X
clean
create partition primary
select partition 1
active
format fs=ntfs label=sanDisk quick
assign letter=h
exit


# Also, you can list and select a partition too.
list partition
select partition Y
```

## Become root user

`sudo su`

---

_Missing beauty:_ `isBoolean = (a) => typeof a === 'boolean'`

_Recall last n commits in git:_ `git log -n 1`, `git log -n2` works well similarly, i.e., showing last two logs.

## Generating ssh key pairs

**Learn a public key is always contained inside the private key, you can get that public key using openssl anytime. Read extracting public key and ssh-public key generation from private file in cli at https://stackoverflow.com/a/5246045/10012446.** Read how private-public [keys work together here](https://www.devco.net/archives/2006/02/13/public_-_private_key_encryption_using_openssl.php).

```bash
# Simple ssh keys generation:
ssh-keygen
#Note if you give filename as myfile, then output will be: myfile and myfile.pub, where myfile is private key and myfile.pub is public key.


# Generating sshkyes using github recommended algorithm:
ssh-keygen -t ed25519 -C "your_email@example.com"


# Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


# Generate myfile.ppk and myfile.ppk.pub (With no prompts for filename, and do set passphrase in prompts):
ssh-keygen -f myfile.ppk
```

## Setup your cli to work with different github accounts

First add your **public key** to github account you want access to. Then add entry correspondingly like below to your `~/.ssh/config` file.

`vi ~/.ssh/config`

and enter code like below:

```bash
HOST github.com
 HostName github.com
 IdentityFile "C:\Users\Array\Documents\ssh-keys\sahil-account-1-private-key"

HOST github.com-sahilrajput03
 HostName github.com
 IdentityFile "C:\Users\Array\Documents\ssh-keys\sahil-account-2-private-key"
```

## Get ur ip address

```
curl -s https://checkip.amazonaws.com
# Below works too.
curl checkip.amazonaws.com
```

## I love Promise.allSettled more that I hate `try{}catch(e){}` syntax

read more @ https://javascript.info/promise-api#summary

```
let b = () => Promise.reject(20)

await Promise.allSettled([b()])
// ouput: keyPoint: It never throws error(i.e., `reject("someErrorMessage")`. Yikes!
[
    {
        "status": "rejected",
        "reason": 20
    }
]
So, now you would be tempting to re-write all your previous `try{}catch(e){}` flavoured in a more if/else like manner, don't you .?

// I mean instead of writing:

try{
    const res = await fetch('ss')
    await res.json()
}catch(e){
    console.log('Caught program control thief :LOL: ~sahil~\n', e)
}
// ouput:
Caught program control thief :LOL: ~sahil~
 SyntaxError: Unexpected token < in JSON at position 0

// you can write more synchronouse looking code, e.g.,

let res = await fetch('ss')
let [settledRequest] = await Promise.allSettled([res.json()])
if(settledRequest.status === 'fulfilled') console.log('yikes, got value', settledRequest.value)
if(settledRequest.status === 'rejected') console.log('shit, got reason', settledRequest.reason)
// isn't that the way you wanted code to be written like from a long time...?
```

## `Promsise.all` vs. `Promise.allSettled` (i.e., either `resolved` or `rejected`)

```js
let a = () => Promise.resolve(10)
let b = () => Promise.reject(20)

// Promise.allSettled
await Promise.allSettled([a(), b()])
// output: keyPoint: It never throws error so we can use it without try and catch(what a godly thing, isn't it ?).
[
    {
        "status": "fulfilled",
        "value": 10
    },
    {
        "status": "rejected",
        "reason": 20
    }
]

// Promise.all
try{
    await Promise.all([a(), b()])
}catch(e){
    console.log('boom', e)
}

// output:
boom 20
```

### Modules

```js
import defaultExport, * as name from "module-name";
import defaultExport, { export1 } from "module-name";
const { default: myDefault, foo, bar } = await import('/modules/my-module.js');



// Anonymous
let myObject = {
  field1: value1,
  field2: value2
};
export {myObject as default};

// above export is equivalent to below:
export default {
  field1: value1,
  field2: value2
};
```

src: [Import in js | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

### Enable ecma modues with nodejs

Desirable way: `node --input-type=module test.js`. Refer here for all ways to do this: [Enabling ESM | Official Docs](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_enabling). Also, tho use `node test.mjs` if the former seems to much. And do read about the [awesomeness of convention of file extensions standard](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_mandatory_file_extensions) which is also followed in browsers as well and thus actualy good for real.

### Save some of keystrokes with logs

```js
// commonjs
const {log: l} = require('console')
l('i love commonjs modules.')

//esm
import {log as l} from 'console'
l('i love esm modules')
```

### Make async/await cleaner with simple if checks

```js
async function fetchData({isBad}) {
	try {
		if (isBad) throw 'The request is not good...'

		const data = 'result data...' // for e.g., `return await anyPromsieHere()`
		return [data, null]
	} catch (error) {
		return [null, error]
	}
}

async function main() {
	// src: https://youtu.be/ITogH7lJTyE
	const [data, error] = await fetchData({isBad: true}) //toggle isBad to toggle different behaviour of the api.
	if (data) {
		console.log('got data..')
	}
	if (error) {
		console.log('there is some error with the api...')
	}
}

main()
```

**This might look like a overkill for any simple api but if you have only two three api's and you need to check add try/catch for each of them in a single scope it all becomes whole messy to look at ... but if you use something like..**

```
  const [userData, userError] = await fetchUserData({ isBad: true });
  const [locationData, locationError] = await fetchLocationData({ isBad: true });
  const [friendsData, friendsError] = await fetchFriendsData({ isBad: true });
  // now you can simly put 6 if checks to check for what is actually error and you code actually gets out of control (i.e., *program control) LITERALLY.
```

### Get used to javascript objects(works good in both node and browser both, tested):

```js
var cron = require('node-cron')
let cron1 = '30 * * * * *'

cron.schedule(cron1, () => {
	var d = new Date()
	var h = d.getHours()
	var m = d.getMinutes()
	var s = d.getSeconds()

	console.log('==1>', new Date().toLocaleString())
	console.log('==2>', h) // 20 that means 8pm.
	console.log('==3>', m) // 32 that means 32 minutes past.
	console.log('==4>', s) // 30 that means 30 seconds past.
	console.log('==5>', d) // this is not readable at all :lol:
})
```

- You can always use ?. operator in browser and react projects irrespective of if you are using typescript or not. Yes, its fun, isn't it.!

\*You need to press y for first time though.

- Super charge your windows bash experience with my aliases and functions:

```bash
curl -o ~/.bashrc https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.bashrc-windows/.bashrc
# This command simply adds/updates your existing `~/.bashrc file`. Too much fun, isn't it :)
```

- Add `prettier-write` script to your package.json file using command

```bash
npm set-script prettier-write "prettier --write ."
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierrc.js
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierignore
```

- Make emmet work on your jsx files as well

Enable Setting: `Emmet: Trigger Expand On Tab` and set `ctrl+e` as key binding for `Emmet: Expand Abbreviation`. Enjoy emmet in JSX with ctrl+e now for the rest of life.

- Want Husky? [VERIFIED] :

```bash
npx husky-init && npm install
```

Now edit the `.husky/pre-commit` file and add desired command i.e., `npm run prettier-write` there in place of command `npm test`. And don't forget to tell other contributors to use below command to get their husky setup on rocket for their future commits.

```
npm i
```

Help: [Src1](https://typicode.github.io/husky/#/), [Src2](https://www.youtube.com/watch?v=oWty0Nw1ydk), [Src3: CRA](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically).

- **Got time**

0. Read and test whole official [cra docs](https://create-react-app.dev/).
1. Learn [story book or styleguidist](https://create-react-app.dev/docs/developing-components-in-isolation) , either one and do some good tutorial from their site or youtube. :D GOOD LUCK!!
2. Leanr pre-rendering from cra docs [here](https://create-react-app.dev/docs/pre-rendering-into-static-html-files).

## My favourite drawing app

Browse at https://asciiflow.com/#/ .

## 🤠︎ Write data to a new/existing file directly with the terminal

Copy data to clipboard, and in terminal use

`$ cat > myFile.txt` and hit enter, and now paste data in the terminal itself and press `ctrl+d` to save the file. Thats it 🤠︎.

`$ cat >> myFile.txt` and this will append data to the end of the content of the fiile, and make sure you first enter a new line after you press enter command for the above command so that a new line is created (only useful when there is no new line already in end of file that you want to edit).

### Techonologies

<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img src="https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white"/>
<img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>
<img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/> [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
<img alt="CircleCI" src="https://img.shields.io/badge/CIRCLECI%20-%23161616.svg?&style=for-the-badge&logo=circleci&logoColor=white"/>
<img alt="GitHub Actions" src="https://img.shields.io/badge/github%20actions%20-%232671E5.svg?&style=for-the-badge&logo=github%20actions&logoColor=white"/>
<img alt="Debian" src="https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white" />

### Social

[<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/sahilrajput03)
[<img src="https://img.shields.io/badge/@freakstarrocks%20-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>](https://twitter.com/freakstarrocks)
[<img src="https://img.shields.io/badge/sahilrajputfreakstar%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/> ](https://www.youtube.com/user/sahilrajputfreakstar/playlists)
[<img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/sahilrajput03/)

[<img alt="Telegram" src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" />](https://t.me/sahilrajput03)
[<img alt="Discord" src="https://img.shields.io/badge/sahilrajput03%234631%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white" />](#)
<i>[Badges?](https://github.com/Ileriayo/markdown-badges)</i>

### Codesandboxes/Codepens/etc

[Sahil Rajput @codesandbox](https://codesandbox.io/u/sahilrajput03)

[Tanner Linsley @ codesandbox](https://codesandbox.io/u/tannerlinsley/sandboxes)

[Kevin Powell @ codepen](https://codepen.io/kevinpowell)

### Packages published @ `npm.com`/`yarnpkg.com`

- [useWhat](https://www.npmjs.com/package/usewhat)

- [useStateM](https://www.npmjs.com/package/usestatem)

- [mongo-quick](https://www.npmjs.com/package/mongo-quick)

- [jsonbackend - A true object database server.](https://www.npmjs.com/package/jsonbackend)

- [react-fetch2](https://www.npmjs.com/package/react-fetch2)

- [useEffectFactory](https://www.npmjs.com/package/useeffect-factory)

- [r_global](http://npmjs.org/package/r_global)

- [Pagelist React Component - Test/Create apps made easy](https://www.npmjs.com/package/pagelist-react)

### Services

- [Axios playground](http://axiosplayground.ml/)
- [Json backendserver](https://jsonbackendserver.herokuapp.com/)
- [Graphql Playground - Query with power](https://abstraction.ml)
- [Fly 🚀︎ a codesandbox](https://flycodesandbox.netlify.app/)

## Blogs

- [Jaadujinn.ml](https://jaadujinn.ml)

- [Reverberate.ml](https://reverberate.ml)

- [SahilRaput.ml](https://sahilrajput.ml)

- [Docs](https://reverberate.ml/docs)

- [Uses](https://reverberate.ml/uses) (Sofwares stack for windows 🥝︎ users)

- [Linux Setup 💓︎](https://github.com/sahilrajput03/my_bin)

## Codesandbox and github integrations work

[Link to Article docs](https://codesandbox.io/docs/git), [Massive different guides for importing to codesandbox directly](https://codesandbox.io/docs/importing#import-from-github)

### Comments

- I'm a yarn fan though.
- Use https://picsum.photos/ (https://unsplash.it/) for using placeholder images 🚀︎.
- Use https://uifaces.co/browse-avatars/ for person images/avatars.
- Use https://imgur.com/upload for hosting your gifs very fast🚀︎.
- Use gist for sharing code blazing fast: https://gist.github.com/
- Software is like sex: it's better when it's free. - Linus Torvalds
- Learning is a algorithm, you stop it, you're gonna see errors. ~unknown

## Priority1: Center element using simple margin auto

Q. Does margin auto center vertically?
Ans. If the display of your parent container is flex , then yes, margin: auto auto (also known as margin: auto ) will work to center it both horizontally and vertically, regardless if it is an inline or block element.

## Priority2: Center element like a pro

```css
.myElement {
	position: absolute/relative;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
}
```

## Priority3: Center element like a master

```css
.myEl{
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;

 width: 50%;
 height: 50%;
 margin: auto;
 <!-- ^ this does the centering magic when complemented with all the above settings and don't forget to make the container of current element as ''position: relative'' -->
}

.container{
 position: relative;
}

```

## css selector

```css
p ~ ul {
	background: #ff0000;
	/*This will apply to all ul's that are anywhere(not just next to it) after the p tag.*/
}
```

## Practical example of both of above complementary usage

src: https://codepen.io/sahil-blulabs/pen/jOmrGXg?editors=1010

## Issue: `grid-gap: 0` is not working ??

See fix at @ [codepen](https://codepen.io/sahil-blulabs/pen/zYwKKwL).

## Using grid-area names in grid

Article at https://css-tricks.com/simple-named-grid-areas/ .

## Use native browser history api instead of react-routed-dom api everytime

```jsx
const history = (path) => window.history.pushState('', '', path)

const jsx = () => {
	return (
		<div>
			<button
				onClick={() => {
					history('/boom')
				}}
			>
				Click me to go to /boom
			</button>

			<button
				onClick={() => {
					history('/bamm')
				}}
			>
				Click me to go to /bamm
			</button>
		</div>
	)
}
```

## React eslint + prettier settings

1. Ensure that `package.json` file has below content:

```json
{
	"eslintConfig": {
		"extends": ["react-app", "react-app/jest"]
	}
}
```

2. Use below commands to install some dependencies, add `.eslintrc.js`, `.prettierrc.js` and `.prettierignore` in a CRA project's root directory:

```
npm i -D eslint-config-prettier eslint-plugin-prettier
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/eslint-config-react/.eslintrc.js
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierrc.js
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierignore
npm set-script prettier-write "prettier --write ."
npm run prettier-write
```

Thats all it takes and don't forget to restart your react server.

## Debugging made easy in vscode itself (src: CRA documentation

src: https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code

## What is `initial`, `inherit`, `unset`, `all:initial/inherit/unset` ??

Src: [Kyle's youtube video](https://www.youtube.com/watch?v=N8tFrMZp_wA)

E.g., 1:

Below code will make these divs appear as side by side coz initial value for `display` property is `iniline`.

```txt
<div>div1</div>
<div>div2</div>

div{
  display: initial;
}
```

E.g., 2:

Below code demonstrates that some properties are always inherited like [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#formal_definition), [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#formal_definition) whereas some are never inherited like [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border#formal_definition), [`outline`](https://developer.mozilla.org/en-US/docs/Web/CSS/outline#formal_definition),

```txt
<div>
  I am a div.
  <p>I am a paragraph.</p>
</div>
<p class="imp">I am paragraph imp.</p>

div{
  font-size: 2rem;
/*   ^ font-size is inherited in p tag as well. */
  border: 1px solid blue;
/*   ^ border is not inherited unless you specifically explicitly inherit it. */
}

p{
/*   border: inherit; */
}
```

E.g., 3

```txt
button{
 all: unset;
<!--  ^^ This will remove all the browser's and other user defined css for this element, and now all the shit things are purged automatically(and thats what you want mostly for buttons). Yikes!!  -->
 background-color: red;
}
```

E.g., 4: In below example the padding and border property values are set to browser's style sheet for chrome/firefox/etc and below code does nothing coz all the values for all the properties are set to rever by default. `revert` is only useful in cases when you just need to undo your own style property sometimes(which is very rare though).

```
button{
 padding: revert;
 border: revert;
}
```

More information:

```txt
- CSS Property values: initial, inherited,

- You can find default values of each css properties @ mdn in the "Formal definition" section.


- For a ``div`` in all browsers the value for `div` is set as `display: block` but by the css specifications's ``initial`` value for property of ``display`` is ``inline`` as you can read [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display#formal_definition).

You should always use ``font-family: inherit`` in buttons (so they can actually get your custom font) coz otherwise they get font-family property as `Arial` from browser's ``User Agent Stylesheet``.

``display`` property has default value for inherited as false. [Src](https://developer.mozilla.org/en-US/docs/Web/CSS/display#formal_definition).
``border`` property has defaut value for inherited as false. [Src](https://developer.mozilla.org/en-US/docs/Web/CSS/border#formal_definition)
``font-size`` property has default value for inherited as true. (this means any nested child will have the same font-size coz they inherit the font-size of the parent. [Src](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#formal_definition)

``unset`` as value for a property will make that property to either set as ``inherit`` or ``initial`` where inherit means exactly what it means and ``initial`` means

- Magic: If you set ``all: unset`` in any element in css then all css properties of that selected element will be seet to ``inherit`` or ``initial``,
```

### Some selectors (src: kyle's css selector cheatsheet, find it in your `CSS Resources` telegram group.

#### `:first-child` selector

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

span:first-child{
  color: red;
/* Only "I am span 1" will be coloured red. */
}
```

#### `:last-child` selector

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

span:last-child{
  color: red;
/* Only "I am span 3" will be coloured red. */
}
```

#### `:nth-child(2n)` selector

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
  <span>I am span 4.</span>
  <span>I am span 5.</span>
</div>


span:nth-child(2n){
  color: red;
/* Only "I am span 2" and "I am span 4" will be coloured red. */
}

```

#### `:nth-last-child(1)`

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

span:nth-last-child(1){
  color: red;
/* Only "I am span 3" will be coloured red. */
}
```

#### `:only-child`

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

<div><span>I am single span.</span></div>

span:only-child{
  color: red;
/* Only "I am single span." will be coloured red. */
}
```

#### `a:first-of-type`

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

<div>
  <div>I am simple div.</div>
  <span>I am simple span.</span>
</div>

span:first-of-type{
  color: red;
/* Only "I am single span." and "I am span 1." will be coloured red. */
}
```

#### `a:last-of-type`

```
<div>
  <span>I am span 1.</span>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

<div>
  <div>I am simple div.</div>
  <span>I am simple span.</span>
</div>

span:last-of-type{
  color: red;
/* Only "I am span3." and "I am simple span." will be coloured red. */
}
```

#### `a:nth-of-type(2n)`

```
<div>
  <div>I am span 1.</div>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

<div>
  <div>I am simple div1.</div>
  <div>I am simple div2.</div>
  <span>I am simple span1.</span>
  <span>I am simple span2.</span>
</div>


span:nth-of-type(2n){
  color: red;
/* Only "I am span3." and "I am simple span2." will be coloured red. */
}
```

#### `:nth-last-of-type(2)`

```
<div>
  <div>I am span 1.</div>
  <span>I am span 2.</span>
  <span>I am span 3.</span>
</div>

<div>
  <div>I am simple div1.</div>
  <div>I am simple div2.</div>
  <span>I am simple span1.</span>
  <span>I am simple span2.</span>
</div>

span:nth-last-of-type(2){
  color: red;
/* Only "I am span2." and "I am simple span1." will be coloured red. */
}
```

#### `a:only-of-type`

```
<div>
  <div>I am div 1.</div>
  <div>I am div 2.</div>
  <span>I am span 1.</span>
  <div>I am div 3.</div>
</div>

<div>
  <div>I am simple div1.</div>
  <div>I am simple div2.</div>
  <span>I am simple span1.</span>
  <span>I am simple span2.</span>
</div>

span:only-of-type{
  color: red;
/* Only "I am span1." will be coloured red. */
}
```

#### `a:not(.c)`

```
<div>
  <span class='c1'>I am span 1.</span>
  <span class='c2'>I am span 2.</span>
  <span class='c3'>I am span 3.</span>
  <span class='c2 c3'>I am span 4.</span>
</div>

span:not(.c2){
  color: red;
/* Only "I am span1." will be coloured red. */
}
```

### Ease with Dates

Date() and Date.now() gives you:

```
"Mon Aug 23 2021 18:49:44 GMT+0530 (India Standard Time)" and 1629724786923 respectively.
```
