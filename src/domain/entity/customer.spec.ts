import { Address } from "./address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      void new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      void new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "John");
    customer.changeName("Peter");
    expect(customer.name).toEqual("Peter");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 123, "12342-123", "São Paulo");
    customer.changeAddress(address);
    customer.activate();
    expect(customer.isActive()).toEqual(true);
  });

  it("should deactivate customer", () => {
    const customer = new Customer("123", "John");
    customer.deactivate();
    expect(customer.isActive()).toEqual(false);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("123", "John");
    expect(customer.rewardPoints).toBe(0);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
