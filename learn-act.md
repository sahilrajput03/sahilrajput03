## Learn act

**Quick Links:**
- Docs: https://nektosact.com/
- Github (51.7k*): https://github.com/nektos/act
- Repos where I use `act.sh` files: [sahilrajput03/sahilrajput03](https://github.com/sahilrajput03/sahilrajput03/tree/master/.github)

### Using act with file watching service - awesome

Make a script file in root of your repository i.e., `act.sh`

***NOTE: It is necessary to run to run act.sh file from the root of the repository otherwise act won't work.***

```txt
nodemon -x 'act push --insecure-secrets' -w .github/workflows/main.yml
nodemon -x 'act schedule --insecure-secrets --secret-file=.secrets-for-act' -w .github/workflows/main.yml -w .github/cron-job.sh

# --insecure-secrets will not hide the secret values in logs
# --secret-file has a default value of `.secrets`
# Source: `act -h`
```

## Reset Image Usage For Act

*tldr; see the command in the end of this to reset the choice.*

When running any act script for the first time we get following info (text code block) with a choice of image to select from and you should only select the **`medium`** image (default) one.

***What's wrong with the choice?***

**If you choose the `micro size image` it gives error on running the shell scripts (`.sh` files). (tested). In case you have actually selected the `micro size image` then you would need to reset the image choice of act.**

**To reset the github actions image choice we can remove this file (tested on macos):**

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
