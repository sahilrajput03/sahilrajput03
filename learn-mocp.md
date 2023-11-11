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
