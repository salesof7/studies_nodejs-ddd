import { CustomerFactory } from "../../../domain/customer/factory/customer.factory";
import { Address } from "../../../domain/customer/value-object/address";
import { ListCustomerUseCase } from "./list.customer.usecase";

const customer1 = CustomerFactory.createWithAddress(
  "John 1",
  new Address("Street 1", 1, "12345", "City 1")
);

const customer2 = CustomerFactory.createWithAddress(
  "John 2",
  new Address("Street 2", 2, "22345", "City 2")
);

const MockRepository = (): {
  create: jest.Mock<any, any, any>;
  findAll: jest.Mock<any, any, any>;
  find: jest.Mock<any, any, any>;
  update: jest.Mock<any, any, any>;
} => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([customer1, customer2])),
  };
};

describe("Unit test for list customer use case", () => {
  it("should list a customer", async () => {
    const customerRepository = MockRepository();
    const listCustomerUseCase = new ListCustomerUseCase(customerRepository);
    const output = await listCustomerUseCase.execute({});

    expect(output.customers.length).toBe(2);
    expect(output.customers.at(0).id).toBe(customer1.id);
    expect(output.customers.at(0).name).toBe(customer1.name);
    expect(output.customers.at(0).address.street).toBe(
      customer1.address.street
    );
    expect(output.customers.at(1).id).toBe(customer2.id);
    expect(output.customers.at(1).name).toBe(customer2.name);
    expect(output.customers.at(1).address.street).toBe(
      customer2.address.street
    );
  });
});
