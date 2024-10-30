# Two Crystal Balls

## Problem

Given two crystal balls, each of which can break when dropped from some floor
of a building, find the exact spot where the balls break in the most optimized
way.

This could be solved by brute force approach using linear search with a time
complexity of `O(n)` which is not optimal.

Using something like binary search, would also be a bad approach since worst
case scenario is the ball breaks immediately on the first try, making us linear
search half of the floors with a time complexity of `O(n/2)` which is still
`O(n)`.

## Solution

The optimal solution in this case is to use the square root of the number of
floors at a time until our first ball breaks. Then it leaves us with sqrt(n)
of floors left to linear search. Giving it a time complexity of sqrt(n) for the
first ball to break and sqrt(n) for the second ball to break that is 2sqrt(n)
and since we drop the constants we get a time complexity of `O(sqrt(n))`.

## Implementation

1. We start by getting the length of the breaks array.
2. Using the length figure out what the square root of the length is. Floor it to
   get the integer value.
3. We then iterate through the breaks array with a step of the square root until
   we find a floor where the first ball breaks.
4. If the first ball breaks, we then iterate through the floors from the last
   safe point using linear search.
5. When the second ball breaks we know that is the exact floor where the balls
   start breaking and we return the value.
6. If no balls break we return -1.

### Code

```typescript
export default function twoCrystalBalls(breaks: boolean[]): number {
  const l = breaks.length
  const sqrt = Math.floor(Math.sqrt(l))

  for (let i = 0; l > i; i += sqrt) {
    if (breaks[i]) {
      for (let j = i - sqrt; j < i; j++) {
        if (breaks[j]) return j
      }
    }
  }
  return -1
}
```
