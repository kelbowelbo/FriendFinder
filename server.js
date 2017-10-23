const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});