// @ts-nocheck
const $ = document.querySelector.bind(document); const $$ = document.querySelectorAll.bind(document);

export async function renderSlideShow(selector, slides) {
    const slideshowContainer = $(selector);
    // Learn: Below class is used to assign styles via `styles.css` file.
    slideshowContainer.className = 'slideshow-container';

    const slidesContainer = document.createElement("div");
    slidesContainer.className = 'slides-container';
    slideshowContainer.prepend(slidesContainer);

    let paused = false;
    let statusOfPauseBtn = false; // initial status of pause button
    let finishPlaybacOfAlreadyPlayingVideoFn = null;
    let finishPlaybacOfAlreadyPlayingAudioFn = null;
    let resolveSleepFn = null;
    let playAudioOfMutedVideoFn = null;
    let userInteracted = null;

    showNeedsUserGestureToEnableAudio();

    // await sleep(3_000); // For debugging only..

    // Preload images
    for (const i in slides) { if (slides[i].image) { slides[i].image = await preloadImage(slides[i].image); } }
    // Learn: Use below statement to parallely load images
    // const loadedImgs = await Promise.all(slides.map(s => s.image).map(preloadImage)); for (const i in slides) { slides[i].image = loadedImgs[i]; }
    // console.log("🚀 ~ loadedImgs:", loadedImgs);
    console.log("All images loaded ✅", slides.map(s => s.image));
    let current = 0;
    const defaultDelay = 4000;

    // Create control buttons
    const controls = document.createElement("div");
    controls.className = 'slideshow-controls-container';
    controls.innerHTML = `
            <div></div>
            <div style="display: flex;">
                <button id="restartBtn">⏮️</button>
                <button id="prevBtn">⬅️</button>
                <button id="pauseBtn">⏸️</button>
                <button id="nextBtn">➡️</button>
                <div class="goToFullscreenContainer"><button id="goToFullscreen">⛶</button></div>
            </div>
            <div><span id="slideCounter">1</span>/<span id="slideCounterTotal">1</span></div>`;
    slideshowContainer.prepend(controls);
    // This can only be done after fullscreen element has been aded to dom.
    addGoToFullscreenButton();
    // This can only be done after slideCounterTotal element has been aded to dom.
    $(`${selector} #slideCounterTotal`).innerHTML = slides.length;

    const updatePauseBtn = () => {
        statusOfPauseBtn = paused;
        $(`${selector} #pauseBtn`).textContent = paused ? "▶️" : "⏸️";
    };
    let wasPausedBeforeControlsBtnClick = null;
    async function setSlide(_current) {
        wasPausedBeforeControlsBtnClick = paused;
        paused = true;
        // Stop awaiting of already playing audio or video
        finishPlaybacOfAlreadyPlayingVideoFn?.();
        finishPlaybacOfAlreadyPlayingAudioFn?.();
        resolveSleepFn?.(); // To resolve any currently running `await sleep(..)` immediately.
        await waitSync(() => isWhileLoopInPausedBlock);
        console.log("🚀 ~ setSlide - current=_current:", _current);
        current = _current;
        paused = false;     // start the while loop again
    }
    // Learn: When current video is finished and we're paused: we do not change the index.
    const getNextSlideIndex = () => (current + (isWhileLoopInPausedBlock ? 0 : 1)) % slides.length;

    // Learn: When current video is finished and we're paused: we decrement slideIndex by 2 to back to last to last slide becaue the `current` has changed to `nextSlideIndex` already.
    const getPreviousSlideIndex = () => (current - (isWhileLoopInPausedBlock ? 2 : 1) + slides.length) % slides.length;

    // Event handlers
    $(`${selector} #restartBtn`).addEventListener('click', () => { setSlide(0); });
    $(`${selector} #prevBtn`).addEventListener("click", () => { setSlide(getPreviousSlideIndex()); });
    $(`${selector} #nextBtn`).addEventListener("click", () => { setSlide(getNextSlideIndex()); });
    $(`${selector} #pauseBtn`).addEventListener("click", async () => {
        console.log('paused-before?', paused);
        paused = !paused;
        console.log('paused-after?', paused);
        updatePauseBtn();
    });


    // Function to display slide
    async function showSlide() {
        $(`${selector} #slideCounter`).innerHTML = current + 1;
        console.log("🚀 ~ showSlide - current:", current);
        slidesContainer.innerHTML = "";   // remove previous image
        const slide = slides[current];
        if (slide.image) {
            slidesContainer.appendChild(slide.image);
            if (slide.audio) {
                const audio = document.createElement('audio');
                audio.src = slide.audio;
                audio.controls = true; // show/hide controls
                slidesContainer.appendChild(audio);
                console.log('play-audio-before');
                const result = await playAudio(audio);
                console.log('play-audio-after ❤️');
                // This is to keep image showing when there was no user-interaction leading to error in playing audio.
                if (result?.error) { await sleep(defaultDelay); }
            } else {
                await sleep(slide.duration || defaultDelay);
                console.log('❤️image sleep finished now!!');
            }
        } else if (slide.video) {
            const video = document.createElement("video");
            video.src = slide.video;
            // Note: If user has not interacted the video does NOT play at all when `muted: false` so we must play video without audio when user has not yet interacted.
            Object.assign(video, { autoplay: true, muted: userInteracted ? false : true, controls: true });
            slidesContainer.appendChild(video);
            await playVideo(video); // wait until video finishes
        }
    }
    // Loop through slides
    while (true) {
        var isWhileLoopInPausedBlock = paused;
        if (!paused) {
            if (wasPausedBeforeControlsBtnClick) {
                console.log("✅✅✅ ~ wasPausedBeforeControlsBtnClick:", wasPausedBeforeControlsBtnClick);
                wasPausedBeforeControlsBtnClick = false;
                paused = true;
                updatePauseBtn();
            }
            console.log('playing-slide');
            await showSlide();
            console.log('playing-slide- ✅');
            current = (current + 1) % slides.length; // Learn: The modulo operator (%) wraps the index back to 0 when it reaches the end.
        } else {
            console.log('🔴while-loop-blocked');
            await sleep(200); // small delay while paused
        }
    }

    // Utility Functions.
    //      Learn: These are IMPURE FUNCTIONS. Please put any pure function outside of the `renderSlideshow` function.
    function sleep(durationMs) {
        return new Promise((res) => {
            resolveSleepFn = res;
            setTimeout(res, durationMs);
        });
    };

    // We need this so we return only when video has finished playing.
    function playVideo(video) {
        return new Promise((resolve, reject) => {
            finishPlaybacOfAlreadyPlayingVideoFn = resolve;
            playAudioOfMutedVideoFn = () => { video.muted = false; };
            video.addEventListener("ended", (evt) => resolve());
            video.addEventListener("error", (evt) => { console.log('❌ video-error-1?'); });
            video.play().catch((error) => { console.log('❌ video-error-2', error); resolve({ error: true }); });
        });
    }

    function playAudio(audio) {
        return new Promise((resolve, reject) => {
            finishPlaybacOfAlreadyPlayingAudioFn = resolve;
            audio.addEventListener("ended", (evt) => resolve(), { once: true });
            audio.addEventListener("error", (evt) => { console.log('❌ audio-error-1?', audio.error); resolve({ error: true }); }, { once: true });
            audio.play().catch((error) => { console.log('❌ audio-error-2', error); resolve({ error: true }); });
        });
    }

    function addGoToFullscreenButton() {
        $(`${selector} #goToFullscreen`).addEventListener("click", async () => {
            const el = slideshowContainer;
            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else if (el.webkitRequestFullscreen) { // Safari
                el.webkitRequestFullscreen();
            } else if (el.msRequestFullscreen) { // Old IE
                el.msRequestFullscreen();
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

    async function showNeedsUserGestureToEnableAudio() {
        const html = `<div id="enableAudio" style="text-align: center; color: deeppink;">This slideshow has audio, please click anywhere to enable audio.</div>`;
        // We are not setting `userInteracted=false` for its initial value because it is possible that user might have interacted in previous page for e.g, use is on /sldeshows and then opened the link of /slideshows/cities .
        userInteracted = await hasUserInteracted();
        if (!userInteracted) {
            document.body.insertAdjacentHTML("afterbegin", html);
        }
        // We detect any click anywhere on page to enable audio
        document.addEventListener('click', function initInteraction() {
            if (!userInteracted) {
                userInteracted = true;
                $(`${selector} #enableAudio`).style.visibility = 'hidden';
                playAudioOfMutedVideoFn?.();
            }
            document.removeEventListener('click', initInteraction);
        });
    }
}

// Below functions are Pure functions

function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img); // Learn: `Image` is returned
        img.onerror = reject;
    });
}

// https://claude.ai/chat/0e74c97b-b7dc-4251-a0ef-9efa65382b46
async function hasUserInteracted() {
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

async function waitSync(checkFunction, interval = 50, timeout = 5_000) {
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
