#!/bin/bash
# Note: It is necessary to run `act.sh` file from the root of the repository otherwise act won't work.
nodemon \
    -x 'act schedule --insecure-secrets --secret-file=.secrets-for-act' \
    -w .github/workflows/main.yml \
    -w .github/cron-job.sh
    