# Learn mocp

**MOC - Console audio player**

Config file: `~/.moc/config`

- Open current directory: `mocp .`
- Commonly used:
 - `n` for next song, `b` for previous song.
 - `[` and `]` to silent seek
 - `,` and `.` to increase/decrease music (use `<` and `>` to increase song by 1%
 - `LEFT` / `RIGHT` to **seek forward / backward by 5 seconds** (UPDATED in config file: `SeekTime = 5`)
 - `[` / `]` to seek forward / backward by 5 seconds (UPDATED in config file: `SilentSeekTime = 5`)
- Use `h` to show help as shown below:

```txt
q              Detach MOC from the server
ENTER          Start playing at this file or go to this directory
DOWN           Move down in the menu
UP             Move up in the menu
PAGE_DOWN      Move one page down
PAGE_UP        Move one page up
HOME           Move to the first item in the menu
END            Move to the last item in the menu
Q              Quit
s              Stop
n              Play next file
b              Play previous file
p SPACE        Pause
f              Toggle ReadTags option
S              Toggle Shuffle
R              Toggle Repeat
X              Toggle AutoNext
TAB            Switch between playlist and file list
l              Switch between layouts
               Switch on/off play time percentage [unassigned]
a              Add a file/directory to the playlist
C              Clear the playlist
A              Add a directory recursively to the playlist
Y              Remove playlist entries for non-existent files
<              Decrease volume by 1%
>              Increase volume by 1%
,              Decrease volume by 5%
.              Increase volume by 5%
RIGHT          Seek forward by n-s
LEFT           Seek backward by n-s
h ?            Show the help screen
M              Hide error/informative message
^r ^l          Refresh the screen
r              Reread directory content
H              Toggle ShowHiddenFiles option
m              Go to the music directory (requires config option)
d              Delete an item from the playlist
g /            Search the menu
V              Save the playlist
^t             Toggle ShowTime option
^f             Toggle ShowFormat option
o              Play from the URL
G              Go to the currently playing file's directory
i              Go to a directory
U              Go to '..'
^g ^n          Find the next matching item
^x ESCAPE      Exit from an entry
]              Silent seek forward by 5s
[              Silent seek backward by 5s
M-1            Set volume to 10%
M-2            Set volume to 20%
M-3            Set volume to 30%
M-4            Set volume to 40%
M-5            Set volume to 50%
M-6            Set volume to 60%
M-7            Set volume to 70%
M-8            Set volume to 80%
M-9            Set volume to 90%
'              Mark the start of a block
"              Mark the end of a block
!              Go to a fast dir 1
@              Go to a fast dir 2
#              Go to a fast dir 3
$              Go to a fast dir 4
%              Go to a fast dir 5
^              Go to a fast dir 6
&              Go to a fast dir 7
*              Go to a fast dir 8
(              Go to a fast dir 9
)              Go to a fast dir 10
UP             Go to the previous entry in the history (entry)
DOWN           Go to the next entry in the history (entry)
^u             Delete to start of line (entry)
^k             Delete to end of line (entry)
x              Toggles the mixer channel
w              Toggles the software-mixer
E              Toggles the equalizer
e              Reload EQ-presets
K              Select previous equalizer-preset
k              Select next equalizer-preset
J              Toggle mono-mixing (when softmixer enabled)
u              Move playlist item up
j              Move playlist item down
^u             Add a URL to the playlist using entry
T              Switch to the theme selection menu
F1             Execute ExecCommand1
F2             Execute ExecCommand2
F3             Execute ExecCommand3
F4             Execute ExecCommand4
F5             Execute ExecCommand5
F6             Execute ExecCommand6
F7             Execute ExecCommand7
F8             Execute ExecCommand8
F9             Execute ExecCommand9
F10            Execute ExecCommand10
L              Display lyrics of the current song (if available)
P              Toggle displaying full paths in the playlist
z              Add (or remove) a file to (from) queue
Z              Clear the queue
```


## Help

```txt
$ mocp -h
Music On Console (version 2.5.2, revision 2930)
Usage:
 mocp [OPTIONS]... [FILE]...
-V --version           Print program version and exit
-h --help              Print usage and exit
-S --server            Only run the server
-F --foreground        Run server in foreground and log to stdout
-R --sound-driver LIST Use the first valid sound driver from LIST
                       (sndio, oss, alsa, jack, null)
-m --music-dir         Start in MusicDir
-a --append            Append the files/directories/playlists passed in
                       the command line to playlist and exit
-q --enqueue           Add the files given on command line to the queue
-c --clear             Clear the playlist and exit
-p --play              Start playing from the first item on the playlist
-l --playit            Play files given on the command line without modifying
                       the playlist
-s --stop              Stop playing
-f --next              Play the next song
-r --previous          Play the previous song
-x --exit              Shutdown the server
-T --theme theme       Use the selected theme file (read from ~/.moc/themes
                       if the path is not absolute)
-C --config FILE       Use the specified config file instead of the default
-O --set-option NAME=VALUE
                       Override the configuration option NAME with VALUE
-M --moc-dir DIR       Use the specified MOC directory instead of the default
-P --pause             Pause
-U --unpause           Unpause
-G --toggle-pause      Toggle between playing and paused
-v --volume (+/-)LEVEL Adjust the PCM volume
-y --sync              Synchronize the playlist with other clients
-n --nosync            Don't synchronize the playlist with other clients
-A --ascii             Use ASCII characters to draw lines
-i --info              Print information about the currently playing file
-Q --format FORMAT     Print formatted information about the currently
                       playing file
-e --recursively       Alias for -a
-k --seek N            Seek by N seconds (can be negative)
-j --jump N{%,s}       Jump to some position of the current track
-o --on <controls>     Turn on a control (shuffle, autonext, repeat)
-u --off <controls>    Turn off a control (shuffle, autonext, repeat)
-t --toggle <controls> Toggle a control (shuffle, autonext, repeat)
```
# Manual

```txt
$ man mocp | cat

MOC(1)                                                                                         Music On Console                                                                                         MOC(1)

NAME
       MOC - Console audio player

SYNOPSIS
       mocp [OPTIONS] [FILE|DIR ...]

DESCRIPTION
       MOC is a console audio player with simple ncurses interface.  It supports OGG, WAV, MP3 and other formats.  Just run mocp, go to some directory using the menu and press enter to start playing the
       file.  The program will automatically play the rest of the files in the directory.

       With no options and no file arguments the program begins in current directory, or in MusicDir if the StartInMusicDir option is set in the configuration file.  If you give a directory on the command
       line, MOC will try to go there.  If a playlist is given, then it is loaded.  With multiple files, playlists or directories, everything will be added to the playlist recursively (including the con‐
       tents of any playlist given).  (Note that relative paths in playlists are resolved with respect to the directory of the playlist, or of the symlink being used to reference it.)

OPTIONS
       If an option can also be set in the configuration file the command line overrides it (but see the -O option for the list‐valued configuration options exception).

       -D, --debug
              Run  MOC  in  debug  mode.   The client and server log a lot of information to debug files.  Don’t use this; the server log is large.  This is only available if MOC was compiled without --dis‐
              able-debug.

       -S, --server
              Run only the server and exit.

       -F, --foreground
              Implies -S.  Run the server in foreground and log everything to stdout.

       -R NAME[:...], --sound-driver NAME[:...]
              Use the specified sound driver(s).  They can be OSS, ALSA, JACK, SNDIO or null (for debugging).  Some of the drivers may not have been compiled in.  This option is called  SoundDriver  in  the
              configuration file.

       -m, --music-dir
              Start in MusicDir (set in the configuration file).  This can be also set in the configuration file as StartInMusicDir.

       -q, --enqueue
              Add files given after command line options to the queue.  Don’t start the interface.

       -a, --append
              Append files, directories (recursively) and playlists given after command line options to the playlist.  Don’t start the interface.

       -c, --clear
              Clear the playlist.

       -p, --play
              Start playing from the first item on the playlist.

       -f, --next
              Request playing the next song from the server’s playlist.

       -r, --previous
              Request playing the previous song from the server’s playlist.

       -s, --stop
              Request the server to stop playing.

       -x, --exit
              Bring down the server.

       -P, --pause
              Request the server to pause playing.

       -U, --unpause
              Request the server to resume playing when paused.

       -G, --toggle-pause
              Toggle between play and pause.

       -k [+|-]N, --seek [+|-]N
              Seek forward (positive) or backward (negative) by N seconds in the file currently being played.

       -T THEME, --theme THEME
              Use a theme file.  If the path is not absolute, the file will be searched for in /usr/share/moc/themes/ (depends on installation prefix), ~/.moc/themes/ and the current directory.

       -C FILE, --config FILE
              Use  the  specified  configuration file instead of the default.  As this file can specify commands which invoke other applications MOC will refuse to start if it is not owned by either root or
              the current user, or if it is writable by anyone other than its owner.

       -O NAME[+]=VALUE, --set-option NAME[+]=VALUE
              Override configuration option NAME with VALUE.  This option can be repeated as many times as needed and the option name is not case sensitive.  Most option values are set before the configura‐
              tion file is processed (which allows the new values to be picked up by substitutions); however, list‐valued options are overridden afterwards (which gives the choice of whether the  configured
              values are replaced or added to).

              See the example configuration file (config.example) for a description of the options available.

              Examples: -O AutoNext=no
                        -O messagelingertime=1 -O XTerms+=xxt:xwt

              Note that MOC does not perform variable substitution as it does for values read from the configuration file.

       -M DIR, --moc-dir DIR
              Use the specified MOC directory instead of the default.  This also causes the configuration file from that directory to be used.  This can also be specified in the configuration file using the
              MOCDir option.

       -y, --sync
              This copy of the interface will synchronize its playlist with other clients.  This option is called SyncPlaylist in the configuration file.

       -n, --nosync
              This copy of the interface will not synchronize its playlist with other clients (see above).

       -A, --ascii
              Use ASCII characters to draw lines.  (This helps on some terminals.)

       -i, --info
              Print the information about the file currently being played.

       -Q FORMAT_STRING, --format FORMAT_STRING
              Print information about the file currently being played using a format string.  Replace string sequences with the actual information:

                       %state     State
                       %file      File
                       %title     Title
                       %artist    Artist
                       %song      SongTitle
                       %album     Album
                       %tt        TotalTime
                       %tl        TimeLeft
                       %ts        TotalSec
                       %ct        CurrentTime
                       %cs        CurrentSec
                       %b         Bitrate
                       %r         Rate

              It is also possible to use variables from the FormatString configuration file option.

       -e, --recursively
              Alias of -a for backward compatibility.

       -h, --help
              Print a list of options with short descriptions and exit.

       -V, --version
              Print the program version and exit.

       -v [+|-]N, --volume [+|-]N
              Adjust the mixer volume.  You can set (-v 50) or adjust (-v +10, -v -10).

       -t OPTION[,...], --toggle OPTION[,...]
       -o OPTION[,...], --on OPTION[,...]
       -u OPTION[,...], --off OPTION[,...]
              Followed by a list of identifiers, these will control MOC’s playlist options.  Valid identifiers are shuffle, repeat and autonext.  They can be shortened to ’s’, ’r’ and ’n’ respectively.

              Example: -t shuffle,r,n
                       would toggle shuffle, repeat and autonext all at once.

       -j N{s|%}, --jump N{s|%}
              Jump to some position in the current file.  N is the number of seconds (when followed by an ’s’) or the percent of total file time (when followed by a ’%’).

              Examples: -j 10s, -j 50%

FILES
       ~/.moc MOC directory for the configuration file, socket, the pid file and other data.

       ~/.moc/config
              Configuration  file  for MOC.  The format is very simple; to see how to use it look at the example configuration file (config.example) distributed with the program.  The example file fully de‐
              scribes all the configuration options, and so is a useful reference when using the -O option.  As this file can specify commands which invoke other applications MOC will refuse to start if  it
              is not owned by either root or the current user, or if it is writable by anyone other than its owner.

       ~/.moc/themes
       /usr/share/moc/themes
              Default directories for the theme files.

       /usr/share/moc/decoder_plugins
              Default directories for the audio decoder plugins.

       mocp_client_log
       mocp_server_log
              Client and server log files.  These files are created in the directory in which the client and server are started.  (Also see the -D option.)

BUGS
       Command line options that affect the server behaviour (like --sound-driver) are ignored if the server is already running at the time of executing mocp.  The user is not warned about this.

HOMEPAGE
       http://moc.daper.net/

AUTHOR
       Damian Pietras     <daper@daper.net>
       MOC Maintainer(s)  <mocmaint@daper.net>

Version 2.5.2                                                                                  16 November 2016                                                                                         MOC(1)
```
