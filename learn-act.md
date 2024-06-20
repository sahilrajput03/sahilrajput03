## Learn `act`

**Quick Links:**
- Docs: [https://nektosact.com](https://nektosact.com)
  - Secrets file format: [Click here](https://nektosact.com/usage/index.html?highlight=secret#envsecrets-files-structure)
- Github (51.7k*): https://github.com/nektos/act
- Repos where I use `act.sh` files: [sahilrajput03/sahilrajput03](https://github.com/sahilrajput03/sahilrajput03/tree/master/.github)

### Using `act` with a file watching service for even more faster debugging

Make a script file in root of your repository i.e., `act.sh`

***NOTE: It is necessary to run to run act.sh file from the root of the repository otherwise act won't work.***

```bash
nodemon \
  -x 'act push --insecure-secrets' \
  -w .github/workflows/main.yml

nodemon \
  -x 'act schedule --insecure-secrets --secret-file=.secrets-for-act' \
  -w .github/workflows/main.yml \
  -w .github/cron-job.sh

# --insecure-secrets will not hide the secret values in logs
# --secret-file has a default value of `.secrets`
# Source: `act -h`
```

## Reset image choice usage for `act`

When you run any act `act` command for the first time we get the choice to select the image from `Large size image`, `Medium size image` or `Micro size image`. I tested `Micro size image` image and it throws error when our job contains any script file, thus you need to select the **`medium`** image (default) one.

**Q. What's wrong with the `micro size image`?**

If you accidentally chose the `micro size image` then it would give error on running the shell scripts (`.sh` files). (tested). In case you have actually selected the `micro size image` then you would need to reset the image choice of act.

To reset the github actions image choice we can remove this file **(tested on macos)**:

`rm /Users/$USER/Library/Application\ Support/act/actrc` (source: [click here](https://github.com/nektos/act/issues/2219#issuecomment-1991311613))

```text
? Please choose the default image you want to use with act:
  - Large size image: ca. 17GB download + 53.1GB storage, you will need 75GB of free disk space, snapshots of GitHub Hosted Runners without snap and pulled docker images
  - Medium size image: ~500MB, includes only necessary tools to bootstrap actions and aims to be compatible with most actions
  - Micro size image: <200MB, contains only NodeJS required to bootstrap actions, doesn't work with all actions

Default image and other options can be changed manually in ~/.actrc (please refer to https://github.com/nektos/act#configuration for additional information about file structure)  [Use arrows to move, type to filter, ? for more help]
  Large
> Medium
  Micro
```
