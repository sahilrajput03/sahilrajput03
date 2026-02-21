
<!--  Note the file is already saved as well. -->
<!--  <a href="/sahil-contact.vcf" download="download.vcf"> Save Contact </a> -->

<!-- Import local stylesheet  -->
<link rel="stylesheet" href="{{ '/sahilrajput03.css' | relative_url }}">

<div style="display: flex; justify-content: space-between;">
	<div>
		<a style="font-style: italic;" href="./links-family-watch">Family Watch Links</a>
	</div>
	<div>
		<a target="_blank" style="font-style: italic;" href="https://github.com/sahilrajput03/sahilrajput03/edit/main/README.md">Edit this page</a>
	</div>
</div>

<h1 align="center">Sahil Rajput</h1>

<h6 align="center">Crazy Spirit, Namer, Live in heart, Dangerously insatiable curiosity</h6>

<!-- STARTS-HERE ---- SEARCH FUNCTIONALITY -->
<!-- NOTE: script tag for `searchLinksUtil.js` file in shown as it is on github's readme's page and it looks very dirty at the top of the page --- thus I'm putting the script tag at middle of the page to prevent showing it at the top. You can search it via "searchLinksUtil.js" -->
<div class="search-container">
	<!-- textarea input would come here.. -->
	<ul id="search-results"></ul>
</div>
<!-- ENDS-HERE ---- SEARCH FUNCTIONALITY -->


<h6 align="right">
	<a href="https://docs.google.com/document/d/1gjb_VQAV9SODX8AsubtNXX4qtmTUBOqwkbbZTjP3stQ/edit?tab=t.0#heading=h.cw5xpkdnurh4">Shunya, Param Dhyaan, Meditation, VBT</a>,
	<a href="https://docs.google.com/document/d/1j1n5Zjfrlk7wAv23wTjQBDkyv3yxEdEhI136mhYT6U0/edit">Music & Visuals</a>,
	<a href="https://docs.google.com/document/d/1Ow1lzgoaEwd1Q9ewOtFgsOt6hQhsqWo_CFmss38xGHM/edit">Blog Recommendations</a>,
	<a href="https://sahilrajput.com/thoughts">Thoughts</a> (<a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/thoughts/thoughts-frontend/src/thoughts.md">md</a>),
	<a href="https://docs.google.com/document/d/16J3DPO-bn1yIEkXIe6HJqrrqIM2TXBhr1tXgV2VEKxc/edit">Lifestyle</a>,
	<a href="/celebration-by-simplebeing.html">Celebration by Simplebeing</a>
</h6>

<h6 align="right">
	<a href="https://sahilrajput.com/essays">Essays</a>,
	<a href="https://sahilrajput03.github.io/vocab-files/vocab">Vocab</a> (<a href="https://docs.google.com/document/d/1cOuji7fDKKQBDMEI9oSPH62HddnO_TxY_58g_EfH1L0/edit">Doc</a>),
	<a href="https://docs.google.com/document/d/1q_AmG0bIxX2WjN_wyMUv_Y7kOEtnW2y6--4M8QWlcZE/edit?tab=t.0#heading=h.1ahwoj105swe">❤️ Book Recommendations</a>,
	<a href="https://svelte.monktechnoworld.com">svelte.monktechnoworld.com</a>,
	<a href="https://sveltev5.vercel.app/glass-slideshow">Glass Thoughts</a>,
	<a href="https://sahilrajput.com/grow">Help me grow feedback</a>
</h6>

<h6 align="right">
	<a href="#javascript-cheatsheet---sahil">JS CheatSheet</a>,
	<a href="https://docs.google.com/document/d/1xgL7mcIY0QsWgH_27DAlEF4w2FXHIelz6Zq852XCDIg/edit?tab=t.0#heading=h.ikhvinwu2trf">MacOS Vscode Shortcuts</a>, 
	<a href="#unit-conversions">Unit Conversions</a>,
	<a href="#transcribe-convert-download">Transcribe/Convert/Download</a>,
	<a href="#english-and-hindi-typing-courses">English/Hindi Typing Courses</a>,
	<a href="https://docs.google.com/document/d/1cgmpPTtfn2HYwINmlLsvEduhNnuRHzZy6pumVfuNFZg/edit?tab=t.0#heading=h.mimk1zr17cs0">Movies & Tv Series</a>,
	<a href="/links">⭐️Links</a>
</h6>

<div align="right">
	Website: <a href="https://sahilrajput.com">sahilrajput.com</a><br/>
	Github: <a href="https://github.com/sahilrajput03/sahilrajput03">github.com/sahilrajput03/sahilrajput03</a><br/>
	Android App:  <a href="/apk/Tech_Blog_by_Sahil_Rajput_base.apk">Tech Blog by Sahil Rajput</a><br/>
	YouTube:  <a href="https://www.youtube.com/@SahilRajput03/playlists">youtube.com/@sahilrajput03/playlists</a>
	<!-- OLD PlayStore link -->
	<!-- Play Store:  <a href="https://play.google.com/store/apps/details?id=com.sahilrajput.twa">Tech Blog by Sahil Rajput</a> -->
</div>

<br />
<br />

## Notes of Oct 2025

- ❤️ [filesize.md](filesize.md)
- My first illustration using Pen tool using Figma: [Click here](https://www.figma.com/design/EXjoqkip1Xtvhy3vVGrwkk/Learn-Illustrations--Pen-Tool-?node-id=0-1&p=f&t=kglNWeFHcT60FlsB-0).
	- Notes added to [Learn figma doc](https://docs.google.com/document/d/1zt9YwENq2tRhh4lmTtct6P_fyx7Y-zH2VC5vyUkR4oU/edit?tab=t.0#heading=h.jiufbtfa1hsa).

<img src="./illustrations/girl1.svg"/>

## Notes of Sept 2025

- **What is better, - or _ in filename?** [Click here](https://chatgpt.com/c/68d4daa3-d064-832b-baee-badd55a0f109) (ChatGPT)
	- When is space not good? *(check above link)*

 - **Why `y combinator` named `y combinator`?** (source: [ChatGPT](https://chatgpt.com/c/68d916d2-02b4-8325-8d9d-626cdbb34c52)) *(The Y cominator problem)*

 ```js
const Y = fun => {
    const f = x => {
        return fun(v => {
            return x(x)(v);
        });
    };

    return (f)(f);
};

// Factorial
const factorial = Y(recursiveFun => {
    return n => {
        // Note: `n` is a variable that represents the position (or index)
        //          of a term in the sequence.
        return n === 0 ? 1 : n * recursiveFun(n - 1);
    };
});

console.log(factorial(5)); // 120
```

- What does utm_source stands for? [ChatGPT](https://chatgpt.com/c/68da9f8a-f7a8-8328-b71e-8753b24743af)

## Notes of August 2025

<img width="600" height="544" alt="image" src="https://github.com/user-attachments/assets/c1148ee1-444f-4580-af6d-508c635ed4d3" />


- Pre prompting: It is the raw input text notes you write with hand which you give to any LLM to instruct it to generate prompt for specific output.
- r/Piracy
	- [megathread](https://www.reddit.com/r/Piracy/wiki/megathread)
		- [books](https://www.reddit.com/r/Piracy/wiki/megathread/books/)
			-  Anna's Archive: *Influence, The Whole Elephant Revealed*
- **Link preview is also known as? (ChatGPT)**: These terms refer to the automatic display of a snippet (title, description, image) when a URL is shared in apps like WhatsApp, Facebook, Slack, etc.
	- URL preview
	- Webpage preview
	- Link unfurling
	- Meta preview
	- Rich link preview

## More

- Development tips:
	- Making notes is good for long term memory and a little bit for short term memory because you tend to rely on written material. But overall its really great thing to make notes.
	- Get summary of any video in any language in Google Gemini. ❤️
	- Use VsCode' default markdown preview to edit markdown files.
	- Always keep a REPL on of nodejs for fast testing. ~ Sahil
	- HTTP Statuses: [Learn Express](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.0#heading=h.yvdn9vtmve6c)
- Learn Aryuveda: [Click here](https://docs.google.com/document/d/1_zy8T0siCeCuL0rGksUuEBy4ZYg7uZTW9BR-y85UBR0/edit?tab=t.0)
- "Imagine a world in which every single person on the planet has free access to the sum of all human knowledge." ~ [Jimmy Wales](https://en.wikipedia.org/wiki/Jimmy_Wales), Founder of Wikipedia
	- [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) - Wikipedia
- Relying on complex tools to manage and build your system is going to hurt the end-users. "If you try to hide the complexity of the system, you'll end up with a more complex system". Layers of abstraction that serve to hide internals are never a good thing. Instead, the internals should be designed in a way such that they NEED no hiding. — Aaron Griffin ([wikipedia](https://en.wikipedia.org/wiki/Arch_Linux))
- 1995	July 16: Amazon launches its online bookstore. - [Wikipedia](https://en.wikipedia.org/wiki/History_of_Amazon)
	- General public access to the internet in India began on 15 August 1995. ([wikipedia](https://en.wikipedia.org/wiki/Internet_in_India))
- Inspiration is perishable - act on it immediately. Inspiration doesn’t last – it needs action, which can soon lead to momentum, which keeps you moving. ~ Naval
- Don't need to play games, connect instead.
- Every action you take is for the type of person you wish to become.
- You do not rise to the level of your goals. You fall to the level of your systems.
- YAGNI principle: You aren't gonna need it. Don't over engineer and assume that everything must be fully customizable and flexible. This is something that software engineers run often into: making highly customizable solutions for the sake of unwanted ("un-needed") flexibility. It can be more difficult to maintain and evolve.
- Talent (quality/perfection) < Hardwork < **Consistency**
- Ips: 192.168.(18,0).2 (apple), 192.168.(18,0).X (dell), 192.168.(18,0).X (r)
- You only loose information which you don't want to make accessible.
- **Kyle Simpson:** I think the biggest problem with learning JavaScript right now is that it's so distracting to see such a broad and complex ecosystem where almost every week somebody's coming out with a whole new pattern a new framework a new way of doing things so the goal posts keep moving for you and you learn new things and think “I learned just enough and I'm on the right track” and then you find out that everybody else is learning or doing something different and my advice for that is to just pick one thing and focus on it and instead of trying to feel like you have to learn every single thing all at once nobody can do that.
- Get private code learning/work support for javascript, nodejs, react and mongodb @ 500 Rs. (6$) per hour by reaching at hello@sahilrajput.com

### ☁️ VPS vs. 🔌 Raspberrypi

VPS (Virtual Private Server) means Linode, AWS, Azure, GCP etc.

**Why VPS** over Raspberry pi?
1. Raspberry pi needs re-installation of OS if linux gets messed up.
2. Raspberry pi needs additional installation of docker/k3s
3. Raspberry pi needs to be handled over broadband (router settings) via port forwarding to make it accessible over internet.
4. Raspberry pi would need static ip (monthly paid) or any other no-ip service to make the dynamic ip actually work for any project to work over longer duration of times.
5. Raspberry pi would need to be setuped for access over ssh.
6. Raspberry pi is strictly dependent on factors like:
	- internet conectivity over broadband
	- electricity on site
7. No fucking wires.

**Why raspberry pi over VPS?**
1. Cheaper in cost i.e., you would save cost around 8-10 thousand probably as if it were hosted on aws as you can host multiple applications on 8GB raspberry pi.

### 📑 Why Google Docs over any other publishing tools

I prefer making notes in Google Doc rather than in markdown or any other software like notion, medium, substack, wordpress blog, bogger (from Google) etc because I am very much satified by the features provided by Google Doc and I already know how to use Google Doc (WYSIWYG):

*Below are some features of Google Doc that you might helpful too:*
1. Notes are about more about note making experience than to refer notes. In Google Docs the experience of notes making is awesome.
2. give people exclusive acces using email for read or write permissions 
3. Can be published to web via direct link using "Publish to web" feature. You can find it here "File > Share feature > Publish to web".
4. Can be embedded in websites, this is particularly useful when you want some content to be automatically updated which is present in a google document. This could be really helpful thing particularly for non coders. You can get the embed code for the document by going to "File > Share feature > Embed". Here is an [example](https://sahilrajput.com/vocab.html) which you can check and you can actually view the source code of the html page via `option + cmd + u` (macos) or `ctrl + u` (on mac/linux).
5. Faster editing process than markdown.
6. Better editing experience than markdown.
7. There is syntax language to be learned if you use markdown.
8. Google Doc is editable on Google Doc with awesome experience.

*🚀 If still you want to use markdown --- prefer these tools as they help to edit markdown with WYSWYG (What you see is what you get) way:*
1. [Obsidian](https://obsidian.md)
	1. USAGE: From the top bar in your macOS and go to  **File > Open Vault...**  and then from Obsidian welcome popup you can choose **Open folder as vault** and select your desired folder to open it. 
	2. TIP: Please add `.obsidian` to your `.gitignore` file of the project so obsidian files are ignored.
2. [Typora](https://typora.io/)
3. VS Code's Edit with live preview: *[NOTE: This is very buggy experience as of now 28 May 2025.]*

## 🥕🍎 In command `ts-node-dev --transpile-only tg.ts` what does the flag do `--transpile-only`? (ChatGPT)

The `--transpile-only` flag in the `ts-node-dev` command tells TypeScript Node (`ts-node`) to skip type checking when running the TypeScript code. Normally, TypeScript checks the types as it compiles the code, which can slow down the process.

When using `--transpile-only`, TypeScript only transpiles the code (i.e., converts TypeScript to JavaScript) without performing any type checks. This can make the development process faster, especially in situations where you rely on external tools (like an IDE or a separate build step) to handle type checking.

<hr />

```txt
ॐ सर्वे भवन्तु सुखिनः			Om Sarve Bhavantu Sukhinah)			- Om, May All be Happy,
सर्वे सन्तु निरामयाः । 			Sarve Santu Niraamayaah) 			- May All be Free from Illness.
सर्वे भद्राणि पश्यन्तु 			Sarve Bhadraanni Pashyantu)			- May All See what is Auspicious,
मा कश्चिद्दुःखभाग्भवेत् । 		Maa Kashcid-Duhkha-Bhaag-Bhavet)		- May no one Suffer.
ॐ शान्तिः शान्तिः शान्तिः ॥ 		Om Shaantih Shaantih Shaantih)			- Om Peace, Peace, Peace.
```

```bash
echo Hello world! > /dev/null
cat /dev/null
!!(() => {})
```

## ❤️How to text better?

**Some profound reasons why to text better?**

- Preserves Relationships: Clear texting prevents unnecessary misunderstandings, which can quietly damage trust or cause friction.
- Reflects Emotional Intelligence: Thoughtful communication shows you care how your words affect others—a sign of maturity and empathy.
- Saves Time and Energy: One well-written message can avoid a back-and-forth of clarifications, saving both people effort.
- Builds Respect: When you text clearly and respectfully, people feel valued. It encourages mutual respect.
- Shapes Your Digital Identity: How you text forms a big part of how others perceive you—are you thoughtful, vague, rude, reliable?
- Encourages Better Responses: People are more likely to respond thoughtfully when they receive thoughtful texts.
- Minimizes Misinterpretation: Text lacks tone and body language. Being intentional with words helps bridge that gap.

**How to text better and avoid confusion:**
- Be clear – Say exactly what you mean.
- Use punctuation – It helps with tone and meaning.
- Avoid sarcasm/jokes that can be misread.
- Reply to all questions – Don’t skip parts.
- Use names or quotes in group chats – To clarify who/what you're replying to.
- Break long messages into short paragraphs – Easier to read.
- Re-read before sending – Spot confusion before it happens.
- Ask if unclear – “Did that make sense?” or “Let me know if that’s confusing.”

**Online Markets I use:**
- Flikart, Amazon, Zomato, Blinkit, Blinkit Lit, Swiggy, Zepto, Bigbasket, IndiaMART

**Public Clipboard:** [Click here](https://docs.google.com/document/d/1jMZ0jPnSLbkJEJR8vm8mO6JhUoctfa1f5k6tTfpajfY/edit?tab=t.0)

Superscript Numbers: ⁰¹²³⁴⁵⁶⁷⁸⁹

#### Unit Conversions

<i>Tags: #metre, #foot, #feet, #centimeter</i>

A small scale is 15cm long.

**Length**

```txt
1 ft ≈ 30.48 cm
1 m ≈ 3.3 ft (precisely 3.28084)
1 m ≈ 39.4 inch (precisely 39.3701)
1 km ≈ 0.62 miles (precisely 0.621371)
1 mile ≈ 1.61 km (precisely 1.60934)

10^⁶  = 1 Million  = 10 Lakh
10^⁹  = 1 Billion  = 100 Crore
10^¹² = 1 Trillion = 100k Crore  =  100 Thousand Crore  =  1 Lakh Crore
```

**Mass**

```txt
1 kg ≈ 2.2 lbs (pounds)
1 lbs ≈ 0.45 kg
```

**❤️Currency** 

*(Tags: #dollars, #bucks)*

*For fastest conversion from dollar to inr you can simply multiply by 100 (~84 ₹/$).*

- 100 cents = 1 dollar = 1 buck
- Conversion factor
	- $ to ₹ Conversion factor: 88 ₹/$
	- ₹ to $ Conversion factor: 0.011 $/₹

```txt
$ 1 Million  = ₹ 10 Cr	 			~ (8.8 Crore)
$ 1 Billion  = ₹ 10k Cr				~ (8.8k Crore)
$ 1 Trillion = ₹ 100 Lakh Cr		~ (88 Lakh Crore)  = ₹ 8,800k Crore
```


### What is Selling?

Source: [Click here](https://www.youtube.com/shorts/m5SMBtF1QGs)

**PEU:**
- Product: Gather and prepare detailed information about your product, covering every aspect and feature. You should also understand the needs and desires of the other person that your product can fulfill.
- Emotion: Any customer only wants to buy a product because of either fear or aspiration.
- Urgency: You need to tell the customer that this is the thing the customer needs today.

# Royal Society Prizes for Science Books

*Breath by James Nestor is the finalist for the year 2021.*

[Click here](https://en.wikipedia.org/wiki/Royal_Society_Prizes_for_Science_Books)

# Breathing Videos by James Nestor

❤️ Breathing Videos: [Click here](https://www.mrjamesnestor.com/breathing-videos)

❤️ Interesting Page of *James Nestor - Wikipedia: [Click here](https://en.wikipedia.org/wiki/James_Nestor)*

## Document Order & Titles Notice for Google Docs

- This document is organized in reverse chronological order, with the most recent entries appearing first and earlier entries following in descending order.
- This document is organized in chronological order, with the earliest entries appearing first and more recent entries following in ascending order.
- <Note: A document must have two titles such that titles appear in the outline. Thus do not remove this.>

<iframe width="100%" height="450" src="https://www.youtube.com/embed/RAX_I4AgjiU" title="8 Hours of Relaxing Campfire by a Lake at Sunset in 4k UHD, Stress Relief, Meditation &amp; Deep Sleep" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- Import local javascript (note: defer is necessary here) (ChatGPT)  -->
<script defer src="/searchLinksUtil.js"></script>


![social-media-game](https://github.com/user-attachments/assets/9ff89485-1199-4635-aef5-d76fcb0050d9)

## Superprof .co.in: [Click here](https://www.superprof.co.in)

## Indiamart .com: [Click here](https://www.indiamart.com/)

## English and Hindi Typing Courses

- English: [Click here](https://sarkariselection.com/Typing/English-Typing-Test)
- Hindi (Mangal) (Unicode): [Click here](https://sarkariselection.com/Typing/HindiMangalTyping) *([My Private Doc - Learn Hindi Typing](https://docs.google.com/document/d/1aeN_werJhPslbBdTMxS7qASN0wMDMW62ETuwdBhqHVA/edit))*
- Hindi (Kruti Dev): [Click here](https://sarkariselection.com/Typing/HindiKrutiDevTyping)

*Note: Mangal is part of the Unicode standard, which means it supports a wide range of Devanagari characters and is more compatible with modern software and devices.*

*❤️ Note: Learn Typing on Mobile: [Click here](https://sarkariselection.com/ComputerTypingOnMobile))*

# Proxy Sites of Torrent Sites

Source: [Click here](https://freeproxy.io/) (earlier `sitenable.com`)

- 1337x: [proxied](https://freeproxy.io/o.php?u=http://1337x.to), [https://1337x.to](https://1337x.to/)
- thepiratebay: [proxied](https://freeproxy.io/o.php?u=https://thepiratebay.org), [https://thepiratebay.org](https://thepiratebay.org)
- torrentgalaxy: [proxied](https://freeproxy.io/o.php?u=https://torrentgalaxy.to/), [https://torrentgalaxy.to/](https://torrentgalaxy.to/)
- [https://uflix.cc](https://uflix.cc/) (for tor browser only)

# Tech Journal & Blogging: [Click here](tech.html) \| [Old feed](https://github.com/sahilrajput03/sahilrajput03/blob/main/feed.md)

# General Blogging: [Click here](https://docs.google.com/document/d/18ci6kbQse3vwl3OoIXLee1ACkHNwN1Bj03l3Zs2PVtI/edit?tab=t.fjrkl2aasat#heading=h.n9bge0scwmnc)

#### Trademarks: OneUniverse, Same Roof

#### Sahil's Vocabulary 🚶: [Click here](vocab.html) | [Doc](https://docs.google.com/document/d/1cOuji7fDKKQBDMEI9oSPH62HddnO_TxY_58g_EfH1L0/edit)

#### Transcribe, Convert, Download, TTS, STT

- Text Wrap, Line Break Online (e.g., say comments to wrap after 80 chars): [Click here](https://www.joydeepdeb.com/tools/line-break.html)
- Transcribe youtube video or shorts:
	- [downsub.com](https://downsub.com/)
	- [downloadyoutubesubtitles.com](https://www.downloadyoutubesubtitles.com)
	- [rushtechhub.com/youtube-transcript/](https://rushtechhub.com/youtube-transcript/)
	- For videos not having subtitles the above method won't work though you can use OpenAi's STT api. You can first download the m4a audio file of the youtube video by downloading the audio file from this site - [https://www.multidownloader.net](https://www.multidownloader.net). *Note: OpenAi's STT supports m4a format as input file 😇*
- Convert ogg to mp3 (for source for openai's STT): [Learn Bash Doc](https://docs.google.com/document/d/1o2UE4d3E5nMvfoaQP2_3G-dPjjf1719h8uLRltn3C1w/edit?tab=t.e75nn9rhxa2x#heading=h.v67slhjr85f1)
- Convert markdown to docx converter: [cloudconvert.com](https://cloudconvert.com/md-to-docx) *(tested on Feed.md file - works well).* Others: [1](https://mconverter.eu/convert/markdown/docx/), [2](https://products.aspose.app/html/conversion/md-to-docx), [3](https://www.vertopal.com/en/convert/markdown-to-docx)
  - ❤️mp4 to gif: [https://cloudconvert.com/](https://cloudconvert.com/)
    - ❤️Created animated logo: [canva.com/create/logos/animated](https://www.canva.com/create/logos/animated)
- Convert pdf to docx (for usage with google docs): [https://pdf2docx.com/](https://pdf2docx.com/)
- Convert pdf to text using library `pdfjs-dist`: [Click here](https://github.com/sahilrajput03/qr-solution-frontend/blob/main/src/pdf-to-text.test.js)
- Record voice in mp3 (for source for openai's STT or Translate): [online-voice-recorder.com](https://online-voice-recorder.com/)
- Combine multiple pdfs to single pdf: [Click here](https://www.ilovepdf.com/)
- Soundcloud Downloader: [Click here](https://sclouddownloader.net/)
- Srt to text: [Click here](https://gotranscript.com/subtitle-converter)
- Create forms easily:
	- [tally.so](https://tally.so)
	- [typeform.com](https://www.typeform.com/) (used by Pieter Levels for fundraising for his book "Make" even before start writing the book, pg. 68).
	- [www.medallia.com](https://www.medallia.com/) (Used in to get feedback on the quality of support provided in Meta Business Account in Direct Support. A form link was sent to me on email so I can provide them feedback, the quality is good.)
- Download YouTube Videos:
	- [vidssave.com/home](https://vidssave.com/home)
	- [yt1d.com](https://yt1d.com)
	- [en1.savefrom.net](https://en1.savefrom.net)
	- [Cobalt.tools](https://cobalt.tools/) ([github](https://github.com/imputnet/cobalt))
	- Use wikihow - Download vidro from youtube.com
- Remove background from an image: [Click here](https://www.remove.bg/upload)
- **❤️ Text To Spech (TTS):**
	- Use Chrome Mobile's feature of **"Listen to this page"**. Its awesome because it offers highlight of text while reading and changing speed of reading as well.
		- Use Chrome Browser (Desktop), right click in empty area and choose "Open in reading mode".
	- Use OpenAI Playground or OpenAI's API
	- Learn Coqui: [Click here](https://docs.google.com/document/d/1vLChB48hYVlwu6bhwT7aIJB2yF9mankkKmN56P3XWTo/edit?tab=t.0)
	- Download from ChatGPT's prompt directly via chrome extension: [AudioTTS - Simple Text to Speech Downloader](https://chromewebstore.google.com/detail/audiotts-simple-text-to-s/lhbdjaomnaobfljmhkmcfhhnihaaangh) *(Note to Sahil: I have kept this extension disabled to avoid unnecessary downloads from any website anytime, so feel free to enable it again temporarily)*
	- 💫Text to speech (also has openai's AI text to speech): [ttsmp3.com](https://ttsmp3.com) [1000 tokens limit/day]
		- Learn: Click on **AI Voices** after opening the above link.
	- For downloading small clips you can probably use chrome extension - [Chrome Audio Capture](https://chromewebstore.google.com/detail/chrome-audio-capture/kfokdmfpdnokpmpbjhjbcabgligoelgp) to download from below two sites because they don't allow download in their free plan yet. *(for commercial use -- I advise to get a premium plan to help support them)*
		- [murf.ai/text-to-speech](https://murf.ai/text-to-speech)
		- [naturalreaders.com/online](https://www.naturalreaders.com/online/)
	- Premium Services - [hume.ai](https://www.hume.ai/pricing), [elevenlabs.io](https://elevenlabs.io/pricing), [revoicer.com](https://revoicer.com)
- **❤️ Speech to Text (STT):** *(#speechtotext, #speech-to-text)*
	- ❤️ mp3 to text: https://turboscribe.ai (3 transcription/day)
	- Live: [dictation.io/speech](https://dictation.io/speech) (web)
 	- ❤️ WhisperAI - AI driven Speech-to-text  (chrome extension for google doc): [Click here](https://chromewebstore.google.com/detail/whisperai-ai-driven-speec/klhcnkknganbneegjihbcfjoifiomhfn?hl=en), Start/Stop Shortcut: `ctrl+space`
	- ❤️ Voice In: [Click here](https://chromewebstore.google.com/detail/voice-in-speech-to-text-d/pjnefijmagpdjfhhkpljicbbpicelgko), [English Voice Commands](https://dictanote.co/voicein/voicecommands/en/), Start/Stop Shortcut: `option+L`
	- speechelo.com: [Click here](https://speechelo.com)
	- [turboscribe.ai](https://turboscribe.ai)

##  ❤️ 🫁 Reset Immune System - Wim Hof Method & Breathwork ([Doc](https://docs.google.com/document/d/1A7KHk-nDwzqyXCpJlDGo_MH9LbqR_xSfr1xf3ou3on8/edit#heading=h.e38aiba2an6c))

- Website: [wimhofmethod.com](https://www.wimhofmethod.com/)
- Tutorial - Wim Hof breathing tutorial by Wim Hof: [Click here](https://www.youtube.com/watch?v=nzCaZQqAs9I)

*Note: Wim Hof Breathing or Breathe With Sandy are modern versions of Tummo Breathing.*

**Practices**
- **Sahil**
	- 5.5 Breaths per minute for 5 minutes: [sahilrajput.com/breathe](https://sahilrajput.com/breathe)
- **Wim Hof Method:**
  - ❤️ Slow Pace Breathing - Wim Hof Method Guided Breathing for Beginners (3 Rounds Slow Pace): [Click here](https://www.youtube.com/watch?v=0BNejY1e9ik) *(113s / 30bc)*
  - Heavy Pace Breathing - Guided Wim Hof Method Breathing: [Click here](https://youtu.be/tybOi4hjZFQ) *(135s / 30bc)*
- **Breathe With Sandy:**
  - **❤️ EASY** -  Psychedelic Breathwork I Fast Tempo I 33 Breaths (3 rounds): [Click here](https://youtu.be/zmn_7wr0Pk4)
  - **INTENSE** - Breathwork To Help Support The Release Of DMT (3 Rounds Of Guided Breathing): [Click here](https://www.youtube.com/watch?v=ONsvMaytg_0)

*\*bc = breath cycle*

**Why Wim Hoff breathing?**

It's gonna boost both your immune system and calmness in a compound effect each day throughout life.

#### Business Apps

- 7 Apps every small business must use: [Click here](https://www.youtube.com/watch?v=OEJ3B-_6xyc)

#### Depressions & Mental Health Support

- wannatalkaboutit.com: [Click here](https://www.wannatalkaboutit.com/)
- icallhelpline.org: [Click here](https://icallhelpline.org/)
- pw.live/prerna: [Click here](https://www.pw.live/prerna)

#### Be Productive with videos 📽️ 🎬

- I learned a system for remembering everything: [Click here](https://www.youtube.com/watch?v=Rvey9g0VgY0)
- Minimalist Rule by Warikoo: [Click here](https://www.youtube.com/watch?v=FBxS4VMyWjI)

#### Original & Curated Articles

- **Thoughts & Principles:** [Click here](https://sahilrajput.com/thoughts-principles) *([md](https://github.com/sahilrajput03/sahilrajput03/blob/main/thoughts-principles-react/src/thoughts.md)) (#thoughts, Life's Cheatcodes)*
- Office Ethics, Social rules, Single big mistake I do often: [Click here](https://docs.google.com/document/d/1-XBXV-im_X1WRPzytJtqSZ5lmvHkx7mxCWIuRuQDXkU/edit#heading=h.ak3mr22v37vs)

#### Continents

Source: Continent - Wikipedia:  [Click here](https://en.wikipedia.org/wiki/Continent)

<img src="./site-assets/continents.gif" width="600" />

**Quick Links:**

- English:
- **Stocks, Trading, Zerodha:**
	- Stocks Blog: [Click here](https://docs.google.com/document/d/1r_Y1KKSI4DQ0gjWynQVGRX6W7V0fMZCKzT5WldlamTU/edit#heading=h.y03v6kzl6nf)
	- Learn Stocks: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-stocks.md)
	- Learn Zerodha: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-zerodha.md)
	- Learn Zerodha Varasity: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-zerodha-varasity.md)
	- Doc - Learn Trading - Sahil Rajput: [Click here](https://docs.google.com/document/d/1pv_pvsd06fB1vJnPOoGTdX6KVfdg_vJsbci5Blz-DFs/edit)
- Newspaper Feed: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-newspaper-analysis.md)
- TamronHallShow (Journalist): [@TamronHallShow](https://www.youtube.com/@TamronHallShow/videos)
- Get length of any youtube playlist: [Click here](https://ytplaylist-length.netlify.app/)
- Video Cutter: [online-video-cutter.com](https://online-video-cutter.com/)
	- ❤️🚀 Locally using `Handbrake` (very fast): Follow as suggested in this screenshot.
	![image](https://github.com/user-attachments/assets/cfeec9ba-c9f0-430b-86a6-a820058b0d0e)
- Learn NFC:
	- Link: [1](https://www.youtube.com/shorts/rqoUHzrWrU0), [2](https://www.youtube.com/shorts/kqds9w9BF-0?feature=share), [3](https://www.youtube.com/shorts/Mp9oZTlDhI8?feature=share), [4](https://www.youtube.com/shorts/vi3vwWKiS94?feature=share)

**More:**

- A Pragmatic software developer. [fsf](https://www.fsf.org/).
- Anything is possible when we break the big tasks down into smaller, manageable ones! :) ~Eric
- I have no limitations ~ Thomas Shelby
- Discipline means choosing between what you want now and what you want most. ~ Unkonwn
- There is not try, either you do it or don't. ~ Frank Oz (Star Wars)
- Curiosità is defined by Micheal J. Geib and Leonardo as “an insatiable curious approach to life and an unrelenting quest for continuous learning.” Nature of mind is to wander around, its not problem its the way its designed. My job is to keep getting it back towards the goal.
- Unwinding is hot no-sugar coffee!
- Hardware:
	-  Laptops:
		- [MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)](https://support.apple.com/en-in/111339)
		- [Dell Latitude 5400](https://dl.dell.com/topicspdf/latitude-14-5400-laptop_owners-manual2_en-us.pdf)
			- OS: Manjaro, Kernel Version: 6.1.51-1-MANJARO (`uname -r`)
			- Terminal Emulator([?](https://en.wikipedia.org/wiki/Terminal_emulator)): [Kitty](https://sw.kovidgoyal.net/kitty/)
		- [HP Notebook - 15-ac179tx](https://support.hp.com/in-en/document/c04919819)
		- [Raspberry Pi 4 model-b](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/), Processor: `Quad core ARM Cortex-A72 processor`, Specification page [here](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/specifications/).
- Speaker:
	- [Boat Stone 650](https://support.boat-lifestyle.com/articles/stone-speakers/stone-650/6218b3b72b115f64864d7ee4), [User Manual](https://media.croma.com/image/upload/v1676364686/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/User%20Manual/221786_User%20Manual.pdf)
- Router:
	- TP-Link - Archer AX10 (AX1500 Wi-Fi 6 Router): [Click here](https://www.tp-link.com/in/home-networking/wifi-router/archer-ax10/) ([amazon](https://www.amazon.in/TP-Link-Archer-AX10-Triple-Core-Wireless/dp/B07YP3T5H7))
- More Technologies: trpc (ALERT: Please check my learn-trpc page), hasura and onegraph (graphiql-explorer).
- Quick Links
	- Tech Presentations
		- [Presentation - Going that extra mile](https://docs.google.com/presentation/d/1uz8-Ae5sTgZYDmydfX-ESDO03oMBYAQ14rkJzPs4AxE/edit#slide=id.g2b178ca05c_0_3)
		- [Presentation - Web Performance Swiggy Style](https://docs.google.com/presentation/d/1snxo-EKx6PseQeznhfr-VVTEQ71EAMOdbDQ0pNR5jEA/edit#slide=id.g6b802e0221_1_1286)
	- Developer Surveys: 
		- Jamstack 2022: [Click here](https://jamstack.org/survey/2022/)
		- StackOverflow Survey [2019](https://insights.stackoverflow.com/survey/2019), [2020](https://insights.stackoverflow.com/survey/2020), [2021](https://insights.stackoverflow.com/survey/2021), [2022](https://survey.stackoverflow.co/2022/), [2023](https://survey.stackoverflow.co/2023/), [2024](https://survey.stackoverflow.co/2024)
		- The State of JS: [2021](https://2021.stateofjs.com/en-US/), [2022](https://2022.stateofjs.com/en-US/), [All Previous Surveys](https://stateofjs.com/en-us/)
			- **Learn from State of Javascript 2021:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-state-of-javascript.md)
  - Tech Magazines:
	- Analytics India Magazine: [Click here](https://twitter.com/Analyticsindiam)
  - Podcasts:
	- Tech
		- StackOverflow Podcast: [Click here](https://stackoverflow.blog/podcast/)
		- Undefined.fm ~ Jared Palmer & Ken Wheeler: [Click here](https://undefined.fm/)
		- General Musings ~ Kevin Powell: [Click here](https://open.spotify.com/show/1scASfrTESkNKPffUJ4CPW?utm_source=convertkit&utm_medium=email&utm_campaign=The+CSS+Mindset%20-%2011813412)
		- The Rainmatter Podcast ~ Zerodha: [Click here](https://podcasters.spotify.com/pod/show/rainmatter) 
	- Fun
		- A Horror Film & Culture Podcast With a Feminist Twist: [Click here](http://www.jerseyghouls.com)

## References:

- Contact me: [Click here](/me)
- My Works: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/works.md)
- Fullstackopen Course (#FSO): [Github.com/sahilrajput03/fullstackopen](https://github.com/sahilrajput03/fullstackopen), [fullstackopen.com/en](https://fullstackopen.com/en/)
- **Blockchain Development:**
	- Blockchain Portfolio: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/blockchain_portfolio.md)
	- **Learn blockchain: - [Click here](https://github.com/sahilrajput03/learn-blockchain)**
- **Ask me anything:** [Click here](https://github.com/sahilrajput03/askMeAnything)
- Linux:
	- **❤️Learn Arch Linux:** [Click here](https://docs.google.com/document/d/1o2UE4d3E5nMvfoaQP2_3G-dPjjf1719h8uLRltn3C1w/edit?tab=t.0) (Tags: #archlinux, #ngrok, #tailscale, #htop)
		- **❤️Learn Bash:** [Click here](https://docs.google.com/document/d/1o2UE4d3E5nMvfoaQP2_3G-dPjjf1719h8uLRltn3C1w/edit?tab=t.e75nn9rhxa2x#heading=h.v67slhjr85f1) (Tags: #learn bash, #learning bash, #bash programming, #bash coding)
			- **Learn Bash**: [github.com/sahilrajput03/learning-bash](https://github.com/sahilrajput03/learning-bash)  (with autodocs readme)
		- Learn Systemd: [Click here](https://docs.google.com/document/d/1o2UE4d3E5nMvfoaQP2_3G-dPjjf1719h8uLRltn3C1w/edit?tab=t.fl0vxmh4z9qa#heading=h.u6r9z5a3fq2h) ❤️ (most popular background process manager)
	- Learn KVM: [Click here](https://docs.google.com/document/d/1DnasbjTtdT44wsWCQxQWVvTRLACRX1yalBiuRYN_Eg4/edit#heading=h.oji92iddl8v)
	- **Learn Missing Semester (Notes):** [Click here](./missing-semester/)
	- Learn SSH: [Click here](https://docs.google.com/document/d/11_Gc4hjrtj1xs4Cxm6NeitjFSYfr_EoNU5C84FJpskU/edit?tab=t.0){: search-title="Learn `ssh-keygen` - Generate ssh key pairs (#generating ssh key)"} *(Tags: #learn `ssh-keygen`, #generate ssh key pairs, #generating ssh key)*
	- **Learn CLI binaries:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-cli-binary.md)
	- **PopOS Notes:** [sahilrajput03/my_bin/blob/master/notes/linux-notes.txt](https://github.com/sahilrajput03/my_bin/blob/master/notes/linux-notes.txt)
	- **Learn SOPS:** [Click here](https://github.com/sahilrajput03/devopswithkubernetes/tree/main/learn-sops)
	- **Vim-notes:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/vim.md)
- **Learn Vscode:** [Click here](https://docs.google.com/document/d/1xgL7mcIY0QsWgH_27DAlEF4w2FXHIelz6Zq852XCDIg/edit?tab=t.0#heading=h.kzus0jlf648n)
	- Using Vslive Share: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-vs-live-share.md){: search-title="Using Vslive Share"}
- **Config** Files Repo: [Click here](https://github.com/sahilrajput03/config)
- **Courses:** [Click here](https://docs.google.com/document/d/1rPTCIyUKA950XF4j0rQwZ_kUPL5liDX55vVnMvJgjfU/edit?tab=t.0#heading=h.bdv0cmaink4i)
- **Enlightment:** [Cick here](https://github.com/sahilrajput03/sahilrajput03/blob/main/enlightenment.md)
- **MongoDB, `mongoose`:**
	- **❤️Learn Mongodb Doc: [Click here](https://docs.google.com/document/d/1OT6IMR600VjWteJ-kqM0jVQuqQQw308hkh3enZnu9tQ/edit?tab=t.0)** [Tags: `#mongodump`, `#mongorestore`, `#mongosh`, `#bsondump`]
	- **❤️learning-monogo-and-mongoosejs - Github Repo:** [Click here](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs/tree/main)
		- **❤️Learn mongoosejs:** [test1.test.js](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs/blob/main/mongoosejs-with-flash-runner-cli/test1.test.js) (`mongoosejs-with-flash-runner-cli`)
		- **❤️Learn mongosh:** [Click here](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs/blob/main/mongosh-scripts-with-watcher/README.md) (`mongosh-scripts-with-watcher`)
		- **❤️Learn backup and restore mongodb:** [Click here](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs/tree/main/backup-and-restore) (`backup-and-restore`)
- **Hindi:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-hindi.md)
- **Jokes:** [Click here](https://xkcd.com/)
- **Learn Curl:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-curl.md)
- Git & Github:
	- **Learn Git:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-git.md)
	- **Leanr Git Large File Storage (LFS):** [Click here](https://docs.google.com/document/d/1HFKzirTi9qran6kXTgV6uZaqalOF_wwCsPuL-u0e0ew/edit?tab=t.0#heading=h.r53gdoqrdh0h)
	- **Learn GitHub:** [Click here](https://docs.google.com/document/d/1ViGPyzq_EY94KkBiOBBZjmcQJ2HlAL6OwmkwvsDskHQ/edit)
		- **Learn act:** [Click here](https://docs.google.com/document/d/1BcGk9VR4KrBxgqBY1mrfOZEwI7N4gfD780t5R6dQHxc/edit)
		- **Github Actions:** [Click here](https://docs.google.com/document/d/1OAbVQ4Vpyh_KpDhoojZHDc1RqRGNdh327rTl6u50tUs/edit?tab=t.0#heading=h.3oy9evxq5szk)
		- **CI/CD tool:** Github Actions , CircleCI, Travis, [Cloud Build](https://cloud.google.com/cloud-build) (Google, Deploying to GKE guide [here](https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-gke).)
	- How to write commit messages: [Click here](how-to-write-commit-messages.md)
- **My Github Templates:** [Click here](https://github.com/sahilrajput03?tab=repositories&q=&type=template)
- **Learn Gmail:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-gmail.md)
- **Learn Go:** [Click here](https://github.com/sahilrajput03/learn_go)
	- ❤️Official Go playground: [go.dev/play](https://go.dev/play)
- **Learn Regex:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-regex.md)
- **Learn Markdown:** [Click here](https://docs.google.com/document/d/1R8aAe8MvdabvqQhe-6B4C8phR_-O7PFtjl6amaT9ynQ/edit?tab=t.0#heading=h.eimnxlcp20m7)
- **Learn Perl:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-perl.md)
- **Learn qutebrowser:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/qutebrowser.md)
- **Learn Urdu:** [Click here](https://docs.google.com/document/d/1S75bOoPohg2JWhSJLcHtT6ipw1aUpq6wxvj8vppF-Ik/edit?tab=t.0#heading=h.as37s88j5mrc)
- **Url shorteners:** [Bitly](https://bitly.com/)
- **Learn Photoshop:**[Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-photoshop.md)
- **✅Telegram:**
	- **Learn Telegram Bot Requests:** [Click Here](https://github.com/sahilrajput03/telegram-bot-requests)
	- Why telegram (not whatsapp): [Click here](https://sahilrajput.com/essays)
	- Telegram Groups: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/telegram-groups.md)
	- FSO contribution (Ex. 11.18 - Telegram Bot Notification on deployment): [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/my-fso-contribution.md)
- Learn BitBucket \| Pipelines \| Bitbucket API: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-bitbucket.md)
- **Learn Google Development:**
	- Learn Google Play Console: [Click here](https://docs.google.com/document/d/1KtIn7M7YhA-ezcuJ9Wgb-l4WpT5fnSNXl9Zrpli6meE/edit?tab=t.dslr5jrd3lpw#heading=h.e3bzl4pl9b3d)
	- Learn Google Cloud Platform (Google Cloud Console): [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-google-cloud.md)
		- Console APIs via Oauth2 with Postman: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-google-console-apis-via-oauth2.md)
	- Learn Login with Google: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-google-auth.md)
	- Learn Google Analytics (GA) vs. Google Publisher Tags (GPT): [Click here](https://docs.google.com/document/d/1N05jA51Qx0NAkNL2zFoTI-bN6qeRB3QvauyhlUbb8cE/edit#heading=h.eh1wskjta02t)
		- Learn Google Analytics: [Click here](https://github.com/sahilrajput03/learn-react/tree/main/google-analytics-custom-solution)
		- Can Google index content that is rendered in the browser with JavaScript: [Click here](https://docs.google.com/document/d/1uTQeWrv6En4MYkPtX5RPNeRLtDv2mpsveVBhSRlETrg/edit?tab=t.0#heading=h.ucpnwfvh6ide)
		- Learn Publisher Tag via PubwiseAds: [Click here](https://github.com/sahilrajput03/learn-react/blob/main/pubwise-ads-integration/README.md) (PubwiseAds)
	- Learn Google Apps Script: [Click here](https://github.com/sahilrajput03/learn-google-apps-script)
	- Learn Google Calendar: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-google-calendar.md)
	- Learn Google Office Utility Tools (Docs, Sheets, Slides): [Click here](https://docs.google.com/document/d/1CvC-N3daE9P8k2d-joGwLtRez9Vm4La0o23w1xCLJOw/edit)
		- Tags: `Learn google docs`
	- Learn Google Maps: [Click here](https://docs.google.com/document/d/16dJSXZqb8SvjBi9DmpUHuUvtT3GR_EVeJ3uwR6Bslvk/edit#heading=h.5z2stpluvd27)
- **Open Source Apps from All over the world** - [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/open-source-apps.md)
- *Nocode tools vs. Low Code Tools:*
      - No-code tools require no programming skills to build applications, offering visual interfaces for users to drag and drop elements to create software.
      - Low-code tools allow users to build applications with minimal coding, typically involving a mix of pre-built components and some custom code for more complex functions.
      - No-code is more beginner-friendly, while low-code offers more flexibility for advanced users.
  - **Nocode tools**:
    - **List of nocode tools - Tweet:** [Click here](https://twitter.com/JustinSaaS/status/1516457662900314119)
    - [mmm.page](https://mmm.page) - [hosted on Vercel](https://vercel.com/blog/super-serves-thousands-of-domains-on-one-project-with-next-js-and-vercel)
    - [notion.com](https://www.notion.com)
    - [super.so](https://super.so) (Create Custom Websites with Notion) - [hosted on Vercel](https://vercel.com/blog/how-vercel-helps-mmm-page-manage-over-30-000-custom-domains)
    - [wix.com](https://www.wix.com/)
    - [carrd.co](https://carrd.co) - Simple, free, fully responsive one-page sites for pretty much anything.
    - [bubble.io](https://bubble.io/)
    - [shopify.com/in/pricing](https://www.shopify.com/in/pricing)
    	- Ecommerce Website Making \| Google Doc: [Click here](https://docs.google.com/document/d/13J6uBmzyjOI4g-oQ9TFz98KBR0hPdzX-wroAUEfZEZw/edit#heading=h.gg3ysj1q9gx4)
     - [wordpress.org](https://wordpress.org/), ([hosting](https://wordpress.org/hosting/))
     - Artificial Intelligence Tools:
     	- [lovable.dev](https://lovable.dev/)
    - [webflow.com](https://webflow.com/)
      - **Learn Webflow:** - [Click here](https://docs.google.com/document/d/1Y3XydED5IhfUVO1hZHAYOVvO0vP3wrMuFrKpmltLzXc/edit?tab=t.0)
- **Learn Deployment** - [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-deploy.md) (#ssl, #https, #certificates, #hostinger)
	- Learn Vercel Deployment: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-vercel.md)
		- ❤️ VERCEL: Official Demo of Client Side Rendering, Server Side Rendering, Static Site Generation and Incremental Static Regeneration: [Click here](https://csr-ssr-ssg-ssr.vercel.app/)
	- Learn Heroku Deployment: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-heroku.md)
- **Learn User Management and Permissions** - [Click here](https://docs.google.com/document/d/1peofLDv8DlPUg_88r9RnB7rkrPcVLH12Fm7sG44JT0E/edit?tab=t.0#heading=h.e6i7bkol4bkr) (Tags: #User Permissions)
- **Learn using nvm, bcoz WHY NOT?**: [Click here](https://github.com/sahilrajput03/nvm-autoswitching/)
- **Favourite youtube channels**: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/courses-list.md#awesome-tech-youtube-channels)
- **Learn WebRTC:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-webrtc.md)
- **Learn Nextjs:** [Click here](https://github.com/sahilrajput03/nextjs-examples-testing)
- **Learn Freelancing:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/free-lancing.md)
- Learn Upwork (private repository): [Click here](https://github.com/sahilrajput03/learn-upwork){: search-title="Learn Upwork (private repository)"}
- **Docker:**
	- **devopswithdocker:** [Click here](https://github.com/sahilrajput03/dockerHelsinki)
- **Kubernetes:**
	- **devopswithkubernetes**: [Click here](https://github.com/sahilrajput03/devopswithkubernetes)
	- **Why kubernetes?** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/why-kubernetes.md)
	- **kube-cluster-dwk**: [Click here](https://github.com/sahilrajput03/kube-cluster-dwk)
- **How to workrave?** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/why-and-how-to-workrave.md)
- **Modern Software Development Courses - India:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/modern-software-development-courses.md)
- **Why and how linux?** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/why-and-how-linux.md)
- **Service Worker:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-service-worker.md)
- **Learn Serverless:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-serverless.md)
- **Calling server functions from client directly:** [Click here](./learn-api-mount.md)
- **JS Conf 2022:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/notes-js-conf-2022.md)
- **Unreal Engine Game Deveopment - Game and Experience Design by Varun Mayya**: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/game-development.md)
- **Food, Diet Plan, Proteins:** [Click here](https://docs.google.com/document/d/1iLl-g8UoypLcXANbiaTp4Y4fqiPw1ulybeK5gdjgV40/edit?usp=sharing)
- **Learn Obs:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-obs.md)
- **Challau.com metaverse:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/challau-metaverse.md)
- **Drafts:** [Click here](./drafts)
- **Indus valley Reports:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-indus-valley-reports.md)
- **Avalon Meta:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/avalon-meta.md)
- **Learn Hasura:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-hasura.md)
- **OneGraph:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-one-graph.md) (Tags: #graphql, #one graph)
- **Cursor Based Pagination vs. Offset based Pagination:** [Click here](https://www.sitepoint.com/paginating-real-time-data-cursor-based-pagination/), [Another article @ apollo](https://www.apollographql.com/blog/graphql/pagination/understanding-pagination-rest-graphql-and-relay/), Inspiration - Kaltsoon's Sequelize Cursor based pagination npm package: [Click here](https://github.com/Kaltsoon/sequelize-cursor-pagination)
- **Youtube Hacks:**: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/youtube-hacks.md)
- **Learn Travis:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-travis.md)
- **Learn Socket.io/Websockets:** [Click here](https://github.com/sahilrajput03/learn-websockets)
- **Learn React:** [Github Repository](https://github.com/sahilrajput03/learn-react), ❤️[Google Doc](https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.0#heading=h.pzs518kfcp54)
	- Learn React Query: <a href="https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.m1wx5mlfo8st#heading=h.f8f1fm1aeb" search-title="Learn React Query">Click here</a> *(Tags: `#react-query`)*
- **Learn React Native**: [Click here](https://github.com/sahilrajput03/learn-react-native){: search-title="Learn React Native"}
- ❤️Funny Loading Messages: <a href="https://gist.github.com/meain/6440b706a97d2dd71574769517e7ed32" search-title="Funny Loading Messages">Click here</a>
- ❤️Meme makers: <a href="https://docs.google.com/document/d/14WQUE71-JsCF2sVOgVbsrxtbJgvw_AfnGrbx9V0YR4g/edit?tab=t.0" search-title="Meme makers">Click here</a>
- New React Alternative Tech - Docs:
	- SolidJS - Ryan Carniato - The World Beyond Components: [Click here](https://www.youtube.com/watch?v=O6xtMrDEhcE){: search-title="SolidJS - Ryan Carniato - The World Beyond Components"}
	- Svelte - Rich Harris - Rethinking reactivity - YouTube: [Click here](https://www.youtube.com/watch?v=AdNJ3fydeao){: search-title="Svelte - Rich Harris - Rethinking reactivity - YouTube"}
	- Benchmarks - New react project size - **vite:** 41mb, **bun:** 70mb, **cna:** 187mb, **cra:** 335mb *(Date: 10 Jul, 2022)*
- **Weird Problems:** - [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/weird-problems.md){: search-title="Weird Problems"}
- **Intro Guides to Platforms:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/intro-guide-to-platforms.md){: search-title="Intro Guides to Platforms"}
- **Learn axios:** [Click here](https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.i55h1tu7inku#heading=h.fk7lg6nr8jgk){: search-title="Learn axios"}
- **Learn nestjs:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-nestjs.md){: search-title="Learn nestjs"}
- **Learn heroku webhooks:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-web-hooks.md){: search-title="Learn heroku webhooks"}
- **Learn Twilio** [Click here](https://docs.google.com/document/d/1cUv_ofHediEo_VbUt63qrm3XXxrn6QMVjfQd3o9pbEA/edit?tab=t.0#heading=h.j4kdrmy99caa){: search-title="Learn Twilio"}
- **Learn: Why people want their service (restaurant, hotel, etc ) available first on website and only then on mobile native apps:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-why-websites-first-not-mobile-apps.md){: search-title="Learn: Why people want their service (restaurant, hotel, etc ) available first on website and only then on mobile native apps"}
- **Learn Typescript:** [Click here](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.z5fsf1uvmyy4#heading=h.x2uh6tk077mc){: search-title="Learn Typescript"} *Tags: #Typescript typechecking in javascript files with jsdoc*
- **Learn postman:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-postman.md){: search-title="Learn postman"}
- **Learn redux-toolkit:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-redux-toolkit.md){: search-title="Learn redux-toolkit"}
- **Learn stripe:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-stripe.md){: search-title="Learn stripe"}
- **Npm libaries I recommend:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-npm-libraries.md){: search-title="Npm libaries I recommend"}
- **Learn Mailservers:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/mail-server.md){: search-title="Learn Mailservers"}
- **❤️DSA in Javascript, Course:** [Click here](https://github.com/sahilrajput03/learn-dsa){: search-title="DSA in Javascript, Course"} (Tags: #algorithms)
- **Javascript:**
	- **Learn Javascript:** [Click here](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.3h5bga5u7t1e#heading=h.jvztvl5dilwd){: search-title="Learn Javascript (#lodash, #babel, #learn js)"} (`#lodash`, `#debounce`, `#throttle`, `#learn js`)
		- **Learn Proxy in Javascript (sahilrajput03/js-object-proxy):** [Click here](https://github.com/sahilrajput03/js-object-proxy){: search-title="Learn Proxy in Javascript (sahilrajput03/js-object-proxy)"}
		- Learn Javascript Date: [Click here](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.ti1walfa93tg#heading=h.oy8j1nluxilo){: search-title="Learn Javascript Date, Learn Date"}
	- ❤️ Learn Jest, Expect, Fishery, Luxon (DateTime): [Click here](https://docs.google.com/document/d/1PU8G6tpEYLJxXMgHoK5c37UFMbSXtENzpyIOohVsD_I/edit?tab=t.0){: search-title="Learn Jest/expect, fishery, luxon (DateTime)"}
	- ❤️ **Learn Expressjs:** [❤️Google Doc](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.0#heading=h.dv7500gv0vc2){: search-title="Learn Expressjs (Google Doc)"}, [Github Repo](https://github.com/sahilrajput03/learning_expressjs){: search-title="Learn Expressjs (Github Repo)"} *(Tags: #chalk, #learn nodemon)*
		- ❤️ Learn mocha: [Doc](https://docs.google.com/document/d/19lJnR9d93wplsKpdd7pfqqXUgKTWL2HZNYyo64mkFSE/edit?tab=t.0), [learn-express/learn-mocha](https://github.com/sahilrajput03/learn-express/blob/main/learn-mocha/README.md)
		- ❤️ Learn Node: [Click here](https://github.com/sahilrajput03/learn-express/tree/main/learn-node){: search-title="Learn Node, Learn NodeJs"} (Tags: System notifications with nodejs)
			- Few topics covered in above project's readme:
				- `spawn` vs. `fork` vs. `worker_threads`
					- `spawn` child process (preffered for non js programs)
					- `fork` child process (preffered for js programs)
					- `worker_threads` (preffered for multi threading in same process for cpu intensive tasks)
				- Is unix socket same as nodejs sockets? Be concise. (ChatGPT)
					- Difference between sockets vs. web sockets. Be concise. (ChatGPT)
		- **Learn nodejs or any other development in containers with debugger support (#Docker):** [Click here](https://github.com/sahilrajput03/learn-express/tree/main/development-in-docker-container){: search-title="Learn nodejs or any other development in containers with debugger support (#Docker)"}
		- **Learn Login flow (bcrypt) (#mermaid):** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-login-flow.md){: search-title="Learn Login flow (bcrypt)"}
		- ❤️ Jwt & Bcrypt Tests: [Click here](https://github.com/sahilrajput03/learn-express/blob/main/authorization/README.md){: search-title="❤️ Jwt & Bcrypt Tests"}
		- ❤️ Get words from book: <a href="https://github.com/sahilrajput03/learn-express/tree/main/get-words-from-book-text" search-title="Get words from book (in Learn Expressjs repo)">Click here</a>
	- **Convert javascript object to json - cli tool** - [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/obj-json.md){: search-title="Convert javascript object to json - cli tool"}
- **Nginx config files:** [Click here](https://github.com/sahilrajput03/config/tree/main/etc/nginx){: search-title="Nginx config files"}
  - Reverse proxy with `express-http-proxy` (npm library): [sahilrajput03/reverseProxy](https://github.com/sahilrajput03/reverseProxy){: search-title="Reverse proxy with `express-http-proxy` (npm library)"}
- **Leetcode: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-leetcode.md)**{: search-title="Leetcode"}
- Learn auth0: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-auth0.md){: search-title="Learn auth0"}
- **Css Design Trail**: [Click here](https://docs.google.com/document/d/1KsgIW760hNu3JSQx4AaWleXdmelOLZRE7cbgbOeNw9U/edit?tab=t.0#heading=h.22he9brwetc0){: search-title="Css Design Trail"} (#cssDesignTrail), [Github Repo](https://github.com/sahilrajput03/cssDesignTrail/tree/master)
	- Learn Bootstrap: [Click here](https://github.com/sahilrajput03/cssDesignTrail/blob/master/learn-bootstrap.md){: search-title="Learn Bootstrap"}
	- Learn Styled Components: [Click here](https://github.com/sahilrajput03/cssDesignTrail/blob/master/learn-styled-components.md){: search-title="Learn Styled Components"}
	- ❤️Course - Flexbox Zombies: [Click here](https://docs.google.com/document/d/1KsgIW760hNu3JSQx4AaWleXdmelOLZRE7cbgbOeNw9U/edit?tab=t.pp6x8uathec2#heading=h.1touzqiywbc8)
	- ❤️Course - Grid Garden: [Click here](https://docs.google.com/document/d/1KsgIW760hNu3JSQx4AaWleXdmelOLZRE7cbgbOeNw9U/edit?tab=t.g6ebe2pgyow4#heading=h.9w0y0p2x18n3)
- **Learn Tailwindcss:** [Click here](https://docs.google.com/document/d/1396RvrxYznLLas5_cTLCY1eNh6HZ2mlFtwdLF8gx0Ug/edit?tab=t.0)
- **Learn Figma:** [Click here](https://docs.google.com/document/d/1zt9YwENq2tRhh4lmTtct6P_fyx7Y-zH2VC5vyUkR4oU/edit){: search-title="Learn Figma (Website Designs ❤️)"} (#Website Designs ❤️)
- **Learn FigJam:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-figjam.md)
- Learn Elastic Search: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-elastic-search.md){: search-title="Learn Elastic Search"}
- Learn Storybook: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-storybook.md){: search-title="Learn Storybook"}
- Learn Eslint: [Click here](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.a76iz83ke569#heading=h.m92yaywhja27){: search-title="Learn Eslint"}
- Learn Prettier: [Click here](https://docs.google.com/document/d/1T-VclkyzwAxoJ519c5P9xRrn0ZjRtQF-Ueu1GviMJYo/edit?tab=t.0){: search-title="Learn Prettier"}
- Learn Chrome: [Click here](https://docs.google.com/document/d/1fAzO2SqqI4ROskp8S8SByt15zuGHqxXuFWGaNhYh8E0/edit?tab=t.0#heading=h.fnlk41kw2ytu){: search-title="Learn Chrome"}
	- Chrome Extensions (internal link in above doc): [Click here](https://docs.google.com/document/d/1fAzO2SqqI4ROskp8S8SByt15zuGHqxXuFWGaNhYh8E0/edit?tab=t.0#heading=h.337xzuqykeno){: search-title="Chrome Extensions (inside Learn Chrome Doc)"}
- Learn Trpc (Spoiler: Do not use trpc in any personal or production project ever): [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-trpc.md){: search-title="Learn Trpc (Spoiler: Do not use trpc in any personal or production project ever)"}
- Learn Paypal: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-paypal.md){: search-title="Learn Paypal"}
- Learn Paypal Subscription And Database Schema: [Click here](learn-paypal-subscription-and-database-schema.md){: search-title="Learn Paypal Subscription And Database Schema"}
- Learn Kdenlive (video editor): [Click here](https://docs.google.com/document/d/1Vsh1w57wuiJpFavR4md4H-F7thS-X5b174Uv2iCTe2U/edit){: search-title="Learn Kdenlive (video editor)"}
- Learn storyboook: [Click here](https://github.com/sahilrajput03/learn-react/tree/main/learn-storybook){: search-title="Learn storyboook"}
- Friends, Developer Connections: [Click here](https://sahilrajput.com/friends){: search-title="Friends, Developer Connections"}
- Learn Jira: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-jira.md){: search-title="Learn Jira"}
- Learn RxJs: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-rxjs.md){: search-title="Learn RxJs"}
- ❤️ Learn electron: [Click here](https://github.com/sahilrajput03/learn-electron)
- Learn Skype: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-skype.md){: search-title="Learn Skype"}
- Learn SEO, react-helmet: [Click here](https://github.com/sahilrajput03/react-seo-demo/tree/main){: search-title="Learn SEO, react-helmet"}
- Learn Leaflet (Opensource Maps library, Github: 37k*, Npm: 0.7m ↓): [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-leaflet.md){: search-title="Learn Leaflet (Opensource Maps library, Github: 37k*, Npm: 0.7m ↓)"}
- Validation Library:
	- Learn Zod: [Click here](https://github.com/sahilrajput03/learn-zod){: search-title="Learn Zod"}
	- Learn classvalidator: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-classvalidator.md){: search-title="Learn classvalidator"}
- Learn South Indian Bank - Internet Banking: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-south-india-bank.md){: search-title="Learn South Indian Bank - Internet Banking"}
- Learn Flameshot: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-flameshot.md){: search-title="Learn Flameshot"}
- ❤️ Learn PWA/TWA/WebAPK (Progressive Web Applications): [Click here](https://github.com/sahilrajput03/pwa-to-apk-using-twa/tree/main){: search-title="Learn PWA/TWA/WebAPK (Progressive Web Applications)"}
- **Learn Capacitor:** [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-capacitor.md){: search-title="Learn Capacitor"}
- Android:
	- **Learn Android:** [Click here](https://github.com/sahilrajput03/learning_android/blob/main/Readme.md){: search-title="Learn Android"}
	- **Development on Android with Termux**: [Click here](https://docs.google.com/document/d/1pc7cMCXI1TFuUs1alpxZh6KBSgILpV6NmdmsLicvwfQ/edit?tab=t.0#heading=h.4y47i2ps7c5r)
	- **Favorite Android Apps:** [Click here](https://docs.google.com/document/d/1m2RrhfVs5znjhg-CUoUjzmOVu2kZOgLdjw74rdKwttI/edit?tab=t.0#heading=h.3uc2ke93uyrf)
- ❤️ Learn Automate (andorid automation app): [Click here](https://docs.google.com/document/d/11Fyoox3T8T1y-TYNR69Y7y91YRkzt6dsfd6WVADYqeI/edit?tab=t.0)
- ❤️Learn Web Notifications: [Click here](https://github.com/sahilrajput03/learn-express/tree/main/node-push-notifications) *(Tags: Push notifications)*
- Learn Artificial Intelligence Development (prompting, etc): [Click here](https://docs.google.com/document/d/1yUaJp0BtPbT9pAuIZ8pUxmer_W-9qXoE7rNpnLuPLQA/edit?tab=t.juqaf7ck3yrz#heading=h.g09cwp7crv6x){: search-title="Learn Artificial Intelligence Development (prompting, etc)"}
- Learn ChatGPT (My Notes): [Click here](learn-chatgpt.md){: search-title="Learn ChatGPT (My Notes)"}
- Learn Remix: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-remix.md){: search-title="Learn Remix"}
- Learn Audacity: [Click here](https://docs.google.com/document/d/1RB2Kc2O3_mbiZcrCOcXwQZNOG3d48-1cWNz8t88llyE/edit){: search-title="Learn Audacity"}
- Learn i3: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-i3.md){: search-title="Learn i3"}
- Learn Cloudflare: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-cloudflare.md){: search-title="Learn Cloudflare"}
- Learn Gist: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-gist.md){: search-title="Learn Gist"}
- Learn streaming mp3 file: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-streaming.md){: search-title="Learn streaming mp3 file"}
- LoveApi, Official Github Api, Official Gist Api & Other Apis ♡ ♥ ❤: [Click here](https://gist.github.com/sahilrajput03/e4a8370456e55260864f732b16f9878d){: search-title="LoveApi, Official Github Api, Official Gist Api & Other Apis ♡ ♥ ❤"}
- Learn GTK (GUI Development in C, Linux): [Click here](https://github.com/sahilrajput03/learn-gtk){: search-title="Learn GTK (GUI Development in C, Linux)"}
- Why you should not text your girlfriend?: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/why-you-should-not-text-your-girlfriend-much.md){: search-title="Why you should not text your girlfriend?"}
- Learn Anydesk: [Click here](learn-anydesk.md){: search-title="Learn Anydesk"}
- My youtube video ids: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/main/my-youtube-video-ids.md){: search-title="My youtube video ids"}
- Learn Amazon Product Advertising API: [Click here](learn-amazon-product-advertising-api.md){: search-title="Learn Amazon Product Advertising API"}
- Web Components: [Click here](https://github.com/sahilrajput03/learn-web-components){: search-title="Web Components"}
- Learn Deno: [Click here](https://github.com/sahilrajput03/deno-playground){: search-title="Learn Deno"}
- Learn Flutter: [Click here](https://github.com/sahilrajput03/learn-flutter){: search-title="Learn Flutter"}
- Learn Emojis 😇😃🚀😎😻💯💫💣: [Click here](https://tools.picsart.com/text/emojis/), [2](https://emojipedia.org/){: search-title="Learn Emojis 😇😃🚀😎😻💯💫💣"}
- 🚀 Learn limiting concurrent requests with [`queue()`](https://caolan.github.io/async/v3/docs.html#queue) of [`async`](https://caolan.github.io/async/v3/) library (awesome): [Click here](https://github.com/sahilrajput03/learn-express/blob/main/learn-limiting-concurrent-requests.md){: search-title="🚀 Learn limiting concurrent requests with queue() of async library (awesome)"}
- Learn Steam (games): [Click here](learn-steam.md){: search-title="Learn Steam (games)"}
- Learn KeepassXC: [Click here](learn-keepassxc.md){: search-title="Learn KeepassXC"}
- Learn infinite: [Click here](learn-infinite.md){: search-title="Learn infinite"}
- 🚀🚀 Learn mocp (Music on Console): [Click here](learn-mocp.md){: search-title="🚀🚀 Learn mocp (Music on Console)"}
- Learn LinkedIn: [Click here](learn-linkedin.md){: search-title="Learn LinkedIn"}
- Learn Ubuntu: [Click here](https://docs.google.com/document/d/1eDQQOdAXI2ihob4qvysJMdphUeUdeizZXN1V90QHXeA/edit){: search-title="Learn Ubuntu"}
- Learn macOS: [Click here](https://docs.google.com/document/d/1d4Tq28JC17lFqkoz3lqodACnOlCihFj-MnzNb2Vcqd8/edit?pli=1){: search-title="Learn macOS (Sahil)"}
	- Learn macOS - Samaksh: [Click here](https://docs.google.com/document/d/1N310qOwvRuu1K3zzpChj3Tt6qPMhtFQ7W2RGSSIrw8U/edit#heading=h.ggwji2r8315h){: search-title="Learn macOS - Samaksh"}
- Learn making hardcover from paperback books: <a href="https://docs.google.com/document/d/14abXkjtuNyZAQW2QZMUxIcQmfEK7i3IZxaT_0NC7C0k/edit#heading=h.prohzhw7w5zw" search-title="Learn making hardcover from paperback books">Click here</a>
- Charge battery when it hits below 30% and stop charging when it reaches 80%: <a href="https://www.reddit.com/r/samsung/comments/116wjww/is_it_better_to_charge_to_80_or_100/" search-title="Reddit - Charge battery when it hits below 30% and stop charging when it reaches 80%">1</a>, <a href="https://www.quora.com/Is-it-good-to-charge-your-phone-to-100-for-a-good-battery-life" search-title="Quora - Charge battery when it hits below 30% and stop charging when it reaches 80%">2</a>
- Learn RaspberryPi: <a href="https://github.com/sahilrajput03/learn-raspberry" search-title="Learn RaspberryPi">Click here</a>
	- learn-raspberryPi (github repo) (backuped files): <a href="https://github.com/sahilrajput03/learn-raspberrypi" search-title="learn-raspberryPi (github repo) (backuped files)">Click here</a>
- Learn Sandpack: <a href="https://github.com/sahilrajput03/learn-sandpack">Click here</a> (<a href="https://learn-sandpack.vercel.app/" search-title="Learn Sandpack">view live</a>)
- 🚀🚀 Learn Jekyll and running github pages locally: <a href="https://github.com/sahilrajput03/learn-rubyOnRails/blob/main/README-new.md" search-title="🚀🚀 Learn Jekyll and running github pages locally">Click here</a>
- Media:
	- Shark Tank Season 1 - Youtube: <a href="https://www.youtube.com/playlist?list=PLzufeTFnhupwqGc-IVUPwviLVP0gsx8_w" search-title="Shark Tank Season 1 - Youtube">Click here</a>
	- Shiv Mahapuran - Youtube: <a href="https://www.youtube.com/playlist?list=PL57F01972FF119B66" search-title="Shiv Mahapuran - Youtube">Click here</a>
- Learn `Xournal`: <a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/arch-notes.md#installed-xournalpp-pp-means--ie-xournal" search-title="Learn `Xournal`">Click here</a>
- Learn Plantation: [Click here](https://docs.google.com/document/d/1qm3S7SGHRGEM-w_ezwNM2FvCNI0g5KjAsX6osjz8xMY/edit?tab=t.0#heading=h.m6ux68izqyo3)
	- Learn Hyperlocal Farm: <a href="https://docs.google.com/document/d/1qm3S7SGHRGEM-w_ezwNM2FvCNI0g5KjAsX6osjz8xMY/edit?tab=t.ru1w03sib1ni#heading=h.ed1i6s3qh7kf" search-title="Learn Hyperlocal Farm">Click here</a> (#plantation, #crops, #food)
- Learn Airbnb: <a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-airbnb.md" search-title="Learn Airbnb">Click here</a>
- TODO: Do the flutter codelab. 💣💣
- Learn Microfrontend: <a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-microfrontend.md" search-title="Learn Microfrontend">Click here</a>
- Learn Framer Motion: <a href="https://github.com/sahilrajput03/learn-framer-motion" search-title="Learn Framer Motion">Click here</a>
- Learn YAML (yml): <a href="https://docs.google.com/document/d/1c7hwOgDxTdmq7r8zizRB41laZckAQMCDqKiZyunu3vY/edit#heading=h.upp303fp6kd0" search-title="Learn YAML (yml)">Click here</a>
- Learn Makefile: <a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/learn-bash.md#learn-makefile" search-title="Learn Makefile">Click here</a>
- Learn GIMP: <a href="https://docs.google.com/document/d/1dCsc5U7XAOIaPub1OlSsJk4FectuRPj3ceqFlz_Js8Q/edit" search-title="	">Click here</a>
- Learn Svelte: <a href="https://github.com/sahilrajput03/learn-svelte" search-title="Learn Svelte">Click here</a>
- Learn Playwright: <a href="https://github.com/sahilrajput03/learn-playwright" search-title="Learn Playwright">Click here</a>
- Learn C: <a href="https://github.com/sahilrajput03/learn-c" search-title="Learn C">Click here</a>
- Learn C++: <a href="https://github.com/sahilrajput03/learning_cpp" search-title="Learn C++">Click here</a>
- Learn IoT and C (Doc): <a href="https://docs.google.com/document/d/1lN2vAJOs3Y2MBMWyNfH0RZHajUYMwEZD_Tl9QI1fssM/edit#heading=h.38q71c1y77op" search-title="Learn IoT and C (Doc)">Click here</a>
- Learn SolidJS: <a href="https://github.com/sahilrajput03/learning-solidjs" search-title="Learn SolidJS">Click here</a>
- Learn AWS (Amazon Web Services): <a href="https://docs.google.com/document/d/1cyxau6M3dstUIWs9U9ARQwRG9VaGSZL-1a0-DmNbxps/edit#heading=h.st3h0wewxb10" search-title="Learn AWS (Amazon Web Services)">Click here</a>
- Status Page Technologies:
	- statuspage by atlassian: [Click here](https://www.atlassian.com/software/statuspage){: search-title="Status Page Service by Atlassian"}
 		- Used by OpenAI: [Click here](https://status.openai.com/uptime){: search-title="OpenAI - Status Page"} (Uses - https://incident.io/pricing)
 	- Other alternatives of *statuspage* - Google Search: <a href="https://www.google.com/search?q=status+page+like+services" search-title="Other alternatives of *statuspage* - Google Search">Click here</a>
- **Learn Sanskrit:** <a href="https://docs.google.com/document/d/1dSTyoamZ-Pec-xIGwFPM6hkMSw3Nk-6B93FdX2iK8fU/edit" search-title="Learn Sanskrit">Click here</a>
- SBI Bank Cyber Security Guidelines, Hindi: <a href="https://docs.google.com/document/d/1tb_tI6COZf78ME-LgCNbdXh7GT1k_WeR7-p7yqXfm5I/edit" search-title="SBI Bank Cyber Security Guidelines, Hindi">Click here</a>
- Learn Python Repo: <a href="https://github.com/sahilrajput03/learn-python" search-title="Learn Python - Github Repo">Click here</a>
	- Learn Python Doc: <a href="https://docs.google.com/document/d/1A3uFSiQv_FtVT9IAJ6fB2gxJwdjMEMLsDE6sSNZTnn8/edit" search-title="Learn Python - Doc">Click here</a>
- Learn Outlook: <a href="https://docs.google.com/document/d/1YpexQLJNdNrQhjidRt38bC49hcgiIO_hAPqfGSEds8Y/edit#heading=h.2mmi0x1sciq7" search-title="Learn Outlook">Click here</a>
- Learn Adobe Acrobat Reader: <a href="https://docs.google.com/document/d/1H66PnT3q8uUXEdSePyw89X4E5UpaTeXEYEGo03LUeig/edit#heading=h.faibccl9c26h" search-title="Learn Adobe Acrobat Reader">Click here</a>
- Learn Cloudinary: <a href="https://docs.google.com/document/d/1a2lUrjw_Yb83VS1vdbY4VdRRXGZ_gU6WLnNv3v9z_Ic/edit?tab=t.0" search-title="Learn Cloudinary">Click here</a>
	- Cloudinary primarily provides cloud-based media management, enabling users to store, optimize, transform, and deliver images and videos efficiently across web and mobile platforms.
	- <a href="https://github.com/sahilrajput03/learn-cloudinary" search-title="sahilrajput03/learn-cloudinary">sahilrajput03/learn-cloudinary</a>
- Learn HTMx: <a href="https://docs.google.com/document/d/1O2PPUAtUGDW5janNboDhcPpq53F-B3H1Lt2hhdgShhE/edit?tab=t.0" search-title="Learn HTMx">Click here</a>
- Learn Fediverse \| Mastodon: <a href="https://docs.google.com/document/d/1jDg0bbDG2fLH_OsctFAHJ1JMxToaBhCieWBHhuZTaOs/edit?tab=t.0" search-title="Learn Fediverse | Mastodon">Click here</a>
- Learn NDE: <a href="https://docs.google.com/document/d/1xkDQfzA-6MsIiTaGL5y4_Hvy1v1vhinJQ6QDQ8UdZ7U/edit?tab=t.0" search-title="Learn NDE">Click here</a>
- UUID Generator in Web (#hash, #hashid): <a href="https://www.uuidgenerator.net" search-title="UUID Generator in Web">www.uuidgenerator.net</a>
- Learn Machine Learning: <a href="https://docs.google.com/document/d/1ctpjEF820WJtDRjtKNpyOfNPcUbwC2EMuhEfBcBrIIc/edit?tab=t.0" search-title="Learn Machine Learning">Click here</a>
- Syncing backend and frontned code (e.g, `types.ts` file) and have isomorphinc aka universal directory (file/files) across repositories (fronend, backend): <a href="https://github.com/sahilrajput03/sahilrajput03/blob/main/isomorphic-code.md" search-title="Syncing backend and frontend code (e.g., `types.ts` file) and having an isomorphic aka universal directory (file/files) across repositories (frontend, backend)">Click here</a>
- Learn Ayurveda: <a href="https://docs.google.com/document/d/1_zy8T0siCeCuL0rGksUuEBy4ZYg7uZTW9BR-y85UBR0/edit?tab=t.0" search-title="Learn Ayurveda">Click here</a>
- Learn Dyaan/Meditation: <a href="https://docs.google.com/document/d/1gjb_VQAV9SODX8AsubtNXX4qtmTUBOqwkbbZTjP3stQ/edit?tab=t.0#heading=h.tc9ukx6oxone" search-title="Learn Dyaan/Meditation">Click here</a>
	- Learn Heartfullness: <a href="https://docs.google.com/document/d/1WPbWXvXWyJTcpFLigm52cOa90IwAp1nI8aZ8FgUj-CQ/edit?tab=t.0" search-title="Learn Heartfullness">Click here</a>
- Glass Thoughts: <a href="https://sveltev5.vercel.app/glass" search-title="Glass Thoughts">Click here</a>
- Learn Accessibility: <a href="https://docs.google.com/document/d/1FsP4uZQl3oMRb9LKOuU1jzrvEvigce-NyllIXp2LweQ/edit?tab=t.0#heading=h.xl4iqlcuuql3" search-title="Learn Accessibility">Click here</a>
- Learn `.editorconfig` file : <a href="https://editorconfig.org/" search-title="Learn `.editorconfig` file">Click here</a>
	- Formal Specification (mentioned on above site): [Click here](https://spec.editorconfig.org)
	- Used in svelte website project: [Click here](https://github.com/sveltejs/svelte/blob/main/.editorconfig)
- Learn Java: <a href="https://github.com/sahilrajput03/learning_java" search-title="Learn Java">Click here</a>
- When was electricity, motor, bulb?: <a href="https://docs.google.com/document/d/1rBAz5F1Y6Qtt7fUyCtGM4ltU67Utjd29vY63QrIua5U/edit?tab=t.0" search-title="When was electricity, motor, bulb?">Click here</a>
- Is .NET and ASP.NET the same? (ChatGPT): <a href="https://docs.google.com/document/d/1jj8PMJA5rOrKwH0X0mtaaoMRdV4StxhQdqaTsok6Lb0/edit?tab=t.0#heading=h.favfgh2zw0g9" search-title="Is .NET and ASP.NET the same? (ChatGPT)">Click here</a>
- Learn Coqui (TTS): <a href="https://docs.google.com/document/d/1vLChB48hYVlwu6bhwT7aIJB2yF9mankkKmN56P3XWTo/edit?tab=t.0" search-title="Learn Coqui (TTS)">Click here</a>
- Learn YouTube: <a href="https://docs.google.com/document/d/1t5TkoOwuV1we5Iz5SdCrwl0rrO81PtJq7ja7e7f0y10/edit?tab=t.0#heading=h.28mi74v8cmec" search-title="Learn YouTube">Click here</a>
- Learn Generating Authenticator code (TOTP) programatically for browser automation login purpose (like google login / aws login): <a href="https://github.com/sahilrajput03/learn-playwright/blob/e014dd04078449c175d65f265f370b729e756bc0/test-otplib-authenticator.js" search-title="Learn Generating Authenticator code (TOTP) programatically for browser automation login purpose (like google login / aws login)">Click here</a>
- Browser For Terminal (svelte): <a href="https://github.com/sahilrajput03/browser-for-terminal" search-title="Browser For Terminal (svelte)">Click here</a>
- Learn Markdown Autodocs: <a href="https://docs.google.com/document/d/1kg532M0dHBGgLTuRvc5RznHdRJX_P259rlyof6784Vg/edit?tab=t.0" search-title="Learn Markdown Autodocs">Click here</a>
- ❤️ Learn Code Runner: <a href="https://docs.google.com/document/d/1xLXMFJSQide-kGKkkDRA2sjpApDR-eBlddl0cWyZJOE/edit?tab=t.0#heading=h.i48pxvjshf90" search-title="❤️ Learn Code Runner">Click here</a>
- asciinema.org - Record and share your terminal sessions, the simple way: <a href="https://asciinema.org" search-title="asciinema.org - Record and share your terminal sessions, the simple way.">Click here</a>
- Learn Medusa: <a href="https://docs.google.com/document/d/165AHcMpImHilElvtQQCXaOINBgAIOJDQDhIzilCi5bI/edit?tab=t.0" search-title="Learn Medusa">Click here</a>
- Learn pnpm: <a href="https://docs.google.com/document/d/1LkIzHHBajGRGiOn1Zd3-S4frKyl8zCttUxg6Qv6cUxY/edit?tab=t.0#heading=h.fkuov2w06tv0" search-title="Learn pnpm">Click here</a>
- Learn PostgresSQL, SQLite (+prisma), MySQL: <a href="https://github.com/sahilrajput03/learning_sql/tree/main" search-title="Learn PostgresSQL and SQLite (+prisma)">Click here</a> 
- ❤️⭐ Monorepo vs. Polyrepo, Why to have separate backend-frontend npm projects instead of a single npm project for frontend-backend: <a href="https://docs.google.com/document/d/15PieWH56pzC5Uh7WlCZit4nGOqfetmGi1aNqlmLymh4/edit?tab=t.0" search-title="❤️⭐ Monorepo vs. Polyrepo, Why to have separate backend-frontend npm projects instead of a single npm project for frontend-backend">Click here</a>
- Learn OneCard: <a href="https://docs.google.com/document/d/1pT_FQOE30KTWwcuYdYT-ZjQACIm4ozKbbM6s76Lfsqs/edit?tab=t.0" search-title="Learn OneCard">Click here</a>
- qr generators: <a href="https://docs.google.com/document/d/1neH211qetPGM9-WpeiQE1WSoIRo_TqdHYK7BudqVIC0/edit?tab=t.0" search-title="qr generators">Click here</a>
  - ❤️ [zxpsuper.github.io/qrcode-with-logos](https://zxpsuper.github.io/qrcode-with-logos)
- Learn Openai (github repository): <a href="https://github.com/sahilrajput03/learn-openai" search-title="Learn Openai (github repository)">Click here</a>
- Learn npm: <a href="https://docs.google.com/document/d/1COC4fBLeQ1iCm0pVIiily_YqdaP2EI991bDEss5KqkU/edit?tab=t.0" search-title="Learn npm">Click here</a>
- Libraries and tools available for creating application walkthroughs or guided tours for frontend applications during sign-up or onboarding processes: <a href="https://docs.google.com/document/d/1OPwv8ER_RNXAP0O_aYVQ40GxQl2VFuuzcSLjPMmIeDQ/edit?tab=t.0" search-title="Libraries and tools available for creating application walkthroughs or guided tours for frontend applications">Click here</a>
- **❤️Documentation Tools**:
	- Learn **VitePress** [Click here](https://docs.google.com/document/d/1EgtttfgHaw3vKx5cbVPZ7qgzDi3-DokBVFm16HdpWx0/edit?tab=t.0)
	- Learn **Gitbook**:
		- *How to run a gitbook [like this](https://github.com/sahilrajput03/refactoring-ui-summary-good-ui) (ChatGPT): [Click here](https://chatgpt.com/c/68d500da-1c7c-832e-b4fb-c6500809d518)*
		- Pricing: [Click here](https://www.gitbook.com/pricing) **(tldr; Premium needed only if you want to add custom domain)**
			- Free plan
				- No limit for number of sites ✅
				- Sync with GitHub or GitLab
				- **Publish with a gitbook.io domain**
		- (Deprecated) [https://github.com/GitbookIO/gitbook-cli](https://github.com/GitbookIO/gitbook-cli)
	- Learn - **Read the Docs**: <a href="https://github.com/sahilrajput03/python-docs/blob/main/README_NOTES.md" search-title="Learn Read the Docs">Click here</a> (TLDR; **Please use vitepress instead**)
	- just-the-docs: [Click here](https://github.com/just-the-docs/just-the-docs) [a jekyll template for writing docs, used for - https://spec.openapis.org]
- **❤️ Learn Vitejs, VitePress, Vitest**: [Click here](https://docs.google.com/document/d/1EgtttfgHaw3vKx5cbVPZ7qgzDi3-DokBVFm16HdpWx0/edit?tab=t.0){: search-title="❤️ Learn Vitejs, VitePress, Vitest"}
- Learn nps: <a href="https://docs.google.com/document/d/1EcbKSm-csGMfun5SBLhgc1HQeDUzX2zRf_4oAZRRzbs/edit?tab=t.0" search-title="Learn nps">Click here</a>
- Learn Algolia: <a href="https://docs.google.com/document/d/1WMaQCZ4rf4xs5mwJtBITiIwrJySLomLO_4YuNmK1X4k/edit?tab=t.0#heading=h.tdd10xy6k6gb" search-title="Learn Algolia">Click here</a>
- Learn `tiged` (alternate of degit): <a href="https://docs.google.com/document/d/1IEAkO2rUKV-fwVI4_6cqVuHvQq0zKkJyTmgKDa89WQo/edit?tab=t.0" search-title="Learn `tiged` (alternate of degit) (uses a tag)">Click here</a>
- ❤️ running-files-in-browser: <a href="https://github.com/sahilrajput03/running-files-in-browser" search-title="running-files-in-browser (#Running files in browser)">Click here</a>
- Privacy Page Examples: (Tags: #TOS)
	- Meta/Facebook:
	 	- Meta Terms for WhatsApp Business: [whatsapp.com/legal/meta-terms-whatsapp-business](https://www.whatsapp.com/legal/meta-terms-whatsapp-business)
			- Policy on Government and Political Use: [business.whatsapp.com/policy?#policy_on_government_and_political_use](https://business.whatsapp.com/policy?#policy_on_government_and_political_use)
		- Meta Hosting Terms for Cloud API: [facebook.com/legal/Meta-Hosting-Terms-Cloud-API](https://www.facebook.com/legal/Meta-Hosting-Terms-Cloud-API)
 	- Google - Terms of Service: [policies.google.com/terms](https://policies.google.com/terms)
	- Telegram Privacy Policy [telegram.org/privacy](https://telegram.org/privacy)
	- Recaho: [Click here](https://www.recaho.com/qrCodePhotoMenu) (click on Terms and Conditions the page)
	- coqui.ai: [coqui.ai/privacy](https://coqui.ai/privacy)
	- Linode: [linode.com/legal](https://www.linode.com/legal)
 - ❤️ Watch youtube with friends (Tags: #watch youtube together, #watch together, #watch videos together): [Click here](https://docs.google.com/document/d/1nwVkznZWRmZ54rAF47EZxPeisB_ewWeVJ8FiKRfMX8w/edit?tab=t.0#heading=h.6o93yg7tpo0z)
- ❤️❤️❤️❤️  Process Signals: [Click here](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.bzks2lvu72f5#heading=h.tm42zb9edcgh)
	- 🙂 SIGTERM(15)[DEFAULT when you run `kill PID`, Trigger Graceful shutdown]
	- 🔪 SIGKILL(9)[Forceful killing , `kill -9 PID`, Cannot be handled by program]
	- ⚠️ SIGINT(2)[Terminate program by default, can be handled by program, **`Ctrl+c`**, `kill -2 PID`]
- Learn pm2: [Click here](https://docs.google.com/document/d/1f1_6fMv2B5TbGpWoMHdZQ2irZ8IRZCKH37k_SUpQvAI/edit?tab=t.0)
- Learn rendering pdf in a website: [Click here](https://docs.google.com/document/d/1jgZigS-UxccEEwL88_jfRw5ASD_lkwPfbxSI-wju0Ic/edit?tab=t.0)
- Learn wordpress development: [Doc](https://docs.google.com/document/d/16GdXBSDFBl1T9A_SJa1ITBGB1VBN0aAQ-VAoBpyEcXM/edit?tab=t.0), [Github](https://github.com/sahilrajput03/learn-wordpress-development)
- Good Printable Webpages:
  - All MDN Pages: [1](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - Articles from - Harvard: Professional & Executive Development Blog: [Click here](https://professional.dce.harvard.edu/blog/)
- Learn Linode: <a href="https://docs.google.com/document/d/1xpGpSkBjxQUNMau9c4fvTAoT0L906EQFzq6zzlQ9TAg/edit?tab=t.0#heading=h.z1kvvf6hoh5n" search-title="Learn Linode">Click here</a>
	- Learn cloud-init: <a href="https://docs.google.com/document/d/1xpGpSkBjxQUNMau9c4fvTAoT0L906EQFzq6zzlQ9TAg/edit?tab=t.c85m83vqctv9#heading=h.dqq51vq0kvum" search-title="Learn cloud-init">Click here</a>
	- Learn LXD (Lightweight open source virtualisation with LXD): <a href="https://docs.google.com/document/d/1xpGpSkBjxQUNMau9c4fvTAoT0L906EQFzq6zzlQ9TAg/edit?tab=t.g150r5yx5vsi#heading=h.sj47ws98mdbu" search-title="Learn LXD (Lightweight open source virtualisation with LXD)">Click here</a>
- Learn Open WebUI: [Click here](https://docs.google.com/document/d/1JJ7aBCTXtxqxOicD0dFGL0PlLQT-imqi8DX20wqkwis/edit?tab=t.0#heading=h.v1caooirt9mi)
- ❤️ Learn Husky (git hooks): [Click here](https://docs.google.com/document/d/18clx-fC9SYUBZC85Tk0ZyldIARNfCvQJTbQUPDS7Pjs/edit?tab=t.0)
- Learn Jenkins: [Click here](https://docs.google.com/document/d/1PpG_kmDHT-QI8A9BW89OklL8S1whsxUzHdohQJSSqBQ/edit?tab=t.0)
- ❤️ Learn Remote Debugging Tool - Chii and Eruda: [Click here](https://docs.google.com/document/d/1vwH9UlkHKdPQlI81l3ksozAgL33Shd3eHMjhOR7esAM/edit?tab=t.0)
- ❤️ Estimated Time (ET) & Task Deadline(TD) for Tasks and Project: [Click here](https://docs.google.com/document/d/1y1zX6WO7SfgxoX0Fe9tjMZhFspqYhoHayqSAiUWSVaw/edit?tab=t.0#heading=h.7bl2gjocpl5c)
- ❤️Learn Razorpay: [Click here](https://docs.google.com/document/d/1ExXrRMalD2i-ZBc2mOFSTh47asqkP8MRNiVtAW3lvlc/edit?tab=t.154p77cbsbnz)
- Learn Ruby on Rails: [Click here](https://github.com/sahilrajput03/learn-rubyOnRails)
- Learn php: [Click here](https://github.com/sahilrajput03/learning-php)
- Learn zapier: [From ChatGPT](https://chatgpt.com/c/689f7bef-2090-8323-8f6e-2de8135110cd) (zapier.com) (suggested resource from Pieter Levels in his book - "make", pg. 67)
- Customer Service:
	- Olark: [Click here](https://www.olark.com/) *(platform like Tawk, suggested by Pieter Levels in his book - "make", pg. 67)*
	- Intercom: [Click here](https://www.intercom.com) *(Used by AiSensy for ai chatbot, seems amazing to me❤️)*
	- Zendesk: [Click here](https://www.zendesk.com) *Another AI Agent service)
- Learn Bun: [Click here](https://docs.google.com/document/d/17bC0pmNsMlEuytkuhUBgFcrMzTTxfg85mhj_upTu3XA/edit?tab=t.0)
- WhatsApp Cloud API: *Refer your Daily Planner* (Tags: WhatsApp Bot, #whatsapp api)
- Learn Digital Marketing: [Click here](https://docs.google.com/document/d/1SPJ0Dvv8I0EThOcaqockdVcIxEEyPTGj-6EP_ZQG8zc/edit?tab=t.0)
- JSON-RPC: [Click here](https://www.jsonrpc.org/)
	- Awesome - Text to Video: [xtranormal.com](https://www.xtranormal.com/)
- Learn Numerology: [Click here](https://docs.google.com/document/d/12pf3QMIW3h9WN476wjFSriiKkR1n8jrkTHgw-ohaizE/edit?tab=t.0)
- npm packages:
	- backend: [Learn Express Doc](https://docs.google.com/document/d/17XV7gFZ2_rsPGg8uoDY8B1_fB06jsMuHx3O8gS3V6Q0/edit?tab=t.0)
 	- frontend: [Learn React Doc](https://docs.google.com/document/d/1OgimIPsmCXVlR2B6HI3YSbkDGqyYGwhaCpqOToeKSJg/edit?tab=t.0)
- Learn ANSI Common Lisp Doc: [Click here](https://docs.google.com/document/d/1RwyJIq2BK2aAg6gppS-dchKL2pX-6wmWBBDorLKj8aw/edit?tab=t.0#heading=h.6pdh5zv510ur)
- Learn Agreement Making: [Click here](https://docs.google.com/document/d/1YGXdDYN1Un9YdFfHvc5HIYDf0lMV7qgHVLek06amNcU/edit?tab=t.0)
- countingdownto.com: *(Tags: #Countdown, #dday)*
	- https://countingdownto.com/?c=6720497
- Ads:
	- https://www.carbonads.net (mongoosejs.com shows ads via carbon, I love these beautiful ads).
	- MDN has its own ads: [Click here](https://developer.mozilla.org/en-US/advertising)
- Learn Reasoning: [Click here](https://docs.google.com/document/d/1ITJVTKyzMnvibsFGeUWrL1LzV7G5t3mnH2-11RLw_d8/edit?tab=t.0)
- Learn Abacus: [Click here](https://docs.google.com/document/d/1P_qVMq0EW_OQjcRxv99cycbB8i433fBqhxZMDZauVQY/edit?tab=t.0#heading=h.fj1gjk5413d7)
- Learn Yarn: [Click here](https://gist.github.com/sahilrajput03/91691c60b52b1b3fe9992a45fa802b8d)

```md
Comparison of kramdown attribute markup vs. plain html markup: Both looks equally good to me.
- Learn `tiged` (alternate of degit): [Click here](https://docs.google.com/document/d/1IEAkO2rUKV-fwVI4_6cqVuHvQq0zKkJyTmgKDa89WQo/edit?tab=t.0){: search-title="Learn `tiged` (alternate of degit)"}
- Learn `tiged` (alternate of degit): <a href="https://docs.google.com/document/d/1IEAkO2rUKV-fwVI4_6cqVuHvQq0zKkJyTmgKDa89WQo/edit?tab=t.0" search-title="Learn `tiged` (alternate of degit) (uses a tag)">Click here</a>
```
- ❤️ How to get help in coding:
	- FullStackOpen.com: [Click here](https://fullstackopen.com/en/part0/general_info#how-to-get-help-in-discord)
- ❤️ Frequency Music Doc: [Click here](https://docs.google.com/document/d/1OrAYzLLd48K2OMt0HOaq2zZr2GzUHB84PeMhBUyg2ik/edit?tab=t.0)
- ❤️ Law of Attraction Doc: [Click here](https://docs.google.com/document/d/1wiDf0_s8HVXQ8M9h88W6YleimSPDR-WGlP6FP8bTaWs/edit?tab=t.ccxf0e15inp3)
- Learn IDB (indexeddb in browser): [Click here](https://github.com/sahilrajput03/qr-solution-frontend/blob/main/src/learn-indexedDB.html)
- Learn Game Theory: [Click here](https://docs.google.com/document/d/1rn62c3st-pP9il0fI1VG6Onel-m89fnaCvB6DQRXluo/edit?tab=t.0#heading=h.atj23bhfa1ru)
- Learn Body Language: [Click here](https://docs.google.com/document/d/1wHUC9cnBCM9mn0UfmCjQlRiyJBC4he1wB_3QHCErF-I/edit?tab=t.0)


<p align="right" style="font-style: italic;font-size: 0.6rem;">Made using Jekyll Template - <a target="_blank" href="https://github.com/abhinavs/moonwalk">abhinavs/moonwalk</a></p>


***Note to Sahil: Search Index done from bottom till "Learn React Native" link (moving upwards).***

***Note to Sahil: kramdown to anchor tags (html) done from bottom till "Learn macOS - Samaksh" link (moving upwards).***

<hr />


✅ **NOTE:** For files ending with .md (say `./foo.md`) are not direct links to github repository's page links. <ins>The plan is to render this page totally as html markup inside the svelte component near future and not make use of markdown (markdown to html converstaion) at all thus I will be able to leverage all facilities of modern svelte development framework. ❤️</ins>

- **⭐️PROMPTS FOR GROQ**
	- Convert the kramdown to html when i give you and keep the search-title attribute as it is and do not return anything else.

***

**Sample Slideshow:**
- <div>Please click once in the empty area of in the bottom gray border area to enable audio 🎶. <div>
- <i>Learn: <span style="color: red;">Clicking in the slide show (or using arrows or slide number) stops autoplay of slide show.</span> <b>To play again tap the <u>three-dots-icon > Autoplay > Play</u></b>.</i>

<!-- Note: Below link properties which you can customize - `start=true&loop=true&delayms=3000` -->
<!-- You can also refer file `slideshows/google-slides-1.html` -->
<iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vTDS14szJGSaxpXcUQKVhbqEi8_kfoImc319_CkbMCUFAUXqO28PNmeMcdBq2Wn74oGtydnD2sMDXgH/pubembed?start=true&loop=true&delayms=3000"
    frameborder="0" width="350" height="299" allowfullscreen="true" mozallowfullscreen="true"
    webkitallowfullscreen="true"></iframe>
