import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  selector: 'demo-navbar-cmp',
  template: require('./navbar.component.html'),
})
export class NavbarComponent {
  sidebarVisible = false;

  sidebarToggle() {
    const body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
