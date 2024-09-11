// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Inversion {
        id: ID!
        idEmpresa: Int!
        monto: Float!
        fecha: String!
        moneda: String!
        cedulaInversor: String!
        tasa: Float!
        estado: String!
    }

    type Query {
        getInversion(id: ID!): Inversion
        listInversiones: [Inversion]
    }

    type Mutation {
        createInversion(idEmpresa: Int!, monto: Float!, fecha: String!, moneda: String!, cedulaInversor: String!, tasa: Float!, estado: String!): Inversion
        updateInversion(id: ID!, idEmpresa: Int, monto: Float, fecha: String, moneda: String, cedulaInversor: String, tasa: Float, estado: String): Inversion
        deleteInversion(id: ID!): Boolean
    }
`;

module.exports = { typeDefs };
