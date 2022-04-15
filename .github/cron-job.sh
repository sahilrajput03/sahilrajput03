#!/usr/bin/env bash

# DEBUGGING LOCALLY via `act` - using ./github/watchCronJob-act.sh script. YO!
# echo ID_RATAN - $ID_RATAN
# echo ID_SAHIL - $ID_SAHIL
# echo TOKEN - $TOKEN

while [[ -z $text ]] ; do
	text=$(shuf "$(dirname $0)/../thoughts-principles.md" -n1 | grep '.')
done

echo  text is: $text

# TODO: Add to secrets
ID_DHANUR=1765712882

receipients="$ID_RATAN $ID_SAHIL $ID_DHANUR"

# Debugging
set -x

for person in ${receipients[@]}; do
	curl -X POST \
		-H "Content-Type: application/json" \
		-d @<(cat <<EOF 
	{ "chat_id": "$person", "text": "$text", "parse_mode": "HTML" }
EOF) \
		"https://api.telegram.org/bot$TOKEN/sendMessage"
done

# CHECK EVENT LOGS OF BOT:
# https://api.telegram.org/bot<BOT_TOKEN>/getUpdates

# MAKING LOGS FOR ACTIVITY:
# echo Sending $text to ratan @ $(date) >> /tmp/ratan-log.txt

# IMPORTANT:
# This file has to be marked as executable by `chmod +x` else github actions won't be able to run it.
