#!/usr/bin/env bash

# name: heman, username: heman20_bot
# TELEGRAM_ACCESS_TOKEN="5225204796:AAHMkjKusf39iYD5TSToAtspifRQsl0p_4M"

# DEBUGGING LOCALLY via `act` - using ./github/watchCronJob-act.sh script. YO!

# echo ID_RATAN - $ID_RATAN
# echo ID_SAHIL - $ID_SAHIL
# echo TOKEN - $TOKEN
while [[ -z $text ]] ; do
	text=$(shuf ./thoughts-principles.md -n1 | grep '.')
done

echo  text is: $text

echo Sending $text to ratan @ $(date) >> /tmp/ratan-log.txt

set -x
curl -X POST \
	-H "Content-Type: application/json" \
	-d @<(cat <<EOF 
{ "chat_id": "$ID_RATAN", "text": "$text", "parse_mode": "HTML" }
EOF) \
	"https://api.telegram.org/bot$TOKEN/sendMessage"


curl -X POST \
	-H "Content-Type: application/json" \
	-d @<(cat <<EOF 
{ "chat_id": "$ID_SAHIL", "text": "$text", "parse_mode": "HTML" }
EOF) \
	"https://api.telegram.org/bot$TOKEN/sendMessage"

# check event logs of bot:
# https://api.telegram.org/bot5190047021:AAGHNIyf1VF68TAF1JiM0hofW3YmLrGjTnE/getUpdates
# https://github.com/nats-io/nats.js

# FYI: This file has to be marked as executable by `chmod +x` else github actions won't be able to run it.
