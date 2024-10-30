# Bubble Sort

A sorting algorithm that compares each pair of adjacent elements and swaps them
if they are in the wrong order. The pass through the list is repeated until no
swaps are needed, which indicates that the list is sorted.

Thus with each iteration, the largest element is bubbled up to the end of the
list making each iteration shorter than the previous one since we no longer
have to compare the last element.

## Complexity

O(n^2)

## Algorithm

1. Have a for loop that iterates through the list from the end untill there is
   only 1 element left (1 element means the list is sorted) so we do not check
   values that have already been sorted.
2. Have a nested for loop that iterates through the list from the beginning to
   the end of the outer loop minus one (to avoid checking outside of used memory).
3. Compare the current element with the next element. If the next element is
   smaller then switch the two elements.

## Example

```typescript
export default function bubbleSort(arr: number[]): void {
  for (let l = arr.length; l > 1; l--) {
    for (let i = 0; i < l - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
}
```
