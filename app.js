const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Write length of array');
rl.on('line', line => {
	const array = [];
	for(let i = 0; i < line; i++) {
		const isNegative = Math.random() > 0.5 ? 1 : -1;
		array.push(Math.random() * 50 * isNegative);
	}
	let summ = 0;
	console.time('time');
	for(let i = array.length - 1; i >= 0; i--) {
		const number = +array[i];
		if(number < 0) {
			break;
		}
		summ += Math.ceil(number);
	}
	console.log('Summ of all numbers after first negative', summ);
	console.log('Amount of items', line);
	console.timeEnd('time');
});