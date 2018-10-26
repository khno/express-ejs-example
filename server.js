var express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { data: "Welcome" });
});

app.listen(8080, () => {
  console.log("Express app listening on port 8080");
});
