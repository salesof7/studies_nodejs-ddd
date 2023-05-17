import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      void new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw customer when id is empty", () => {
    expect(() => {
      void new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when items is empty", () => {
    expect(() => {
      void new Order("123", "123", []);
    }).toThrowError("Items is required");
  });

  it("should calculate total", () => {
    const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 3);
    const order = new Order("o1", "c1", [item1, item2]);
    expect(order.total()).toBe(800);
  });

  it("should throw error if the item qte is less or equal 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", -4);
      void new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
