const compare = (a, b) => {
	if (a['id'] < b['id']) return -1;
	if (a['id'] > b['id']) return 1;
	return 0;
};

const obj = [
	{ id: 4, name: 'abc' },
	{ id: 10, name: 'ab2' },
	{ id: 5, name: 'abc3' },
	{ id: 6, name: 'abc5' },
];

obj.sort(compare);
console.log(obj);
