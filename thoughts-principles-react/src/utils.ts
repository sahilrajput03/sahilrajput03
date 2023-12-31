export const thoughtsData = {
	list: [] as unknown as string[]
}
export const getRandomThought = () => {
	const i = Math.floor(Math.random() * thoughtsData.list.length);
	const randomThought = thoughtsData.list[i];
	// Remove from `thoughtsData` so we do not add duplciate random thoughts
	thoughtsData.list.splice(i, 1) // 2nd parameter means remove one item only
	return randomThought
};
