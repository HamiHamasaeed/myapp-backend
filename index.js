const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send({ message: "hello world" });
// });

app.post("/api/signup", (req, res) => {
  const body = req.body;
  console.log(body);
  body.name = "not meeee";
  res.json(body);
});

// const port = process.env.PORT;
const port = 8000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
