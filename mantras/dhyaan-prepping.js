// @ts-nocheck

const deepBreathe = "❤️ Take 3 slow deep breaths. Inhale... Exhale...";

// ❤️ ❤️ ❤️ ChatGPT Used for Affirm (11 June, 2026): https://chatgpt.com/c/6a29a8c9-a44c-83e9-9b99-b175710e9699
const affirms = [
    "Aside from Dhyaan/Tantra techniques, there are some essential preparation activities which act as catalyst to the process, which are:",

    "Dhyaan sirf saans lene pe.",
    "❤️Use “a-flute/1. buddha’s flute” to do dhyaan when you feel hard to do dhyaan.",
    "Dhyaan ki charam avastha hai khud se purn roop se jud jana. Bhakti ki charam avastha hai parmatma mei leen ho jana. ❤️",
    "Parmatma (Sampraday) chaiye insaano ko insaano se jodne ke liye, indaaniyat zinda rahe iske liye.",
    "Ladkiaan aur kaamvasna bas urja aur samay ki barbaadi hai.",
    "Feel and use the lower backside brain (ear to ear back side section of the skull) to do dhyaan and calm down.",
    "Saanson ke peeche jo hai uspe dhyaan do. Saanson ke piche jo hai wahan se urja aati hai. Dhairya aur aur aaraam se ussey jano, ek naye aayam mei utaroge.",
    "Dhyaan saans ki dhara pe.",
    "Hosh nahin bhoolna hai.",
    "Sabse badi galti - Behoshi.",
    "Khana nahi bhoolna hai.",
    "Hosh nahi khona hai. Behosh nahi hona hai.",


    "Siddhanasa and padmasana are necessary (संजीवनी बूटी).",
    "Saans ki pratiksha karo, dhairya rakho, dheeraj rakho.",
    "Man chanchal hai, don't focus on negatives, it will go away naturally.",
    "Chin mudra and Gyan mudra are to counter the bodily flow of prana i.e., if urja (prana, life energy) is moving upwards you can use Gyaan mudra (palm down) to keep it countered and if urja is moving downward then you can switch to chin mudra (palm up) to move it upwards as per need.",
    "Sharirik sthirta, maansik sthirta laati hai. ~ Asana Pranayam Mudra",


    "Ek nirnaya lene ke liye ek saans hi kaafi hai. Dhaan se saans lekr uss ek saans tak poncho.",
    "Saans hi kaafi hai dhyan badhaane ke liye. Padmasana ya Siddhasana mei baitho aur dhyaan ekatrit karo, kendrit hoyo, aasaan aur boht romanchak hai.",
    "Padmasana activates spinal cord energies and Siddhassna transfers spinal cord energies to brain. ❤️",
    "Sit in padmasana and do a dhyaan session (vbt-1) if you feel energyless or tired. ❤️ ",

    "Listen to Rajneesh anytime.",
    "Do padmasana as it literally concentrates the energies in your spine making you more DRIVEN and POWERFUL.",
    "Take baths (<3/day) if you don't feel like doing dhyaan or feeling uneasy to sit or mind wandering.",

    "Use '__Osho Meditation Music' for meditation daily to start your day.",
    "Put earphones/earplugs in your ears and put your palms on your eyes to relax your ears and eyes instincts.",
    "a) Put the phone to airplane mode to make your session undisturbable.",
    "b) Bath in morning (twice or multiple times helps to calibrate more).",
    "c) 3 times food in a day. Do not ignore 3 times eating in the day as this is the number one mistake I used to do repeatedonly.",
    "i) 2 rotis (or more as per need) twice and 1 roti in the last meal, before sleep.",
    //
    "d) Items checklist:",
    "i) Warm (in winters) water bottle + 1 Glass.",
    "ii) Spittoon, if you feel the need.",
    "iii) Keep 1 bottle of oil for head massage if needed (Sarson, Coconut, etc). Keep one pocket bottle in your bag as it helps when you are away from home.",
    // 
    "e) EVENING:",
    "i) Eat dinner at 7 pm sharp.",
    "ii) Exercise (Unleash routine), 3-5 days a week.",
    "iii) Sleep clothless at night if clothes feel somewhat uncomfortable especially when clothless feels more comfortable.",
    "iv) Try to read textual content from paper, print it if you have it in digital form.",
    "v) If you need help in nasal decongestion then take steam 🧖‍♂️🧖‍♀️.",
    "vi) If digestion aid is needed, drink Ajawain-Jeera-Saunf-Adrak Chai for digestion, or ajwain+salt+shakkar+1 spoon water syrup and chew well for most effectiveness.",
    // 
    "f) Stay away from any person if you feel negativity from them (no matter what your relationship is with them) - जहां दिखे भागो / पीठ करके बैठो .",
    // 
    "g) 3 Times dhyaan in a day (any below practise) (set timer for this and do at least 15 mins or more each time) and do in —",
    "i) Siddhasana + Padmasana as per need of the body,",
    "ii) Mudra (Gyaan or Chin Mudra)",
    "iii) Use empty earphones. Very helpful at all times in the day as well, not just during dyaan/tantra.",
    "iv) Breathing from mouth is totally fine *if* nasal breathing is blocking your breath flow or concentration.",
    // 
    ".",
    deepBreathe,
    "Take care, bye 👋!",
];

async function main() {
    // Updte title
    document.title = 'Dhyaan Prepping';

    // Update edit link
    document.querySelector('#edit-link').href = "https://github.com/sahilrajput03/sahilrajput03/edit/main/mantras/dhyaan-prepping.js";


    renderSlidshow();
    function renderSlidshow() {
        const slides = document.querySelector('.slides');

        slides.innerHTML += affirms
            .map(text => `<section>${text}</section>`)
            .join('');

        // More info about initialization & config:
        // - https://revealjs.com/initialization/
        // - https://revealjs.com/config/
        Reveal.initialize({
            hash: true,
            // loop: true, // ! This is to loop the presentation.
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
