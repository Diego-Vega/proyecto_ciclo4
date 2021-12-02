const mongoose = require("mongoose");

// const host = "localhost";
// const port = "27017";
// const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://Diego_Vega:Mintic2022g48@cluster0.xdve0.mongodb.net/Mitienda2?retryWrites=true&w=majority`;
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
