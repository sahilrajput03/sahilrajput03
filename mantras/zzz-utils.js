// @ts-nocheck

const targetRepetitionCount = 2;
let repetitionCount = 0;

Reveal.on('slidechanged', event => {
    const isLastSlide = event.indexh === Reveal.getTotalSlides() - 1;
    const currentSlide = Reveal.getState().indexh;

    if (isLastSlide && currentSlide != 0) {
        // slideshow ended
        repetitionCount++;
        if (repetitionCount < targetRepetitionCount) {
            alert(`${repetitionCount}/${targetRepetitionCount} ✅`);
        } else {
            alert(`Total Repetitions Completed: ${repetitionCount}/${targetRepetitionCount}\n\nHAVE A NICE DAY AHEAD! 🙋🏼‍♂️`);
            slidesEl.innerHTML = [slides[slides.length - 1]]
                .map(text => `<section>${text}</section>`)
                .join('');

            // We go to slide index to 0 in revealjs and thus updting slide index to the url as well otherwise it creates issue.
            Reveal.slide(0);
        }
    }
});

