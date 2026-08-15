// @ts-nocheck

const deepBreathe = "❤️ Take 3 slow deep breaths. Inhale... Exhale...";

// ❤️ ❤️ ❤️ ChatGPT Used for Affirm (11 June, 2026): https://chatgpt.com/c/6a29a8c9-a44c-83e9-9b99-b175710e9699
const affirms = [
    "I love myself ❤️.",

    "Do your work in a अनन्तासन (side-reclining pose / Sleeping Vishnu Pose) 🙂.",
    "❤️❤️Do not drink sugar added tea at all, take tea right after breakfast! It's awesome! SUGAR IS THE DEVIL. 👿",
    "❤️Akaran karo kaam sab, निश्चिंतरूपेण, निश्चिंत रूप से.",
    "Excitement upr-upr ki energy hai. Dhyana karo 12 (or 15 or 20 mins) to realise your balanced self. Dhyaan is really really powerful to set you in relaxed working mode.",


    "If you fee work is super exciting then realise that it will become super boring very soon if you don't work on it, vice-versa, in both conditions you can't work❤️. Ati-kmi-रोग. Realize this and get out this ati-kmi-bimaari. <span style='font-size: 0.75rem'>(extremism, उग्रवाद, अतिवाद, चरमपंथ)</span>",
    "Only one step at a time but if you have more time then you can experiment lightly on preparing for next step.",
    "Dont talk; WRITE, BUILD, MAKE, DEVELOP!<br/>Dont talk; WRITE, BUILD, MAKE, DEVELOP!<br/>Dont talk; WRITE, BUILD, MAKE, DEVELOP!",

    "Sit in padmasana on floor on a cloth to harness/uplift your spinal cord energies. (5mins to 30 mins)",
    'If you have no task to write, simply write "Write down the task."',
    "Kaam kar rhe ho aur hosle buland hain toh sab hota hai.",

    "For who you are doing anything?<br/><br/>Do it for the god, universe.<br/><br/>Devote it to god.",
    "<div style='font-size: 2rem;'>Arijit - I witnessed a lot of changes I understood that I have to be free from my thoughts And, if I have to be free from my thoughts, then I have to be, you know I have to be cancelling out my association with my work because if I start associating myself with my work, then I would expect some result and that will create a thought; and if it is a success then I'll be happy and, if it is a failure then I'll be sad. And this will keep going on and on. And, until we depart, you know So, for that I need…; If I am really genuinely wanting to do something and not get associated with it that means I want to do this for somebody else whom I love, otherwise, I won't be able to, so 'Tatwamasi (Foundation)' is the best way I could do that.</div> <span style='font-size: 0.75rem'>~ Arijit's Podcast (Refer my Arijit Doc)</span>",
    "Detach from anybody who’s causing hard to your work via detach mantras here.",
    "Dhyaan is POWER!",
    "If you fall upholding Dharma, you willl attain heaven. If you are victorious, the world is yours. So rise, O Arjun, and prepare yourself for battle. ~ Bhagvad Gita - Chapter 2, Verse 37",
    "♥️ Make work interesting by listening to Vinod Aggarwal while working passive work or (TODO_TRY) while doing active works as well.",
    "The key to success is to start before you’re ready.",
    "कर्म प्रेम ♥️",
    "कर्म करते रहो, समय बदलने में ज़्यादा समय नहीं लगता।",
    "कमज़ोर पड़ने का वक़्त नहीं है। या तो ऊर्जा को ऊपर उठाओ (खाना खाओ) या उसे शांत होने दो (ध्यान करो), संभलने दो।",
    "Nothing is difficult or hard it just takes time, so be PATIENT.❤️",
    "Hard tasks are not hard because they seem impossible but because it seems they'll take too long time. So PATIENCE is the key to doing hard tasks.",
    "Use your AI agent creatively to keep your work interesting. ❤️",
    "❤️Start working just after doing exercises.",
    "Exercising multiple times a day directly increases your energy levels thus facilitating more work done in a day.",
    "I do exercise every two hours just for 5 mins.",
    "I do 5 mins time boxed exercise multiple times in the day whenever I get time to do it. This helps tremendously in my health.",

    "Sankalp karo khud se ki shaam 6 bje tak sirf 4 chejen hi karni hai - Karm, Khana, Aaraam, Dhyaan AUR SIRF YEHI CHEJEN KARNI HAIN. (I can think of divindig daily work into two schedules as well i.e., morning and evening if that is more comfortable and productive0l)",
    "Work is NECESSARY.",
    '❤️We are motivated to do small, soft and easy tasks instead of doing bigger, hard and difficult tasks. <span style=\'font-size: 0.75rem\'>~ Inspired from Alex\'s saying - "We like to do easy things."</span>',
    "❤️❤️❤️Divide tasks into smaller taks which are doable without thinking.",
    "❤️❤️Task jitna bada usko utna hi chote tukdon mein toro.",
    "❤️It’s the ability to write tasks in smaller forms which are doables that makes you progres no matter what. I know it very well.",
    "⭐️Motivation is temporary, discipline is PERMANENT. <span style='font-size: 0.75rem'>~ Anshul</span>",


    "People are valuable to me ❤️.<br/> Though if it seems that I am NOT getting value from them or feel somewhat disturbance in my work I can simply ask - \"Is it okay if we talk after an hour as I really need to do this work as soon as possible as I'm running behind my planned schedule.\"",
    "❤️ It’s the bad work that restricts you doing more.",
    "Never never ever sacrifice food timings for work. Click here to refer your food mantras now. (TODO_LINK_HERE)",
    "I have done so many tough tasks recently and I am in flow mode now.",
    "Do less, do important only.",
    "Take  successful break i.e. 5-10 mins which includes some bodily activity, some food, some green tea and <b>START THE TIMER OF 30 MINS AGAIN AND JUST WORK.</b>",

    "Khaana na khaane se dimag nahi chlta hai. Toh khana khao aur dimag chalao.",
    "Fal ki chinta kiye bina karm karo - Karm Yog ❤️",
    "❤️❤️ Overworking is nothing but lobh (लोभ), darr & moh.",
    "Keep your peripheral vision distraction less. You should always face towards a wall so that you don't see people coming in or going out because they cause visual distraction.",
    `<div style='text-align: left;'>
                        <div style='font-weight: bold; text-align: center; text-decoration: underline;'>To chill your hearing instincts, use:</div>
                        1. MX Player > '__Osho Meditation Music ❤️' <br/>
                        2. MX Player > '_a-work, 40hz focus music, Lofi ❤️' <br/>
                        3. MacOS: ~/Documents/❤️work-music <br/>
                        4. <a href='https://www.youtube.com/playlist?list=PLBfwD_NnDB3r7I3a61OUDMALiPkAVMHV-'>YouTube Playlist: ❤️Work, Code, Peace Music</a> <br/>
                        5. Article: <a href='https://sahilrajput.com/articles/work-music'>Work Music</a>. <br/> <br/>
                        This is to literally remove noise i.e., undesrable sounds when you want to work.</div>`,
    "Use Focusmate to enjoy company while working. It's awesome.",
    "Do it in micro steps.",
    "Kaam karna nhi hai DEKHNA hai, usi se kaam hona shuru ho jata hai.",
    'When not doing work - "There is no work."',
    "I'll just read over what I've got so far. ~ Paul Graham (Article - Great Work).",
    "Black Coffee at 12pm is a must. It's the sexiest drink to enjoy your desktop time!",
    "123 and 321",
    "Just start working after you wake up. <span style='font-size: 0.75rem'>~ Ratan</span>",
    '❤️ "Don\'t let something you\'re good at define who you are." ~ Bret Taylor',
    "Business - The infinite war.",
    "Jo hua acha hua. Jo hona hai woh bhi accha hi hona hai.",
    'Sirf "ek kaam" karna h mujhe. (jo tumhara next task hai).',
    `❤️To start your work on a day when you don't feel like working, you need to sincerely and honestly ask yourself - “Why do I not want to work right now?” → “It is boring.” → "Why is it boring?" → “What makes it boring?” → “I don't know why it's boring” → "Not knowing what I need to work on now makes it boring." → "Let's find out exactly what I need to work on and have it in front of you.”`,
    "Balance your ACTIVE & PASSIVE ACTIVITIES time spending. <a target='_blank' href='https://docs.google.com/document/d/1LPDCtgWXv3Xg6wgPq5jEkblY36r-sxaLr4J62uFPvcs/edit?tab=t.5irr21jl90kd#heading=h.x6uslpwxkfmi'>Click here to view your list of activities here.</a>",
    "Keep your strategy and goals SUPER PRIVATE ⭕️ because the energies must be applied at pin-point on the work itself with laser focus rather than spreading/wasting its energy when you talk about it to other people.",
    "This is easy task. This philosophy gets your work started, getting you into flow mode.❤️",
    "Pain & Problems are blessings in disguise.",
    "Allow yourself to make mistakes.",
    "Feel free to make mistakes.",
    "If you are not making mistakes that means you are not trying hard enough.",
    // ".",
    // deepBreathe,
    // "Take care, bye 👋!",
];

async function main() {
    // Updte title
    document.title = 'Work Mantras';

    // Update edit link
    document.querySelector('#edit-link').href = "https://github.com/sahilrajput03/sahilrajput03/blob/main/mantras/work.js";

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
