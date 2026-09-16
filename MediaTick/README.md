# MediaTick - Website background support


##  BREAKTHROUGH DISCOVERY 

We just tricked iPhones & Androids into running a real background timer using a silent MP3! 

The hack? A looping silent audio file keeps the media bar active, and when the timer ends, it seamlessly switches to an alarm sound! 

 No apps. No jailbreaks. Just pure web magic!

### This makes PWAs more usable, and easy!! Any apps that need background access which is a PWA can utilise this!

This project demonstrates a clever solution to create a real background timer that works across various devices and browsers—including iOS Safari, Android, and desktop browsers. The key discovery is a method to keep the music (media) bar active by using a silent audio stream and then seamlessly switching to an alarm sound when the timer ends.

## Overview

Many browsers, especially on iOS and some Android devices, block new audio from playing in the background. This solution circumvents that limitation by:

- Playing a silent MP3 in a loop to keep the audio session "alive" and the media controls visible.
- Preloading an alarm sound (initially set to a silent track) so that the audio element is already active.
- Swapping the silent audio with an actual alarm sound when the timer finishes, allowing the alarm to play without being blocked.

## Features

- **Cross-Platform Compatibility:** Works on iOS (Safari), Android, and desktop browsers.
- **Background Playback:** Keeps the media/music bar active even if the browser is in the background.
- **Seamless Audio Transition:** Uses a smart audio swap technique to play the alarm without user interaction at timer end.
- **User Controls:** Easily start, pause, and reset the timer.

## How It Works

1. **Silent Audio Loop:**  
   A silent MP3 (e.g., 5 seconds of silence) is played on loop to ensure the browser’s audio session stays active and the media bar remains visible.

2. **Preloaded Alarm Sound:**  
   The alarm audio element is preloaded with the silent MP3 so that the element is already playing when the timer starts.

3. **Audio Swap on Timer End:**  
   When the timer reaches zero, the source of the alarm audio element is swapped from the silent MP3 to an actual alarm sound (e.g., a continuous alarm). Since the alarm audio element was already active, this change is accepted by iOS Safari and other browsers.

4. **Media Session API (Optional):**  
   The solution can also leverage the Media Session API to show custom metadata and media controls in the notification panel on supported devices.

## Usage

1. Clone the repository.
2. Open `index.html` in your preferred browser.
3. Enter the desired timer duration (in seconds) and click **"Start Custom Timer"**.
4. The silent audio plays in the background to keep the media controls active.
5. When the timer ends, the alarm sound starts—allowing you to pause it from the music bar if needed.

## Credits
ChatGPT (GPT-4o and GPT-o3 mini, Feb 18 2025 version): For the inspiration and guidance in developing this solution.
kaheichan, Shellcraft Designs: For integrating, testing, and sharing this discovery.

## License
This project is released under the MIT License.
Feel free to use, modify, and distribute it as you like.

