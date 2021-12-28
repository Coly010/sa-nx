import { ComponentRouterModule } from '@angular-component/router';
import { Component } from '@demo/util-shim';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';
import { FlightSearchComponent } from '../flight-search/flight-search.component';
import { PassengerSearchComponent } from '../passenger-search/passenger-search.component';

@Component({
  standalone: true,
  imports: [
    ComponentRouterModule,
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightEditComponent,
  ],
  template: require('./route-entry.component.html'),
})
export class RouteEntryComponent {}
