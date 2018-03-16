import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger";

@Component({
  selector: "passenger-details",
  styleUrls: ["passenger-details.component.scss"],
  template: `
      <div>
        <ul>
          <li>
            <span [ngClass]="(details.checkedInStatus ? 'status checked-in' : 'status checked-out')"></span>
            <h4 *ngIf="!editing" >{{ details.name }}</h4>
            <div *ngIf="editing">
              <input
                type="text"
                [value]="details.name"
                (input)="onNameChange(name.value)"
                #name               
              >
            </div>                                  
              <span>Check in Date:</span>
              {{ details.checkedInDate ? (details.checkedInDate | date:'yMMMd') : 'not checked in' }}
              <div class="children">
              <ul>                        
                Children: {{ details.children?.length || 0 }}
              </ul>
            </div>
            <button (click)='toggleEdit()' >
            {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
              Remove
            </button>
          </li>
        </ul>
      </div>
    `
})
export class PassengerDetailsComponent {
  @Input() details: Passenger;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  @Output() edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  onNameChange(value: string) {
    console.log(value);
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.details);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.details);
  }
}
