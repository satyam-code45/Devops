import express from "express";

const app = express();


app.get("/", (req, res) => {
	res.send("Hii");
});
	
app.get("/cpu", (req, res) => {
	for (let i = 0; i < 100000000; i++) {
		Math.random();
	}
	res.send("Hello world");
});

app.listen(3000)