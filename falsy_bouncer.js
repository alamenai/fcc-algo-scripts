function bouncer(arr) {
  return arr.filter(
    (item) =>
      !Number.isNaN(item) &&
      [false, null, 0, undefined, ''].every((value) => value !== item)
  );
}

console.log(bouncer([false, null, 0, NaN, undefined, '']));
