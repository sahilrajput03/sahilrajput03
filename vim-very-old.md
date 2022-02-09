Amazing vim cheat sheet: https://devhints.io/vim

It could be daunting to you that you can't escape the line when moving your cursor by a character using `h` or `l`, so you must use `space` and `backspace` to move the cursor beyond current line in vim. Yikes!!!

`shift+d` to delete from current charater to right of the line.

`shift+c` to get in insert mode after deleting from current character to right of the line. (Also you can use `c$` : to clear current character to end of line and go to insert mode.)

`cc` : to clear current line and go to inser mode.

**EXECUTING ANY TERMINAL COMMAND IN VIM:**

Editor commands - `:pwd`

Shell Commands - `:!pwd`

**CHANGING CASE MAGICALLY:**

`~`    : Changes the case of current character

`guu`  : Current line to lower.

`gUU`  : Current LINE to upper.

`guaw` : Change WHOLE WORD to lower.

`gUaw` : Change WHOLE WORD to upper.

`gUw`  : Change from current character to end of WORD from to upper.

`guw`  : Change from current character to end of WORD to lower.

`g~~` : Invert case of current line.
`g~w`  : Invert case of current word.

`guG` : Change from current character to end of document to lowercase 

`ctrl+c 0` : to go to start of line.

`w` : To go to start of first word.

==================================================================================

AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING 
AMAZING AMAZING 
-----------------------
VIM SHORTCUTS GITST!!

https://gist.github.com/tuxfight3r/0dca25825d9f2608714b

-----------------------
AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING AMAZING 
AMAZING AMAZING 


=====================================================================================
REVOLUTION:

WORKING WITH MULTIPLE FILES (split window mode is awesome as compared to shitty tab thing).

OPEN FILES IN SPLITTED SCREEN FROM COMMAND LINE:

`vi -O file1 file2 file3` #splits vertically. Yikes!!!!!

`vi -o file1 file2 file3` #splits horizontally.


GODMODE FOR SPLIT WINDOW USAGE: TOPICS: 

(0)OPENING NEW TAB

(1)USE VIM TO OPEN EXISTING FILE 

(2)MOVING WINDOWS AROUND 

(3)OPENING EXISTING FILES IN A SPLIT VIEW

(0)OPENING NEW TAB

ctrl+w ctrl+n => open new window at hoziontally.

ctrl+w ctrl+n ctrl+w+ (shift+L) => open new window vertically.


(1)USE VIM TO OPEN EXISTING FILE IN CURRENT WINDOW(SPLIT VIEW

:e <file_name>     (also has tab completion too)


(2)MOVING WINDOWS AROUND ==> INFO:: Ctrl w gives you the "windows command mode", allowing the following modifiers:(You can also use the "windows command mode" with navigation keys to change a window's position:)

Ctrl w + L(uppercase) - Move the current window to the "far right"

Ctrl w + H(uppercase) - Move the current window to the "far left"

Ctrl w + J(uppercase) - Move the current window to the "very bottom"

Ctrl w + K(uppercase) - Move the current window to the "very top"

(3)OPENING EXISTING FILES IN A SPLIT VIEW:

:sp <file-name,--tab-completeion-also-works,--../ and ./<tab>-completino also works!!>

:vsp <file-name> # to open in vertical split view.

OR SIMPLY :vs for vertical split.  ###########AMAZIN LINK - https://tinyurl.com/y6gk4wse

ALSO , YOU CAN ROTATE WINDOWS SIMPLY-> 

Ctrl w + R - To rotate windows up/left.

Ctrl w + r - To rotate windows down/right. ########## Check out :help window-moving for more information


# FILE BROWSER VIEW:

`:Vex`           - Open VERTICAL Split in ex mode with file browser

`:Sex`           - Open horizontal Split in ex mode with file browser

VIEW CURRENTL OPENED FILES:

`:ls`


RESIZING WINDOWS

#Sometimes windows open up funny or are rendered incorrectly after separating from an external monitor. Or maybe you want to make more room for an important file.

`CTRL+w >`       -   Incrementally increase the window to the right. Takes a parameter, e.g. CTRL-w 20 >
`CTRL+w <`       -   Incrementally increase the window to the left. Takes a parameter, e.g. CTRL-w 20 <
`CTRL+w -`       -   Incrementally decrease the window's height. Takes a parameter, e.g. CTRL-w 10 -
`CTRL+w +`       -   Incrementally increase the window's height. Takes a parameter, e.g. CTRL-w 10 +

`CTRL+w =`       -   Normalize all split sizes, which is very handy when resizing terminal

LESSLY USED:
`CTRL+w _`       -   Max out the height of the current split
`CTRL+w |`       -   Max out the width of the current split





==DEPRECATED FOR MY USE==Using tabs:(TABS ARE WORST, PREFER SPLIT WINDOWS)

`vi file1 file2`# To open multiple files altogether. IF YOU SPECIFY -o or -O vim WILL OPEN IN A SPLIT VIEW instead of tab view(which is bad).

#To switch betwen them 

`:n` to go to next tab

`:N `to got to previous tab.

- Close a window: ZZ or ZQ corresponding to your use.

TO DUPLICATE CURRENT FILE SPLIT VIEW FILE TO RIGHT OR DOWN:

-Ctrl+w p : to open current file to the RIGHT in split view.

-Ctrl+w s : to open current file to the in a DOWN split view.


- NAVIGATION in SPLITTED VIEW

Ctrl-w w to switch between open windows, and Ctrl-w h (or j or k or l) to navigate through open windows. 

ctrl+w, shift+W to go to previous split view file.

__sourced all info from below links-

AMAZING LINK - https://tinyurl.com/y2ccopqj

AMAZING LINK - https://tinyurl.com/y2kjw654

AMAZING LINK - https://thoughtbot.com/blog/vim-splits-move-faster-and-more-naturally


-Do you know VIM HAS DIRECTORY LISTING view too .. YIKES!!! try with below command.

`vim .`

`:e .` and use enter to open that file. [in VIM'S COMMAND MODE]


=====================================================================================

Use Esc ZQ to exit file(ignoring any changes you made). Yikes!!

Use Esc ZZ to write and exit quickly.(originally we use Esc :wq to save and exit though).

UNDO GUIDE: Use ctrl+z more often than u for undoing, coz it would get you original undo behaviour, as u has different undo behavour.

SELECTION GUIDE:

PROTIP: 0v is the best way to select entire lines instead of using V.

Vscode and codesandbox: Use alt+z for toggling `wrap line code`.

Use v over V, and use $ to go to end of line, and use 0 or 0w(will get to first no-white char) to go to start of line.


f or t works greattt, like f <anychar> will make you jump on that char.

But t <anychar> will make you jump before that char.

Use command `:%d` to delete all contents of the file.

Select some text and predd d to delete and c to replace(i.e., get in insert mode directly).

(CONEMU)Ctrl+p and ctrl+n for previous and next commands in conEmu.

Use shift+J(capital j) to join below line to current line.

`ci"` will delete all text around nearest " scope and get you into insert mode.

`ci{` will delete all text around nearest { scope and would get you into insert mode. - Tip: ci} would do EXACTLY SAME THING.

`ci<` would work for `<` things alike.

`o` to insert new line after current line.(Like ctrl+enter)

`O` to insert new line at current line.(Like ctrl+shift+enter)

Use alt+ left/right arrow to navigate previous or next cursor locations.

Use [[ to go to start of file, and use ]] to go to end of file.

-Disclaimer: [[ or ]] works same as gg or G               - BBBoooooooommmmmmm

Select all text in a file, press ggVG           Lolsssssssssss, it was that fast to do!!!!!

  Yo!!!!!!!!

Pressing $ would take you to the end of the line. 

Pressing ^ emulates behaviour of 0w ( Also, pressing 0 does the same thing but actully to start and ignore indent, yikes!!)

Select some text, then U for uppercase or u for lowercase. 

To swap all casing in a visual selection, press ~ (tilde).

LIFESAVER -  Press shift+k and see if that's moving your cursor up, that means you have caplocked, unlock it now..!!

lifesaved- simplicity- IF SHIFT+K DOESN'T DO ANYTHING, THAT MEANS YOU ARE GOOD TO GO.

Press v and use gg or G to move the selection to start of page or end of page.

Use vimtutor in anymintty terminal to use vimtutor. Have a nice day!!

BOTH ARE EQUALLY GOOD TECHNIQUES, DEPENDS ON WHAT YOU REMEBER TO USE.

get text from default register(latest yanked or cut text) => `p`/`P`

get text from yank register => `"0p`     {this register does't get overwrittern by dd} 

Another workaround is to actually delete with `dd` or `d` or `D` ( by default all those cuts), so to do that select something in visual mode, then press `"_d` but you should ACTUALLY USE -> `"_D` coz `D` deletes line to the left and then use . comand to use is again(yikes). But selecting text in visual or visual line mode and then deleting, by `"_d` or `_"D`(this one is GOOD) is just same thing. Yikes!!!

This is it..!!

THERE'S A PROGRAM vimtutor, you can straight away start using in mintty/fish shell.

`yy`: copies current line

`f(`
  
`f{`
  
`f)`
  
`f}` 
  
`f<` 

`f>` 

All those will get you to next that that brace. Actually it can be used with any character too, like fs wil move you to next s char in current line. TIP: a is suggestable character

P: means paste to the left of the block cursor(IN NORMAL MODE), OR paste above current line(if line is copied).{ITS PRETTY STRAIGHT FORWARD THOUGH.}

p : means paste to right of the block cursor(IN NORMAL MODE), OR paste below current line(if line is copied). {ITS PRETTY STRAIGHT FORWARD THOUGH.}

TIP:TIP: cf( or df( will delete to next ( char, INTERESTING, it would work with any character too. Note c stands for change, and d stands for delete.

important => `i` stands for in, `d` stands for delete, `c` stands for change.

diw: delete the inner(current) word.

ciw: change the inner(current) word.

yiw: yank current work.

`da[`/`{`/`(`: delete around 

`caw[`/`{`/`(` : replace

`yaw[`/`{`/`(` : yank around

`ea` to go to end of current word.


Additionally, if you are interested in deleting the quotes too, then apply the following command (a means "and around it")

da"   -> Amazing!!!

`gg` to go to top of file ******

Capital `G` to go to bottom of file. ********

u: undo, you can do multiple times

`ctrl+r`: redo

`3igood!!<pressEsc>`
  
`w`, `b`, `e` are navigators
  
Paste from external source must be done by ctrl+v inside INSERT MODE.
  
USING VIM: USE CTRL+P to navigate b/w files, AND CTRL+SHIFT+P FOR COMMAND PANEL.
  
ITS NORMAL MODE not command mode.
  
ctrl+s, and autosave in vscode works awesomely.
  
use cw to replace some text, coz dw will require you to do get in INSERT MODE manually.
  
0w: to go to start of line
  
% moves to next/back to the alternate bracket.
  
 INSERT MODE: backspace/delete works cool.
  
NORMAL MODE: shift+x acts as backspace, x acts as delete left character.
  
shift [] to move around block of codes.\
  
caps lock does its work and doesn't do anything extra in both NORMAL/INSERT mode.
  
capital `H` makes you go to start of top line of current view.
  
capital `L` makes you go to start of bottom of currnet view.
  
capital `K` does nothing. It does weird stuff in mintty though.:(
  
captial `J` merges below line to current line, with indentation removed. YIKESS!!!
  
`ctrl+c` works normally as go to NORMAL MODE IN VSCODE TOO.
  
find the word which you are currently on via *
  
`10j`, `10k`, `3j`, `2h`, `8l`
  
`v` visual modes , V visual line mode
  
`Ctrl+v` : visual block mode.
  
Getinto visual mode, select via `j`, `k`, `l`, `h`, and delete via `d`
  
`14dd` to delete 14 lines
  
`w`/`b` to move by word forward/backward(W/B IGNORES SYMBOLS AND MOVE TO SPACES)
  
`gg` : to get to the top of file, USE [[
  
`G` : to get to the bottom of file, USE ]]



`p`: paste below current line
  
`P`:paste above current line
  
`O`: add line above and activate insert mode
  
`o`: add line below and activate insert mode
  
`0`: to go to start of line

`f<anychar>` get you to next apppearing character
  
`t<anychar>` get you just left to next apppearing character
  
% gets you to the next alternating closing brakcet
  
d<anychar of w/e/b/j/k/h/l> to delete correspondingly
  
`cw` or `cW` to change word
  
`D` deletes the rest of the line to the right
  
--------------c, C stands for change
  
--------------d, D stands for delete
  
`C` deletes the rest of line and gets to insert mode.
  
`cc` deletes the whole line(to the left and right of the cursor too) and gets you to INSERT MODE.
  
`ct<anychar>` to delete upto that charate to the right, get in insert mode
  
*e.g., `ct}` will delete all text upto }
  
dt<anychar> to delete upto that char to the right, (stay in command mode) 
  
`*` to get to the other repetitive word on the word you have the cursor
  
`f<anychar>` find the char in current line, toggle next via pressing ; now
  
`zz` will center the cursor to the middle of screen

`a` insert mode the the right of cursor
  
`i` insert mode to the cursor
  
`A` insert mode to the end of the current line
  
`I` insert mode to the start of the current line
  
`x` deleted the charater under the cursor
  
`X` deleted the charater to the left of the cursor
  
`~` swaps the case of the char under cursor
  
`8~` swaps the case of next 8 chars
  
`.` just executes the last command you performed.
  
`R` helps to overwrite the current characters
  
`2rm` will replace next 2 chars with m
  
`>>` or `<<` to indent a line or text block or a set of lines.
  
 `.` to repeat the last command, works good with indenting multiple times
  
 `q<anychar>` [do stuff] `q` This will record the macro to the char you selected earlier.
  
 Press `@<recordedChar>` to run a macro
  
 `8@<recordedChar>` to run macro 8 times straight
  
 `d2w` delete following two words and then use . to repeat somewhere else
  
 `y` to copy
  
 `d` to delete(cut)
  
 `V` to toggle b/w visual line selection
  
 `v` to toggle b/w visual selection
  
 `ctrl+v` actiavates visual block mode (then move around with jkhl), and do soemthig with multiple cursors, wow!! <use ~ tidle to change case type at once)
                                                                                                                     
`/<searchTextHere><Enter_key>` to search, use `n` and `N` to search forward and backward respectively.
