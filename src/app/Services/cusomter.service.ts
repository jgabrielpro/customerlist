import { CustomerDetail } from "./../Interface/customerDetail";
import { Injectable } from "@angular/core";
import { customer } from "../Interface/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor() {}

  customers: customer[] = [
    {
      id: "Maci Hodge",
      firstName: "henry",
      lastName: "Gerard",
      age: 21,
    },
    {
      id: "Alia Dawson",
      firstName: "Michael",
      lastName: "piatini",
      age: 40,
    },
    {
      id: "Camryn Schaefer",
      firstName: "louis",
      lastName: "figo",
      age: 30,
    },
    {
      id: "Lydia Thompson",
      firstName: "cristiana",
      lastName: "Ronaldino",
      age: 15,
    },
    {
      id: "Keilani Whitaker",
      firstName: "Leonardo",
      lastName: "Messiah",
      age: 25,
    },
  ];

  customerDetail: CustomerDetail[] = [
    {
      id: "Maci Hodge",
      city: "Los Angelos",
      gender: "Male",
      pin: 3123,
      country: "USA",
      state: "CA",
    },
    {
      id: "Alia Dawson",
      city: "Miami",
      gender: "Male",
      pin: 3176,
      country: "USA",
      state: "NJ",
    },
    {
      id: "Camryn Schaefer",
      city: "Miami",
      gender: "Male",
      pin: 3176,
      country: "USA",
      state: "NJ",
    },
    {
      id: "Lydia Thompson",
      city: "Bayonne",
      gender: "Male",
      pin: 4568,
      country: "USA",
      state: "NJ",
    },
    {
      id: "Keilani Whitaker",
      city: "Paramus",
      gender: "Male",
      pin: 8912,
      country: "USA",
      state: "NJ",
    },
  ];

  getAllCustomers() {
    return this.customers;
  }

  getAllCustomerDetail(id) {
    return this.customers
      .filter((cust) => cust.id === id)
      .map((obj, index) => ({
        ...obj,
        ...this.customerDetail.filter((cust) => cust.id === id)[index]
      }));
  }
}
