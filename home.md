[Links](./links)

***

<section class="pomodoro-tasks" aria-labelledby="pomodoro-tasks-title">
  <div id="pomodoro-tasks-title"><strong>Tasks</strong></div>
  <div id="pomodoro-task-list" aria-live="polite"></div>

  <hr style="height: 0.1rem">

  <form id="add-pomodoro-task-form">
    <input id="new-pomodoro-task-name" type="text" placeholder="Task name" aria-label="Task name" required>
    <button type="submit">Add task</button>
  </form>

  <div class="pomodoro-duration" aria-label="Pomodoro duration">
    <label>Duration: <input id="pomodoro-minutes" type="number" min="0" value="25" aria-label="Minutes"> min</label>
    <label><input id="pomodoro-seconds" type="number" min="0" max="59" value="0" aria-label="Seconds"> sec</label>
  </div>

</section>

<section class="page-load-tracker" aria-labelledby="page-load-tracker-title">
  <hr>
  <div style="font-weight: bold;" id="page-load-tracker-title">Launcher Page Refresh Behavior (Testing)</div>

  <div id="page-load-notification" class="page-load-notification" role="status" aria-live="polite">
    Page loaded! (<strong id="page-load-countdown">10</strong> seconds)
  </div>

  <p class="page-load-count">
    Refreshes: <strong id="page-load-count-value">0</strong>
  </p>

  <button id="clear-page-load-data" type="button">Clear load count and history</button>

  <div style="margin-top: 2rem; font-weight: bold; text-decoration: underline;">Page load history</div>
  <p id="page-load-history-empty" hidden>No page loads recorded yet.</p>
  <ol id="page-load-history" class="page-load-history" aria-live="polite"></ol>
</section>

<style>
  .page-load-tracker {
    max-width: 42rem;
    color: #8c959f;
  }

  .page-load-notification {
    display: inline-block;
    margin: 1rem 0;
    padding: 0.8rem 1rem;
    border: 1px solid #1f883d;
    border-radius: 6px;
    background: #dafbe1;
    color: inherit;
  }

  .page-load-tracker button {
    color: inherit;
  }

  .page-load-history {
    padding-left: 1.5rem;
  }

  .page-load-history li {
    margin: 0.35rem 0;
  }
</style>

<script>
  (() => {
    const storageKeys = {
      count: 'home-page-load-count',
      history: 'home-page-load-history'
    };

    const countElement = document.getElementById('page-load-count-value');
    const historyElement = document.getElementById('page-load-history');
    const emptyHistoryElement = document.getElementById('page-load-history-empty');
    const clearButton = document.getElementById('clear-page-load-data');
    const notificationElement = document.getElementById('page-load-notification');
    const countdownElement = document.getElementById('page-load-countdown');

    const getStoredHistory = () => {
      try {
        const history = JSON.parse(localStorage.getItem(storageKeys.history) || '[]');
        return Array.isArray(history) ? history : [];
      } catch {
        return [];
      }
    };

    const formatLoadTime = (timestamp) => {
      const loadDate = new Date(timestamp);
      const date = loadDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short'
      });
      const time = loadDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      return `${date}, ${time}`;
    };

    const renderHistory = (history) => {
      historyElement.replaceChildren();
      emptyHistoryElement.hidden = history.length > 0;

      history.forEach((timestamp) => {
        const item = document.createElement('li');
        item.textContent = formatLoadTime(timestamp);
        historyElement.appendChild(item);
      });
    };

    let loadCount = 0;
    let loadHistory = [];

    try {
      loadCount = Number.parseInt(localStorage.getItem(storageKeys.count) || '0', 10) || 0;
      loadHistory = getStoredHistory();

      loadCount += 1;
      loadHistory.unshift(new Date().toISOString());

      localStorage.setItem(storageKeys.count, String(loadCount));
      localStorage.setItem(storageKeys.history, JSON.stringify(loadHistory));
    } catch {
      // The page still works if localStorage is unavailable (for example, private browsing).
      loadCount = 1;
      loadHistory = [new Date().toISOString()];
    }

    countElement.textContent = loadCount;
    renderHistory(loadHistory);

    clearButton.addEventListener('click', () => {
      try {
        localStorage.removeItem(storageKeys.count);
        localStorage.removeItem(storageKeys.history);
      } catch {
        // Keep the in-memory view clear even when storage cannot be updated.
      }

      loadCount = 0;
      loadHistory = [];
      countElement.textContent = loadCount;
      renderHistory(loadHistory);
    });

    let secondsRemaining = 10;
    const countdownTimer = window.setInterval(() => {
      secondsRemaining -= 1;
      countdownElement.textContent = secondsRemaining;

      if (secondsRemaining === 0) {
        window.clearInterval(countdownTimer);
        notificationElement.hidden = true;
      }
    }, 1000);
  })();
</script>

<style>
  .pomodoro-tasks {
    margin-bottom: 2rem;
    color: #8c959f;
  }

  .pomodoro-tasks form,
  .pomodoro-duration,
  .pomodoro-task {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .pomodoro-tasks input[type="number"] {
    width: 3ch;
    field-sizing: content;
  }

  #pomodoro-task-list {
    margin-bottom: 1rem;
  }

  .pomodoro-task-name {
    min-width: 0;
    flex: 1;
  }

  .pomodoro-task.is-running {
    padding: 0.4rem;
    border-left: 3px solid #ff8fc5;
    border-radius: 4px;
    background: #ffe0ef;
  }

  .pomodoro-task-time {
    white-space: nowrap;
  }

  .pomodoro-tasks button {
    border: 1px solid #8c959f;
    border-radius: 4px;
    color: inherit;
  }
</style>

<script>
  (() => {
    const storageKey = 'home-pomodoro-tasks';
    const settingsKey = 'home-pomodoro-duration';
    const taskForm = document.getElementById('add-pomodoro-task-form');
    const taskNameInput = document.getElementById('new-pomodoro-task-name');
    const minutesInput = document.getElementById('pomodoro-minutes');
    const secondsInput = document.getElementById('pomodoro-seconds');
    const taskList = document.getElementById('pomodoro-task-list');

    const readStoredValue = (key, fallback) => {
      try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
      } catch {
        return fallback;
      }
    };

    let tasks = readStoredValue(storageKey, []);
    if (!Array.isArray(tasks)) tasks = [];

    const savedDuration = readStoredValue(settingsKey, { minutes: 25, seconds: 0 });
    minutesInput.value = Math.max(0, Number(savedDuration.minutes) || 0);
    secondsInput.value = Math.min(59, Math.max(0, Number(savedDuration.seconds) || 0));

    const save = () => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(tasks));
        localStorage.setItem(settingsKey, JSON.stringify({
          minutes: Number(minutesInput.value) || 0,
          seconds: Number(secondsInput.value) || 0
        }));
      } catch {
        // The current session remains usable if localStorage is unavailable.
      }
    };

    const getDurationInSeconds = () => {
      const minutes = Math.max(0, Number.parseInt(minutesInput.value, 10) || 0);
      const seconds = Math.min(59, Math.max(0, Number.parseInt(secondsInput.value, 10) || 0));
      minutesInput.value = minutes;
      secondsInput.value = seconds;
      return (minutes * 60) + seconds;
    };

    const formatTime = (totalSeconds) => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const getRemainingSeconds = (task) => {
      if (!task.running || !task.endsAt) return task.remainingSeconds || 0;
      return Math.max(0, Math.ceil((task.endsAt - Date.now()) / 1000));
    };

    const completeFinishedTasks = () => {
      let changed = false;
      tasks.forEach((task) => {
        if (task.running && getRemainingSeconds(task) === 0) {
          task.running = false;
          task.endsAt = null;
          task.durationSeconds = task.durationSeconds || getDurationInSeconds();
          task.remainingSeconds = task.durationSeconds;
          task.pomodoros = (task.pomodoros || 0) + 1;
          changed = true;
        }
      });
      return changed;
    };

    const render = () => {
      taskList.replaceChildren();

      [...tasks].sort((firstTask, secondTask) => Number(secondTask.running) - Number(firstTask.running)).forEach((task) => {
        const row = document.createElement('div');
        row.className = `pomodoro-task${task.running ? ' is-running' : ''}`;

        const name = document.createElement('input');
        name.className = 'pomodoro-task-name';
        name.value = task.name;
        name.setAttribute('aria-label', 'Rename task');
        name.addEventListener('input', () => {
          const newName = name.value.trim();
          if (newName) task.name = newName;
          else name.value = task.name;
          save();
        });

        const timer = document.createElement('span');
        timer.className = 'pomodoro-task-time';
        const remainingSeconds = getRemainingSeconds(task);

        if (task.running) {
          timer.textContent = formatTime(remainingSeconds);
        } else {
          const minutes = document.createElement('input');
          minutes.type = 'number';
          minutes.min = '0';
          minutes.value = Math.floor(remainingSeconds / 60);
          minutes.setAttribute('aria-label', `${task.name} minutes`);

          const seconds = document.createElement('input');
          seconds.type = 'number';
          seconds.min = '0';
          seconds.max = '59';
          seconds.value = remainingSeconds % 60;
          seconds.setAttribute('aria-label', `${task.name} seconds`);

          const updateTaskDuration = () => {
            const duration = (Math.max(0, Number.parseInt(minutes.value, 10) || 0) * 60)
              + Math.min(59, Math.max(0, Number.parseInt(seconds.value, 10) || 0));
            task.durationSeconds = duration;
            task.remainingSeconds = duration;
            save();
            render();
          };

          minutes.addEventListener('change', updateTaskDuration);
          seconds.addEventListener('change', updateTaskDuration);
          timer.append(minutes, document.createTextNode(':'), seconds);
        }

        const count = document.createElement('span');
        count.textContent = `P. ${task.pomodoros || 0}`;

        const control = document.createElement('button');
        control.type = 'button';
        control.textContent = task.running ? 'Stop' : 'Start';
        control.addEventListener('click', () => {
          if (task.running) {
            task.remainingSeconds = getRemainingSeconds(task);
            task.running = false;
            task.endsAt = null;
          } else {
            const duration = task.remainingSeconds || getDurationInSeconds();
            if (duration === 0) return;
            task.remainingSeconds = duration;
            task.running = true;
            task.endsAt = Date.now() + (duration * 1000);
          }
          save();
          render();
        });

        const resetButton = document.createElement('button');
        resetButton.type = 'button';
        resetButton.textContent = '↻';
        resetButton.setAttribute('aria-label', `Reset ${task.name} timer`);
        resetButton.addEventListener('click', () => {
          task.running = false;
          task.endsAt = null;
          task.durationSeconds = task.durationSeconds || getDurationInSeconds();
          task.remainingSeconds = task.durationSeconds;
          save();
          render();
        });

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'x';
        deleteButton.setAttribute('aria-label', `Delete ${task.name}`);
        deleteButton.addEventListener('click', () => {
          tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
          save();
          render();
        });

        row.append(name, timer, count, control, resetButton, deleteButton);
        taskList.appendChild(row);
      });
    };

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = taskNameInput.value.trim();
      const duration = getDurationInSeconds();
      if (!name || duration === 0) return;

      tasks.push({
        id: `${Date.now()}-${Math.random()}`,
        name,
        pomodoros: 0,
        durationSeconds: duration,
        remainingSeconds: duration,
        running: false,
        endsAt: null
      });
      taskNameInput.value = '';
      minutesInput.value = 25;
      secondsInput.value = 0;
      save();
      render();
    });

    [minutesInput, secondsInput].forEach((input) => {
      input.addEventListener('change', () => {
        getDurationInSeconds();
        save();
      });
    });

    completeFinishedTasks();
    save();
    render();

    window.setInterval(() => {
      const changed = completeFinishedTasks();
      if (changed) save();
      if (tasks.some((task) => task.running) || changed) render();
    }, 1000);
  })();
</script>
