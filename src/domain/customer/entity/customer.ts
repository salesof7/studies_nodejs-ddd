import Entity from "../../shared/entity/entity.abstract";
import { NotificationError } from "../../shared/notification/notification.error";
import { CustomerValidatorFactory } from "../factory/customer.factory.validator";
import { type Address } from "../value-object/address";

export class Customer extends Entity {
  _name: string;
  _address!: Address;
  _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    super();
    this._id = id;
    this._name = name;
    this.validate();

    if (this._notification.hasErrors()) {
      throw new NotificationError(this._notification.getErrors());
    }
  }

  validate(): void {
    CustomerValidatorFactory.create().validate(this);
  }

  get id(): string {
    return this._id;
  }

  get address(): Address {
    return this._address;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  isActive(): boolean {
    return this._active;
  }

  changeAddress(address: Address): void {
    this._address = address;
  }

  changeName(name: string): void {
    this._name = name;
  }

  activate(): void {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  addRewardPoints(points: number): void {
    this._rewardPoints += points;
  }
}
