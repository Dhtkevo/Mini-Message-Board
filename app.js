require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
