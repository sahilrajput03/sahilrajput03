#!/bin/bash
# NOTE: RUN THIS FILE FROM ROOT OF THE REPO ONLY(REQUIRED FOR `act` to work properly!).
nodemon -x 'act schedule --insecure-secrets --secret-file=.secrets-for-act' -w .github/workflows/main.yml -w .github/cron-job.sh
