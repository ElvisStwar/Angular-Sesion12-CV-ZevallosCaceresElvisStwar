import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // nombre = "Zevallos Caceres Elvis Stwar"

  @Input() nombre = "Zevallos Caceres Elvis Stwar"
}
