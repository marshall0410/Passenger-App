import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
      <div>
        <passenger-count 
          [items]="passengers">
        </passenger-count>
        <h3>Passengers</h3>
        <passenger-details 
          *ngFor="let passenger of passengers"
          [details]="passenger"
          (edit)="editPassenger($event)"
          (remove)="removePassenger($event)"
        >
        </passenger-details> 
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  editPassenger(event: Passenger) {
    console.log("edit: " + event);
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  removePassenger(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
  constructor() {}
  ngOnInit() {
    console.log("ngOnInit initialized.");
    this.passengers = [
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
        id: 3,
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
        id: 4,
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
