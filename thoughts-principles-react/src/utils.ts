export function getItemsExceptAtIndex(arr: string[], n: number): string[] {
	// Check if the index n is within the valid range
	if (n < 0 || n >= arr.length) {
		throw new Error('Index out of bounds');
	}

	// Use filter to create a new array excluding the item at index n
	return arr.filter((_, index) => index !== n);
}

export const getRandomIndexOfArray = (array: string[]) => Math.floor(Math.random() * array.length)

export function getCurrentTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
}