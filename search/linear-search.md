# Linear Search

Linear search is a simple search algorithm that finds the position of a target
value within an array. It sequentially checks each element of the array until a
match is found or the whole array has been searched.

## Complexity

O(n)

## Algorithm

1. Start from the leftmost element of the array and one by one compare the
   target value with each element of the array.
2. If the target value matches with an element, return the index.
3. If the target value does not match with any of the elements, return -1.

## Example

```typescript
export default function linear_search(
  haystack: number[],
  needle: number
): boolean {
  for (let i = 0; i < haystack.length; i++)
    if (haystack[i] === needle) return true

  return false
}
```
