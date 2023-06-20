import { type CustomerRepositoryInterface } from "../../../domain/customer/repository/customer-repository.interface";
import { Address } from "../../../domain/customer/value-object/address";
import { type InputCreateCustomerDto } from "../create/create.customer.dto";
import { type OutputFindCustomerDto } from "../find/find.customer.dto";

export class UpdateCustomerUseCase {
  private readonly customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(input: InputCreateCustomerDto): Promise<OutputFindCustomerDto> {
    const customer = await this.customerRepository.find(input.id);
    customer.changeName(input.name);
    customer.changeAddress(
      new Address(
        input.address.street,
        input.address.number,
        input.address.zip,
        input.address.city
      )
    );
    await this.customerRepository.update(customer);
    return {
      id: customer.id,
      name: customer.name,
      address: {
        street: customer.address.street,
        city: customer.address.city,
        number: customer.address.number,
        zip: customer.address.zip,
      },
    };
  }
}
