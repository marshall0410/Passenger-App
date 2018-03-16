import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger";
@Component({
  selector: "passenger-count",
  styleUrls: [],
  template: `
      <div>
        Passengers Checked In: {{checkedInCount()}} / {{items.length}}
      </div>
    `
})
export class PassengerCountComponent {
  @Input() items: Passenger[];
  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter(item => item.checkedInStatus).length;
  }
}
