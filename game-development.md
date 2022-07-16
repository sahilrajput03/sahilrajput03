# Game Development with Unreal Engine ~ Varun Mayya

FYI: Meta human Creator, RealityScan - A mobile app to create assets.

**UPDATE: UnrealEngine-4.23.1-release works good on my laptop with amd raedo m330 graphic card.**

Game and Experience Design - Playlist (49 vids) ~ Varun Mayya: [Click here](https://www.youtube.com/playlist?list=PL5DRb6AX7P4i0B-TErAp7Ur7LOoT9zzaM)

Installation:

Official Download: https://www.unrealengine.com/en-US/download

Official Guided Install process (linux) with screenshots: [Click here](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Linux/BeginnerLinuxDeveloper/SettingUpAnUnrealWorkflow/)

# installation for arch linux: 

Clone or Download zip of this repo: https://github.com/EpicGames/UnrealEngine#linux.

Follow installation tutorial for linux @ https://www.youtube.com/watch?v=0uqa1A7UlTk

## Design Course by Avalon Meta

Complete Playlist: Design [Click here](https://www.youtube.com/playlist?list=PL5DRb6AX7P4i8sLm2Nrvnvb_nTBoKjx7V)

Design 04: Layers: https://youtu.be/Go6dwS1Jg1Q

## vulkan guidance

Vulkan is a low-overhead, cross-platform API, open standard for 3D graphics and computing. Vulkan targets high-performance real-time 3D graphics applications, such as video games and interactive media. It is highly perfomant for linux os. And unreal engine 5 has good support for it. But my laptop's graphic card doesn't support vulkan or may be drivers aren't made. 

```
# CHECK IF VULCAN IS WORKING:
# Install via yay:
sudo pacman -S vkcube-git
# usage: vkcube
## currently shows No Vulkan devices found.

https://forums.unrealengine.com/t/vulkan/242035
```

- [Unity vs. unreal](https://unrealcommunity.wiki/differences-between-unity-and-unreal-b2c4rqwm)

The Render Hardware Interface (RHI) is an abstraction layer over several platform-specific graphics APIs. It is designed from the ground up to take advantage of DirectX 12, Vulkan, and Metal 2.0. 


## installing ver. 4.17

```bash
# Required dependency coz `setup.sh` fails.
yay -S qt4-bin

# Source: https://github.com/EpicGames/UnrealEngine/releases
# Source: https://rhyce.dev/2019/05/02/compiling-unreal-engine-4-from-source/

./Setup.sh
./GenerateProjectFiles.sh
sudo chmod 700 ../currentFolder
sudo chown array -R ../currentFolder
make
./Engine/Binaries/Linux/UE4Editor
# If you’re getting any errors about Vulkan such as “Cannot find a compatible Vulkan device or driver.” just add -opengl4 as a launch parameter like so:
./Engine/Binaries/Linux/UE4Editor -opengl4
```
