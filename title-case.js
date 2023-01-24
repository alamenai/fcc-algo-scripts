function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((value) => value[0].toUpperCase().concat(value.slice(1)))
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));
