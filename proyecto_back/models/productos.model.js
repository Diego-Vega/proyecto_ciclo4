const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre: { type: String, required: true, max: 60 },
    precio: { type: Number, required: true },
    especificacion: { type: String, required: true, max: 400 },
    foto: { type: String, required: true, max: 400 },
});

module.exports = mongoose.model("productos", ProductosSchema);
