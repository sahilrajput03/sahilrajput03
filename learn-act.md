## Learn act

Make a script file in root of your repository i.e., `act.sh`

***Fyi: It is necessary to run to run act.sh file from the root of the repository.***

```bash
nodemon -x 'act push --insecure-secrets' -w .github/workflows/main.yml
nodemon -x 'act schedule --insecure-secrets --secret-file=.secrets-for-act' -w .github/workflows/main.yml -w .github/cron-job.sh

# --insecure-secrets will not hide the secret values in logs
# --secret-file has a default value of `.secrets`
# Source: `act -h`
```

Repos where I use `act.sh` files: [sahilrajput03/sahilrajput03](https://github.com/sahilrajput03/sahilrajput03/tree/master/.github)
