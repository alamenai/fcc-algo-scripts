function mutation(arr) {
  const [arr0, arr1] = arr;
  return arr1
    .toLowerCase()
    .split('')
    .every((letter) => arr0.toLowerCase().includes(letter));
}

console.log(mutation(['hello', 'Hello']));
