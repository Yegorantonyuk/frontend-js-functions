export function min (numbers) {
	if (numbers === undefined || numbers.length === 0) {
		return undefined;
	}
	const correctNumbers = numbers.filter(element => {
		return typeof element === 'number';
	});
	let minNumber = correctNumbers[0];

	correctNumbers.forEach(element => {
		if (element < minNumber) {
			minNumber = element;
		}
	});
	return minNumber;
}
export function max (numbers) {
	if (numbers === undefined || numbers.length === 0) {
		return undefined;
	}
	const correctNumbers = numbers.filter(element => {
		return typeof element === 'number';
	});
	let maxNumber = correctNumbers[0];

	correctNumbers.forEach(element => {
		if (element > maxNumber) {
			maxNumber = element;
		}
	});
	return maxNumber;
}
export function sum () {
	const numbers = Array.from(arguments);

	if (numbers === undefined || numbers === 0) {
		return undefined;
	}
	const correctNumbers = numbers.filter(element => {
		return typeof element === 'number';
	});
	let sumnum = 0;

	correctNumbers.forEach(element => {
		sumnum += element;
	});
	return sumnum;
}