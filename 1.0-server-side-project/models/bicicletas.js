var Bicicleta = function (id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id : ' +this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1,'rojo','urbana',[40.31007177441281, -3.72873757957379]);
Bicicleta.add(a);
var b = new Bicicleta(2,'blanca','urbana',[40.304639157222, -3.728952156280964]);
Bicicleta.add(b);

Bicicleta.findById = function (aBiciId){
    var aBici = Bicicleta.allBicis.find(x=>x.id==aBiciId);
    if (aBici) 
        return aBici;
    else
        throw new Error(`No existe bicicleta con id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId) {
    for (var i = 0;i<Bicicleta.allBicis.length;i++){
        if(Bicicleta.allBicis[i].id==aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}


module.exports = Bicicleta;