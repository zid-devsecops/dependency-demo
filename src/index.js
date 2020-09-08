const app = require("./app");

const port = process.env.PORT || 8080;

app.get('/api/test', function (req, res) {
	res.json({
		rng: Math.random()
	});
});

app.listen(+port, () => console.log(`Listening on http://127.0.0.1:${port}`));
