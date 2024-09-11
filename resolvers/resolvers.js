// resolvers.js
const { inversiones, Inversion } = require('./model');

const resolvers = {
    Query: {
        getInversion: (_, { id }) => {
            return inversiones.find(inversion => inversion.id === parseInt(id));
        },
        listInversiones: () => {
            return inversiones;
        },
    },
    Mutation: {
        createInversion: (_, { idEmpresa, monto, fecha, moneda, cedulaInversor, tasa, estado }) => {
            const inversion = new Inversion(idEmpresa, monto, fecha, moneda, cedulaInversor, tasa, estado);
            inversiones.push(inversion);
            return inversion;
        },
        updateInversion: (_, { id, idEmpresa, monto, fecha, moneda, cedulaInversor, tasa, estado }) => {
            const inversion = inversiones.find(inversion => inversion.id === parseInt(id));
            if (!inversion) return null;
            
            if (idEmpresa !== undefined) inversion.idEmpresa = idEmpresa;
            if (monto !== undefined) inversion.monto = monto;
            if (fecha !== undefined) inversion.fecha = fecha;
            if (moneda !== undefined) inversion.moneda = moneda;
            if (cedulaInversor !== undefined) inversion.cedulaInversor = cedulaInversor;
            if (tasa !== undefined) inversion.tasa = tasa;
            if (estado !== undefined) inversion.estado = estado;

            return inversion;
        },
        deleteInversion: (_, { id }) => {
            const index = inversiones.findIndex(inversion => inversion.id === parseInt(id));
            if (index === -1) return false;
            
            inversiones.splice(index, 1);
            return true;
        },
    },
};

module.exports = { resolvers };
