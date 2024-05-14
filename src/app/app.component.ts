import { Component, OnInit } from "@angular/core";
import { customer } from "./Interface/customer";
import { CustomerService } from "./Services/cusomter.service";
import { CustomerDetail } from "./Interface/customerDetail";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "customerrecords";

  selectedid = "";
  customers: customer[];
  customerDetailRecords = [];

  constructor(private cusomterService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.cusomterService.getAllCustomers();
  }

  onSelectedCustomer(Id) {
    this.customerDetailRecords = this.cusomterService.getAllCustomerDetail(Id) ;
  }
}
