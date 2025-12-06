// @ts-nocheck
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
    // Using HTML string directly
    document.body.insertAdjacentHTML("afterbegin", `<div class="goToFullscreenContainer"><button id="goToFullscreen">Go Fullscreen</button></div>`);

    document.getElementById("goToFullscreen").addEventListener("click", async () => {
        const elem = document.getElementById("slideshow");
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