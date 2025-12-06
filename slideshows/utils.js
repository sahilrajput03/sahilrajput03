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

export const sleep = (durationMs) => new Promise((res) => {
    window.resolveSleep = res;
    setTimeout(res, durationMs);
});

// We need this so we return only when video has finished playing.
export function playVideo(video) {
    return new Promise((resolve, reject) => {
        window.finishPlaybacOfAlreadyPlayingVideo = resolve;
        window.playAudioOfMutedVideo = () => { video.muted = false; };
        video.addEventListener("ended", (evt) => resolve());
        video.addEventListener("error", (evt) => { console.log('❌ video-error-1?'); });
        video.play().catch((error) => { console.log('❌ video-error-2', error); resolve({ error: true }); });
    });
}

export function playAudio(audio) {
    return new Promise((resolve, reject) => {
        window.finishPlaybacOfAlreadyPlayingAudio = resolve;
        audio.addEventListener("ended", (evt) => resolve(), { once: true });
        audio.addEventListener("error", (evt) => { console.log('❌ audio-error-1?', audio.error); resolve({ error: true }); }, { once: true });
        audio.play().catch((error) => { console.log('❌ audio-error-2', error); resolve({ error: true }); });
    });
}


export function addGoToFullscreenButton() {
    const html = `<div class="goToFullscreenContainer"><button id="goToFullscreen">⛶</button></div>`;
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

export function showNeedsUserGestureToEnableAudio() {
    const html = `<div id="enableAudio" style="margin-bottom: 10px; color: deeppink;">This slideshow has audio, please click anywhere to enable audio.</div>`;
    document.body.insertAdjacentHTML("afterbegin", html);

    // Check if user has interacted
    window.userInteracted = false;
    // We detect any click anywhere on page to enable audio
    document.addEventListener('click', function initInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            $('#enableAudio').style.visibility = 'hidden';
            window.playAudioOfMutedVideo?.();
        }
        document.removeEventListener('click', initInteraction);
    });
}
