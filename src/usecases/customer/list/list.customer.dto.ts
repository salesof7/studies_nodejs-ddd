// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputListCustomerDto {}

interface Customer {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    number: number;
    zip: string;
  };
}

export interface OutputListCustomerDto {
  customers: Customer[];
}
