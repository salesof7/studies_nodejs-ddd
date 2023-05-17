import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      void new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      void new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      void new Product("123", "Product 1", -1);
    }).toThrowError("Price must be greater than zero");
  });

  it("should change name", () => {
    const product = new Product("123", "Product 1", 10);
    product.changeName("Product 2");
    expect(product.name).toEqual("Product 2");
  });

  it("should change price", () => {
    const product = new Product("123", "Product 1", 10);
    product.changePrice(200);
    expect(product.price).toEqual(200);
  });
});
