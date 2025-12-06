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