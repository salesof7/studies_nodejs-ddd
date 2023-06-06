import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../infra/customer/repository/sequelize/customer.model";
import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/value-object/address";
import { FindCustomerUseCase } from "./find.customer.usecase";

const customer = new Customer("123", "John");
const address = new Address("Street", 123, "zip", "city");
customer.changeAddress(address);

const MockRepository = (): {
  find: jest.Mock<any, any, any>;
  findAll: jest.Mock<any, any, any>;
  create: jest.Mock<any, any, any>;
  update: jest.Mock<any, any, any>;
} => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit Test find customer use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a customer", async () => {
    const customerRepository = MockRepository();
    const usecase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: "123",
    };

    const output = {
      id: "123",
      name: "John",
      address: {
        street: "Street",
        city: "city",
        number: 123,
        zip: "zip",
      },
    };

    const result = await usecase.execute(input);
    expect(result).toEqual(output);
  });
});
