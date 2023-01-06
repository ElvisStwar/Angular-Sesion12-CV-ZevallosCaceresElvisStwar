import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CursosComponent } from './cursos/cursos.component';
import { LaboralComponent } from './laboral/laboral.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    DescripcionComponent,
    CursosComponent,
    LaboralComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    DescripcionComponent,
    CursosComponent,
    LaboralComponent,
    ContactoComponent
  ]
})
export class ComponentesModule { }
