import express, { request, response } from 'express';

const app = express();

app.get("/test", (request, response) => {
	return response.send("Hello World - GET");

});

app.post("/test-post", (request, response) => {
	return response.send("Hello World - GET");

});


app.listen(3000, () => console.log("Server started on port 3000"));
