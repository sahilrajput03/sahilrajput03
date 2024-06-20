#!/bin/bash
# Note: It is necessary to run to run act.sh file from the root of the repository otherwise act won't work.
nodemon \
    -x 'act schedule -j=sendBreathingExercisejob --insecure-secrets --secret-file=.secrets-for-act' \
    -w .github/workflows/breathingEx.yaml \
    -w .github/breathingEx-job.sh

# FYI: -j is alias for --job, it specifies the job to run.
# FYI: Job name is NOT yaml filename or the `.name` in yaml file, but its `.jobs.anyJobNameInAnyYamlFile`
