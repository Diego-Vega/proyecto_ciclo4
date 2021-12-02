var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var auth = require("./auth/main_auth");
var cors = require("cors");

var productosRouter = require("./routes/productos.router");
var usuarioRouter = require("./routes/usuario.router");

var database = require("./config/database");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// Conexión con Mongo
database.mongoConnect();

//Routers

app.use("/productos", productosRouter);
app.use("/usuarios", usuarioRouter);
app.use(auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/build/"));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/build/index.html");
    });
}

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
