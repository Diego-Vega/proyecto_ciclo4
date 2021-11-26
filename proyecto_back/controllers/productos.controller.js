const Producto = require("../models/productos.model");
let response = {
    msg: "",
    exito: false,
};

//Para crear un nuevo producto
exports.create = function (req, res) {
    let producto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        especificacion: req.body.especificacion,
        foto: req.body.foto,
    });

    producto.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false;
            response.msg = "Error al guardar el producto";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El producto se guardo correctamente";
        res.json(response);
    });
};

//Para mostrar los productos
exports.find = function (req, res) {
    Producto.find(function (err, productos) {
        res.json(productos);
    });
};

//Para mostrar un producto
exports.findOne = function (req, res) {
    Producto.findOne({ _id: req.params.id }, function (err, productos) {
        res.json(productos);
    });
};

//Para actualizar producto por ID
exports.update = function (req, res) {
    let producto = {
        id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        especificacion: req.body.especificacion,
        foto: req.body.foto,
    };

    Producto.findByIdAndUpdate(
        req.params.id,
        { $set: producto },
        function (err) {
            if (err) {
                console.error(err);
                response.exito = false;
                response.msg = "Error al actualizar el producto";
                res.json(response);
                return;
            }
            response.exito = true;
            response.msg = "El producto se actualizó correctamente";
            res.json(response);
        },
    );
};

//Para eliminar el producto por ID
exports.remove = function (req, res) {
    Producto.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar el producto";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El producto ha sido eliminado";
        res.json(response);
    });
};
