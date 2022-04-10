# Short notes

## Binary Search 

- It is applicable on sorted arrays (including descending sorted with some extra work)

- Finding middle element ?
let arr = [2, 3, 5, 9, 14, 16, 18]
let idx = [0, 1, 2, 3,, 4,, 5,, 6]

LEARN: middleIdx = (startIdx + endIdx)/2

- middle of whole array,

Q1. startIdx = 0, endIdx = 6

Ans. middleIdx = 3

- decimal middle index case:
Q2. Find middle of 2nd and 7th element,

Ans. startId = 1, endIdx = 6, middleIdx = 7/2 = 4 (rounded off)

Q3. Find middle of 4th and 5th element,

Ans. startIdx = 4, endIdx = 5, middleIdx = 9/2 = 5 (rounded off)