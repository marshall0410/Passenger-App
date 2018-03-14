import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
      <div>
        <passenger-count>
        </passenger-count>
        <passenger-details>
        </passenger-details>
        <h3>Passengers</h3>
        <ul>
          <li *ngFor="let passenger of Passengers; let i = index;">
            <h3>{{ passenger.name.toUpperCase() }}</h3>                    
              <span>Check in Date:</span>
              {{ passenger.checkedInDate ? (passenger.checkedInDate | date:'yMMMd') : 'not checked in' }}
              <div>
                Checked in Status:
                <span [ngClass]="(passenger.checkedInStatus ? 'status' : 'status disabled')"></span>
              </div>
              <div class="children">
              <ul *ngFor="let child of children">                        
                Children: {{ child.name.length ? child.name : 0}}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  Passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    console.log("ngOnInit initialized.");
    this.Passengers = [
      {
        id: 1,
        name: "marshall",
        age: 27,
        male: true,
        checkedInStatus: false,
        checkedInDate: null,
        children: [{ name: "Leeroy", age: 5 }]
      },
      {
        id: 2,
        name: "winthrop",
        age: 31,
        male: true,
        checkedInStatus: true,
        checkedInDate: Date.now(),
        children: null
      },
      {
        id: 1,
        name: "dad",
        age: 64,
        male: true,
        checkedInStatus: true,
        checkedInDate: Date.now(),
        children: [
          { name: "Marshall", age: 27 },
          { name: "Faith", age: 32 },
          { name: "Winthrop", age: 30 }
        ]
      },
      {
        id: 1,
        name: "mom",
        age: 67,
        male: false,
        checkedInStatus: false,
        checkedInDate: null,
        children: [
          { name: "Marshall", age: 27 },
          { name: "Faith", age: 32 },
          { name: "Winthrop", age: 30 }
        ]
      }
    ];
  }
}
