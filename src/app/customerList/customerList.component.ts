import { Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { CustomerService } from "../Services/cusomter.service";
import { customer } from "../Interface/customer";

@Component({
  selector: "app-customer-table",
  templateUrl: "./customerList.component.html",
  styleUrls: ["./customerList.component.scss"],
})
export class CustomerListComponent {
  @Input() customers: customer[];
  @Output() setSelectedId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSelectedCustomer(cust) {
    console.log(cust);
    this.setSelectedId.emit(cust.id);
  }
}
