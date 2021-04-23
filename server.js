const express = require("express");
const history = require('connect-history-api-fallback');


let app;
app.use(history());
app = express();
const serveStatic = require("serve-static");

app.use(serveStatic(__dirname + "/dist"));
let port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
