# O Notation

- Used to describe the time complexity of an algorithm.
- Always describes the worst case scenario.
- Describes how the runtime of an algorithm grows as the input size grows.
- Always drops the constants.

## O(N) - Linear Time

Linear time means that the time it takes to run the algorithm grows linearly
with the size of the input. If the input size doubles, the time it takes to run
the algorithm also doubles.

- A for loop that iterates through an array is an example of linear time.

## O(N^2) - Quadratic Time

Quadratic time means that the time it takes to run the algorithm grows
quadratically with the size of the input. If the input size doubles, the time
it takes to run the algorithm quadruples.

- A nested for loop that iterates through an array is an example of quadratic
  time.

## O(1) - Constant Time

Constant time means that the time it takes to run the algorithm does not change
with the size of the input. It will always take the same amount of time to run
the algorithm.

- Accessing an element in an array by index is an example of constant time.

## O(log N) - Logarithmic Time

Logarithmic time means that the time it takes to run the algorithm grows
logarithmically with the size of the input. If the input size doubles, the time
it takes to run the algorithm only increases by a constant amount.

- Binary search is an example of logarithmic time.

## O(N log N) - Linearithmic Time

Linearithmic time means that the time it takes to run the algorithm grows
linearithmically with the size of the input. If the input size doubles, the
time it takes to run the algorithm also doubles.

- Merge sort and Quick Sort are examples of linearithmic time.
