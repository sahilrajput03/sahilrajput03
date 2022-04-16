#!/bin/bash
# NOTE: RUN THIS FILE FROM ROOT OF THE REPO ONLY(REQUIRED FOR `act` to work properly!).
nodemon -x 'act schedule -j=telegram-bot-breathing-ex --insecure-secrets --secret-file=.secrets-for-act' -w .github/workflows/main.yml -w .github/cron-job.sh
# FYI: -j is alias for --job, it specifies the job to run.
