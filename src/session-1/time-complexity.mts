function chiz(n: number): void {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

chiz(10); // 3n+2

console.log("-".repeat(30));

function yaroo(n: number): void {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(j);
    }
  }
}

yaroo(10); // 3n^2
