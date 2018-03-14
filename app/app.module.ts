import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    //custom modules
    PassengerDashboardModule,
    //angular modules
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
