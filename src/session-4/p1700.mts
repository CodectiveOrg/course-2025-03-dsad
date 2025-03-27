import { GenericQueue } from "./generic-queue.mjs";
import { GenericStack } from "./generic-stack.mjs";

function countStudents(students: number[], sandwiches: number[]): number {
  const queue = new GenericQueue<number>();
  for (let i = 0; i < students.length; i++) {
    queue.enqueue(students[i]);
  }

  const stack = new GenericStack<number>();
  for (let i = sandwiches.length - 1; i >= 0; i--) {
    stack.push(sandwiches[i]);
  }

  let skippedCount = 0;

  while (skippedCount < queue.size()) {
    const student = queue.dequeue()!;
    const sandwich = stack.pop()!;

    if (student === sandwich) {
      skippedCount = 0;
    } else {
      queue.enqueue(student);
      stack.push(sandwich);

      skippedCount++;
    }
  }

  return queue.size();
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
