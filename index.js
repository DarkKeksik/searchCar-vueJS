let fs = require("fs"),
    express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app).listen(8080);

app.set("view engine", "ejs");
app.use("/static", express.static(`${__dirname}/template`));
app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use("/vue", express.static(`${__dirname}/node_modules/vue/dist`));

app.get("/", (req, res)=>{
    res.render(`${__dirname}/template/pages/main`);
});