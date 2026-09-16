[Links](./links)

***

<section class="page-load-tracker" aria-labelledby="page-load-tracker-title">
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
  }

  .page-load-notification {
    display: inline-block;
    margin: 1rem 0;
    padding: 0.8rem 1rem;
    border: 1px solid #1f883d;
    border-radius: 6px;
    background: #dafbe1;
    color: #116329;
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
