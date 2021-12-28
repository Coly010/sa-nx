import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityValidator } from '@demo/ui-city';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightService } from '@demo/domain-booking';
import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  selector: 'demo-flight-search',
  imports: [CommonModule, FormsModule, FlightCardComponent, CityValidator],
  // providers: [FlightService],
  template: require('./flight-search.component.html'),
})
export class FlightSearchComponent {
  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights() {
    return this.flightService.flights;
  }

  basket: { [id: number]: boolean } = {
    3: true,
    5: true,
  };

  constructor(@Inject(FlightService) private flightService: FlightService) {}

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService.load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }
}
