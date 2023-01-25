function chunkArrayInGroups(arr, size, chunkedArray = [], rest = 0) {
  rest = Math.ceil(arr.length / size);
  if (rest === 0) {
    return chunkedArray;
  }
  const chunk = arr.slice(0, size);
  const restArr = arr.slice(size, arr.length);
  return [...chunkedArray, chunk, ...chunkArrayInGroups(restArr, size)];
}
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2));
