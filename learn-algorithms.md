# Short notes

## Data structures

1. Array (also known as list) - We can access items using index i.e, 0, 1 ,2, 3 etc.
2. Linked list - Similar to Arrays but each item points to next item in the list.
3. Stack (follows Last in first out principle) - Similar to list, but we use pop to get the last item we pushed to the list.
4. Queue (folows first in first out pinciple) - Similar to list, but we the first item pushed to array is served first i.e., dequeued.
5. Hash (also known as Map or Dictionary) - Similar to array, but we use but instead of index we use key names to access the values of each item so this gives us a colleciton of key-value pairs.
6. Trees (We can have data some nested relation)
7. Graph - Similar to trees but we can use unlimited number of ways to connect the nodes coz each node can have a edge which defines the relation between data points.

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
