function countPassingJsBasicsChecks(results) {
  let count = 0;

  for (let result of results) {
    if (result.toLowerCase().includes("pass")) {
      count++;
    }
  }

  return count;
}