import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent {

  @Input() masLaboral: any[] = [];

  eliminar(){
    this.masLaboral.pop()
  }

}
