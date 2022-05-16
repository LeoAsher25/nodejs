const express = require("express");
const morgan = require("morgan");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/db/index.js");

db.connect();

const route = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.use(morgan("combined"));

app.use(expressLayouts);
app.set("layout", "layouts/main");
route(app);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname.slice(0, -4), "public")));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
