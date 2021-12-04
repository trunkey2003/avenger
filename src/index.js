const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;

const route = require("./routes/index.js");

const db = require("./config/db/index.js");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

console.log(path.join(__dirname, "public"));

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      countReplies: function (array) {
        return array.length;
      },
    },
  })
);

app.use(methodOverride("_method"));

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "view"));

// route init
route(app);

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
