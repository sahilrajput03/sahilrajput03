#!/data/data/com.termux/files/usr/bin/bash
# Source: https://claude.ai/chat/57b2b95a-a1ff-4fe6-9078-c7a0bfb12c84
#     Q. In script does the while loop keeps running every 0.3 seconds?
#     Ans. No. The loop spends nearly all its time blocked inside inotifywait.

FILE=/storage/emulated/0/Documents/my-launcher/pomodoro-alarms.json
# Sound text suggestions: https://chatgpt.com/c/6aca182b-aa7c-83ec-8401-b11246c075cc
MP3="$HOME/alarm.wav"
PID=""

stop() { [ -n "$PID" ] && { pkill -P "$PID" 2>/dev/null; kill "$PID" 2>/dev/null; }; PID=""; }
trap 'stop; exit' INT TERM EXIT

while true; do
  # earliest alarm as epoch seconds (empty if none)
  next=$(jq -r '[.alarms[]?.targetAlarmTime | sub("\\.[0-9]+";"") | fromdateiso8601] | min // empty' "$FILE" 2>/dev/null) || { sleep 0.3; continue; }

  now=$(date +%s)
  wait_s=0   # 0 = wait for file change indefinitely

  if [ -n "$next" ] && [ "$next" -le "$now" ]; then
    # an alarm is due: play (once), loop until the file changes
    if [ -z "$PID" ] || ! kill -0 "$PID" 2>/dev/null; then
      ( while true; do mpv --no-video --really-quiet "$MP3"; sleep 3; done ) &
      PID=$!
    fi
  else
    stop                                   # nothing due, so silence
    [ -n "$next" ] && wait_s=$((next - now))  # wake up when the next one is due
  fi

  inotifywait -qq -t "$wait_s" -e close_write "$FILE"
  sleep 0.3   # debounce duplicate events
done
