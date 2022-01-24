var Bicicleta = require('../../models/bicicletas');

exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

exports.bicicleta_create = function (req,res){
    var ubicacion = [];
    if (req.body.lat!=undefined && req.body.lng!=undefined){
        ubicacion=[req.body.lat, req.body.lng];
    } else if (req.body.ubicacion!=undefined){
        ubicacion=req.body.ubicacion;
    }
    var bici = new Bicicleta(req.body.id,req.body.color, req.body.modelo, ubicacion);
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta:bici
    });
}

exports.bicicleta_delete = function(req, res){
    Bicicleta.removeById(req.body.id);
    res.status(200).send();
}

exports.bicicleta_update = function(req,res){
    var bici = Bicicleta.findById(req.body.id);
    bici.color=req.body.color;
    bici.modelo=req.body.modelo;
    var ubicacion = [];
    if (req.body.lat!=undefined && req.body.lng!=undefined){
        ubicacion=[req.body.lat, req.body.lng];
    } else if (req.body.ubicacion!=undefined){
        ubicacion=req.body.ubicacion;
    }
    bici.ubicacion=ubicacion;

    res.status(200).json({
        bicicleta: bici
    });
}