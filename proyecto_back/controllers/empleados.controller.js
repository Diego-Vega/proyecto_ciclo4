const Empleado = require("../models/empleados.model");
let response = {
    msg: "",
    exito: false,
};

//Para crear un nuevo empleado
exports.create = function (req, res) {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    });

    empleado.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false;
            response.msg = "Error al guardar el empleado";
            res.json(response);
            return;
        }

        response.exito = true;
        response.msg = "El empleado se guardo correctamente";
        res.json(response);
    });
};

//Para mostrar los empleados
exports.find = function (req, res) {
    Empleado.find(function (err, empleados) {
        res.json(empleados);
    });
};

//Para mostrar un empleado
exports.findOne = function (req, res) {
    Empleado.find({ _id: req.params.id }, function (err, empleados) {
        res.json(empleados);
    });
};

//Para actualizar empleado por ID
exports.update = function (req, res) {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    };

    Empleado.findByIdAndUpdate(
        req.params.id,
        { $set: empleado },
        function (err) {
            if (err) {
                console.err(err);
                response.exito = false;
                response.msg = "Error al actualizar el cambio al empleado";
                res.json(response);
                return;
            }
            response.exito = true;
            response.msg = "El empleado se actualizo correctamente";
            res.json(response);
        },
    );
};

exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.err(err);
            response.exito = false;
            response.msg = "Error al eliminar el empleado";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El empleado ha sido eliminado";
        res.json(response);
    });
};
