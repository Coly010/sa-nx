import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ComponentRouterModule } from '@angular-component/router';

// Options for importing esm modules
import { NavbarComponent, SidebarComponent } from '@demo/ui-shell';
import { Component } from '@demo/util-shim';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'demo-root',
  imports: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    HttpClientModule,
    RouterModule.forRoot([]),
    ComponentRouterModule.forRoot(),
  ],
  template: require('./app.component.html'),
})
export class AppComponent {
  flightBookingRouteEntry = () =>
    import('@demo/feature-booking').then((m) => m.RouteEntryComponent);
}
