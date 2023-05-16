import { type Address } from "./address";

export class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate(): void {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  setAddress(address: Address): void {
    this._address = address;
  }

  changeName(name: string): void {
    this._name = name;
  }
}
