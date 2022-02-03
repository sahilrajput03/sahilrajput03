# neovim (nvim)

Config file: `~/nvim/init.vim` instead of `~/.vimrc`.

Config files from [David Pedersen](https://github.com/davidpdrsn/dotfiles).

Config files from [Jon Gjengset](https://github.com/jonhoo/configs).

## TIPS

- <CR> in any vim config file means <CarriageReturn> i.e., <Enter> key to execute the command. Yo! (wihtout it the command would just be retained in the command arrea only and you would need to press Enter manually. This opens lots of opportunities now! 
- **Open a file in new buffer in current window only, use** `:e filePath`. (Tip: use right/left arrows to toggle between files as johnhoo made the bindings, tip: read **Toggle buffers** to understand how to do it with just commands).
- **Reload file in vim, you can use** `:e!` or `:edit!` (both are same).
- **Toggle buffers** in current window by `:bp` or `:bn` in nvim(works in vim too).
- **Close current buffer** in current window by `:bw`, [source](https://stackoverflow.com/a/1269771/10012446). {IT ALSO CLOSES THE WINDOW TOO BUT WILL NEVER EXIT VIM THOUGH}. BTW in `:bw` bw stands for buffer wife.
- **NEWLY ADDED CLOSE BUFFER HOTKEY**: Use `<space>q` to close current buffer. (i added this via `nnoremap <leader>q :bw<CR>` statement in `~/nvim/init.vim` file.

## Comment/Uncomment lines

**UPDATE: USE vim-commentary plugin (has 4k stars on github though) and works really good**.

Check its usage you added in the `~/nvim/init.vim` file itself.

Amazing: Source: https://stackoverflow.com/questions/1676632/whats-a-quick-way-to-comment-uncomment-lines-in-vim/15588798#15588798

tldr;

```
Commenting:
# Enter visual block mode (NOTE: Its different than visual-line mode i.e., shift+v).
ctrl+v

# Select a number of line with j/k

# Put cursor to start of the line (use shift+a to get to end of the line)
shift+i

# Ener comment character i.e., // or #

# Press Esc and its DONE!.



Uncommenting:
# Enter visual block mode
ctrl+v

# Select a number of line with j/k

# Use l to select required number of chars and press d to delete all of them in once.
```

## Open a current or other file in a vertical or horizontal split window ?

```
:sp                   #This opens current file in horizontal buffer
:vs                   #This opens current file in vertical buffer


#To open another file -
:sp filePathHere    #This opens in horizontal buffer
:vs filePathHere    #This opens in vertical buffer
```

## Exiting search mode in vim (or say declaration highligh mode in vim)

`Ctrl+l`, [Source](https://stackoverflow.com/questions/25786824/how-to-leave-search-mode-in-vim/25787211).

---

If you are using [`Jonhoo's config of neovim`](https://github.com/jonhoo/configs/blob/master/editor/.config/nvim/init.vim) then you use `c-q` to generate simple exit for vim, its really cool! Do try this!

You must have rust-analyzer cli tool to get intellisense from that:

```bash
sudo pacman -S rust-analyzer
#Now your vim can access it as well!.

#Temp load from custom config folder:
vi -u nvim-sahil/init.vim

#Look for the runtime failure logs in neovim ?
:message #From inside nvim
# Source: https://stackoverflow.com/a/17959126/10012446
```

```bash
call plug#begin()
^^ that means code for vim-plug is starting here...
Source: https://github.com/junegunn/vim-plug
#FYI: :PlugInstall to install the plugins added in your .vimrc or ~/nvim/init.vim file.

call vundle#begin()
^^ that means code for VundleVim is starting here...
Source: https://github.com/VundleVim/Vundle.vim
#FYI: :PluginInstall to install the plugins added in your .vimrc or ~/nvim/init.vim file.
```

`:e fileName`: to open a file in current window in neovim.(in vim it used to be `:open fileName` instead.
TIP: You can use `<tab>` complete in nvim though,Yikes!

# Vim

## windows in vim ? Cool?

- Use `ctrl+w n` to create new windows inside in vim.
- Use `ctrl+w h or j or k or l` to switch b/w the windows in vim.
- Use `ctrl+w H or J or K or L` to shift one window to left or down or up or right (SAME AS WHAT VIM DOES elsewhere).
- Use `ctrl+w q` to close the window in vim.(you can use your old `ZQ` or `ZZ` to exit or write file similarly).
- For resizing the the windows inside vim you can take help [here](https://vi.stackexchange.com/a/515).

## Using terminal in vim:

Source: https://stackoverflow.com/a/46822285/10012446

- Use `:term` or `:terminal` to open a terminal in vim (tip: use `:vertical :term` to open terminal towards right in vim).
- Use `ctrl+w N` (capital N) to turn terminal into edit mode. And you can then use switch back to `Terminal-Job` mode, press `i`.
- Use `:term <myCommand>` to run command directly from vim.
- To exit terminal in vim:
  - Press `Ctrl+d`(general bash binding to kill current shell)
  - OR Type `exit` command
  - OR Use `Control+w` and then press `:q` or `:q!`

## Blow tips:

- Use shift+d to delete from current character to the end of line
- use shift+c to delete from current cahracter to the end of line and enter in edit mode.

## Using gg to to start of file and G to go to end of file ?? MOST CONFUSING THING RIGHT??

**Simply use [[ or ]] to go to start or end of file from now onwards.**

## copy line's data without visual seletion at all

Use `0y$` to select entire line characterwise (yy copies line in linewise mode).

Tip: For partial line selection: Put cursor anywhere in between line and use `y$` or `y0` to copy current character to end character of the line or first character of the line to the current character.

## Paste line data after a character ?

So the key thing is that you need to copy the line as characterwise instead of linewise( i.e., use 0y$ instead of yy to yank a line or set of lines). And now you can use your old p and P to paste after or before the current character to paste the line/lines you yanked earlier.

> @Kitcha -- Read more about linewise and characterwise copying. You can copy a line the way you want if you yank it in a
characterwise manner, e.g., 0y$ rather than the linewise yy. p or P will paste into current line or different line 
depending on whether yank was characterwise (pastes into current line) or linewise (pastes into line above or below). 


Source -> [2nd comment of this answer](https://stackoverflow.com/a/9383985/10012446).

## Want to select text inside 'someText' or "someText" or (aa lot of code here.. ) or { a lot of code here... } ?

src: [Amazing, life changing answer towards vim.](https://stackoverflow.com/a/1062001/10012446)

```bash
vi' #For inside single quotes
vi" #For inside double quotes
vi( or vib #For inside parentheses
vi{ or viB #For inside curly brackets
vit #For inside html tags. WOW IT WOKRS WITH HTML TAGS WELL!!!

va' #For around single quotes
va" #For around double quotes
va( or vab #For around parentheses
va{ or vaB #For around curly brackets
vat #for around html tags
```

#### mind blower:

```
# below two works idk how but seems somewhat idk what..
vii
vaa
```



## Go to a particular line number in vim

Get in Command mode and type `:21 <Enter>` to go to line number 21.

## Tired of using backspace ??

Use `ctrl+h` to backspace and it works only in insert mode. TIP: It works in shell terminal as well.

### Indent lines in vim

Use `>>` to right indent or use `<<` to left indent the current line.

OR Select a no. of lines in visual mode and use `>` or `<` to indent right or left once.

TIP: Use `2>` or `2<` to indent twice (were n=2 or any whole number).

src: https://stackoverflow.com/a/235841/10012446

## Scrolling in vim:

`ctrl+d` and `ctrl+u` to scroll half page down/up.

`ctrl+f` and `ctrl+b` to scroll full page down/up.

## Bookmarking a line(character too), so you can jump back to your line like SUPERMAN!

WOW!! The bookmarks of each file stays persistent even if you close the file and set more marks for same keys and it would be persistent for all individual files as it maintains unique space for each file.

src: https://stackoverflow.com/a/3458731/10012446

### tl;dr;

Chose a characer for the mark, say `a`, to bookmark it type `ma` and now you can move around anywhere in the file and anytime you want to get back just use <code>`a</code> to get back to the mark Yikes!!

NOTE: You can use any character as the bookmark point!! Yikes!!!

## Want to select text like jumping into thin air??

Use, `v` to active visual mode and then thype `/` to enter the search mode and then press enter to select to that character or word.

Although when the character to which you want to select is in the same line then you can use `f` or `t` according to your requirement as well. AMAZING!

## Just want to move the screen (and not your cursor)

Simply use: `ctrl+e` to scroll up, `ctrl+y` to scroll down.

## Go to a character in backward direction ??

You can search in backward direction in current line with `F`. i.e., say you want't to go to next " character so you usually do `f"` but when you need to go to previous " character you can do like `F"` (capital f character to find in backward direction).

## vim - addiction won't loose

Learn: In general when you use p vs. P, the paste works differently as :-

p pastes to the right of the block cursor.

P pastes to the left fo the block cursor.

For easiness : **lowercase is right! Cool!**

`vim ~/.vimrc`

```
nnoremap ,p "0p
nnoremap ,P "0P
```
