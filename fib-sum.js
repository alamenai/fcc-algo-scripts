function fiboEvenSum(n) {
	let fibs = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
	const sum = () => {
		let sum = 0;
		for (let index = 0; index < fibs.length; index++) {
			if (fibs[index] <= n && fibs[index] % 2 == 0) {
				sum += fibs[index];
			}
		}
		return sum;
	};

	if (n <= fibs[fibs.length - 1]) {
		return sum();
	} else {
		let j = fibs.length - 1;
		let lastFib = fibs[j] + fibs[j - 1];
		while (lastFib <= n) {
			fibs.push(lastFib);
			j += 1;
			lastFib = fibs[j] + fibs[j - 1];
		}
		return sum();
	}
}
console.log(fiboEvenSum(1000));
