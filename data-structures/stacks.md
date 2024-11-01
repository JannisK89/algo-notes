# Stack

## Complexity

| Operation  | Complexity |
| ---------- | ---------- |
| Access/Pop | O(1)       |
| Insertion  | O(1)       |

## Implementation

### Push

1. Create a new node with the value
2. Increment the size
3. If the stack is empty, set the head to the new node
4. Otherwise, set the new nodes next to the current head and set the head to
   the new node

### Pop

1. If the stack is empty, return undefined
2. Decrease the size
3. Save the heads value
4. Set the head to the current heads next
5. Return the saved value

### Peek

1. Return the heads value

## Typical Interface

```typescript
interface <T> {
  push(value: T): void
  pop(): T | undefined
  peek(): T | undefined
}
```

## Example
