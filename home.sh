#!/data/data/com.termux/files/usr/bin/bash
# Source: https://claude.ai/chat/57b2b95a-a1ff-4fe6-9078-c7a0bfb12c84
FILE=/storage/emulated/0/Documents/my-launcher/pomodoro-alarms.json
MP3="$HOME/alarm.wav"
PID=""

stop() { [ -n "$PID" ] && kill "$PID" 2>/dev/null; PID=""; }
trap 'stop; exit' INT TERM EXIT

while true; do
  # earliest alarm as epoch seconds (empty if none)
  next=$(jq -r '[.alarms[]?.targetAlarmTime | sub("\\.[0-9]+";"") | fromdateiso8601] | min // empty' "$FILE" 2>/dev/null) || { sleep 0.3; continue; }

  now=$(date +%s)
  wait_s=0   # 0 = wait for file change indefinitely

  if [ -n "$next" ] && [ "$next" -le "$now" ]; then
    # an alarm is due: play (once), loop until the file changes
    if [ -z "$PID" ] || ! kill -0 "$PID" 2>/dev/null; then
      mpv --no-video --loop=inf "$MP3" >/dev/null 2>&1 &
      PID=$!
    fi
  else
    stop                                   # nothing due, so silence
    [ -n "$next" ] && wait_s=$((next - now))  # wake up when the next one is due
  fi

  inotifywait -qq -t "$wait_s" -e close_write "$FILE"
  sleep 0.3   # debounce duplicate events
done
