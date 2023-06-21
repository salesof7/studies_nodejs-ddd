import express, { type Express } from "express";
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../customer/repository/sequelize/customer.model";
import { customerRoute } from "./routes/customer.route";

export const app: Express = express();
app.use(express.json());
app.use("/customer", customerRoute);

export let sequelize: Sequelize;

async function setupDb(): Promise<void> {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  sequelize.addModels([CustomerModel]);
  await sequelize.sync();
}
setupDb().catch(() => {
  console.error("Failed on sequelize setup");
});
