const fetch = require('node-fetch');
const requestURL = 'https://www.example.com/api/get/1';
const testURL = 'https://jsonplaceholder.typicode.com/users/1';

fetch(testURL)
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
