function factorialize(num) {
  if (num < 0) throw new Error('Please, provide a positive number');
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(-5));
