function fibonacci (n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function notFibonacci (n) {
  if (n <= 1) return 1;
  return notFibonacci(n - 1) + notFibonacci(n - 1);
}

console.log(
  fibonacci(10)
);
