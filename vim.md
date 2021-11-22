# Vim

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
