import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DescripcionComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    DescripcionComponent,
    CursosComponent
  ]
})
export class ComponentesModule { }
