// @ts-nocheck

const deepBreathe = "❤️ Take 3 slow deep breaths. Inhale... Exhale...";

// ❤️ ❤️ ❤️ ChatGPT Used for Affirm (11 June, 2026): https://chatgpt.com/c/6a29a8c9-a44c-83e9-9b99-b175710e9699
const affirms = [

    "Stay away from sustained headaches by quitting smoking.",

    "Do not smoke because then your immune system will get too much excited at night leading to sleeping late that leads you to wake up late next morning with swollen sinuses and thus you COMPLETELY 🔴 FUCK UP A NEW DAY VERY BADLY.",
    "I am feeling so much rejuvenating juices of my body now that I have NOT smoked for past 2 days. ❤️ (1 Aug 2026).",
    "Smoke promises relaxation but in real it actually takes it away.",
    `"""Fuck life, Fuck everything, fuck health, fuck pain. <br/>
					Don't go anywhere, you just need rest, don't leave your house because if you do you will smoke, you MOTHER FUCKER. <br/>
					👉🏻 DO EXERCISE IF YOU FEEL LAZY. <br/>
					👉🏻 EAT FOOD IF YOU FEEL FUEL DEFICIENT.""`,

    "ACTIVE MODE ACTIVITIES:",

    "Smoking kills brain's focus ability, brain's enery and brain's neural networks (patterns of learning).",
    "Smoke karke baad mei punah bohot paschatap (paschaat mei tap, anutaap) hoga, jab sharirik aur maansik durbalta, kamjori aur bimaari ho chuki hogi. (Lec. 50 - ESD)",
    "Tu jaanta bhi nahi hai kitne saare dukhon ki jad hai smoking.",
    "The benefits of leaving smoking is really tremendously satisfying as you are much more relaxed than ever that you could feel while smoking continuously over days. And it feels that how the hell do you do get ever trapped in smoking as habit.",
    "It's killing a lot of energy and intelligence in your body that you can't imagine without leaving smoking.",
    "Smoking thins the cortex. (<a target='_blank' href='https://monicawilde.com/wild-antidote-for-smoking/'>Article</a>)",


    "Do audio journalling and sleep.",
    "Drink Black Coffee. <span style='font-size: 0.75rem'>~ Deaddiction Center’s Practitioner on OpenTalk</span>",
    "Break the cigarette if you can't control the urge at all. Consider this like you have the character of your best self character who fights with the worst you character.",
    "Feel the hell your spirit is trapped in and fucking cry.",
    "Get an empty pack of cigs and put a cigs in it with the labels Dad, Mom, Sister, Wife, Friends and people in the world. This is a technique for self-binding that acts as a symbol of restraint.",
    "I have to go with more knowledge from Dopamine Nation because she’s an expert than to follow my own guidance for anything to help relieve my smoking habit.",
    "Don’t think about it at all and switch to a new topic. ~ Law of Attraction",
    "Read some book via Line Flow - sahilrajput.com/line-flow",
    "Meditate by referring your Tantra, Shunya, Param Dhyaan, Meditation.",
    "Chocolates — Dairy Milk, 5 Star or try something new.",
    "Listen to songs while running.",
    "Do running listening to motivating songs playlist and download more if you want more.",
    "Play music with Termux while doing the 'Unleash' exercise routine.",
    "Talk to people while having a big big cup of DELICIOUS TEA 😋.",
    "Stop thinking and impatiently make a sizzling ₹30 sliced carrot chaat and then start working on something.",
    ".",
    "PASSIVE MODE ACTIVITIES:",
    "Observe who it is that’s craving for cigs and observe who it is that wants to stop you from smoking; choose the one who’s real you.",
    "Listen to smoke therapy at sahilrajput.com/hypnosis.",
    "Do dhyaan because dhyaan gives the power to choose to choose.",
    "Listen to music (old songs?) and sing along to them.",
    // 
    ".",
    deepBreathe,
    "Take care, bye 👋!",
];

async function main() {
    // Updte title
    document.title = 'Smoke Trigger Transform';

    // Update edit link
    document.querySelector('#edit-link').href = "https://github.com/sahilrajput03/sahilrajput03/edit/main/mantras/smoke.js";
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
