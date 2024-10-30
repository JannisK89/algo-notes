# Binary Search

Binary search is a search algorithm that finds the position of a target value
within a **sorted array**. It compares the target value to the middle element of
the array and discards the half in which the target value cannot lie.

## Complexity

O(log n)

## Algorithm

1. While low is less than high
2. Find the middle of the array -> mid = low + (high - low) / 2
3. Compare the target value with the middle element of the array.
4. If the target value matches the middle element, return the index.
5. If the target value is greater than the middle element, adjust low to mid + 1
   and repeat step 1.
6. If the target value is less than the middle element, adjust high to mid and
   repeat step 1
7. If the target value does not match any element, return -1.

**Important**: Always keep low to mid + 1 and high to mid to avoid off by one
errors. [low, high)

## Example

```typescript
export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let l = 0
  let h = haystack.length
  let m

  while (h > l) {
    m = Math.floor(l + (h - l) / 2)
    if (haystack[m] === needle) return true

    if (haystack[m] < needle) l = m + 1
    else h = m
  }
  return false
}
```
