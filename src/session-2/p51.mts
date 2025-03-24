function solveNQueens(n: number): string[][] {
  const table = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => "."),
  );

  const answers: string[][] = [];

  function f(row: number): void {
    if (row >= n) {
      answers.push(table.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isSafe(row, col)) {
        continue;
      }

      table[row][col] = "Q";
      f(row + 1);
      table[row][col] = ".";
    }
  }

  function isSafe(row: number, col: number): boolean {
    for (let r = 0; r < row; r++) {
      if (table[r][col] === "Q") {
        return false;
      }
    }

    for (let offset = 1; ; offset++) {
      const r = row - offset;
      const c = col - offset;

      if (r < 0 || c < 0) {
        break;
      }

      if (table[r][c] === "Q") {
        return false;
      }
    }

    for (let offset = 1; ; offset++) {
      const r = row - offset;
      const c = col + offset;

      if (r < 0 || c >= n) {
        break;
      }

      if (table[r][c] === "Q") {
        return false;
      }
    }

    return true;
  }

  f(0);

  return answers;
}

console.log(solveNQueens(4));
