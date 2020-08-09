import express from 'express';
const app = express();

const PORT = process.env.PORT || 8585;

app.use(express());

app.get('/user', (req, res) => {
	const users = [
		{ name: 'Bruce Wayne', age: 35 },
		{ name: 'Peter Parker', age: 22 },
	];
	res.json(users);
});

app.post('/user', (req, res) => {
	const users = [
		{ name: 'Bruce Wayne', age: 35 },
		{ name: 'Peter Parker', age: 22 },
	];
	res.json(users);
});

app.delete('/user/:id', (req, res) => {
	const users = [
		{ name: 'Bruce Wayne', age: 35 },
		{ name: 'Peter Parker', age: 22 },
	];
	res.json(users);
});

app.listen(PORT);
