// @ts-nocheck

const getQuotes = isFemale => [
    "Ahankaar: Huin kon main?",
    "I do not attach to people.",
    "I only talk for 9 mins at maximum to him.",
    "I am not his, he is not mine.",
    "I am not responsible for him, he is not responsible for me.",
    "He is not my responsibility, I am not his responsibility.",
    "What he thinks and does is not in my hand; and what I think and do is not in his hand.",
    "मेरा उससे लेना-देना क्या है, उसका मुझसे लेना-देना क्या है?",
    "तुम मेरे लिए कुछ नहीं हो, मैं तुम्हारे लिए कुछ नहीं हूँ।",
    "I am not his type, he is not my type.",
    "Bas yrr, chor ab.",
    "Kitni urja dega ussey, thori apne paas bhi rakh apne liye.",
    "Chala gya toh chala gya!",
    "Baad mei! Baad mei dekhte hain.",
    "Choro yrr, jaane do.",
    "Tum apne raaste, hum apne raste.",
    "He is GONE FOR GOOD. 🙂",
].map(q => isFemale ? q
    .replace(/\bHe\b/g, 'She')
    .replace(/\bhe\b/g, 'she') // replace direct works and not the substrings inside words (ChatGPT: https://chatgpt.com/c/6a45622e-37f8-83ee-8526-8eb42948df33)
    .replace(/him/g, 'her')
    .replace(/his/g, 'her')
    .replace(/Chala/g, 'Chali')
    .replace(/chala/g, 'chali')
    .replace(/gya/g, 'gyi')
    : q);
console.log(getQuotes(true)); // for female (Use false for male affirms)

async function main() {
    // Updte title
    document.title = 'Detachment Mantras';

    // Update edit link
    document.querySelector('#edit-link').href = "https://github.com/sahilrajput03/sahilrajput03/edit/main/mantras/detachment.js";

    // @ts-ignore
    const result = await Swal.fire({
        title: 'The other person is...',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Female',
        denyButtonText: 'Male',
        allowOutsideClick: false,
        // Learn: Disable focus the confirm button (Female in your case) because by default SweetAlert2 automatically focuses the confirm button.
        // 		I tried using `focusConfirm: false` but that didn't work but trying `allowEnterKey: false` worked. ✅
        // 		Using: https://deepwiki.com/search/can-we-remove-the-default-high_ebf09395-80b4-4e83-80c2-1bcc19de881d?mode=fast
        // focusConfirm: false,
        allowEnterKey: false,
        didClose: () => {
            // Learn: I'm rendering after swal is fully closed
            // 		because otherwise reveal.js get the container's
            // 		width wrong (or some other issue) which results
            // 		in smaller font-size of the current slide.
            console.log('Swal is fully closed');
            // console.log('Result value:', result.value);
            renderSlidshow(result.value);
        }
    });

    function renderSlidshow(isFemale) {
        const slides = document.querySelector('.slides');

        let quotes = getQuotes(isFemale);

        slides.innerHTML += quotes
            .map(text => `<section>${text}</section>`)
            .join('');

        // More info about initialization & config:
        // - https://revealjs.com/initialization/
        // - https://revealjs.com/config/
        Reveal.initialize({
            hash: true,
            loop: true, // ! This is to loop the presentation.
            // transitionSpeed: 'fast', // ! This is to make the transition between slides faster.
            // Source: https://revealjs.com/transitions/
            transition: 'none', // ! This is to remove the transition between slides.
            // transition: 'fade',
            // transition: 'slide', // default
            // transition: 'convex',
            // transition: 'concave',
            // transition: 'zoom',


            // Note: Why use `scrollActivationWidth`? Because I'm seeing on
            // 		mobile that i do not see next and previous slide
            // 		controls and also I see a glitch that i'm able to
            // 		scroll the slides vertically, why?
            // Solution: DeepWiki: https://deepwiki.com/search/im-seeing-on-mobile-that-i-do_46daecbb-7e05-4598-b394-ed592862c621?mode=fast
            scrollActivationWidth: null, // or a very small number like 100  

            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
        });
    }

}
main();	