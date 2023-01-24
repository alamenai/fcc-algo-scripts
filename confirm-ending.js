function confirmEnding(str, target) {
  return str.lastIndexOf(target) === str.length - target.length;
}

console.log(confirmEnding('Bastian', 'an'));
