function f(n: number): number {
  if (n === 1) {
    return 1;
  }

  return n * f(n - 1);
}

console.log(f(6));

//     n! = n * (n-1) * (n-2) * ... * 1
// (n-1)! = (n-1) * (n-2) * ... * 1
//     n! = n * (n-1)!
