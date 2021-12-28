import { ComponentRouterModule } from '@angular-component/router';
import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  selector: 'demo-sidebar-cmp',
  imports: [ComponentRouterModule],
  template: require('./sidebar.component.html'),
})
export class SidebarComponent {}
