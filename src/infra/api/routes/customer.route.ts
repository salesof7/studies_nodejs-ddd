/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from "express";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";
import { CreateCustomerUseCase } from "../../../usecases/customer/create/create.customer.usecase";

export const customerRoute = express.Router();

customerRoute.post("/", async (req: Request, res: Response): Promise<void> => {
  const usecase = new CreateCustomerUseCase(new CustomerRepository());
  try {
    const customerDto = {
      name: req.body.name,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        number: req.body.address.number,
        zip: req.body.address.zip,
      },
    };
    const output = await usecase.execute(customerDto);
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});
