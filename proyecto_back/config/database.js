const mongoose = require("mongoose");
require("dotenv").config();

// const host = "localhost";
// const port = "27017";
// const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = process.env.DB_URI;
    // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose
        .connect(mongoStringConnection)
        .then(() => console.log("Conectado a la Base de datos"))
        .catch((err) => console.error(err));

    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on(
        "error",
        console.error.bind(console, "Mongodb Connection error"),
    );
};
