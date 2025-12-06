// @ts-nocheck
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document); // optional for multiple elements

export function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img); // Learn: `Image` is returned
        img.onerror = reject;
    });
}

export const sleep = async (durationMs) => await new Promise((res) => setTimeout(res, durationMs));

// We need this so we return only when video has finished playing.
export function playVideo(video) {
    return new Promise((resolve, reject) => {
        video.addEventListener("ended", resolve);
        video.addEventListener("error", reject);
        video.play().catch(reject);
    });
}

export function addGoToFullscreenButton() {
    const html = `<div class="goToFullscreenContainer"><button id="goToFullscreen">Go Fullscreen</button></div>`;
    // Insert html on top inside `body` element
    document.body.insertAdjacentHTML("afterbegin", html);

    $("#goToFullscreen").addEventListener("click", async () => {
        const elem = $("#slideshow");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // Old IE
            elem.msRequestFullscreen();
        }

        // Lock orientation to landscape
        if (screen.orientation && screen.orientation.lock) {
            try {
                await screen.orientation.lock("landscape");
            } catch (err) {
                console.warn("Orientation lock failed:", err);
            }
        }
    });
}

export function addEnableAudioButton() {
    const html = `<button id="enableAudio" style="margin-bottom: 10px;">Enable audio</button>`;
    document.body.insertAdjacentHTML("afterbegin", html);

    // Check if user has interacted
    let userInteracted = false;
    // We detect any click anywhere on page to enable audio
    document.addEventListener('click', function initInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            $('#enableAudio').textContent = 'Audio Enabled ✅';
            $('#enableAudio').disabled = true;
        }
        document.removeEventListener('click', initInteraction);
    });
}
