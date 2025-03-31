function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => b - a);
  students.sort((a, b) => b - a);

  let cost = 0;
  for (let i = 0; i < seats.length; i++) {
    cost += Math.abs(seats[i] - students[i]);
  }

  return cost;
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
