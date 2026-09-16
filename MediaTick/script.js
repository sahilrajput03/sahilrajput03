let seconds = 0, timer, endTime;
let silentAudio = document.getElementById("silentAudio");
let alarmAudio = document.getElementById("alarmAudio");

function updateDisplay() {
    let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${mins}:${secs}`;
}

function startCustomTimer() {
    let inputTime = document.getElementById("customTime").value;
    if (!inputTime || inputTime <= 0) {
        alert("Enter a valid time!");
        return;
    }
    startTimer(parseInt(inputTime));
}

function startTimer(time) {
    seconds = time;
    updateDisplay();
    endTime = Date.now() + seconds * 1000;

    // Play silent audio to keep the media bar active.
    silentAudio.play();

    // Preload alarm audio (starts as silent).
    alarmAudio.play();

    if (!timer) {
        timer = setInterval(() => {
            seconds = Math.max(0, Math.round((endTime - Date.now()) / 1000));
            updateDisplay();
            if (seconds <= 0) {
                clearInterval(timer);
                timer = null;
                triggerAlarm();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
    silentAudio.pause();
    alarmAudio.pause();
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    updateDisplay();
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
}

function triggerAlarm() {
    // Swap the silent source with the actual alarm sound.
    alarmAudio.src = "https://filesamples.com/samples/audio/mp3/sample1.mp3";
    alarmAudio.load();
    alarmAudio.play();
}
