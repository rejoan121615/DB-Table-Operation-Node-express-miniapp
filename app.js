const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db/db");
const cookieParser = require("cookie-parser");

// sync database model
const DetailsModel = require("./model/DetailsModel");

// routes
const InsertRoute = require("./routes/insert.routes");
const DeleteRoute = require("./routes/delete.routes");
const UpdateRoute = require("./routes/update.routes");
const AllRecordsRoute = require("./routes/allRecords.routes");

// register package
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", "./view/pages");
app.set("view engine", "ejs");

// register route
app.get("/", (req, res, next) => {
    // res.redirect("/insert");
    res.render("Home");
});
app.use("/insert", InsertRoute);
app.use("/edit", UpdateRoute);
app.use("/delete", DeleteRoute);
app.use("/reports", AllRecordsRoute);

// database
db.sync({ alter: true })
    .then((status) => {
        console.log("data connected");
    })
    .catch((error) => {
        console.log("got an error on db connection");
    });

// server
app.listen(3000, () => {
    console.log("app started on http://localhost:3000");
});
