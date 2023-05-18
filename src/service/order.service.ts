/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type Order } from "../entity/order";

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
}
