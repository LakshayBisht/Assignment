const maxConsecutive1s = (arr) => {
	let ans = 0,
		count = 0;
	const n = arr.length;
	for (i = 0; i < n; i++) {
		if (arr[i] === 1) {
			count++;
			ans = Math.max(count, ans);
		} else {
			count = 0;
		}
	}
	return ans;
};

const arr1 = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
const arr2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
console.log(maxConsecutive1s(arr1));
console.log(maxConsecutive1s(arr2));
