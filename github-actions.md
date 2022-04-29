# Learn github actions

**Quick**

- **Workflow Syntax Documentation:** **[Click here to learn every syntax of github actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)**

  This is all what you need to read to understand the workflow's syntax. Q. How to navigate to *Workflow Syntax Documentation* page from home docs: Click on *Github Actions* topic @ [docs.github.com/en](https://docs.github.com/en), then click on topic **Workflow syntax for GitHub Actions** under **Popular** section.

**General**

- Docs: [docs.github.com/en/actions/quickstart](https://docs.github.com/en/actions/quickstart)
- Features: [github.com/features/actions](https://github.com/features/actions)
- Check *github actions* group in telegram to see interesting usages!

**My example Github Actions's configurations**

- Cron job for sending thought messages via telegram bot @ [github.com/sahilrajput03/sahilrajput03/tree/master/.github](https://github.com/sahilrajput03/sahilrajput03/tree/master/.github).

  This project includes usage of `act` to help us run and debug github actions at the speed of light locally. Yo!

**FYI**

- Github actions by default has `secrets.GITHUB_TOKEN` secret which is helpful to authenticate on our basis in the github workflows. [Click here](https://docs.github.com/en/github-ae@latest/actions/security-guides/automatic-token-authentication). You may see the usage in the same previous link or [click here](https://github.com/kubernetes-hy/material-example/blob/master/.github/workflows/gitops-app.yml) which is a course material example from [Ch4 Part4@dwk course](https://devopswithkubernetes.com/part-4/3-gitops)).


### Can't see getting your workflow run on changing files in directories you have set track to ?

> If you want to read about filter pattern, you can read @ [here](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

The path matchingin github actions is kind of so vagues coz:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - '.github/workflows/project-backend.yml'
      - './exercises/ex4-08/ex4-06/ex2-08-statefulsets/ex2-02/**'
```

above won't work coz you have ./ in the begining of the exercises path and that causes it to not tract our desired folder, so instead, we must do like below (remove the `./`) and it'll work:

```yaml
...
      - 'exercises/ex4-08/ex4-06/ex2-08-statefulsets/ex2-02/**'
...
```
## Using environment variables in github actions (all levels i.e., workflow, job, step levels)

Source: [Docs - Environment variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables)

**Image 1:**

![image](https://user-images.githubusercontent.com/31458531/165925993-a5a47559-a531-4ab8-87b3-a1a61ac4ccb0.png)

**Image 2:**

![image](https://user-images.githubusercontent.com/31458531/165926775-3ff09976-e1b4-4dbd-a80f-6881aa963e2b.png)

