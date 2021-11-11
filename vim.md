# Vim

```
let s
console.log("typeof s === 'undefined'", typeof s === 'undefined') // true

let r = null
console.log("r === null", r === null) // true
```

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
