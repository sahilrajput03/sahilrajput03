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

export async function showNeedsUserGestureToEnableAudio() {
    const html = `<div id="enableAudio" style="text-align: center; color: deeppink;">This slideshow has audio, please click anywhere to enable audio.</div>`;

    // Check if user has interacted
    // We are not setting it `false` because it is possible that user might have interacted in previous page for e.g, use is on /sldeshows and then opened the link of /slideshows/cities .
    window.userInteracted = await hasUserInteracted();
    if (!userInteracted) {
        document.body.insertAdjacentHTML("afterbegin", html);
    }
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

// https://claude.ai/chat/0e74c97b-b7dc-4251-a0ef-9efa65382b46
export async function hasUserInteracted() {
    // Minimal silent audio file (WAV format, ~0.1 seconds of silence)
    const silentAudioBase64 = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';

    const audio = new Audio(silentAudioBase64);
    audio.volume = 0.01; // Nearly silent, just in case

    try {
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
        return true;
    } catch (error) {
        // NotAllowedError means user hasn't interacted yet
        if (error.name === 'NotAllowedError') {
            return false;
        }
        // Other errors might indicate different issues
        console.warn('Audio interaction check error:', error);
        return false;
    }
}

export async function waitSync(checkFunction, interval = 50, timeout = 5_000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        const checkInterval = setInterval(() => {
            // Check if the condition is met
            if (checkFunction()) {
                clearInterval(checkInterval); // Stop checking
                resolve(); // Resolve the promise
            }

            // Check for timeout
            if (Date.now() - startTime > timeout) {
                clearInterval(checkInterval); // Stop checking
                reject(new Error('Timeout waiting for condition to be met'));
            }
        }, interval);
    });
}