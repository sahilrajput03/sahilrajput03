# Lecture 6 - Git

- It helps in collaboration.
- It captures snapshots of each version.
- commit means a snapshot
- Parent commit: A snapshot that precedes the current commit.
- Most commits have one parent, but a merge commit can have multiple commits as well.
- Git: A content address store where contents can be addressed by their hash.
- Git is mostly made up of c, bash, perl scripts.
- Git graphy data structure:

```bash
folders are trees
files are blobs

# These data structures are recursive so a tree can have multiple trees and blogs.


##### A simple git underlying structure:
type blog = array<byte>
type tree = map<string, tree | blob>
type commit = struct {
	parents array<commit-ids>
	author = string
	message = string
	snapshot = tree-id
}


###
type object = blob | tree | commit-id
objects = map<string, object>
def store(o):
	id = SHA1(o)
	object[id] = o

def load(id):
	return object[id]

references = map<string, string>
# references are human readable strings i.e., branchnames, HEAD, etc which points to SHA-1 ids of commits for easy usage.
```

```bash
## viewing the chain of sha's used to make a single commit:
git cat-file -p my-commit-sha
git cat-file -p tree-sha-we-get-from-above
git cat-file -p file-sha-we-get-from-above



git log
# Output:
* 733ae15 (HEAD -> main) First-commit.



git cat-file -p 733ae15
# Output:
tree 0f4d9ac6e6cdb94a954fcfd7809d2fede3d39646
author Sahil Rajput <sahilrajput03@gmail.com> 1646999422 +0530
committer Sahil Rajput <sahilrajput03@gmail.com> 1646999422 +0530

First-commit.
git cat-file -p 0f4d9a
100644 blob 2d832d9044c698081e59c322d5a2a459da546469    1.txt



git cat-file -p 2d832
# Output:
hello,world
```

Practical usage:

```bash

# add all content from the root of the git repo:
git add -A



## Get a diff since last commit:
git diff myFile.txt

## IF YOU ADDED THE CHANGES TO STAGE AREA, YOU MAY DO-
# FYI: --cached means show the changes in the cache/index (i.e. staged changes) against the current HEAD. --staged is a synonym for --cached.
git diff HEAD myFile.txt
git diff --cached myFile.txt  # OR git diff --staged myFile		### --staged is a synonym for --cached
git status -v													### (shows staged changes as well). FYI: -v is for verbose
# SOURCE FOR ALL ABOVE: https://stackoverflow.com/a/1587877/10012446


# Get a diff since source commit:
git diff sourceCommitId myFile.txt


############ colors in vim?
# green = local branches
# cyan = current HEAD
# red = remote branches


############ view branches with last commitid and commit-messages
git branch -v



### merging
git mergetool
# above command can be made to configure to launch `vimdiff` tool.
vimdiff


######## using --set-upstream is now autocompletable with fzf or autocomplete utitlity in bash IMO:
git branch --set-upstream-to=origin/master
# now you can simply do `git push` simply to do `git push origin master:master`


###### git pull
git pull # is same as `git fetch; git merge origin`

###### very verbose (-vv) with git branch
git branch -v
* master 1b769fd Update

git branch -vv
* master 1b769fd [origin/master] Update






###### clone only last n commits in a repo: (in below with --depth=1 we say to clone only last commit only):
git clone --depth=1 --single-branch --branch=master  https://github.com/sahilrajput03/sahilrajput03/
# we can say to clone only single branch with --single-branch flag as well:
git clone --depth=3 --single-branch https://github.com/sahilrajput03/sahilrajput03/
# we can say to clone a specific branch as well:
git clone --depth=3 --single-branch --branch=master  https://github.com/sahilrajput03/sahilrajput03/

#FYI: to read more on this, read @ https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/
```

## Dealing with remote branches in local direcotries with simple repo for testing(TESTED!), yo!

**_FiX: Actually we can push to non-bare repos as well but we must not be checked out on the branches on the remote repos which we are pushing to at the moment. So this is easy fix by checking out to a `rest` branch on remote repository. Yo! _**
**_ SO WE DON"T NEED A BARE REPO THOUGH_**

```bash
mkdir remote-repo && cd remote-repo && git init && git checkout -b rest # CHECKING OUT TO REST OR ANY OTHER BRANCH IS IMPORTANT.
# Now we can make above folder as our remote repo easily.
cd ..


mkdir my-repo && cd my-repo && git init
git remote add origin ../remote-repo/.git
echo hello >> file.txt
git add -A && git commmit -m "First commit" && git push origin main
# We are able to push main/master to remote-repo coz we have checked out rest branch there.
# To see changes in remote repo folder, you may do:
git checkout main

#### IF YOU AGAIN WANT TO PUSH TO THIS REMOTE REPO, YOU MUST CHECKOUT to rest branch first, else it'll fail.
git checkout -b rest
```

## Dealing with remote branches in local direcotries with `--bare` repo for testing, yo!

We can make a copy of github remote repository as bare repo as well with command:

```
git clone --bare <my-repo-url>
# FYI: This will clone .git folder of my repo to a folder named: `my-repo.git` YO!!
#TESTED!
```

```bash
mkdir remote-repo && cd remote-repo && git init --bare
# Now we can make above folder as our remote repo easily.
cd ..


mkdir my-repo && cd my-repo && git init
git remote add origin ../remote-repo
echo hello >> file.txt
git add -A && git commmit -m "First commit" && git push origin main
# Now this commit would be pushed to our remote-repo repository folder as well.
# LEARN: a bare repo has now checked out branch anytime.
```

# To create a local bare repo

Any local reposotity can push to a remote-repository folder that has not checked out any branch (working directory) which is known as bare repo. You may create a bare repo with command

```bash
git init --bare
```

If its not bare you get error:

1. can't push to a non-bare repo
2. i.e., remote rejected: branch is currently checked on remote.)

Source: https://stackoverflow.com/a/11117928/10012446

# Interactive staging via `git add -p` in a helpful thing

```bash
git add -p .
# YOU may use, s (split), y (yes), n (no) and other for the case.
# interesting thing is we are only adding certain changes to cached area only(not discarding them from the files at all)
# AND after adding required changed to staged are and commmiting the changes, we may throw away the changes completely from files via:

git checkout myProgram
# or
git checkout .
```

## git blame and git show

```bash
git blame filename
# then using the information for eachline we can see which commit id is reponsible for the last change on that line and then we can do like:
git status commmit_id
# to get the contextural changes made when that line was last edited!
```

## `git stash` and `git pop`

```bash
git stash
# it saved the changes to a useful place.
git pop
```

## `git bisect`

This can be very helpful when we want to run some scipt or any command for all the commits in backward manner so we can check where is a commit is breaking a test which was actually passing successfully earlier at a time. So this can be really helpful in automating stuff over commits.

## FROM EXERCISE:

```
graph = log --all --graph --decorate --oneline
# added above line to .gitconfig file.




# define global ignore patterns in ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
### ^^^^ Actually this line added a line for exclude pattern in .gitconfig file though, so i don't need to do this anytime if I have my .gitconfig file.
# Do this, and set up your global gitignore file to ignore OS-specific or editor-specific temporary files, like .DS_Store.
```
