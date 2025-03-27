const set = new Set<number>();

set.add(1);
set.add(2);
set.add(3);
console.log(set);

set.add(1);
console.log(set);

console.log(set.has(1));

set.delete(1);
console.log(set);

const array = Array.from(set.values());
console.log(array);

const setFromArray = new Set([4, 4, 5, 5, 5, 6]);
console.log(setFromArray);
