const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log('Write array of numbers, separated by space');
rl.on('line', line => {
	const array = line.split(' ');
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
	console.timeEnd('time');
});