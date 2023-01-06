import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public formCv!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    
  }
  
  ngOnInit(): void {
    this.formCv = this.formBuilder.group({
      name:['',],
      curso:['',],
      laboral:['',]
    })
  }
  newNombre = "Elvis Stwar"
  newCurso = "Otro curso"
  newLaboral = "Otro Emp"
  dataCursos = ["SISE", "CERTUS"]
  dataLaboral = ["Inventiva Click", "Freelance"]
  ok(){
    this.newNombre = this.formCv.value.name
  }

  ok2(){
    this.newCurso = this.formCv.value.curso
    this.dataCursos.push(this.newCurso)
  }

  ok3(){
    this.newLaboral = this.formCv.value.laboral
    this.dataLaboral.push(this.newLaboral)
    console.log(this.newLaboral)
  }



}
