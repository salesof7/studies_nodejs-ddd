import { CustomerCreateUseCase } from "./create.customer.usecase";

const input = {
  id: "123",
  name: "John",
  address: {
    street: "Street",
    city: "city",
    number: 123,
    zip: "zip",
  },
};

const MockRepository = (): {
  find: jest.Mock<any, any, any>;
  findAll: jest.Mock<any, any, any>;
  create: jest.Mock<any, any, any>;
  update: jest.Mock<any, any, any>;
} => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create customer use case", () => {
  it("should create a customer", async () => {
    const customerRepository = MockRepository();
    const customerCreateUseCase = new CustomerCreateUseCase(customerRepository);

    const output = await customerCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      address: {
        street: input.address.street,
        number: input.address.number,
        zip: input.address.zip,
        city: input.address.city,
      },
    });
  });
});
