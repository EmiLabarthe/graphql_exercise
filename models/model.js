// model.js
let inversiones = [];
let idCounter = 1;

class Inversion {
    constructor(idEmpresa, monto, fecha, moneda, cedulaInversor, tasa, estado) {
        this.id = idCounter++;
        this.idEmpresa = idEmpresa;
        this.monto = monto;
        this.fecha = fecha;
        this.moneda = moneda;
        this.cedulaInversor = cedulaInversor;
        this.tasa = tasa;
        this.estado = estado;
    }
}

module.exports = { inversiones, Inversion };
