import { type OutputListCustomerDto } from "../../../usecases/customer/list/list.customer.dto";
import { toXML } from "jstoxml";

export class CustomerPresenter {
  static toXML(data: OutputListCustomerDto): string {
    const xmlOption = {
      header: true,
      indent: " ",
      newline: "\n",
      allowEmpty: true,
    };

    return toXML(
      {
        customers: {
          customer: data.customers.map((customer) => ({
            id: customer.id,
            name: customer.name,
            address: {
              street: customer.address.street,
              city: customer.address.city,
              zip: customer.address.zip,
              number: customer.address.number,
            },
          })),
        },
      },
      xmlOption
    );
  }
}
