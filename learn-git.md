# Learn git

For older notes: [https://sahilrajput03.github.io/Git_and_GitHub.html](https://sahilrajput03.github.io/Git_and_GitHub.html)

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

## `git pull` vs. `git pull origin main`

- You're working on a branch called `SD-499` which was checked out from main.
- Now main branch on the remote repository is updated.
- Now you do `git pull`, this will only fetch and merge all remote branches to local branches from their respective tracking branches.
- SO, now you need to merge main branch into your current branch either by doing `git merge main` or you can do it by git `pull origin main` as both will do same thing. Why? Because `git pull origin main` will pull update main branch and also merge main branch to your currently checkout branch as well. BECAUSE `git pull` is a sum of `git fetch` and `git merge` branch.

![image](https://user-images.githubusercontent.com/31458531/203025083-653be64f-ee49-41ad-9cd0-1c7da45faa57.png)
