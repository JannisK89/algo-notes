# Queue

A queue is a linear data structure that follows the First In First Out (FIFO)
principle. The elements are added to the back of the queue and removed from the
front of the queue. It is similar to a line of people waiting for a service,
where the first person to arrive is the first person to be served.

Its pretty much a singly linked list with a few restrictions.

## Complexity

| Operation  | Complexity |
| ---------- | ---------- |
| Access/Pop | O(1)       |
| Insertion  | O(1)       |

## Implementation

### Enqueue

1. Create a new node with the value to be added.
2. Add +1 to length
3. If the queue is empty, set the head and tail to the new node.
4. If the queue is not empty, set the next of the tail to the new node and set
   the tail to the new node.

### Deque

1. If the queue is empty, return undefined.
2. Subtract 1 from the length.
3. Save the head node in another variable
4. Remove the head node and set the head to the next node.
5. If the queue is empty, set the tail to undefined.
6. Return the value of the saved head node.

### Peek

1. If the queue is empty, return undefined.
2. Else return the value of the head node.

## Typical Interface

```typescript
interface Queue<T> {
  enqueue(value: T): void
  deque(): T | undefined
  peek(): T | undefined
}
```

## Example

```typescript
type Node<T> = {
  value: T
  next?: Node<T>
}
export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>
    this.length++
    if (!this.tail || !this.head) {
      this.tail = this.head = node
      return
    }
    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head || this.length === 0) {
      return undefined
    }
    this.length--
    const head = this.head
    this.head = this.head.next
    if (this.length === 0) this.tail = undefined
    return head.value
  }
  peek(): T | undefined {
    return this.head?.value
  }
}
```
