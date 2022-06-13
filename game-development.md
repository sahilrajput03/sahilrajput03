# Game Development with Unreal Engine ~ Varun Mayya

Game and Experience Design - Playlist (49 vids) ~ Varun Mayya: [Click here](https://www.youtube.com/playlist?list=PL5DRb6AX7P4i0B-TErAp7Ur7LOoT9zzaM)

Installation:

Official Download: https://www.unrealengine.com/en-US/download



# installation for arch linux: 

Clone or Download zip of this repo: https://github.com/EpicGames/UnrealEngine#linux.

Follow installation tutorial for linux @ https://www.youtube.com/watch?v=0uqa1A7UlTk

```bash
## Below is needed to be done as well: (else `GenerateProjectFiles.sh` will fail)
sudo pacman -S dotnet-sdk
yay -S libicu50 --noconfirm
# src: https://community.gamedev.tv/t/unrealengine-compiling-error-when-generateprojectfiles-sh/199274
```

```bash
# I EDITED FILE: GenerateProjectFiles.sh as guided here: https://stackoverflow.com/a/72576052/10012446
## BCOZ `sudo ./GenerateProjectFiles.sh` was throwing ssl certificate errors. ~ Sahil
#!/bin/sh
# Copyright Epic Games, Inc. All Rights Reserved.

set -e

cd "`dirname "$0"`"

if [ ! -f Engine/Build/BatchFiles/Mac/GenerateProjectFiles.sh ]; then
	echo "GenerateProjectFiles ERROR: This script does not appear to be located \
       in the root Unreal Engine directory and must be run from there."
  exit 1
fi 

if [ -f Setup.sh ]; then
	if [ ! -f .ue4dependencies ]; then
		echo "Please run Setup to download dependencies before generating project files."
		exit 1
	fi
fi

if [ "$(uname)" = "Darwin" ]; then
	cd Engine/Build/BatchFiles/Mac
	sh ./GenerateLLDBInit.sh
	sh ./GenerateProjectFiles.sh "$@"
else
	# Added below two lines ~ Sahil
	export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
	export SSL_CERT_DIR=/dev/null

	# assume (GNU/)Linux
	cd Engine/Build/BatchFiles/Linux
	bash ./GenerateLLDBInit.sh
	bash ./GenerateGDBInit.sh
	bash ./GenerateProjectFiles.sh "$@"
fi
```

```txt
### OTHER SHIT ###
Google Search: epic games launcher aur [Aur](https://aur.archlinux.org/packages/heroic-games-launcher-bin), [Github](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher).

Feaures (is it a development engine - NO ~ IMO Sahil, [refer here](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher#features-available-right-now))

**what I did yet?**

yay -S heroic-games-launcher-bin
```

## Design Course by Avalon Meta

Complete Playlist: Design [Click here](https://www.youtube.com/playlist?list=PL5DRb6AX7P4i8sLm2Nrvnvb_nTBoKjx7V)

Design 04: Layers: https://youtu.be/Go6dwS1Jg1Q

## vulkan guidance

```
# CHECK IF VULCAN IS WORKING: 1



# CHECK IF VULCAN IS WORKING: 2
# Install via yay:
sudo pacman -S vkcube-git
# usage: vkcube
## currently shows No Vulkan devices found.

https://forums.unrealengine.com/t/vulkan/242035


```

- [Unity vs. unreal](https://unrealcommunity.wiki/differences-between-unity-and-unreal-b2c4rqwm)
