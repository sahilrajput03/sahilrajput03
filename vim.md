# Vim

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
