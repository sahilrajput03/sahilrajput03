# Learn git

**Quick Links:**
- Github Docs Repository: [https://github.com/github/docs](https://github.com/github/docs), [package.json](https://github.com/github/docs/blob/main/package.json)
- Older notes: [https://sahilrajput03.github.io/Git_and_GitHub.html](https://sahilrajput03.github.io/Git_and_GitHub.html)

## Update git remote

```bash
git remote set-url origin ssh_remote_link_here
```

## Pusihg to respective branch on remote

```bash
# file: ~/.gitconfig (tested on windows)
[push]
        default = current
```

## Remove remote branch and local branch

```bash
# Delete the remote branch (will not delete the local branch)
# Note: you don't need to prefix it with `/origin` because you already specified origin after the `push` option
git push origin --delete myBranchName

# Delete the local branch
git branch -d myBranchName
```

## Simple way to setup ssh git-github connection with `gh` cli

Source - [Docs - Authenticating with GitHub from Git](https://docs.github.com/en/get-started/quickstart/set-up-git#authenticating-with-github-from-git)

```bash
gh auth login
```

## Setup your cli to work with multiple github accounts

Step 1: Generate a ssh-key value pair i.e, private and public key. Refer my own notes:  [Click here](generate-ssh-key-pairs.md)

Step 2: First add your **public key** to github account you want access to.

Step 3: Then add entry correspondingly like below to your `~/.ssh/config` file -

```bash
HOST github.com
 HostName github.com
 IdentityFile "C:\Users\Array\Documents\ssh-keys\sahil-account-1-private-key"

HOST github.com-sahilrajput03
 HostName github.com
 IdentityFile "C:\Users\Array\Documents\ssh-keys\sahil-account-2-private-key"
```

*Step 4: (Optional: May not be needed for ArchLinux) You might want to run command `ssh-add ~/.ssh/oanhnn_private_key` if you are doing this on ubuntu (tested no Samaksh Ubuntu). Source: [Click here](https://gist.github.com/oanhnn/80a89405ab9023894df7)*


Step 5: Testing ssh connections:

```bash
ssh -T git@github.com
# OUTPUT: Hi <username_here>! You've successfully authenticated, but GitHub does not provide shell access.

ssh -T git@github.com-sahilrajput03
# OUTPUT: Hi <username_here>! You've successfully authenticated, but GitHub does not provide shell access.

# For Bitbucket
ssh -T git@bitbucket.org
# OUTPUT: authenticated via ssh key.
# OUTPUT: You can use git to connect to Bitbucket. Shell access is disabled

# For GitLab
ssh -T git@gitlab.com
```

Step 6: In your other than default account you can use below commadn to change name and email as well:

```bash
git config user.email "superman@org2.com"
git config user.name  "Super Man"
```

That's all!

## `double merge` or `round-trip merge`

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ea3f36b0-8db9-422c-bd14-2b0ad6a69155)

## Use local time zone for git log

Source: [Click here](https://stackoverflow.com/a/15905642/10012446)

```
git config --global log.date local
```
## Some useful commands

```bash
# Get current branch name
git branch --show-current

# Get current branch and its tracking branch (upstream branch)
git branch -vv --contains

# Update tracking branch for current branch
git branch -u origin/$(git branch --show-current)
```

## Make current user as owner of a git repository (sometimes git show weird error because the ownder of git directory is root)

This error generally happens when we copy git repositories from a portable hard disk.

To fix this you can run command: `sudo chown -R array: test`. Here we are marking the owner and group-owner of `test` directory (including all its nested files/folder using option `-R`).

## To show lines added and lines deleted log for commits

To get lines added and lines deleted per file we can use `--numstat`:

```bash
git diff a73c6a44ba HEAD --numstat
# NOTE: ^^ Above command shows changes made after `a73c6a44ba` till current HEAD. (i.e, it doesn't include changes made in `a73c6a44ba` commit becoz thats how `git diff SHA1 SHA2` command works).
# NOTE: Also, git diff a73c6a44ba  (this command shows changes made after commit `a73c6a44ba` till HEAD becoz thats how `git diff SHA` command works.
# OUTPUT (first number is added lines and second number is deleted lines:
7       0       src/components/layout/main-site-wrapper/authenticated/AuthenticatedPageWrapper.tsx
11      1       src/components/ui/ReportModal.tsx
14      2       src/components/ui/post/PostDetail.tsx
```

Similarly to get complete info for all flies we can use `--shortstat`:

```bash
 git diff a73c6a44ba HEAD --shortstat
 # OUTPUT:
 14 files changed, 89 insertions(+), 40 deletions(-)
```

To view for a very old for single commit you can use:

```bash
git show SHA --shortstat
git show SHA --numstat
```

## Set email and name globally

```bash
git config --global user.name "Sahil Rajput"
git config --global user.email "sahilrajput03@gmail.com"
```

## disable pager in git output

```txt
git --no-pager log
git --no-pager show <commit_hash>
```

Also, the best way is simply set pager to `cat`, life is amazing now! ([source](Source: [Click here](https://stackoverflow.com/a/6986231/10012446)))

```txt
# File: ~/.gitconfig
[core]
         pager = cat
```

You can use `git config --global core.pager "cat"` to set `cat` as pager for git log.

## show all branch

`git branch`: Prints all branches and \* indicated is the current branch.

## Creating new branch

`git branch test` : will make `test` named branch.

`git branch somebranch SourceBranchHere` will make `somebranch` named branch.

## switching to other branch

`git checkout branchName`

## logs

`git log`

## Remove a .env file from entire history of the repo

[Click here](https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/)

## What is .gitkeep

![image](https://user-images.githubusercontent.com/31458531/202268566-11a8a084-d48b-4eff-be46-83076c0d67c1.png)

## this is how you include a folder with a single file .gitkeep but ignore its other contens for personal usage for each team member

![image](https://user-images.githubusercontent.com/31458531/202270076-b8861f4d-515f-48a4-b837-28170166b62e.png)

## `git pull` vs. `git pull origin` vs. `git pull origin main`

- You're working on a branch called `SD-499` which was checked out from main.
- Now main branch on the remote repository is updated.
- Now you do `git pull` or `git pull origin`, this will only fetch and merge all remote branches to their respective local branches which set set t to tracked.
- SO, now you need to merge `main` branch into your current branch either by doing `git merge main` or you can do it by `git pull origin main` as both will do same thing. **Why?** Ans. Because `git pull origin main` will pull update local main branch first and second it will merge `main` branch to your `currently checkout branch`. BECAUSE `git pull` = `git fetch` + `git merge branch`. Source: [Atlassian](https://www.atlassian.com/git/tutorials/syncing/git-pull), [Git-scm](https://git-scm.com/docs/git-pull)

![image](https://user-images.githubusercontent.com/31458531/203025083-653be64f-ee49-41ad-9cd0-1c7da45faa57.png)

## View the commit diff of merged commit?

That can work actually.

![image](https://user-images.githubusercontent.com/31458531/206040759-0be29cd9-2033-40ba-bbb1-cc1fffc8a7c2.png)

##  ♥💕❤😘 You can literally move your `.git` folder any where

Yes, it sounds quite unbelievable but its quite magical how it does work actually. **Amazing Linus Torwald.**

## What is `.gitkeep` file

TLDR: (its just a simple conventional hack by people to make a empty folder be indexable)

**Docs: [.gitignore @ SCM](https://git-scm.com/docs/gitignore)**

**Stackoverflow Answer: [Click here](https://stackoverflow.com/a/11579945/10012446)**

![image](https://user-images.githubusercontent.com/31458531/210081179-d1641e53-a7d4-4b52-8859-f3c2fb2891dc.png)

![image](https://user-images.githubusercontent.com/31458531/210081401-e0fef8bf-9cbe-48c2-ac3e-34d8bcfecb84.png)

## Addging `*` to a nested folder's `.gitignore` ignore all files including the `.gitignore` file as well

![image](https://user-images.githubusercontent.com/31458531/210081727-e3c17409-4988-406a-bf33-5e4919e10227.png)

## Adding `*` to root `.gitignore` file ignore all entities

Thats all.

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
