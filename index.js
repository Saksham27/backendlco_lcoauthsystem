const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => {
	console.log(`<h1>Server is up and running at Port : ${PORT}</h1>`);
});
