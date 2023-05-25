import express from "express";

const app = express();
const port = 5102;
app.get("/", (request, response) => {
  response.send("Hello world!1");
});
app.listen(port, () => console.log(`Running on port http://localhost:${port}`));
