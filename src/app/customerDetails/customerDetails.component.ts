import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { CustomerService } from "../Services/cusomter.service";


@Component({
  selector: "app-customer-detail",
  templateUrl: "./customerDetails.component.html",
  styleUrls: ["./customerDetails.component.scss"],
})
export class CustomerDetailComponent implements OnChanges {
  @Input() customerDetailRecords;
  @Input() selectedid;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["customerDetailRecords"] && changes["customerDetailRecords"].currentValue
    ) {
      this.customerDetailRecords = changes["customerDetailRecords"].currentValue;
    }
  }
}
