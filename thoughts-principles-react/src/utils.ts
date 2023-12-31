export const getRandomItems = (array: unknown[], n: number) => {
	// Shuffle array
	const shuffled = [...array].sort(() => 0.5 - Math.random());

	// Get sub-array of first n elements after shuffled
	const selected = shuffled.slice(0, n);
	return selected;
}
