var { ruruHTML } = require("ruru/server")
const express = require("express");
var { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql");

// Esquema de GraphQL
const schema = buildSchema(`
  type Investment {
    id: ID!
    name: String!
    amount: Float!
    date: String!
  }

  type Query {
    investments: [Investment]
    investment(id: ID!): Investment
  }

  type Mutation {
    addInvestment(name: String!, amount: Float!): Investment
    deleteInvestment(id: ID!): Investment
  }
`);

// Datos simulados de inversiones
let investmentsData = [
  { id: "1", name: "Bitcoin", amount: 5000.0, date: "2023-05-01" },
  { id: "2", name: "Ethereum", amount: 3000.0, date: "2023-06-15" },
];

// Resolvers para las consultas y las mutaciones
const root = {
  investments: () => investmentsData,
  
  investment: ({ id }) => investmentsData.find((investment) => investment.id === id),

  addInvestment: ({ name, amount }) => {
    const newInvestment = {
      id: (investmentsData.length + 1).toString(),
      name,
      amount,
      date: new Date().toISOString(),
    };
    investmentsData.push(newInvestment);
    return newInvestment;
  },

  deleteInvestment: ({ id }) => {
    const investmentIndex = investmentsData.findIndex((inv) => inv.id === id);
    if (investmentIndex === -1) {
      throw new Error("Investment not found");
    }
    const deletedInvestment = investmentsData[investmentIndex];
    investmentsData.splice(investmentIndex, 1);
    return deletedInvestment;
  },
};

// Configuración del servidor Express y GraphQL
const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

app.listen(4000, () => {
  console.log("Servidor GraphQL corriendo en http://localhost:4000/graphql");
});